from typing import List
from fastapi import APIRouter, status, Depends, HTTPException, Response

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from models.models import MateriaModel, TurmaModel
from schemas.schemas import MateriaSchema, TurmaSchema
from core.deps import get_session

router = APIRouter()

@router.get("/", response_model=List[MateriaSchema, TurmaSchema])
async def get_materias(db: AsyncSession = Depends(get_session)):
  async with db as session:
    query = select(MateriaModel, TurmaSchema)
    result = await session.execute(query)
    
    return {'detail': 'API encontrada'}


@router.get("/{materia_id}", response_model=MateriaSchema, status_code=status.HTTP_200_OK)
async def get_materia(materia_id:int, db: AsyncSession = Depends(get_session)):
  async with db as session:
    query = select(MateriaModel).filter(MateriaModel.id == materia_id)
    result = await session.execute(query)
    materia = result.scalar_one_or_none()
    
    if materia:
      return materia
    else:
      raise HTTPException(detail="Matéria não encontrada", status_code=status.HTTP_404_NOT_FOUND)


@router.post("/",status_code=status.HTTP_201_CREATED, response_model=MateriaSchema)
async def post_materia(materia: MateriaSchema, db: AsyncSession = Depends(get_session)):
  
  nova_materia = MateriaModel(título=materia.título, responsável=materia.responsável, local=materia.local, semestre=materia.semestre, turma_id=materia.turma_id)
  db.add(nova_materia)
  await db.commit()
  
  return nova_materia


@router.put("/{materia_id}", response_model=MateriaSchema, status_code=status.HTTP_202_ACCEPTED)
async def put_materia(materia_id: int, materia:MateriaSchema, db: AsyncSession = Depends(get_session)):
  async with db as session:
    query = select(MateriaModel).filter(MateriaModel.id == materia_id)
    result = await session.execute(query)
    materia_up = result.scalar_one_or_none()
    
    if materia_up:
      materia_up.título = materia.título
      materia_up.responsável = materia.responsável
      materia_up.local = materia.local
      materia_up.semestre = materia.semestre
      
      await session.commit()
      return materia_up
    else:
      raise HTTPException(detail="Matéria não encontrada", status_code=status.HTTP_404_NOT_FOUND)

  
  
@router.delete("/{materia_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_materia(materia_id: int, db: AsyncSession = Depends(get_session)):
  async with db as session:
    query = select(MateriaModel).filter(MateriaModel.id == materia_id)
    result = await session.execute(query)
    materia_delete = result.scalar_one_or_none()
    
    if materia_delete:
      await session.delete(materia_delete)
      await session.commit()
      return Response(status_code=status.HTTP_204_NO_CONTENT)
    else:
      raise HTTPException(detail="Matéria não encontrada", status_code=status.HTTP_404_NOT_FOUND)
    
# --------------------------- turmas -----------------------------------

@router.get("/{turma_id}", response_model=TurmaSchema, status_code=status.HTTP_200_OK)
async def get_materia(turma_id:int, db: AsyncSession = Depends(get_session)):
  async with db as session:
    query = select(TurmaModel).filter(TurmaModel.id == turma_id)
    result = await session.execute(query)
    turma = result.scalar_one_or_none()
    
    if turma:
      return turma
    else:
      raise HTTPException(detail="Turma não encontrada", status_code=status.HTTP_404_NOT_FOUND)


@router.post("/",status_code=status.HTTP_201_CREATED, response_model=TurmaSchema)
async def post_materia(turma: TurmaSchema, db: AsyncSession = Depends(get_session)):
  
  nova_turma = TurmaModel(nome=turma.nome, semestre=turma.semestre, local=turma.local, semestre=turma.semestre)
  db.add(nova_turma)
  await db.commit()
  
  return nova_turma


@router.put("/{turma_id}", response_model=TurmaSchema, status_code=status.HTTP_202_ACCEPTED)
async def put_materia(turma_id: int, turma:TurmaSchema, db: AsyncSession = Depends(get_session)):
  async with db as session:
    query = select(TurmaModel).filter(TurmaModel.id == turma_id)
    result = await session.execute(query)
    turma_up = result.scalar_one_or_none()
    
    if turma_up:
      turma_up.título = turma.título
      turma_up.responsável = turma.responsável
      turma_up.local = turma.local
      turma_up.semestre = turma.semestre
      
      await session.commit()
      return turma_up
    else:
      raise HTTPException(detail="Turma não encontrada", status_code=status.HTTP_404_NOT_FOUND)

  
  
@router.delete("/{turma_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_materia(turma_id: int, db: AsyncSession = Depends(get_session)):
  async with db as session:
    query = select(TurmaModel).filter(TurmaModel.id == turma_id)
    result = await session.execute(query)
    turma_delete = result.scalar_one_or_none()
    
    if turma_delete:
      await session.delete(turma_delete)
      await session.commit()
      return Response(status_code=status.HTTP_204_NO_CONTENT)
    else:
      raise HTTPException(detail="Turma não encontrada", status_code=status.HTTP_404_NOT_FOUND)
  
  
  
