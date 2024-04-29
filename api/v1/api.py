from fastapi import APIRouter 
from api.v1.endpoints import materias

api_router = APIRouter()
api_router.include_router(materias.router, prefix="/materias", tags=["materias"])
api_router.include_router(materias.router, prefix="/turmas", tags=["turmas"])