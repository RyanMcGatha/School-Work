from pydantic import BaseModel
from sqlalchemy import Column, Integer, String, Boolean

from models.Base import Base






class CEO(Base):
    __tablename__ = "apple_ceos"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    slug = Column(String)
    year = Column(Integer)

class CEOCreate(BaseModel):
    name: str
    slug: str
    year: int