from fastapi import FastAPI
from core.configs import settings
from api.v1.api import api_router

app = FastAPI(title="API Matérias ensinadas no Senai e na Bosch com Xampp e suas Turmas")
app.include_router(api_router, prefix=settings.API_V1_STR)

if __name__ == "__main__":
  import uvicorn
  
  uvicorn.run("main:app", host="10.234.83.58", port=8000, log_level="info", reload=True)