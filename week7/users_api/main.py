from fastapi import FastAPI
from db import sessionLocal, engine
from modles import Base, Users



Base.metadata.create_all(bind=engine)
app = FastAPI()

@app.get("/")
async def root():
    return {"message":"hello world"}



@app.post("/new_users/")
async def create_user(name:str, email: str, password: str):
    db = sessionLocal()

    user = Users(name = name, email = email, password = password)
    db.add(user)
    db.commit()
    db.close()
    return {"message": "New User Created"}



@app.get("/new_user/{user_name}")
async def read_user(user_name: str):
    db = sessionLocal()

    user = db.query(Users).filter(Users.name == user_name).first()
    db.close
    if user:
        return user 
    else:
        return {"message":"user not found"}
    

@app.delete('/new_user/{user_name}/{password}')
async def delete_user(user_name: str, password: str):
    db = sessionLocal()

    user = db.query(Users).filter(Users.name == user_name, password == password).first()
    if user:
        db.delete(user)
        db.commit()
        db.close()
        return {'message': 'user removed'}
    else:
        db.close()
        return {"message":"could not find user"}
    

@app.put("/new_user/{user_id}")
async def update_name(user_id: int, name: str):
    db = sessionLocal()

    user = db.query(Users).filter(Users.id == user_id).first()
    
    if user:
        user.name = name
        db.commit()
        db.close()
        return {"meassage": "user name updated"}
    else:
        db.close
        return{"message":"user not found"}
    



@app.get("/new_users/{user_name}")
async def read_user(user_name: str):
    db = sessionLocal()

    user = db.query(Users).filter(Users.name == user_name).first()
    db.close()

    if user:
        return user
    else:
        db.close
        return {"message":"user not found"}
    


@app.post("/new_user")
async def create_user(user_name: str, user_email: str, user_password: str):
    db = sessionLocal()

    user = Users(name = user_name, email = user_email, password = user_password)
    db.add(user)
    db.commit()
    db.close()
    if user:
        user
        return {"mesasge":"new user created"}
    else:
        db.close()
        return {"message":"user not created "}
    


@app.delete("/new_user/{user_name}/{user_password}")
async def delete_user(user_name: str, user_password: str):
    db = sessionLocal()

    user = db.query(Users).filter(Users(name = user_name, password = user_password))
    db.commit()
    db.close()
    if user:
        return {'message':"user deleted"}
    else:
        return {'message':'user not found'}