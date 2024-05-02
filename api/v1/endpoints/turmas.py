from typing import List
from fastapi import APIRouter, status, Depends, HTTPException, Response

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from models.turma_model import TurmaModel
from schemas.turmas_schema import TurmaSchema
from core.deps import get_session

router = APIRouter()

@router.post("/",status_code=status.HTTP_201_CREATED, response_model=TurmaSchema)
async def post_turma(turma: TurmaSchema, db: AsyncSession = Depends(get_session)):
  nova_turma = TurmaModel(id=turma.id,nome=turma.nome, semestre=turma.semestre)
  db.add(nova_turma)
  await db.commit()
  
  return nova_turma


@router.get("/", response_model=List[TurmaSchema])
async def get_turmas(db: AsyncSession = Depends(get_session)):
  async with db as session:
    query = select(TurmaModel)
    result = await session.execute(query)
    turmas: List[TurmaModel] = result.scalars().all()
    
    return turmas

@router.get("/{turma_id}", response_model=TurmaSchema, status_code=status.HTTP_200_OK)
async def get_turma(turma_id:int, db: AsyncSession = Depends(get_session)):
  async with db as session:
    query = select(TurmaModel).filter(TurmaModel.id == turma_id)
    result = await session.execute(query)
    turma = result.scalar_one_or_none()
    
    if turma:
      return turma
    else:
      raise HTTPException(detail="Turma não encontrada", status_code=status.HTTP_404_NOT_FOUND)


@router.put("/{turma_id}", response_model=TurmaSchema, status_code=status.HTTP_202_ACCEPTED)
async def put_turma(turma_id: int, turma:TurmaSchema, db: AsyncSession = Depends(get_session)):
  async with db as session:
    query = select(TurmaModel).filter(TurmaModel.id == turma_id)
    result = await session.execute(query)
    turma_up = result.scalar_one_or_none()
    
    if turma_up:
      turma_up.id = turma.id
      turma_up.nome = turma.nome
      turma_up.semestre = turma.semestre
      
      await session.commit()
      return turma_up
    else:
      raise HTTPException(detail="Turma não encontrada", status_code=status.HTTP_404_NOT_FOUND)

  
  
@router.delete("/{turma_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_turma(turma_id: int, db: AsyncSession = Depends(get_session)):
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
  
  
  
