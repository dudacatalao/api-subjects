from typing import Optional
from pydantic import BaseModel as SCBaseModel

class TurmaSchema(SCBaseModel):
    id: Optional[int] = None
    nome: str
    semestre: str

    class Config:
        orm_mode = True