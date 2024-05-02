from fastapi import APIRouter 
from api.v1.endpoints import materias, turmas

api_router = APIRouter()
api_router.include_router(materias.router, prefix="/materias", tags=["materias"])
api_router.include_router(turmas.router, prefix="/turmas", tags=["turmas"])