from sqlalchemy import Column, String, Integer, UniqueConstraint
from pydantic import BaseModel, Field

from models import Base

class  Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String(255), unique=True)
    hashed_password = Column(String)

    UniqueConstraint("email",name= "og_use_email")