from sqlalchemy import Column, ForeignKey, Integer, String
from core.configs import settings
from sqlalchemy.orm import relationship

class MateriaModel(settings.DBBaseModel):
    __tablename__ = 'materias'

    id: int = Column(Integer, primary_key=True, autoincrement=True)
    título: str = Column(String(50))
    responsável: str = Column(String(50))
    local: str = Column(String(20))
    semestre: str = Column(String(20))
    turma: str = Column(String(20))
    
    turma_id: int = Column(Integer, ForeignKey('turmas.id_turma'))

    turma = relationship("TurmaModel", back_populates="materias")


class TurmaModel(settings.DBBaseModel):
    __tablename__ = 'turmas'

    id_turma: int = Column(Integer, primary_key=True, autoincrement=True)
    nome: str = Column(String(50))
    semestre: str = Column(String(20))
    
