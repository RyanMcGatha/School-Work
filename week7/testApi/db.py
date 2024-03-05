from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

db_url = "postgresql://postgres:@localhost/pimp"

engine = create_engine(db_url)

connection = engine.connect()

sessionLocal = sessionmaker(bind=engine)
session = sessionLocal