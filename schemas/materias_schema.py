from typing import Optional
from pydantic import BaseModel as SCBaseModel
from schemas.turmas_schema import TurmaSchema

class MateriaSchema(SCBaseModel):
    id: Optional[int] = None
    título: str  
    responsável: str
    local: str
    semestre: str
    turma_id: int
    turma: Optional[TurmaSchema] 
    
    class Config:
        orm_mode = True
