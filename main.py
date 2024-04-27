from fastapi import FastAPI
import asyncpg
import asyncio

app = FastAPI()

# Database connection parameters
DB_USER = "your_db_user"
DB_PASSWORD = "your_db_password"
DB_HOST = "your_db_host"
DB_NAME = "your_db_name"
DB_PORT = "5432"  # default PostgreSQL port

# Database URL
DATABASE_URL = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

# Create a function to connect to the database
async def get_db_connection():
    conn = await asyncpg.connect(DATABASE_URL)
    return conn

@app.on_event("startup")
async def startup():
    app.state.db = await get_db_connection()

@app.on_event("shutdown")
async def shutdown():
    await app.state.db.close()

@app.get("/")
async def read_root():
    # Execute a query
    result = await app.state.db.fetch("SELECT * FROM your_table LIMIT 10")
    return {"data": result}
