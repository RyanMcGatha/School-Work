from fastapi import FastAPI
from db import sessionLocal, engine
from modles import Base, Item, Artist

app = FastAPI()

Base.metadata.create_all(bind=engine)

@app.get("/")
async def root():
    return {"message": "hello world"}


@app.post("/items/")
async def create_item(name:str, description:str):
    db = sessionLocal()

    item = Item(name=name,description=description)

    db.add(item)

    db.commit()

    db.close()

    return {"message":"Item Created"}



 
@app.get("/items/{items_id}")
async def read_item(item_id: int):

    db = sessionLocal()

    item = db.query(Item).filter(Item.id == item_id).first()

    db.close()

    if item:
        return item
    else:
        return {"message": "item not found"}
    

@app.put("/items/{item_id}")
async def update_item(item_id: int, name: str):
    db = sessionLocal()

    item = db.query(Item).filter(Item.id == item_id).first()

    if item:
        item.name = name
        db.commit()
        db.close()
        return {"message": "Item Updated"}
    else:
        db.close()
        raise HTTPException(status_code=404, detail="Item not found")



@app.delete("/items/{items_id}")
async def delete_item(item_id: int):
    db = sessionLocal()

    item = db.query(Item).filter(Item.id == item_id).first()

    if item:
        db.delete(item)
        db.commit()
        db.close()
        return {"message": "item deleted"}
    else:
        db.close()
        return {"message": "error item not deleted"}
    


@app.get("/artists/")
async def create_artist(name: str, info: str, birthday: int):
    db = sessionLocal()

    artist = Artist(name = name, info = info, birthday = birthday)

    db.add(artist)
    db.commit()
    db.close()
    return {"message":"new artists created"}




@app.get("/artists/{artists_name}")
async def read_artist(artists_name: str):
    db = sessionLocal()
    
    artist = db.query(Artist).filter(Artist.name == artists_name).first()

    db.close()

    if artist:
        return artist
    else:
        return {"message":"artists not found"}
    

