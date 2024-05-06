from sqlalchemy import Column, Integer, String
from core.configs import settings

class TurmaModel(settings.DBBaseModel):
    __tablename__ = 'turmas'

    id = Column(Integer, primary_key=True, autoincrement=True)
    nome = Column(String(50))
    semestre = Column(String(20))