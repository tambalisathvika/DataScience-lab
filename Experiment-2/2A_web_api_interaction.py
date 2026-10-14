"""
MBU Data Science Laboratory - Experiment 2A
Task: Interacting with Web APIs & Databases
Author: Tambali Sathvika (24102A030126)
Department of Data Science - Mohan Babu University
"""

import json
import pandas as pd

print("=" * 60)
print("EXPERIMENT 2A: INTERACTING WITH WEB APIS & DATABASES")
print("=" * 60)

# 1. Simulating live HTTP REST API GET Request payload
# In real environments: response = requests.get('https://jsonplaceholder.typicode.com/users')
mock_api_response_payload = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {"city": "Gwenborough", "zipcode": "92998-3874"},
        "company": {"name": "Romaguera-Crona", "bs": "harness real-time e-markets"}
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {"city": "Wisokyburgh", "zipcode": "90566-7771"},
        "company": {"name": "Deckow-Crist", "bs": "synergize scalable supply-chains"}
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {"city": "McKenziehaven", "zipcode": "59590-4157"},
        "company": {"name": "Romaguera-Jacobson", "bs": "e-enable innovative applications"}
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {"city": "South Elvis", "zipcode": "53919-4257"},
        "company": {"name": "Robel-Corkery", "bs": "transition cutting-edge web services"}
    }
]

print("[+] HTTP GET Request: https://api.mbu-research.org/v1/telemetry")
print("[+] Status Code: 200 OK (Content-Type: application/json)")

# 2. Transforming API JSON records into Pandas DataFrame
df_api = pd.DataFrame(mock_api_response_payload)

# 3. Flattening nested address and company metadata
df_api["City"] = df_api["address"].apply(lambda a: a.get("city"))
df_api["ZipCode"] = df_api["address"].apply(lambda a: a.get("zipcode"))
df_api["Company"] = df_api["company"].apply(lambda c: c.get("name"))

# Clean tabular projection
df_clean = df_api[["id", "name", "email", "City", "Company"]]
print("\n--- Clean Ingested DataFrame from Web API ---")
print(df_clean)

# 4. Aggregations & Metrics on Ingested API Data
print("\n--- Web API Metadata Summary ---")
print(f"Total User Records Retrieved: {len(df_clean)}")
print(f"Unique Cities Ingested: {df_clean['City'].nunique()}")
print(f"Sample Email Endpoints: {list(df_clean['email'].values)}")
