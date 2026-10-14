"""
MBU Data Science Laboratory - Experiment 2B
Task: SQLite Database Operations
Author: Tambali Sathvika (24102A030126)
Department of Data Science - Mohan Babu University
"""

import sqlite3
import pandas as pd

print("=" * 60)
print("EXPERIMENT 2B: SQLITE DATABASE OPERATIONS")
print("=" * 60)

# 1. Establish SQLite Connection (In-Memory / File Database)
db_name = "lab_records.db"
conn = sqlite3.connect(db_name)
cursor = conn.cursor()
print(f"[+] Connected to SQLite database: '{db_name}'.")

# 2. Create Relational Table
cursor.execute("DROP TABLE IF EXISTS LabStudents")
cursor.execute("""
CREATE TABLE LabStudents (
    StudentID INTEGER PRIMARY KEY,
    FullName TEXT NOT NULL,
    Branch TEXT NOT NULL,
    Semester INTEGER NOT NULL,
    CGPA REAL NOT NULL
)
""")
print("[+] Created table schema: 'LabStudents'.")

# 3. Insert Multiple Records (Parameterized Queries for SQL Injection Security)
records = [
    (101, "Tambali Sathvika", "Data Science", 4, 9.45),
    (102, "Pradyumna Devi", "Data Science", 4, 9.20),
    (103, "Venkata Raman", "Artificial Intelligence", 4, 8.85),
    (104, "Siri Chandana", "Cyber Security", 4, 8.60),
    (105, "Manoj Kumar", "Computer Science", 4, 7.90)
]

cursor.executemany("""
INSERT INTO LabStudents (StudentID, FullName, Branch, Semester, CGPA)
VALUES (?, ?, ?, ?, ?)
""", records)
conn.commit()
print(f"[+] Successfully inserted {cursor.rowcount} records into LabStudents.")

# 4. Querying Relational Data directly into Pandas DataFrame
sql_query = "SELECT StudentID, FullName, Branch, CGPA FROM LabStudents WHERE CGPA >= 8.5 ORDER BY CGPA DESC"
df_sql = pd.read_sql_query(sql_query, conn)

print(f"\n--- Query Results for: {sql_query} ---")
print(df_sql)

# 5. Database Aggregation via SQL vs Pandas
cursor.execute("SELECT Branch, COUNT(*), AVG(CGPA) FROM LabStudents GROUP BY Branch")
grouped_metrics = cursor.fetchall()

print("\n--- SQL GroupBy Branch Aggregations ---")
for branch, count, avg_cgpa in grouped_metrics:
    print(f"Branch: {branch:<25} | Students: {count} | Avg CGPA: {avg_cgpa:.2f}")

# Close Database Connection
conn.close()
print("\n[+] SQLite database connection closed safely.")
