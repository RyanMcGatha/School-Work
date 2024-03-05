from sqlalchemy.orm import declarative_base
from sqlalchemy import Column,Integer, String, Boolean

Base = declarative_base()


class Users(Base):
    __tablename__ = 'new_users'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, index=True)
    password = Column(String, index=True,)
