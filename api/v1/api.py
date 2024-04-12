from fastapi import APIRouter 
from api.v1.endpoints import methods

api_router = APIRouter()
api_router.include_router(methods.router, prefix="/materias", tags=["materias"])
api_router.include_router(methods.router, prefix="/turmas", tags=["turmas"])