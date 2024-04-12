from typing import Optional
from pydantic import BaseModel as SCBaseModel

class MateriaSchema(SCBaseModel):
  id: Optional[int] = None
  título : str
  responsável : str
  local:str
  semestre: str
    
  class Config:
    orm_mode = True

class TurmaSchema(SCBaseModel):
    id_turma: int
    nome: str
    semestre: str
    materias: str

    class Config:
        orm_mode = True
