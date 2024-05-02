from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from core.configs import settings

class MateriaModel(settings.DBBaseModel):
    __tablename__ = 'materias'

    id = Column(Integer, primary_key=True, autoincrement=True)
    titulo = Column(String(50))
    responsavel = Column(String(50))
    local = Column(String(20))
    semestre = Column(String(20))
    turma_id = Column(Integer, ForeignKey('turmas.id'))
    
    # turma = relationship("TurmaModel", back_populates="materias")