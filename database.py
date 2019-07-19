from sqlalchemy.engine.url import URL
from sqlalchemy import *
from sqlalchemy_utils import database_exists, create_database

postgres_db = {'drivername': 'michael',
               'username': 'michael',
               'password': 'michael',
               'host': '98.180.146.141',
               'port': '62572'}

# print(URL(**postgres_db))

sqlite_db = {'drivername': 'sqlite', 'database': 'db.sqlite'}

# print(URL(**sqlite_db))

db_url = 'sqlite:///db.sqlite'
engine = create_engine('sqlite:///db.sqlite')

if not database_exists(engine.url):
    create_database(engine.url)

# print(database_exists(engine.url))

# Create a metadata instance
metadata = MetaData(engine)
# Declare a table
restaurantSearch = Table('restaurant', metadata,
                         Column('phone', Integer, primary_key=True),
                         Column('restaurant_name', String))
# Create all tables
metadata.create_all()
for _t in metadata.tables:
    print("Table: ", _t)
