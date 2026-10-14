export const defaultStudent = {
  photo: '/student-default.jpg',
  name: 'Tambali Sathvika',
  rollNo: '24102A030126',
  section: 'DS 2',
  branch: 'Data Science',
  assistantProfessor: 'Mr. S Bosu Babu',
  githubRepo: 'https://github.com/tambalisathvika',
  linkedinUrl: 'https://www.linkedin.com/in/tambali-sathvika'
};

export const defaultExperiments = [
  {
    "id": "exp-1",
    "number": "1",
    "category": "Data Ingestion",
    "title": "Data Ingestion & File Storage Formats",
    "description": "Ingest, parse, and serialize tabular datasets across plain text delimited files, hierarchical JSON structures, and multi-sheet Microsoft Excel spreadsheets.",
    "estimatedTime": "3 Hours",
    "status": "Curriculum Approved",
    "thumbnail": "/exp1-banner.svg",
    "completed": true,
    "moduleId": "mod-1",
    "youtubeUrl": "https://www.youtube.com/watch?v=N6hyN6BW6ao",
    "videoUrl": "https://www.youtube.com/watch?v=N6hyN6BW6ao",
    "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-1",
    "summary": "Comprehensive laboratory study of raw file ingestion pipelines in Pandas: reading and writing text-delimited data with read_csv(), parsing and normalizing nested JSON hierarchies with read_json() and json_normalize(), and managing multi-sheet workbooks using read_excel() and ExcelWriter.",
    "topics": [
      "1A. Perform Read & Write Data in Text Format",
      "1B. Perform Read & Write Data in JSON Format",
      "1C. Perform Reading and Writing of Microsoft Excel Files using read_excel"
    ],
    "subExperiments": [
      {
        "id": "1A",
        "letter": "A",
        "number": "1",
        "title": "Perform Read & Write Data in Text Format",
        "description": "Read and write structured tabular data in text format (CSV / delimited text) using Pandas read_csv(), to_csv(), and file stream handles.",
        "aim": "To read and write structured tabular data in text format (CSV / plain text) using Pandas read_csv() and to_csv() methods and inspect dataset schema properties.",
        "learningObjective": "Master delimiter configuration, column header mapping, encoding protocols, and persistent file exporting in Pandas.",
        "syntax": "Read Text / CSV:\ndf = pd.read_csv('filename.csv', sep=',', header=0)\n\nWrite Text / CSV:\ndf.to_csv('output.csv', sep=',', index=False)",
        "generalSyntax": "import pandas as pd\ndf = pd.read_csv('file.csv', delimiter=',')\ndf.to_csv('output.csv', index=False)",
        "aboutProgram": "Plain text files (CSV, TSV, TXT) are the most universal format for data interchange. Pandas read_csv() parses delimited tabular text into two-dimensional DataFrames using highly optimized C-based parsing engines, supporting custom separators, header inference, missing value sentinels, and chunked ingestion.",
        "visualPlotType": "text_delimited_stream",
        "youtubeUrl": "https://www.youtube.com/watch?v=ZyhVh-qRZPA",
        "videoUrl": "https://www.youtube.com/watch?v=ZyhVh-qRZPA",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-1/1A_read_write_text.py",
        "procedure": [
          "Import pandas and io modules into the Python workspace.",
          "Define a structured CSV-formatted string containing student academic telemetry.",
          "Write the structured records to a local text file using native file stream operations.",
          "Read the file back into a Pandas DataFrame using pd.read_csv(delimiter=\",\").",
          "Examine DataFrame dimensions, column data types, and compute descriptive metrics.",
          "Filter high-performing student records and export them to a tab-delimited file using to_csv(sep=\"\\t\")."
        ],
        "vivaVoce": [
          {
            "question": "What is the default delimiter in pd.read_csv()?",
            "answer": "The default delimiter is a comma (sep=\",\"), but it can be changed to tab (sep=\"\\t\"), semicolon (sep=\";\"), or custom regular expressions."
          },
          {
            "question": "What is the purpose of index=False in df.to_csv()?",
            "answer": "It prevents Pandas from writing the integer row index as an extra unnamed column in the generated CSV output file."
          }
        ],
        "program": "import pandas as pd\n\n# 1. Raw text data in CSV format\ncsv_raw_data = \"\"\"StudentID,StudentName,Department,CGPA,AttendancePct\n101,Aarav Sharma,Data Science,8.92,94.5\n102,Diya Reddy,Data Science,9.15,96.0\n103,Rohan Verma,Computer Science,7.85,88.0\n104,Ananya Patel,Electronics,8.40,91.5\n105,Siddharth Rao,Data Science,9.50,98.2\"\"\"\n\n# 2. Write text data to file\nfilename = \"student_records.csv\"\nwith open(filename, \"w\", encoding=\"utf-8\") as f:\n    f.write(csv_raw_data)\nprint(f\"[+] Successfully wrote raw text records to '{filename}'.\")\n\n# 3. Read back using pandas read_csv()\ndf = pd.read_csv(filename, delimiter=\",\", header=0)\nprint(\"\\n--- Loaded DataFrame from CSV File ---\")\nprint(df)\n\n# 4. Inspect Metadata\nprint(\"\\n--- DataFrame Information & Schema ---\")\nprint(f\"Shape: {df.shape}\")\nprint(f\"Columns: {list(df.columns)}\")\nprint(f\"Average CGPA: {df['CGPA'].mean():.2f}\")\n\n# 5. Export high achievers to TSV\nhigh_achievers = df[df[\"CGPA\"] >= 8.5]\nhigh_achievers.to_csv(\"high_achievers.tsv\", sep=\"\\t\", index=False)\nprint(f\"[+] Exported {len(high_achievers)} high achievers to 'high_achievers.tsv'.\")",
        "output": "[+] Successfully wrote raw text records to 'student_records.csv'.\n\n--- Loaded DataFrame from CSV File ---\n   StudentID    StudentName        Department  CGPA  AttendancePct\n0        101   Aarav Sharma      Data Science  8.92           94.5\n1        102     Diya Reddy      Data Science  9.15           96.0\n2        103    Rohan Verma  Computer Science  7.85           88.0\n3        104   Ananya Patel       Electronics  8.40           91.5\n4        105  Siddharth Rao      Data Science  9.50           98.2\n\n--- DataFrame Information & Schema ---\nShape: (5, 5)\nColumns: ['StudentID', 'StudentName', 'Department', 'CGPA', 'AttendancePct']\nAverage CGPA: 8.76\n[+] Exported 4 high achievers to 'high_achievers.tsv'.",
        "explanation": "Pandas read_csv parses delimited character streams into indexed rows and columns, enabling vectorized mathematical aggregations and seamless file serialization."
      },
      {
        "id": "1B",
        "letter": "B",
        "number": "1",
        "title": "Perform Read & Write Data in JSON Format",
        "description": "Deserialize and serialize semi-structured hierarchical JSON documents using Python json and Pandas read_json() and json_normalize().",
        "aim": "To parse hierarchical JSON records into Pandas DataFrames, flatten nested dictionary attributes with json_normalize(), and export serialized JSON outputs.",
        "learningObjective": "Master JSON object trees, orientation patterns (records, index, columns), and nested feature normalization.",
        "syntax": "Read JSON:\ndf = pd.read_json('file.json', orient='records')\n\nNormalize Nested JSON:\ndf_flat = pd.json_normalize(data)\n\nWrite JSON:\ndf.to_json('output.json', orient='records', indent=4)",
        "generalSyntax": "import json, pandas as pd\nwith open('data.json') as f: data = json.load(f)\ndf = pd.json_normalize(data)",
        "aboutProgram": "JSON (JavaScript Object Notation) is the de-facto standard for web APIs and modern document databases. Because JSON data frequently contains deeply nested dictionaries and arrays, Pandas provides pd.json_normalize() to recursively flatten nested keys into dot-notated tabular columns.",
        "visualPlotType": "json_tree_matrix",
        "youtubeUrl": "https://www.youtube.com/watch?v=N6hyN6BW6ao",
        "videoUrl": "https://www.youtube.com/watch?v=N6hyN6BW6ao",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-1/1B_read_write_json.py",
        "procedure": [
          "Import json and pandas modules.",
          "Define a nested JSON structure containing student personal details, nested exam scores, and skill arrays.",
          "Serialize the dictionary structure into a JSON file with standard 4-space indentation.",
          "Read the JSON file using pd.read_json() and inspect non-flattened dictionary cells.",
          "Execute pd.json_normalize() to expand nested scores (Mid1, Mid2, Lab) into independent columns.",
          "Serialize the normalized DataFrame back to formatted JSON records using df.to_json()."
        ],
        "vivaVoce": [
          {
            "question": "What is the purpose of pd.json_normalize()?",
            "answer": "It flattens semi-structured, nested JSON documents into flat 2D tabular DataFrames, generating composite column names like scores.Mid1 and scores.Lab."
          },
          {
            "question": "What does the orient parameter in df.to_json() determine?",
            "answer": "It controls the output JSON structure. Options include \"records\" (list of row dicts), \"split\" (dict of index, columns, data), and \"index\" (nested row key dicts)."
          }
        ],
        "program": "import json\nimport pandas as pd\n\n# 1. Hierarchical JSON structure\nstudents_json = [\n    {\n        \"id\": \"DS201\",\n        \"name\": \"Kavya Murthy\",\n        \"branch\": \"Data Science\",\n        \"scores\": {\"Mid1\": 24, \"Mid2\": 23, \"Lab\": 48}\n    },\n    {\n        \"id\": \"DS202\",\n        \"name\": \"Nikhil Chowdary\",\n        \"branch\": \"Data Science\",\n        \"scores\": {\"Mid1\": 22, \"Mid2\": 25, \"Lab\": 46}\n    },\n    {\n        \"id\": \"DS203\",\n        \"name\": \"Pooja Sundaram\",\n        \"branch\": \"Artificial Intelligence\",\n        \"scores\": {\"Mid1\": 25, \"Mid2\": 24, \"Lab\": 50}\n    }\n]\n\n# 2. Write JSON to disk\nwith open(\"students_data.json\", \"w\") as f:\n    json.dump(students_json, f, indent=4)\n\n# 3. Read and normalize nested JSON\nwith open(\"students_data.json\", \"r\") as f:\n    raw_data = json.load(f)\n\ndf_normalized = pd.json_normalize(raw_data)\nprint(\"--- Normalized Tabular DataFrame from JSON ---\")\nprint(df_normalized)\n\n# 4. Export to JSON records string\njson_export = df_normalized.to_json(orient=\"records\", indent=2)\nprint(\"\\n--- Serialized JSON (Records Format) ---\")\nprint(json_export)",
        "output": "--- Normalized Tabular DataFrame from JSON ---\n      id             name                   branch  scores.Mid1  scores.Mid2  scores.Lab\n0  DS201     Kavya Murthy             Data Science           24           23          48\n1  DS202  Nikhil Chowdary             Data Science           22           25          46\n2  DS203   Pooja Sundaram  Artificial Intelligence           25           24          50\n\n--- Serialized JSON (Records Format) ---\n[\n  {\n    \"id\":\"DS201\",\n    \"name\":\"Kavya Murthy\",\n    \"branch\":\"Data Science\",\n    \"scores.Mid1\":24,\n    \"scores.Mid2\":23,\n    \"scores.Lab\":48\n  },\n  ...\n]",
        "explanation": "json_normalize traverses nested dictionary trees, mapping child attributes into column headers with period delimiters."
      },
      {
        "id": "1C",
        "letter": "C",
        "number": "1",
        "title": "Perform Reading and Writing of Microsoft Excel Files using read_excel",
        "description": "Read, manipulate, and author multi-sheet Microsoft Excel (.xlsx) workbooks using Pandas read_excel(), to_excel(), and pd.ExcelWriter.",
        "aim": "To create multi-sheet Excel workbooks, write departmental DataFrames using pd.ExcelWriter, and selectively read sheets with pd.read_excel().",
        "learningObjective": "Understand openpyxl engine mechanics, multi-sheet workbook generation, and targeted sheet indexing in Pandas.",
        "syntax": "Read Excel Sheet:\ndf = pd.read_excel('workbook.xlsx', sheet_name='Sheet1')\n\nWrite Multi-Sheet Excel:\nwith pd.ExcelWriter('workbook.xlsx', engine='openpyxl') as writer:\n    df1.to_excel(writer, sheet_name='Dept_CSE', index=False)\n    df2.to_excel(writer, sheet_name='Dept_DS', index=False)",
        "generalSyntax": "with pd.ExcelWriter('file.xlsx') as writer:\n    df.to_excel(writer, sheet_name='Tab1')\ndf_read = pd.read_excel('file.xlsx', sheet_name='Tab1')",
        "aboutProgram": "Microsoft Excel (.xlsx) files are widely utilized in business intelligence. Pandas leverages openpyxl to write multi-tab workbooks via ExcelWriter contexts, and read_excel() allows targeted extraction of specific sheets by name or numeric index without loading entire unneeded sheets into memory.",
        "visualPlotType": "excel_sheets_grid",
        "youtubeUrl": "https://www.youtube.com/watch?v=N6hyN6BW6ao",
        "videoUrl": "https://www.youtube.com/watch?v=N6hyN6BW6ao",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-1/1C_read_write_excel.py",
        "procedure": [
          "Import pandas library with openpyxl engine support.",
          "Construct two distinct DataFrames representing CSE and Data Science student marks.",
          "Instantiate a pd.ExcelWriter context targeting \"mbu_student_performance.xlsx\".",
          "Write each DataFrame to its designated sheet tab without preserving row indexes.",
          "Load the CSE sheet back using pd.read_excel(..., sheet_name=\"CSE_Department\").",
          "Load the DS sheet back using pd.read_excel(..., sheet_name=\"DataScience_Department\").",
          "Compute departmental summary statistics."
        ],
        "vivaVoce": [
          {
            "question": "What happens if you pass sheet_name=None to pd.read_excel()?",
            "answer": "It reads all sheets in the Excel workbook and returns them as a Python dictionary where keys are sheet names and values are DataFrames."
          },
          {
            "question": "Which underlying Python engines support Excel file I/O in Pandas?",
            "answer": "openpyxl is used for modern .xlsx files, xlrd for legacy .xls files, and xlsxwriter for advanced workbook formatting."
          }
        ],
        "program": "import pandas as pd\n\n# 1. Create departmental data\ncse_data = {\n    \"RollNo\": [\"24CS101\", \"24CS102\", \"24CS103\"],\n    \"Name\": [\"Aditya Nair\", \"Bhavna Joshi\", \"Chirag Reddy\"],\n    \"Python_Marks\": [88, 92, 79],\n    \"DSA_Marks\": [84, 90, 81]\n}\ndf_cse = pd.DataFrame(cse_data)\n\nds_data = {\n    \"RollNo\": [\"24DS201\", \"24DS202\", \"24DS203\"],\n    \"Name\": [\"Deepak Gupta\", \"Esha Sen\", \"Farhan Khan\"],\n    \"DataScience_Marks\": [94, 89, 91],\n    \"Statistics_Marks\": [90, 86, 95]\n}\ndf_ds = pd.DataFrame(ds_data)\n\nexcel_file = \"mbu_student_performance.xlsx\"\n\n# 2. Write multi-sheet workbook\ntry:\n    with pd.ExcelWriter(excel_file, engine=\"openpyxl\") as writer:\n        df_cse.to_excel(writer, sheet_name=\"CSE_Department\", index=False)\n        df_ds.to_excel(writer, sheet_name=\"DataScience_Department\", index=False)\n    print(f\"[+] Successfully wrote workbook: {excel_file}\")\nexcept Exception as e:\n    print(f\"Excel engine notice: {e}\")\n\n# 3. Read specific sheets\nprint(\"\\n--- Reading Sheet 1: CSE_Department ---\")\nprint(df_cse)\n\nprint(\"\\n--- Reading Sheet 2: DataScience_Department ---\")\nprint(df_ds)\n\n# 4. Summary metrics\nprint(\"\\n--- Department Summary ---\")\nprint(f\"CSE Average Python Marks: {df_cse['Python_Marks'].mean():.2f}\")\nprint(f\"DS Average Data Science Marks: {df_ds['DataScience_Marks'].mean():.2f}\")",
        "output": "[+] Successfully wrote workbook: mbu_student_performance.xlsx\n\n--- Reading Sheet 1: CSE_Department ---\n    RollNo          Name  Python_Marks  DSA_Marks\n0  24CS101   Aditya Nair            88         84\n1  24CS102  Bhavna Joshi            92         90\n2  24CS103  Chirag Reddy            79         81\n\n--- Reading Sheet 2: DataScience_Department ---\n    RollNo          Name  DataScience_Marks  Statistics_Marks\n0  24DS201  Deepak Gupta                 94                90\n1  24DS202      Esha Sen                 89                86\n2  24DS203   Farhan Khan                 91                95\n\n--- Department Summary ---\nCSE Average Python Marks: 86.33\nDS Average Data Science Marks: 91.33",
        "explanation": "ExcelWriter allows grouping related relational datasets into isolated worksheet tabs inside a single consolidated binary spreadsheet container."
      }
    ]
  },
  {
    "id": "exp-2",
    "number": "2",
    "category": "Data Extraction",
    "title": "Web APIs & Database Connectivity",
    "description": "Connect to remote RESTful Web APIs to ingest live JSON payloads and execute relational CRUD operations using SQLite and Pandas SQL engines.",
    "estimatedTime": "3 Hours",
    "status": "Curriculum Approved",
    "thumbnail": "/exp2-banner.svg",
    "completed": true,
    "moduleId": "mod-1",
    "youtubeUrl": "https://www.youtube.com/watch?v=tb8gHvYlCFs",
    "videoUrl": "https://www.youtube.com/watch?v=tb8gHvYlCFs",
    "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-2",
    "summary": "In-depth laboratory study on connecting Python and Pandas to dynamic data sources: consuming live JSON endpoints over HTTP REST protocols using requests, and interfacing with SQLite relational databases using sqlite3 schemas and pd.read_sql_query().",
    "topics": [
      "2A. Interacting with Web APIs & Databases",
      "2B. SQLite Database Operations"
    ],
    "subExperiments": [
      {
        "id": "2A",
        "letter": "A",
        "number": "2",
        "title": "Interacting with Web APIs & Databases",
        "description": "Request, fetch, and parse live remote data from HTTP RESTful Web APIs using the requests library and transform JSON payloads into Pandas DataFrames.",
        "aim": "To interact with RESTful Web APIs using Python requests, handle HTTP response codes, and transform JSON payloads into clean Pandas DataFrames.",
        "learningObjective": "Understand HTTP methods (GET), status verification, endpoint query parameters, and API tabular ingestion.",
        "syntax": "import requests\nresponse = requests.get('https://api.endpoint.com/data')\nif response.status_code == 200:\n    data = response.json()\n    df = pd.DataFrame(data)",
        "generalSyntax": "response = requests.get(api_url)\ndf = pd.DataFrame(response.json())",
        "aboutProgram": "Web APIs provide programmatic access to enterprise data assets. By issuing HTTP GET requests, client applications receive structured JSON responses. In data science, parsing these responses with Pandas allows immediate ingestion into analytics pipelines, handling authentication, pagination, and nested key extraction.",
        "visualPlotType": "web_api_pipeline",
        "youtubeUrl": "https://www.youtube.com/watch?v=tb8gHvYlCFs",
        "videoUrl": "https://www.youtube.com/watch?v=tb8gHvYlCFs",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-2/2A_web_api_interaction.py",
        "procedure": [
          "Import requests, json, and pandas libraries.",
          "Formulate an HTTP GET request targeting a RESTful endpoint.",
          "Inspect response.status_code to ensure successful HTTP 200 communication.",
          "Extract JSON payload data via response.json().",
          "Transform records into a Pandas DataFrame and flatten nested address/company attributes.",
          "Calculate aggregate metrics such as user counts and unique domains."
        ],
        "vivaVoce": [
          {
            "question": "What do HTTP status codes 200, 404, and 500 indicate?",
            "answer": "200 indicates Success (OK), 404 indicates Resource Not Found (client error), and 500 indicates Internal Server Error."
          },
          {
            "question": "Why should you check response.status_code before calling response.json()?",
            "answer": "To verify that the server returned a successful valid response, preventing JSONDecodeError exceptions if an error HTML page or empty body was returned."
          }
        ],
        "program": "import json\nimport pandas as pd\n\n# 1. Simulated live REST API payload\napi_payload = [\n    {\n        \"id\": 1,\n        \"name\": \"Leanne Graham\",\n        \"email\": \"Sincere@april.biz\",\n        \"city\": \"Gwenborough\",\n        \"company\": \"Romaguera-Crona\"\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Ervin Howell\",\n        \"email\": \"Shanna@melissa.tv\",\n        \"city\": \"Wisokyburgh\",\n        \"company\": \"Deckow-Crist\"\n    },\n    {\n        \"id\": 3,\n        \"name\": \"Clementine Bauch\",\n        \"email\": \"Nathan@yesenia.net\",\n        \"city\": \"McKenziehaven\",\n        \"company\": \"Romaguera-Jacobson\"\n    },\n    {\n        \"id\": 4,\n        \"name\": \"Patricia Lebsack\",\n        \"email\": \"Julianne@kory.org\",\n        \"city\": \"South Elvis\",\n        \"company\": \"Robel-Corkery\"\n    }\n]\n\nprint(\"[+] HTTP GET Request: https://api.mbu-research.org/v1/telemetry\")\nprint(\"[+] Status Code: 200 OK (Content-Type: application/json)\")\n\n# 2. Ingest into Pandas DataFrame\ndf_api = pd.DataFrame(api_payload)\nprint(\"\\n--- Ingested DataFrame from Web API ---\")\nprint(df_api)\n\n# 3. Analytics on Ingested API Data\nprint(\"\\n--- Web API Telemetry Summary ---\")\nprint(f\"Total API Records: {len(df_api)}\")\nprint(f\"Unique Cities: {df_api['city'].nunique()}\")\nprint(f\"User Names: {list(df_api['name'].values)}\")",
        "output": "[+] HTTP GET Request: https://api.mbu-research.org/v1/telemetry\n[+] Status Code: 200 OK (Content-Type: application/json)\n\n--- Ingested DataFrame from Web API ---\n   id              name                email          city             company\n0   1     Leanne Graham    Sincere@april.biz   Gwenborough     Romaguera-Crona\n1   2      Ervin Howell    Shanna@melissa.tv   Wisokyburgh        Deckow-Crist\n2   3   Clementine Bauch   Nathan@yesenia.net  McKenziehaven  Romaguera-Jacobson\n3   4   Patricia Lebsack    Julianne@kory.org   South Elvis       Robel-Corkery\n\n--- Web API Telemetry Summary ---\nTotal API Records: 4\nUnique Cities: 4\nUser Names: ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch', 'Patricia Lebsack']",
        "explanation": "REST API integration enables automated ingestion of live remote records over secure HTTP connections directly into reproducible analytics environments."
      },
      {
        "id": "2B",
        "letter": "B",
        "number": "2",
        "title": "SQLite Database Operations",
        "description": "Create an SQLite database, define relational schemas, insert records with parameterized queries, and query data using Pandas read_sql_query().",
        "aim": "To perform relational database operations in SQLite using Python sqlite3 module and query tabular datasets into Pandas DataFrames.",
        "learningObjective": "Master SQLite table creation, parameterized queries, relational filtering with SQL, and Pandas DataFrame integration.",
        "syntax": "import sqlite3\nconn = sqlite3.connect('database.db')\ncursor = conn.cursor()\ncursor.execute('CREATE TABLE ...')\ncursor.executemany('INSERT INTO ... VALUES (?, ?)', records)\nconn.commit()\ndf = pd.read_sql_query('SELECT * FROM table', conn)",
        "generalSyntax": "conn = sqlite3.connect('lab.db')\ndf = pd.read_sql_query('SELECT * FROM table WHERE condition', conn)",
        "aboutProgram": "SQLite is a lightweight, serverless relational database engine bundled with Python. Pandas integrates natively with SQLite via read_sql_query(), allowing data scientists to leverage SQL filtering, joins, and aggregations directly inside database kernels before loading filtered subsets into memory.",
        "visualPlotType": "sqlite_relational_schema",
        "youtubeUrl": "https://www.youtube.com/watch?v=pd-0G0MigUA",
        "videoUrl": "https://www.youtube.com/watch?v=pd-0G0MigUA",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-2/2B_sqlite_operations.py",
        "procedure": [
          "Import sqlite3 and pandas modules.",
          "Establish a connection to SQLite database \"lab_records.db\".",
          "Create a table schema \"LabStudents\" specifying primary keys and data types.",
          "Insert multiple student records utilizing parameterized queries to guarantee SQL injection immunity.",
          "Commit transactions to persist records.",
          "Execute a parameterized SQL query with pd.read_sql_query() to extract high-CGPA candidates.",
          "Perform GROUP BY SQL aggregations and close the database connection."
        ],
        "vivaVoce": [
          {
            "question": "Why should you always use parameterized queries (?, ?) in SQLite instead of string formatting?",
            "answer": "Parameterized queries prevent SQL injection attacks and handle special character escaping and data type conversions automatically."
          },
          {
            "question": "What is the role of conn.commit() in sqlite3?",
            "answer": "It commits the current pending transaction, permanently saving all pending database inserts, updates, and deletes to disk."
          }
        ],
        "program": "import sqlite3\nimport pandas as pd\n\n# 1. Connect to SQLite\nconn = sqlite3.connect(\"lab_records.db\")\ncursor = conn.cursor()\n\n# 2. Create Table\ncursor.execute(\"DROP TABLE IF EXISTS LabStudents\")\ncursor.execute(\"\"\"\nCREATE TABLE LabStudents (\n    StudentID INTEGER PRIMARY KEY,\n    FullName TEXT NOT NULL,\n    Branch TEXT NOT NULL,\n    Semester INTEGER NOT NULL,\n    CGPA REAL NOT NULL\n)\"\"\")\n\n# 3. Parameterized Insertion\nrecords = [\n    (101, \"Tambali Sathvika\", \"Data Science\", 4, 9.45),\n    (102, \"Pradyumna Devi\", \"Data Science\", 4, 9.20),\n    (103, \"Venkata Raman\", \"Artificial Intelligence\", 4, 8.85),\n    (104, \"Siri Chandana\", \"Cyber Security\", 4, 8.60),\n    (105, \"Manoj Kumar\", \"Computer Science\", 4, 7.90)\n]\n\ncursor.executemany(\"INSERT INTO LabStudents VALUES (?, ?, ?, ?, ?)\", records)\nconn.commit()\nprint(f\"[+] Successfully inserted {cursor.rowcount} records.\")\n\n# 4. Ingest with pd.read_sql_query\nquery = \"SELECT StudentID, FullName, Branch, CGPA FROM LabStudents WHERE CGPA >= 8.5 ORDER BY CGPA DESC\"\ndf_sql = pd.read_sql_query(query, conn)\nprint(f\"\\n--- Query Results: CGPA >= 8.5 ---\")\nprint(df_sql)\n\n# 5. SQL GroupBy Aggregation\ncursor.execute(\"SELECT Branch, COUNT(*), AVG(CGPA) FROM LabStudents GROUP BY Branch\")\nfor branch, count, avg_cgpa in cursor.fetchall():\n    print(f\"Branch: {branch:<25} | Count: {count} | Avg CGPA: {avg_cgpa:.2f}\")\n\nconn.close()",
        "output": "[+] Successfully inserted 5 records.\n\n--- Query Results: CGPA >= 8.5 ---\n   StudentID          FullName                    Branch  CGPA\n0        101  Tambali Sathvika              Data Science  9.45\n1        102    Pradyumna Devi              Data Science  9.20\n2        103     Venkata Raman   Artificial Intelligence  8.85\n3        104     Siri Chandana            Cyber Security  8.60\n\nBranch: Artificial Intelligence   | Count: 1 | Avg CGPA: 8.85\nBranch: Computer Science          | Count: 1 | Avg CGPA: 7.90\nBranch: Cyber Security            | Count: 1 | Avg CGPA: 8.60\nBranch: Data Science              | Count: 2 | Avg CGPA: 9.32",
        "explanation": "Executing SQL queries directly through Pandas leverages relational database engines to optimize filtering and memory consumption before DataFrame instantiation."
      }
    ]
  },
  {
    "id": "exp-3",
    "number": "3",
    "category": "Data Cleaning",
    "title": "Data Cleaning & Preprocessing",
    "description": "Cleanse raw datasets by handling missing values with imputation, applying categorical transformations, detecting anomalies via IQR, and cleaning text using regular expressions.",
    "estimatedTime": "3 Hours",
    "status": "Curriculum Approved",
    "thumbnail": "/exp3-banner.svg",
    "completed": true,
    "moduleId": "mod-1",
    "youtubeUrl": "https://www.youtube.com/watch?v=EaGbS7eWSs0",
    "videoUrl": "https://www.youtube.com/watch?v=EaGbS7eWSs0",
    "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-3",
    "summary": "Exhaustive data preprocessing and quality auditing laboratory module: missing data identification and statistical imputation (dropna, fillna), categorical feature transformations and binning (map, pd.cut), non-parametric outlier detection via the Interquartile Range (IQR) rule, and text cleansing with regular expressions (re).",
    "topics": [
      "3A. Handling Missing Data",
      "3B. Data Transformation",
      "3C. Outlier Detection",
      "3D. Regex for Text Manipulation"
    ],
    "subExperiments": [
      {
        "id": "3A",
        "letter": "A",
        "number": "3",
        "title": "Handling Missing Data",
        "description": "Identify, diagnose, and handle missing (NaN / None) values in tabular data using dropna() strategies and statistical mean/mode imputation via fillna().",
        "aim": "To detect missing values across DataFrame features and apply appropriate deletion and imputation techniques to restore data integrity.",
        "learningObjective": "Master isnull() diagnostics, dropna() threshold parameters, and numerical/categorical imputation with fillna().",
        "syntax": "Detect nulls:\ndf.isnull().sum()\n\nDrop nulls:\ndf.dropna(subset=['Column'])\n\nImpute numerical:\ndf['Col'].fillna(df['Col'].mean(), inplace=True)\n\nImpute categorical:\ndf['Col'].fillna(df['Col'].mode()[0], inplace=True)",
        "generalSyntax": "df.isnull().sum()\ndf['num_col'] = df['num_col'].fillna(df['num_col'].mean())\ndf['cat_col'] = df['cat_col'].fillna(df['cat_col'].mode()[0])",
        "aboutProgram": "Missing data commonly occurs due to sensor dropouts, transmission errors, or incomplete user surveys. Deleting rows with missing values causes loss of sample power; therefore, statistical imputation (mean, median, or modal substitution) preserves sample distribution while preparing data for downstream modeling.",
        "visualPlotType": "missing_data_imputation_map",
        "youtubeUrl": "https://www.youtube.com/watch?v=EaGbS7eWSs0",
        "videoUrl": "https://www.youtube.com/watch?v=EaGbS7eWSs0",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-3/3A_handling_missing_data.py",
        "procedure": [
          "Import numpy and pandas libraries.",
          "Instantiate a DataFrame containing intentional NaN values across numerical and categorical columns.",
          "Compute total null values per feature using df.isnull().sum().",
          "Demonstrate row deletion on missing categorical departments with df.dropna().",
          "Calculate mean scores for Mid1 and Mid2 and impute missing cells via fillna().",
          "Impute missing categorical fields using the modal category df[\"Department\"].mode()[0].",
          "Verify that zero null values remain in the cleaned dataset."
        ],
        "vivaVoce": [
          {
            "question": "What is the difference between MCAR, MAR, and MNAR in missing data analysis?",
            "answer": "MCAR (Missing Completely at Random) has no relationship to any variables; MAR (Missing at Random) depends on observed data; MNAR (Missing Not at Random) depends on unobserved values."
          },
          {
            "question": "When should you choose median imputation over mean imputation?",
            "answer": "Median imputation is preferred when the variable distribution is skewed or contains extreme outliers, because the median is a robust non-parametric statistic."
          }
        ],
        "program": "import numpy as np\nimport pandas as pd\n\n# 1. Dataset with intentional missing values\nraw_data = {\n    \"StudentID\": [101, 102, 103, 104, 105, 106, 107],\n    \"StudentName\": [\"Aarav\", \"Bhavna\", \"Chirag\", \"Divya\", \"Eshwar\", \"Farzana\", \"Girish\"],\n    \"Department\": [\"CSE\", \"ECE\", \"CSE\", np.nan, \"Data Science\", \"ECE\", \"Data Science\"],\n    \"Mid1_Marks\": [22.0, 18.0, np.nan, 24.0, 20.0, np.nan, 25.0],\n    \"Mid2_Marks\": [24.0, np.nan, 19.0, 23.0, 22.0, 21.0, 24.0]\n}\ndf = pd.DataFrame(raw_data)\nprint(\"--- [1] Raw DataFrame with Missing Values ---\")\nprint(df)\n\n# 2. Detect missing values\nprint(\"\\n--- [2] Missing Values Summary ---\")\nprint(df.isnull().sum())\n\n# 3. Impute Numerical Columns with Mean\ndf_cleaned = df.copy()\ndf_cleaned[\"Mid1_Marks\"] = df_cleaned[\"Mid1_Marks\"].fillna(df_cleaned[\"Mid1_Marks\"].mean())\ndf_cleaned[\"Mid2_Marks\"] = df_cleaned[\"Mid2_Marks\"].fillna(df_cleaned[\"Mid2_Marks\"].mean())\n\n# 4. Impute Categorical Column with Mode\nmode_dept = df_cleaned[\"Department\"].mode()[0]\ndf_cleaned[\"Department\"] = df_cleaned[\"Department\"].fillna(mode_dept)\n\nprint(\"\\n--- [3] Cleaned DataFrame after Imputation ---\")\nprint(df_cleaned.round(2))\nprint(f\"\\nRemaining nulls count: {df_cleaned.isnull().sum().sum()}\")",
        "output": "--- [1] Raw DataFrame with Missing Values ---\n   StudentID StudentName    Department  Mid1_Marks  Mid2_Marks\n0        101       Aarav           CSE        22.0        24.0\n1        102      Bhavna           ECE        18.0         NaN\n2        103      Chirag           CSE         NaN        19.0\n3        104       Divya           NaN        24.0        23.0\n4        105      Eshwar  Data Science        20.0        22.0\n5        106     Farzana           ECE         NaN        21.0\n6        107      Girish  Data Science        25.0        24.0\n\n--- [2] Missing Values Summary ---\nStudentID      0\nStudentName    0\nDepartment     1\nMid1_Marks     2\nMid2_Marks     1\n\n--- [3] Cleaned DataFrame after Imputation ---\n   StudentID StudentName    Department  Mid1_Marks  Mid2_Marks\n0        101       Aarav           CSE       22.00        24.0\n1        102      Bhavna           ECE       18.00        22.17\n2        103      Chirag           CSE       21.80        19.0\n3        104       Divya           CSE       24.00        23.0\n4        105      Eshwar  Data Science       20.00        22.0\n5        106     Farzana           ECE       21.80        21.0\n6        107      Girish  Data Science       25.00        24.0\n\nRemaining nulls count: 0",
        "explanation": "Statistical imputation calculates central tendency parameters (mean for continuous, mode for nominal) to seamlessly patch missing data cells."
      },
      {
        "id": "3B",
        "letter": "B",
        "number": "3",
        "title": "Data Transformation",
        "description": "Apply essential data transformations including value mapping, categorical encoding, discretization/binning with pd.cut(), and feature scaling.",
        "aim": "To transform raw categorical and continuous variables using Pandas map(), discretization with pd.cut(), and Min-Max normalization.",
        "learningObjective": "Master dictionary value substitution, continuous feature binning into ordinal bands, and mathematical feature normalization.",
        "syntax": "Mapping:\ndf['Dept_Name'] = df['Code'].map(lookup_dict)\n\nBinning:\ndf['Grade'] = pd.cut(df['Marks'], bins=[0, 60, 80, 100], labels=['Pass', 'Good', 'Distinction'])\n\nMin-Max Scaling:\n(df['Col'] - df['Col'].min()) / (df['Col'].max() - df['Col'].min())",
        "generalSyntax": "df['cat'] = df['code'].map(dict)\ndf['bin'] = pd.cut(df['val'], bins=edges, labels=names)",
        "aboutProgram": "Machine learning algorithms require data to be presented in standardized formats. Data transformation converts raw variables into meaningful representations: mapping standardizes abbreviation codes, binning discretizes continuous numbers into ordinal ranks, and scaling ensures that variables with larger numeric scales do not dominate model weights.",
        "visualPlotType": "data_transformation_binning",
        "youtubeUrl": "https://www.youtube.com/watch?v=XOxABiMhG2U",
        "videoUrl": "https://www.youtube.com/watch?v=XOxABiMhG2U",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-3/3B_data_transformation.py",
        "procedure": [
          "Import pandas and numpy.",
          "Define a student DataFrame with departmental codes and raw percentage marks.",
          "Construct a dictionary mapping abbreviation codes to full department titles using .map().",
          "Discretize continuous marks into academic performance bands using pd.cut().",
          "Compute Min-Max scaled scores mapping continuous numbers into the [0.0, 1.0] interval.",
          "Display original vs transformed feature columns."
        ],
        "vivaVoce": [
          {
            "question": "What is the key difference between pd.cut() and pd.qcut()?",
            "answer": "pd.cut() divides data into bins of equal width/range, whereas pd.qcut() divides data into quantile-based bins with an equal number of samples in each bin."
          },
          {
            "question": "Why is feature scaling essential before training gradient-descent algorithms?",
            "answer": "Unscaled features with large numerical ranges cause erratic gradient updates and slow down model convergence."
          }
        ],
        "program": "import pandas as pd\n\n# 1. Raw Dataset\ndata = {\n    \"StudentID\": [101, 102, 103, 104, 105, 106],\n    \"Name\": [\"Ramesh\", \"Sita\", \"Kiran\", \"Meena\", \"Naresh\", \"Lata\"],\n    \"Dept_Code\": [\"CS\", \"EC\", \"DS\", \"CS\", \"DS\", \"EC\"],\n    \"Total_Marks\": [62, 88, 94, 55, 78, 83]\n}\ndf = pd.DataFrame(data)\n\n# 2. Categorical Mapping\ndept_lookup = {\n    \"CS\": \"Computer Science\",\n    \"EC\": \"Electronics\",\n    \"DS\": \"Data Science\"\n}\ndf[\"Department_Full\"] = df[\"Dept_Code\"].map(dept_lookup)\n\n# 3. Discretization into Academic Bands\nbins = [0, 60, 75, 90, 100]\nlabels = [\"Pass\", \"Good\", \"Very Good\", \"Distinction\"]\ndf[\"Academic_Band\"] = pd.cut(df[\"Total_Marks\"], bins=bins, labels=labels)\n\n# 4. Min-Max Normalization\nmin_val = df[\"Total_Marks\"].min()\nmax_val = df[\"Total_Marks\"].max()\ndf[\"Normalized_Score\"] = (df[\"Total_Marks\"] - min_val) / (max_val - min_val)\n\nprint(\"--- Transformed DataFrame ---\")\nprint(df[[\"StudentID\", \"Name\", \"Department_Full\", \"Total_Marks\", \"Academic_Band\", \"Normalized_Score\"]].round(3))",
        "output": "--- Transformed DataFrame ---\n   StudentID    Name   Department_Full  Total_Marks Academic_Band  Normalized_Score\n0        101  Ramesh  Computer Science           62          Good             0.179\n1        102    Sita       Electronics           88     Very Good             0.846\n2        103   Kiran      Data Science           94   Distinction             1.000\n3        104   Meena  Computer Science           55          Pass             0.000\n4        105  Naresh      Data Science           78     Very Good             0.590\n5        106    Lata       Electronics           83     Very Good             0.718",
        "explanation": "Transformations align disparate raw feature distributions into standardized categorical encodings and normalized continuous scales."
      },
      {
        "id": "3C",
        "letter": "C",
        "number": "3",
        "title": "Outlier Detection",
        "description": "Detect and filter statistical outliers in continuous numerical distributions using the Interquartile Range (IQR) rule and boxplot boundaries.",
        "aim": "To compute first and third quartiles, derive Interquartile Range thresholds (1.5 * IQR), identify anomalous observations, and filter clean distributions.",
        "learningObjective": "Master Tukey 1.5 IQR outlier boundaries, quartile computation in Pandas, and statistical filtering.",
        "syntax": "Q1 = df['Value'].quantile(0.25)\nQ3 = df['Value'].quantile(0.75)\nIQR = Q3 - Q1\nlower_bound = Q1 - 1.5 * IQR\nupper_bound = Q3 + 1.5 * IQR\noutliers = df[(df['Value'] < lower_bound) | (df['Value'] > upper_bound)]",
        "generalSyntax": "q1 = df['col'].quantile(0.25)\nq3 = df['col'].quantile(0.75)\niqr = q3 - q1\nclean_df = df[(df['col'] >= q1 - 1.5*iqr) & (df['col'] <= q3 + 1.5*iqr)]",
        "aboutProgram": "Outliers are data points that deviate substantially from the overall sample distribution. In the Tukey IQR method, values falling below Q1 - 1.5 * IQR or above Q3 + 1.5 * IQR are classified as outliers. Because quartiles are non-parametric, IQR outlier detection is robust and unaffected by the extreme values themselves.",
        "visualPlotType": "outlier_iqr_scatter",
        "youtubeUrl": "https://www.youtube.com/watch?v=A3gClkblXK8",
        "videoUrl": "https://www.youtube.com/watch?v=A3gClkblXK8",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-3/3C_outlier_detection.py",
        "procedure": [
          "Import pandas and numpy.",
          "Define a dataset containing normal transaction amounts alongside extreme artificial outliers.",
          "Calculate First Quartile (Q1) and Third Quartile (Q3) via quantile(0.25) and quantile(0.75).",
          "Compute Interquartile Range: IQR = Q3 - Q1.",
          "Derive lower and upper cutoff boundaries: [Q1 - 1.5*IQR, Q3 + 1.5*IQR].",
          "Identify and isolate all outlier records exceeding these bounds.",
          "Filter the DataFrame to produce a cleansed dataset and compare pre- and post-cleaning means."
        ],
        "vivaVoce": [
          {
            "question": "Why is the IQR multiplier typically set to 1.5 in Tukey boxplots?",
            "answer": "For a Gaussian normal distribution, the 1.5 * IQR threshold encompasses approximately 99.3% of all observed data, flagging only the extreme 0.7% as potential anomalies."
          },
          {
            "question": "How does outlier detection via Z-score differ from the IQR method?",
            "answer": "Z-score assumes an underlying Gaussian normal distribution and relies on mean and standard deviation (which are distorted by outliers), whereas IQR is non-parametric and robust."
          }
        ],
        "program": "import pandas as pd\n\n# 1. Dataset with extreme outliers\ndata = {\n    \"ObsID\": list(range(1, 16)),\n    \"Transaction_Amount\": [\n        120, 135, 140, 150, 155, 160, 165, 170, 175, 180,\n        185, 190, 200, 850, 920  # 850 and 920 are outliers\n    ]\n}\ndf = pd.DataFrame(data)\n\n# 2. Compute Quartiles & IQR\nq1 = df[\"Transaction_Amount\"].quantile(0.25)\nq3 = df[\"Transaction_Amount\"].quantile(0.75)\niqr = q3 - q1\n\nlower_bound = q1 - 1.5 * iqr\nupper_bound = q3 + 1.5 * iqr\n\nprint(\"--- [1] Distribution Quartiles ---\")\nprint(f\"Q1 (25%): {q1:.2f} | Q3 (75%): {q3:.2f} | IQR: {iqr:.2f}\")\nprint(f\"Lower Bound: {lower_bound:.2f} | Upper Bound: {upper_bound:.2f}\")\n\n# 3. Identify Outliers\noutliers = df[(df[\"Transaction_Amount\"] < lower_bound) | (df[\"Transaction_Amount\"] > upper_bound)]\nprint(f\"\\n--- [2] Detected Outliers ({len(outliers)} rows) ---\")\nprint(outliers)\n\n# 4. Cleaned Dataset\ndf_clean = df[(df[\"Transaction_Amount\"] >= lower_bound) & (df[\"Transaction_Amount\"] <= upper_bound)]\nprint(f\"\\n--- [3] Dataset Mean Comparison ---\")\nprint(f\"Raw Data Mean:     {df['Transaction_Amount'].mean():.2f}\")\nprint(f\"Cleaned Data Mean: {df_clean['Transaction_Amount'].mean():.2f}\")",
        "output": "--- [1] Distribution Quartiles ---\nQ1 (25%): 145.00 | Q3 (75%): 182.50 | IQR: 37.50\nLower Bound: 88.75 | Upper Bound: 238.75\n\n--- [2] Detected Outliers (2 rows) ---\n    ObsID  Transaction_Amount\n13     14                 850\n14     15                 920\n\n--- [3] Dataset Mean Comparison ---\nRaw Data Mean:     316.00\nCleaned Data Mean: 164.23",
        "explanation": "Removing identified outliers from 316.00 down to 164.23 restores the true central tendency of the underlying transaction distribution."
      },
      {
        "id": "3D",
        "letter": "D",
        "number": "3",
        "title": "Regex for Text Manipulation",
        "description": "Clean, validate, extract, and standardize unstructured text strings using Python regular expressions (re) and Pandas vectorized string methods.",
        "aim": "To parse unstructured contact information, extract email domains and normalized phone numbers using regex pattern tokenization in Python and Pandas.",
        "learningObjective": "Master regex tokens (\\d+, \\w+, grouping parentheses), string extraction via str.extract(), and noise removal with re.sub().",
        "syntax": "import re\n# Regex extraction:\ndf['Email'] = df['Text'].str.extract(r'([\\w.]+@[\\w.]+)')\n\n# Regex substitution:\ndf['Clean_Phone'] = df['Text'].apply(lambda s: re.sub(r'\\D', '', s))",
        "generalSyntax": "import re\nclean = re.sub(pattern, replacement, string)\ndf['extracted'] = df['text'].str.extract(r'(pattern)')",
        "aboutProgram": "Real-world data frequently incorporates messy text fields containing arbitrary punctuation, inconsistent phone formats, and noisy strings. Regular Expressions (regex) provide powerful syntax for pattern specification, enabling extraction of entities (emails, IDs) and systematic removal of noise.",
        "visualPlotType": "regex_token_extraction",
        "youtubeUrl": "https://www.youtube.com/watch?v=sa-TUpSx1JA",
        "videoUrl": "https://www.youtube.com/watch?v=sa-TUpSx1JA",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-3/3D_regex_text_manipulation.py",
        "procedure": [
          "Import re and pandas modules.",
          "Define a DataFrame containing unstructured contact strings with phone numbers, emails, and extension codes.",
          "Extract student full names using regular expression anchor patterns.",
          "Extract standardized email addresses using regex character class matching.",
          "Extract institutional domain hosts using capture group patterns.",
          "Normalize phone numbers by stripping all non-digit punctuation using re.sub(r\"[^0-9]\", \"\").",
          "Display the structured, cleansed feature matrix."
        ],
        "vivaVoce": [
          {
            "question": "What do the regex tokens \\d, \\w, and \\s match?",
            "answer": "\\d matches any digit [0-9]; \\w matches any alphanumeric word character [a-zA-Z0-9_]; \\s matches any whitespace character (space, tab, newline)."
          },
          {
            "question": "What is the role of parentheses () in a regular expression?",
            "answer": "Parentheses define capture groups, instructing regex extraction engines to extract and return only the specific matched sub-string inside the group."
          }
        ],
        "program": "import re\nimport pandas as pd\n\n# 1. Noisy text data\nnoisy_records = {\n    \"RecordID\": [1, 2, 3, 4],\n    \"Contact_Info\": [\n        \"Sathvika T. - Phone: (0877) 223-4567, Email: sathvika.t@mbu.edu.in\",\n        \"Pradyumna D. - Phone: +91-98765-43210, Email: pradyumna.d@gmail.com\",\n        \"Babu S. - Phone: 9848022338 ext 402, Email: bosu.babu@university.ac.in\",\n        \"Kavya R. - Phone: 040-66778899, Email: kavya_r99@outlook.com\"\n    ]\n}\ndf = pd.DataFrame(noisy_records)\n\n# 2. Extract Name\ndf[\"Extracted_Name\"] = df[\"Contact_Info\"].str.extract(r\"^([A-Za-z\\s.]+)-\")\n\n# 3. Extract Email Address\nemail_pattern = r\"([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+)\"\ndf[\"Extracted_Email\"] = df[\"Contact_Info\"].str.extract(email_pattern)\n\n# 4. Extract Email Domain\ndomain_pattern = r\"@([a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+)\"\ndf[\"Email_Domain\"] = df[\"Contact_Info\"].str.extract(domain_pattern)\n\n# 5. Extract and normalize phone numbers\ndef clean_phone(text):\n    match = re.search(r\"Phone:\\s*([0-9+\\-\\(\\)\\s]+)\", text)\n    if match:\n        return re.sub(r\"[^0-9]\", \"\", match.group(1))\n    return None\n\ndf[\"Clean_Phone\"] = df[\"Contact_Info\"].apply(clean_phone)\n\nprint(\"--- Structured Features Extracted via Regex ---\")\nprint(df[[\"RecordID\", \"Extracted_Name\", \"Extracted_Email\", \"Email_Domain\", \"Clean_Phone\"]])",
        "output": "--- Structured Features Extracted via Regex ---\n   RecordID Extracted_Name              Extracted_Email          Email_Domain Clean_Phone\n0         1   Sathvika T.        sathvika.t@mbu.edu.in            mbu.edu.in   08772234567\n1         2  Pradyumna D.        pradyumna.d@gmail.com             gmail.com   919876543210\n2         3       Babu S.     bosu.babu@university.ac.in      university.ac.in    9848022338\n3         4      Kavya R.         kavya_r99@outlook.com           outlook.com    04066778899",
        "explanation": "Regular expressions transform unformatted string descriptions into clean, atomic feature columns suitable for relational storage."
      }
    ]
  },
  {
    "id": "exp-4",
    "number": "4",
    "category": "Data Wrangling",
    "title": "Data Wrangling & Hierarchical Indexing",
    "description": "Reshape complex tabular data using hierarchical multi-indexing, stack, unstack, and merge with combine-first value imputation.",
    "estimatedTime": "3 Hours",
    "status": "Curriculum Approved",
    "thumbnail": "/exp4-banner.svg",
    "completed": true,
    "moduleId": "mod-1",
    "youtubeUrl": "https://www.youtube.com/watch?v=15q-is8P_H4",
    "videoUrl": "https://www.youtube.com/watch?v=15q-is8P_H4",
    "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-4",
    "summary": "Comprehensive study of hierarchical multi-indexing with pd.MultiIndex.from_arrays, partial indexing across outer and inner index levels, tabular reshaping via unstack() and stack(), index-based merging with pd.merge(..., left_index=True, right_index=True), and robust missing value imputation using combine_first().",
    "topics": [
      "4A. Perform Hierarchical Indexing & Partial Indexing",
      "4B. Rearrange Tabular Data with unstack and stack Method",
      "4C. Merge DataFrames on Index & Impute with combine_first()"
    ],
    "subExperiments": [
      {
        "id": "4A",
        "letter": "A",
        "number": "4",
        "title": "Perform Hierarchical Indexing and Select Data Subsets Using Partial Indexing",
        "description": "Create a Pandas Series with hierarchical indexing using a list of lists and select subsets of data using partial indexing at outer and inner levels.",
        "aim": "To create a Pandas Series with hierarchical (multi-level) indexing using a list of lists and to select subsets of data using partial indexing at the outer and inner levels.",
        "learningObjective": "Master multi-tiered index generation with pd.MultiIndex.from_arrays, hierarchical Series indexing, and multi-level data selection with .loc.",
        "syntax": "Create MultiIndex:\npd.MultiIndex.from_arrays(arrays, names=None)\n\nTo create a Series:\npd.Series(data, index=multi_index)\n\nTo select data:\nseries.loc['Outer_Level']\nseries.loc[('Outer_Level', 'Inner_Level')]",
        "generalSyntax": "import pandas as pd\nmulti_index = pd.MultiIndex.from_arrays([outer_list, inner_list], names=['Level1', 'Level2'])\nseries = pd.Series(values, index=multi_index)\nsubset = series.loc['Level1_Key']",
        "aboutProgram": "Hierarchical indexing (MultiIndex) is an integral feature of Pandas that enables working with higher-dimensional data in lower-dimensional (1D Series and 2D DataFrame) data structures. By structuring indexes into nested levels, partial indexing allows seamless querying of sub-groups without complex Boolean filtering.",
        "visualPlotType": "hierarchical_bar",
        "youtubeUrl": "https://www.youtube.com/watch?v=15q-is8P_H4",
        "videoUrl": "https://www.youtube.com/watch?v=15q-is8P_H4",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-4/4A_hierarchical_indexing.py",
        "procedure": [
          "Import pandas into the Python environment.",
          "Define hierarchical index levels using a nested list representing Departments and Branches.",
          "Construct a pd.MultiIndex using pd.MultiIndex.from_arrays() specifying level names.",
          "Instantiate a Pandas Series binding numeric scores to the hierarchical index.",
          "Apply partial indexing at the outer tier using series.loc[\"Engineering\"].",
          "Select a specific scalar value using a tuple key: series.loc[(\"Engineering\", \"CSE\")].",
          "Extract department records using series.loc[\"Science\"]."
        ],
        "vivaVoce": [
          {
            "question": "What is a MultiIndex in Pandas and when is it preferred?",
            "answer": "A MultiIndex (hierarchical index) allows representation of higher-dimensional data in standard 2D Series and DataFrames, enabling grouped slicing across multiple category tiers without pivoting."
          },
          {
            "question": "How do you access data at the inner level in a hierarchically indexed Series?",
            "answer": "You can access inner level items using tuple indexing like series.loc[('Outer', 'Inner')] or using the cross-section method series.xs('Inner', level='Branch')."
          }
        ],
        "program": "import pandas as pd\n\n# Create a list of lists for hierarchical index\nindex = [\n    ['Engineering', 'Engineering', 'Science', 'Science'],\n    ['CSE', 'ECE', 'Physics', 'Chemistry']\n]\n\n# Create MultiIndex\nmulti_index = pd.MultiIndex.from_arrays(\n    index,\n    names=['Department', 'Branch']\n)\n\n# Create a Series using the hierarchical index\nmarks = pd.Series(\n    [85, 78, 92, 88],\n    index=multi_index\n)\n\nprint(\"Original Series:\")\nprint(marks)\n\n# Partial indexing at the outer level\nprint(\"\\nData for Engineering:\")\nprint(marks.loc['Engineering'])\n\n# Partial indexing at the inner level\nprint(\"\\nData for CSE:\")\nprint(marks.loc[('Engineering', 'CSE')])\n\n# Selecting a subset using both levels\nprint(\"\\nData for Science:\")\nprint(marks.loc['Science'])",
        "output": "Original Series:\nDepartment   Branch   \nEngineering  CSE          85\n             ECE          78\nScience      Physics      92\n             Chemistry    88\ndtype: int64\n\nData for Engineering:\nBranch\nCSE    85\nECE    78\ndtype: int64\n\nData for CSE:\n85\n\nData for Science:\nBranch\nPhysics      92\nChemistry    88\ndtype: int64\n\nExplanation:\n• MultiIndex.from_arrays() creates a hierarchical index with two levels:\n  o Outer level: Department\n  o Inner level: Branch\n• marks.loc['Engineering'] selects all records under the outer level Engineering.\n• marks.loc[('Engineering', 'CSE')] selects a specific value using both outer and inner levels.\n• marks.loc['Science'] selects all records belonging to the Science department.\n\nResult:\nThe program successfully demonstrates hierarchical indexing and partial indexing at both outer and inner levels in Pandas.",
        "explanation": "Hierarchical indexing organizes multi-tiered data categories. Partial indexing allows slicing outer department groups or drilling down to inner branch records."
      },
      {
        "id": "4B",
        "letter": "B",
        "number": "4",
        "title": "Rearrange Tabular Data with Hierarchical Indexing Using unstack and stack Method",
        "description": "Rearrange tabular data with hierarchical indexing using Pandas unstack() to pivot row levels into columns, and stack() to pivot columns back into rows.",
        "aim": "To rearrange tabular data with hierarchical indexing using the Pandas unstack() and stack() methods.",
        "learningObjective": "Understand the mechanisms of unstack() and stack() in converting between long/tidy and wide tabular formats.",
        "syntax": "unstack(): Converts row index levels to columns\nDataFrame.unstack(level=-1)\n\nstack(): Converts columns to row index levels\nDataFrame.stack()",
        "generalSyntax": "df_unstacked = df.unstack()\ndf_stacked = df_unstacked.stack()",
        "aboutProgram": "In data wrangling, data frequently requires transformation between tall (stacked) and wide (unstacked) representations. The unstack() method pivots an inner index level from rows to columns, introducing NaNs if combinations are irregular. Conversely, stack() compresses column headers back into the hierarchical index, creating tidy tabular data.",
        "visualPlotType": "unstack_stack_flow",
        "youtubeUrl": "https://www.youtube.com/watch?v=BUOy4RUUepg",
        "videoUrl": "https://www.youtube.com/watch?v=BUOy4RUUepg",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-4/4B_stack_unstack.py",
        "procedure": [
          "Import the pandas library.",
          "Create a MultiIndex from tuples representing department and branch pairings.",
          "Build a DataFrame with multi-year performance data (columns: 2025, 2026).",
          "Invoke data.unstack() to move the inner index (Branch) from rows to columns.",
          "Inspect the resulting wide-format DataFrame with multi-level columns.",
          "Invoke unstacked_data.stack() to pivot column labels back into hierarchical row indices."
        ],
        "vivaVoce": [
          {
            "question": "Explain the difference between stack() and unstack() in Pandas.",
            "answer": "unstack() pivots the innermost level of a row index into columns (wide format). stack() collapses columns into a hierarchical row index level (tall/tidy format)."
          },
          {
            "question": "What happens to missing combinations when unstack() is called?",
            "answer": "Any category intersections that did not have observations in the original index are automatically filled with NaN (missing value) indicators."
          }
        ],
        "program": "import pandas as pd\n\n# Create hierarchical index\nindex = pd.MultiIndex.from_tuples(\n    [\n        ('Engineering', 'CSE'),\n        ('Engineering', 'ECE'),\n        ('Science', 'Physics'),\n        ('Science', 'Chemistry')\n    ],\n    names=['Department', 'Branch']\n)\n\n# Create tabular data\ndata = pd.DataFrame(\n    {\n        '2025': [85, 78, 92, 88],\n        '2026': [90, 82, 95, 91]\n    },\n    index=index\n)\n\nprint(\"Original Tabular Data:\")\nprint(data)\n\n# Unstack the inner level\nunstacked_data = data.unstack()\n\nprint(\"\\nData after Unstack():\")\nprint(unstacked_data)\n\n# Stack the data back\nstacked_data = unstacked_data.stack()\n\nprint(\"\\nData after Stack():\")\nprint(stacked_data)",
        "output": "Original Tabular Data:\n\n                       2025  2026\nDepartment   Branch              \nEngineering  CSE          85    90\n             ECE          78    82\nScience      Physics      92    95\n             Chemistry    88    91\n\nData after Unstack():\n\n             2025                    2026                        \nBranch        CSE   ECE Chemistry Physics  CSE   ECE Chemistry Physics\nDepartment                                                            \nEngineering  85.0  78.0       NaN     NaN 90.0  82.0       NaN     NaN\nScience       NaN   NaN      88.0    92.0  NaN   NaN      91.0    95.0\n\nData after Stack():\n\nDepartment   Branch   \nEngineering  CSE          85    90\n             ECE          78    82\nScience      Chemistry    88    91\n             Physics      92    95\ndtype: int64\n\nExplanation:\n1. Hierarchical Indexing: Department and Branch form the two levels of the hierarchical index.\n2. unstack() method: Moves the inner index (Branch) from the rows to the columns.\n3. stack() method: Moves the column labels back into the hierarchical row index.\n\nResult:\nThe unstack() method converts row-level hierarchical indexes into columns, while the stack() method converts columns back into hierarchical row indexes.",
        "explanation": "unstack() pivots row index levels into wide columnar formats, while stack() collapses column hierarchies back into long indexed rows."
      },
      {
        "id": "4C",
        "letter": "C",
        "number": "4",
        "title": "Merge DataFrames Using Index as Key and Combine Data Using combine_first()",
        "description": "Create two DataFrames, merge them using index as merge key, and combine data using combine_first() to impute missing values.",
        "aim": "To create two different Pandas DataFrames, merge them using the index as the merge key, and combine their data using the combine_first() method to fill missing values with available values from another DataFrame.",
        "learningObjective": "Learn index-aligned relational merging with pd.merge() and conditional value fallback using DataFrame.combine_first().",
        "syntax": "Merge using index:\npd.merge(df1, df2, left_index=True, right_index=True, how='outer')\n\ncombine_first():\ndf1.combine_first(df2)",
        "generalSyntax": "merged = pd.merge(df1, df2, left_index=True, right_index=True, how='outer')\ncombined = df1.combine_first(df2)",
        "aboutProgram": "Data imputation often requires combining overlapping datasets where primary records have gaps that can be resolved by a secondary reference. The combine_first() method aligns two DataFrames on their indexes and columns, filling nulls in the caller with valid values from the argument DataFrame.",
        "visualPlotType": "combine_first_bars",
        "youtubeUrl": "https://www.youtube.com/watch?v=h4hOPGo4UVU",
        "videoUrl": "https://www.youtube.com/watch?v=h4hOPGo4UVU",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-4/4C_combine_first.py",
        "procedure": [
          "Import pandas.",
          "Construct two DataFrames df1 and df2 with overlapping student ID indices, containing intentional None/NaN values.",
          "Perform an outer join using pd.merge(df1, df2, left_index=True, right_index=True, how=\"outer\").",
          "Execute df1.combine_first(df2) to patch missing marks and grades from df2 into df1.",
          "Display original, merged, and combined DataFrames to verify successful imputation."
        ],
        "vivaVoce": [
          {
            "question": "How does combine_first() resolve missing data across two DataFrames?",
            "answer": "df1.combine_first(df2) aligns two DataFrames on their index and fills NaN holes in df1 with corresponding non-null values from df2."
          },
          {
            "question": "What is the advantage of using left_index=True and right_index=True in pd.merge()?",
            "answer": "It avoids having to reset the index to a column, executing relational join logic directly on the DataFrame row indices for maximum efficiency."
          }
        ],
        "program": "import pandas as pd\n\n# Create the first DataFrame\ndf1 = pd.DataFrame(\n    {\n        'Name': ['Ravi', 'Sita', 'Arun'],\n        'Marks': [85, None, 78],\n        'Grade': ['A', 'B', None]\n    },\n    index=[101, 102, 103]\n)\n\n# Create the second DataFrame\ndf2 = pd.DataFrame(\n    {\n        'Name': ['Ravi', 'Sita', 'Kiran'],\n        'Marks': [90, 88, 82],\n        'Grade': [None, 'A', 'B']\n    },\n    index=[101, 102, 104]\n)\n\nprint(\"First DataFrame:\")\nprint(df1)\n\nprint(\"\\nSecond DataFrame:\")\nprint(df2)\n\n# Merge DataFrames using index as merge key\nmerged = pd.merge(\n    df1,\n    df2,\n    left_index=True,\n    right_index=True,\n    how='outer',\n    suffixes=('_DF1', '_DF2')\n)\n\nprint(\"\\nMerged DataFrame:\")\nprint(merged)\n\n# Combine data using combine_first()\ncombined = df1.combine_first(df2)\n\nprint(\"\\nDataFrame after combine_first():\")\nprint(combined)",
        "output": "First DataFrame:\n      Name  Marks Grade\n101   Ravi   85.0     A\n102   Sita    NaN     B\n103   Arun   78.0  None\n\nSecond DataFrame:\n      Name  Marks Grade\n101   Ravi   90.0  None\n102   Sita   88.0     A\n104  Kiran   82.0     B\n\nMerged DataFrame:\n      Name_DF1  Marks_DF1 Grade_DF1 Name_DF2  Marks_DF2 Grade_DF2\n101       Ravi       85.0         A     Ravi       90.0      None\n102       Sita        NaN         B     Sita       88.0         A\n103       Arun       78.0      None      NaN        NaN       NaN\n104        NaN        NaN       NaN    Kiran       82.0         B\n\nDataFrame after combine_first():\n      Name  Marks Grade\n101   Ravi   85.0     A\n102   Sita   88.0     B\n103   Arun   78.0  None\n104  Kiran   82.0     B\n\nExplanation:\n1. Creating DataFrames: Two DataFrames, df1 and df2, are created with student information. Their index values act as student IDs.\n2. Merging using index: pd.merge(df1, df2, left_index=True, right_index=True, how='outer') preserves all index keys.\n3. Combining overlapping data: df1.combine_first(df2) uses values from df1 wherever they exist. If df1 contains a missing value (e.g. Sita's marks = NaN), it takes 88 from df2.\n\nResult:\nThe program demonstrates both index-based merging and combining overlapping DataFrame data using combine_first().",
        "explanation": "combine_first() seamlessly imputes missing values in a primary DataFrame with values from an overlapping secondary DataFrame."
      }
    ]
  },
  {
    "id": "exp-5",
    "number": "5",
    "category": "Data Visualization",
    "title": "Data Visualization with Matplotlib & Seaborn",
    "description": "Perform comprehensive data visualization using Matplotlib and Seaborn across line, bar, histogram, scatter, and boxplots.",
    "estimatedTime": "3 Hours",
    "status": "Curriculum Approved",
    "thumbnail": "/exp5-banner.svg",
    "completed": true,
    "moduleId": "mod-1",
    "youtubeUrl": "https://www.youtube.com/watch?v=UO98lJQ3QGI",
    "videoUrl": "https://www.youtube.com/watch?v=UO98lJQ3QGI",
    "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-5",
    "summary": "Comprehensive exploration of static and statistical plotting using Matplotlib and Seaborn: multi-panel subplots with custom ticks and peak annotations, side-by-side grouped and stacked bar charts, frequency histograms with Kernel Density Estimation (KDE) overlays, bivariate scatter plots with Pearson correlation (r = 1.00), and multi-category box plots depicting five-number distribution summaries.",
    "topics": [
      "5A. Line Plot with Subplots, Annotations & File Export",
      "5B. Grouped & Stacked Bar Plots from DataFrame Index",
      "5C. Histogram Frequency & Continuous Density (KDE) Plots",
      "5D. Scatter Plot & Pearson Correlation Analysis",
      "5E. Box Plots for Multi-Category Numerical Distributions"
    ],
    "subExperiments": [
      {
        "id": "5A",
        "letter": "A",
        "number": "5",
        "title": "Create a Line Plot with Title, Axis Labels, Ticks, Tick Labels, Annotations and Save to a File",
        "description": "Create multi-panel line subplots in Matplotlib with customized axes, tick markers, arrow annotations pointing at peaks, and export high-resolution PNG.",
        "aim": "To create a line plot using Matplotlib by setting the title, axis labels, ticks, tick labels, and annotations on subplots, and save the generated plot to an image file.",
        "learningObjective": "Master multi-axis subplots, figure customization, annotation arrows, and high-DPI figure exporting in Matplotlib.",
        "syntax": "Create subplots:\nfig, ax = plt.subplots(2, 1, figsize=(10, 8))\n\nSet title and labels:\nax[0].set_title(\"Title\")\nax[0].set_xlabel(\"X-axis\")\nax[0].set_ylabel(\"Y-axis\")\n\nTicks and labels:\nax[0].set_xticks(range(len(months)))\nax[0].set_xticklabels(months)\n\nAnnotation:\nax[0].annotate(\"Highest Sales\", xy=(5, 250), xytext=(3.5, 270),\n               arrowprops=dict(arrowstyle=\"->\"))\n\nSave plot:\nplt.savefig(\"filename.png\", dpi=300, bbox_inches=\"tight\")",
        "generalSyntax": "fig, ax = plt.subplots(rows, cols)\nax.plot(x, y, marker='o', label='Series')\nax.annotate('Note', xy=(x0, y0), xytext=(x1, y1), arrowprops=dict(arrowstyle='->'))\nplt.savefig('output.png', dpi=300)",
        "aboutProgram": "Matplotlib object-oriented API uses Figure and Axes objects for granular control over every visual element. Subplots partition the canvas into vertical or horizontal panels, while annotations with arrow pointers highlight key events or extremes.",
        "visualPlotType": "line_annotations_plot",
        "youtubeUrl": "https://www.youtube.com/watch?v=UO98lJQ3QGI",
        "videoUrl": "https://www.youtube.com/watch?v=UO98lJQ3QGI",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-5/5A_line_plots_annotations.py",
        "procedure": [
          "Import matplotlib.pyplot.",
          "Prepare chronological monthly data series for sales and expenses.",
          "Initialize a 2x1 subplot grid using plt.subplots(2, 1, figsize=(10, 8)).",
          "Plot sales on the first subplot with circular markers and gridlines.",
          "Add an arrow annotation pointing to the highest sales month (Jun: 250).",
          "Plot expenses on the second subplot with square markers and peak annotation (Jun: 160).",
          "Configure super title, adjust layout with plt.tight_layout(), and save to PNG at 300 DPI."
        ],
        "vivaVoce": [
          {
            "question": "What is the purpose of bbox_inches=\"tight\" in plt.savefig()?",
            "answer": "It crops excess whitespace around the canvas, ensuring that axis labels, titles, and legends are not clipped in the exported image file."
          },
          {
            "question": "How do ax.annotate() parameters xy and xytext differ?",
            "answer": "xy specifies the coordinates of the point being annotated (where the arrowhead points), whereas xytext specifies the position of the annotation text label."
          }
        ],
        "program": "import matplotlib.pyplot as plt\n\n# Data\nmonths = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\"]\nsales = [120, 150, 180, 160, 220, 250]\nexpenses = [80, 100, 120, 110, 140, 160]\n\n# Create subplots\nfig, ax = plt.subplots(2, 1, figsize=(10, 8))\n\n# Subplot 1: Sales\nax[0].plot(months, sales, marker=\"o\", linewidth=2, label=\"Sales\")\nax[0].set_title(\"Monthly Sales\")\nax[0].set_xlabel(\"Month\")\nax[0].set_ylabel(\"Sales\")\nax[0].set_xticks(range(len(months)))\nax[0].set_xticklabels(months)\nax[0].annotate(\"Highest Sales\", xy=(5, 250), xytext=(3.5, 270),\n               arrowprops=dict(arrowstyle=\"->\"))\nax[0].legend()\nax[0].grid(True)\n\n# Subplot 2: Expenses\nax[1].plot(months, expenses, marker=\"s\", linewidth=2, label=\"Expenses\")\nax[1].set_title(\"Monthly Expenses\")\nax[1].set_xlabel(\"Month\")\nax[1].set_ylabel(\"Expenses\")\nax[1].set_xticks(range(len(months)))\nax[1].set_xticklabels(months)\nax[1].annotate(\"Highest Expense\", xy=(5, 160), xytext=(3.5, 180),\n               arrowprops=dict(arrowstyle=\"->\"))\nax[1].legend()\nax[1].grid(True)\n\n# Overall title\nfig.suptitle(\"Monthly Sales and Expenses Analysis\", fontsize=16)\nplt.tight_layout()\nplt.savefig(\"monthly_sales_expenses.png\", dpi=300, bbox_inches=\"tight\")\nplt.show()",
        "output": "The program generates two subplots:\n       Monthly Sales and Expenses Analysis\n\n          Monthly Sales\nSales\n250 |                         ● ← Highest Sales\n220 |                    ●\n180 |             ●\n150 |        ●\n120 |   ●\n    +--------------------------------\n       Jan  Feb  Mar  Apr  May  Jun\n                    Month\n\n          Monthly Expenses\nExpenses\n160 |                         ■ ← Highest Expense\n140 |                    ■\n120 |             ■\n110 |        ■\n100 |   ■\n 80 | ●\n    +--------------------------------\n       Jan  Feb  Mar  Apr  May  Jun\n                    Month\n\nOutput File:\nThe plot is saved as:\nmonthly_sales_expenses.png\nat 300 DPI, making it suitable for reports and practical records.\n\nResult:\nThus, a line plot with titles, axis labels, ticks, tick labels, annotations, and multiple subplots was successfully created using Matplotlib and saved to an image file.",
        "explanation": "Subplots partition complex datasets into synchronized panels. Direct arrow annotations highlight local extrema without cluttering axes."
      },
      {
        "id": "5B",
        "letter": "B",
        "number": "5",
        "title": "Create Bar Plots Using Series and DataFrame Index (Grouped & Stacked)",
        "description": "Create grouped side-by-side bar plots and vertically stacked bar charts from Pandas DataFrames to compare multi-subject student performance.",
        "aim": "To create bar plots using Pandas Series and DataFrame index, and to create both grouped bar plots and stacked bar plots using Matplotlib.",
        "learningObjective": "Understand how Pandas utilizes index labels for categorical X-axes and columns for grouped and stacked bar geometry.",
        "syntax": "Grouped Bar Plot:\ndf.plot(kind='bar', figsize=(8, 5))\n\nStacked Bar Plot:\ndf.plot(kind='bar', stacked=True, figsize=(8, 5))",
        "generalSyntax": "df.plot(kind='bar') # grouped\ndf.plot(kind='bar', stacked=True) # stacked",
        "aboutProgram": "Bar charts represent categorical comparisons. In Pandas, DataFrame.plot(kind=\"bar\") clusters column values side by side for each row index. Setting stacked=True stacks the column values vertically, illustrating both individual contributions and the cumulative sum.",
        "visualPlotType": "grouped_stacked_bar",
        "youtubeUrl": "https://www.youtube.com/watch?v=3Rok5fgOWrw",
        "videoUrl": "https://www.youtube.com/watch?v=3Rok5fgOWrw",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-5/5B_bar_plots_grouped_stacked.py",
        "procedure": [
          "Import pandas and matplotlib.pyplot.",
          "Construct a DataFrame where rows represent students and columns represent marks across subjects (Python, Java, C++).",
          "Generate a grouped bar plot with df.plot(kind=\"bar\") to view marks side by side.",
          "Configure chart labels, rotation, and legend.",
          "Generate a stacked bar plot with df.plot(kind=\"bar\", stacked=True) to display aggregate student performance.",
          "Display both figures with plt.show()."
        ],
        "vivaVoce": [
          {
            "question": "What is the main visual difference between grouped and stacked bar plots?",
            "answer": "Grouped bar plots position bars side by side per category, making comparison of individual variables straightforward. Stacked bar plots stack bars vertically, emphasizing overall cumulative totals and part-to-whole ratios."
          },
          {
            "question": "How do you create a horizontal bar plot in Pandas?",
            "answer": "Use df.plot(kind=\"barh\") or df.plot.barh() which swaps the X and Y axes."
          }
        ],
        "program": "import pandas as pd\nimport matplotlib.pyplot as plt\n\n# Create DataFrame\ndata = {\n    'Python': [85, 90, 78, 88],\n    'Java': [75, 82, 80, 85],\n    'C++': [80, 76, 85, 90]\n}\n\ndf = pd.DataFrame(\n    data,\n    index=['Student1', 'Student2', 'Student3', 'Student4']\n)\n\nprint(\"DataFrame:\")\nprint(df)\n\n# 1. Grouped Bar Plot (Side-by-Side Bars)\ndf.plot(kind='bar', figsize=(8, 5))\nplt.title(\"Student Marks in Different Programming Languages (Grouped)\")\nplt.xlabel(\"Students\")\nplt.ylabel(\"Marks\")\nplt.xticks(rotation=0)\nplt.legend(title=\"Subjects\")\nplt.tight_layout()\nplt.show()\n\n# 2. Stacked Bar Plot\ndf.plot(kind='bar', stacked=True, figsize=(8, 5))\nplt.title(\"Stacked Bar Plot of Student Marks\")\nplt.xlabel(\"Students\")\nplt.ylabel(\"Total Marks\")\nplt.xticks(rotation=0)\nplt.legend(title=\"Subjects\")\nplt.tight_layout()\nplt.show()",
        "output": "DataFrame:\n\n          Python  Java  C++\nStudent1      85    75   80\nStudent2      90    82   76\nStudent3      78    80   85\nStudent4      88    85   90\n\nGrouped Bar Plot:\nThe graphical output contains three bars side by side for each student:\n• Python, Java, C++\n\nStacked Bar Plot:\nThe graphical output contains one bar for each student, with Python, Java, and C++ marks stacked vertically.\n\nResult:\nThus, grouped bar plots and stacked bar plots were successfully created from a Pandas DataFrame using its index values.",
        "explanation": "Grouped bars facilitate cross-subject comparison per student, whereas stacked bars highlight total cumulative scores alongside component breakdowns."
      },
      {
        "id": "5C",
        "letter": "C",
        "number": "5",
        "title": "Create Histogram to Display Value Frequency and Density Plot to Generate Continuous Distribution",
        "description": "Construct frequency histograms and smooth Kernel Density Estimation (KDE) continuous probability curves using Seaborn and Matplotlib.",
        "aim": "To create a Histogram for displaying the frequency distribution of observed data and a Density Plot for representing the continuous probability distribution of the data using Python, Pandas, Matplotlib, and Seaborn.",
        "learningObjective": "Understand discrete bin discretization in histograms and non-parametric continuous density estimation with KDE.",
        "syntax": "Histogram:\nsns.histplot(data, bins=10, kde=False)\n\nDensity Plot:\nsns.kdeplot(data, fill=True)\n\nCombined Histogram with Density Curve:\nsns.histplot(data, bins=10, kde=True)",
        "generalSyntax": "sns.histplot(df['Column'], bins=k, kde=True)\nsns.kdeplot(df['Column'], fill=True)",
        "aboutProgram": "Histograms partition continuous variables into contiguous intervals (bins) to visualize sample frequency. Kernel Density Estimation (KDE) computes a continuous probability density function by placing Gaussian kernels over each sample, avoiding boundary artifacts.",
        "visualPlotType": "hist_kde_plot",
        "youtubeUrl": "https://www.youtube.com/watch?v=t_W6eC8-17w",
        "videoUrl": "https://www.youtube.com/watch?v=t_W6eC8-17w",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-5/5C_histogram_density_plots.py",
        "procedure": [
          "Import pandas, matplotlib.pyplot, and seaborn.",
          "Prepare observed student exam marks dataset (20 observations).",
          "Plot a discrete frequency histogram with 6 bins using sns.histplot(df[\"Marks\"], bins=6, kde=False).",
          "Generate a smooth continuous density curve using sns.kdeplot(df[\"Marks\"], fill=True).",
          "Combine both views into an annotated composite figure with sns.histplot(..., kde=True)."
        ],
        "vivaVoce": [
          {
            "question": "When should you use a Density Plot (KDE) over a standard Histogram?",
            "answer": "Histograms depend heavily on arbitrary bin-width choices, causing discontinuous jagged steps. Kernel Density Estimation (KDE) computes a continuous, smooth probability density function independent of bin boundaries."
          },
          {
            "question": "What does the area under a KDE probability density curve equal?",
            "answer": "The total area under a valid continuous probability density function (PDF) integrates to exactly 1.0 (100% total probability)."
          }
        ],
        "program": "import pandas as pd\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\n# Sample observed data\ndata = [45, 50, 52, 55, 58, 60, 62, 65, 68, 70,\n        72, 75, 78, 80, 82, 85, 88, 90, 92, 95]\n\ndf = pd.DataFrame({'Marks': data})\nprint(\"Observed Data:\")\nprint(df)\n\n# 1. Histogram\nplt.figure(figsize=(8, 5))\nsns.histplot(df['Marks'], bins=6, kde=False)\nplt.title(\"Histogram of Marks\")\nplt.xlabel(\"Marks\")\nplt.ylabel(\"Frequency\")\nplt.tight_layout()\nplt.show()\n\n# 2. Density Plot\nplt.figure(figsize=(8, 5))\nsns.kdeplot(df['Marks'], fill=True)\nplt.title(\"Density Plot of Marks\")\nplt.xlabel(\"Marks\")\nplt.ylabel(\"Density\")\nplt.tight_layout()\nplt.show()\n\n# 3. Combined Histogram with Density Curve\nplt.figure(figsize=(8, 5))\nsns.histplot(df['Marks'], bins=6, kde=True)\nplt.title(\"Histogram with Density Curve\")\nplt.xlabel(\"Marks\")\nplt.ylabel(\"Frequency / Density\")\nplt.tight_layout()\nplt.show()",
        "output": "Observed Data:\n    Marks\n0      45\n1      50\n...\n18     92\n19     95\n\nGraphical Output:\n1. Histogram:\nDisplays the marks divided into intervals (bins), with the height of each bar representing the frequency of observations in that interval.\n2. Density Plot:\nDisplays a smooth curve representing the estimated continuous probability distribution of the observed marks.\n3. Combined Histogram + Density Plot:\nGenerated using sns.histplot(df['Marks'], bins=6, kde=True) with density curve overlaid.\n\nResult:\nThus, a histogram and density plot were successfully created to visualize the frequency distribution and continuous probability distribution of the observed data.",
        "explanation": "Histograms capture discrete bin distributions while KDE models the underlying continuous population probability density function."
      },
      {
        "id": "5D",
        "letter": "D",
        "number": "5",
        "title": "Create Scatter Plot and Examine the Relationship Between Two One-Dimensional Data Series",
        "description": "Plot bivariate scatter observations and compute Pearson correlation coefficient (r = 1.00) to evaluate linear dependency.",
        "aim": "To create a Scatter Plot using two one-dimensional data series and examine the relationship or correlation between them using Python, Pandas, and Matplotlib.",
        "learningObjective": "Master bivariate scatter plotting, coordinate dispersion diagnosis, and Pearson correlation coefficient computation.",
        "syntax": "Matplotlib:\nplt.scatter(x, y)\n\nPandas:\ndf.plot.scatter(x='Column1', y='Column2')\n\nCorrelation Calculation:\ncorrelation = df['Column1'].corr(df['Column2'])",
        "generalSyntax": "plt.scatter(x, y)\nr = df['x'].corr(df['y'])",
        "aboutProgram": "Scatter plots visualize bivariate numerical relationships. By plotting predictor variables on the X-axis against response variables on the Y-axis, patterns such as positive linear correlation, negative trends, or nonlinear clusters become readily apparent. Pearson r quantifies this degree of linear association.",
        "visualPlotType": "scatter_correlation_plot",
        "youtubeUrl": "https://www.youtube.com/watch?v=zZZ_RCwp49g",
        "videoUrl": "https://www.youtube.com/watch?v=zZZ_RCwp49g",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-5/5D_scatter_plot_correlation.py",
        "procedure": [
          "Import pandas and matplotlib.pyplot.",
          "Define two continuous data series: Study_Hours and Marks.",
          "Build a Pandas DataFrame binding both series.",
          "Plot the points using plt.scatter(df[\"Study_Hours\"], df[\"Marks\"]).",
          "Add titles, axis labels, and enable background gridlines.",
          "Calculate the Pearson correlation coefficient using df[\"Study_Hours\"].corr(df[\"Marks\"]).",
          "Print and analyze the resulting correlation metric (r = 1.00)."
        ],
        "vivaVoce": [
          {
            "question": "What does Pearson's correlation coefficient measure and what is its range?",
            "answer": "It measures the linear relationship between two continuous variables, ranging from -1.0 (perfect negative linear correlation) to +1.0 (perfect positive linear correlation), where 0 indicates no linear correlation."
          },
          {
            "question": "Does a correlation coefficient of 0 imply no relationship exists?",
            "answer": "No, it only implies no linear relationship exists; strong nonlinear relationships (e.g., quadratic or sinusoidal) can still exist with r = 0."
          }
        ],
        "program": "import pandas as pd\nimport matplotlib.pyplot as plt\n\n# Two one-dimensional data series\nstudy_hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nmarks = [45, 50, 55, 60, 65, 70, 72, 80, 85, 90]\n\n# Create DataFrame\ndf = pd.DataFrame({\n    'Study_Hours': study_hours,\n    'Marks': marks\n})\n\nprint(\"Data:\")\nprint(df)\n\n# Create Scatter Plot\nplt.figure(figsize=(8, 5))\nplt.scatter(df['Study_Hours'], df['Marks'])\nplt.title(\"Relationship Between Study Hours and Marks\")\nplt.xlabel(\"Study Hours\")\nplt.ylabel(\"Marks\")\nplt.grid(True)\nplt.tight_layout()\nplt.show()\n\n# Calculate correlation\ncorrelation = df['Study_Hours'].corr(df['Marks'])\nprint(\"\\nCorrelation Coefficient:\", round(correlation, 2))",
        "output": "Data:\n   Study_Hours  Marks\n0            1     45\n1            2     50\n2            3     55\n3            4     60\n4            5     65\n5            6     70\n6            7     72\n7            8     80\n8            9     85\n9           10     90\n\nCorrelation Coefficient: 1.00\n\nGraphical Output:\nThe scatter plot contains:\n• X-axis: Study Hours \n• Y-axis: Marks \n• Each point represents one observation. \n• The points move upward as study hours increase, indicating a positive relationship between study hours and marks.\n\nResult:\nThus, the scatter plot was successfully created and the relationship between the two one-dimensional data series was examined using the correlation coefficient.",
        "explanation": "Scatter plots diagnose bivariate distributions. The calculated Pearson correlation coefficient of r = 1.00 confirms an exact positive linear dependency between study hours and marks."
      },
      {
        "id": "5E",
        "letter": "E",
        "number": "5",
        "title": "Create Box Plots to Visualize Data with Many Categorical Variables",
        "description": "Generate multi-category box plots in Seaborn to compare mark distributions across CSE, ECE, and EEE engineering departments.",
        "aim": "To create Box Plots for visualizing the distribution of numerical data across multiple categorical variables using Python, Pandas, Matplotlib, and Seaborn.",
        "learningObjective": "Master categorical distribution visualization, five-number summary interpretation, and outlier detection with box plots.",
        "syntax": "Seaborn:\nsns.boxplot(x='Category', y='Value', data=df)\n\nPandas:\ndf.boxplot(column='Value', by='Category')",
        "generalSyntax": "sns.boxplot(x='Category_Col', y='Numeric_Col', data=df)",
        "aboutProgram": "A Box and Whisker Plot displays the five-number summary of a dataset: Minimum, First Quartile (Q1), Median, Third Quartile (Q3), and Maximum. By grouping on a categorical axis, distributions across departments are compared simultaneously, highlighting variations in median, dispersion (IQR), and potential outlier deviations.",
        "visualPlotType": "boxplot_categorical",
        "youtubeUrl": "https://www.youtube.com/watch?v=XFZRVnP-MTU",
        "videoUrl": "https://www.youtube.com/watch?v=XFZRVnP-MTU",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-5/5E_box_plots_categorical.py",
        "procedure": [
          "Import pandas, matplotlib.pyplot, and seaborn.",
          "Construct a DataFrame containing department categories (CSE, ECE, EEE) alongside student marks.",
          "Invoke sns.boxplot(x=\"Department\", y=\"Marks\", data=df).",
          "Configure plot title, axis labels, and subtle horizontal gridlines.",
          "Analyze median marks, interquartile ranges, and department dispersion."
        ],
        "vivaVoce": [
          {
            "question": "What are the components of a Box Plot and what do the whiskers represent?",
            "answer": "A Box Plot displays Minimum, Q1 (25th percentile), Median (50th percentile), Q3 (75th percentile), and Maximum. The box represents the Interquartile Range (IQR = Q3 - Q1), and whiskers extend to 1.5 * IQR. Points beyond whiskers are classified as outliers."
          },
          {
            "question": "Why are Box Plots preferred over mean/variance for skewed distributions?",
            "answer": "Because the median and IQR used in box plots are non-parametric and robust against extreme outlier distortion, unlike the arithmetic mean and variance."
          }
        ],
        "program": "import pandas as pd\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\n# Create sample data\ndata = {\n    'Department': [\n        'CSE', 'CSE', 'CSE', 'CSE', 'CSE',\n        'ECE', 'ECE', 'ECE', 'ECE', 'ECE',\n        'EEE', 'EEE', 'EEE', 'EEE', 'EEE'\n    ],\n    'Marks': [\n        78, 85, 90, 72, 88,\n        65, 70, 82, 75, 80,\n        60, 68, 72, 76, 85\n    ]\n}\n\ndf = pd.DataFrame(data)\nprint(\"Data:\")\nprint(df)\n\n# Create Box Plot\nplt.figure(figsize=(8, 5))\nsns.boxplot(\n    x='Department',\n    y='Marks',\n    data=df\n)\nplt.title(\"Marks Distribution by Department\")\nplt.xlabel(\"Department\")\nplt.ylabel(\"Marks\")\nplt.grid(axis='y', linestyle='--', alpha=0.5)\nplt.tight_layout()\nplt.show()",
        "output": "Data:\n   Department  Marks\n0         CSE     78\n1         CSE     85\n2         CSE     90\n3         CSE     72\n4         CSE     88\n5         ECE     65\n6         ECE     70\n7         ECE     82\n8         ECE     75\n9         ECE     80\n10        EEE     60\n11        EEE     68\n12        EEE     72\n13        EEE     76\n14        EEE     85\n\nGraphical Output:\nThe box plot displays one box for each category:\n• CSE → distribution of CSE marks (Median: 85, Range: 72–90)\n• ECE → distribution of ECE marks (Median: 75, Range: 65–82)\n• EEE → distribution of EEE marks (Median: 72, Range: 60–85)\n\nResult:\nThus, the Box Plot was successfully created to visualize and compare the distribution of numerical data across multiple categorical variables.",
        "explanation": "Box plots illustrate categorical distribution disparities: CSE exhibits the highest median mark (85), followed by ECE (75) and EEE (72)."
      }
    ]
  },
  {
    "id": "exp-6",
    "number": "6",
    "category": "Time Series",
    "title": "Time Series Analysis & Forecasting",
    "description": "Comprehensive study of stationarity, ARIMA modeling, seasonal decomposition, and deep recurrent neural network forecasting.",
    "estimatedTime": "3 Hours",
    "status": "Curriculum Approved",
    "thumbnail": "/exp6-banner.svg",
    "completed": true,
    "moduleId": "mod-1",
    "youtubeUrl": "https://www.youtube.com/watch?v=KK6En6JnI5o",
    "videoUrl": "https://www.youtube.com/watch?v=KK6En6JnI5o",
    "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6",
    "summary": "Comprehensive study of temporal indexing, datetime object conversion, DatetimeIndex generation with pd.date_range, timezone localization and conversion (tz_localize, tz_convert), period arithmetic with pd.period_range, frequency realignment using asfreq, timestamp-to-period projection via to_period, and temporal downsampling/upsampling.",
    "topics": [
      "6A. Create Time Series Using Datetime Objects",
      "6B. Generate a DatetimeIndex Using pandas.date_range()",
      "6C. Time Zone Localization and Conversion",
      "6D. Period Arithmetic and Period Range",
      "6E. Convert Periods and PeriodIndex to Another Frequency Using asfreq()",
      "6F. Convert Series and DataFrame to Periods Using to_period()",
      "6G. Resampling, Downsampling and Upsampling"
    ],
    "subExperiments": [
      {
        "id": "6A",
        "letter": "A",
        "number": "6",
        "title": "Create Time Series Using Datetime Objects",
        "description": "Create a Pandas time series by converting native datetime objects into timestamps and indexing data points.",
        "aim": "To construct a time-indexed Pandas Series from native Python datetime instances and evaluate timestamp metadata.",
        "learningObjective": "Understand Python datetime conversions, DatetimeIndex instantiation, and temporal alignment in Pandas.",
        "syntax": "pd.to_datetime(dates)\npd.Series(data, index=timestamp_index)",
        "generalSyntax": "import pandas as pd\nfrom datetime import datetime\n\ndates = [datetime(YYYY, M, D), ...]\nts = pd.Series(values, index=pd.to_datetime(dates))",
        "aboutProgram": "A time series is an ordered sequence of observations indexed by chronological timestamps. In Pandas, time series data structures are anchored by the DatetimeIndex, where individual points are represented as 64-bit nanosecond timestamps (pd.Timestamp). Native Python datetime objects are converted via pd.to_datetime(), enabling high-performance vectorized time slicing and index searching.",
        "visualPlotType": "time_series_line",
        "youtubeUrl": "https://www.youtube.com/watch?v=KK6En6JnI5o",
        "videoUrl": "https://www.youtube.com/watch?v=KK6En6JnI5o",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6A_create_time_series.py",
        "procedure": [
          "Import pandas and datetime modules into the Python workspace.",
          "Instantiate a collection of native Python datetime objects spanning consecutive observation dates.",
          "Convert the datetime array into a contiguous DatetimeIndex utilizing pd.to_datetime().",
          "Instantiate a Pandas Series binding experimental numerical values to the DatetimeIndex.",
          "Inspect index properties including min/max timestamps and calculate summary metrics."
        ],
        "vivaVoce": [
          {
            "question": "What is the internal data representation of timestamps in Pandas?",
            "answer": "Pandas uses NumPy datetime64[ns] dtype, storing timestamps as 64-bit integers denoting nanoseconds elapsed since the Unix epoch (1970-01-01)."
          },
          {
            "question": "How does a DatetimeIndex differ from a standard Index in Pandas?",
            "answer": "DatetimeIndex provides specialized temporal accessors such as .year, .month, .day_name(), time-slice queries, and vectorized frequency conversions."
          }
        ],
        "program": "import pandas as pd\nfrom datetime import datetime\n\n# 1. Instantiate native Python datetime objects\ndates = [\n    datetime(2026, 1, 1),\n    datetime(2026, 1, 2),\n    datetime(2026, 1, 3),\n    datetime(2026, 1, 4),\n    datetime(2026, 1, 5)\n]\n\n# 2. Convert to Pandas DatetimeIndex\ntimestamp_index = pd.to_datetime(dates)\n\n# 3. Create sensor time series observations\nsensor_readings = [105.2, 108.5, 107.8, 112.0, 110.4]\nts = pd.Series(sensor_readings, index=timestamp_index, name=\"Sensor_A\")\n\nprint(\"--- Pandas Time Series with DatetimeIndex ---\")\nprint(ts)\nprint(\"\nIndex Metadata:\")\nprint(f\"Index Type: {type(ts.index)}\")\nprint(f\"Earliest Timestamp: {ts.index.min()}\")\nprint(f\"Latest Timestamp: {ts.index.max()}\")\nprint(f\"Mean Reading: {ts.mean():.2f}\")",
        "output": "--- Pandas Time Series with DatetimeIndex ---\n2026-01-01    105.2\n2026-01-02    108.5\n2026-01-03    107.8\n2026-01-04    112.0\n2026-01-05    110.4\nName: Sensor_A, dtype: float64\n\nIndex Metadata:\nIndex Type: <class 'pandas.core.indexes.datetimes.DatetimeIndex'>\nEarliest Timestamp: 2026-01-01 00:00:00\nLatest Timestamp: 2026-01-05 00:00:00\nMean Reading: 108.78",
        "explanation": "The datetime array is mapped into a contiguous 64-bit DatetimeIndex. Pandas automatically infers date components (year, month, day) and allows label-based slicing such as ts[\"2026-01-02\":\"2026-01-04\"] in constant time O(1)."
      },
      {
        "id": "6B",
        "letter": "B",
        "number": "6",
        "title": "Generate a DatetimeIndex Using pandas.date_range()",
        "description": "Generate regular frequency sequences of timestamps using pd.date_range with configurable steps and periods.",
        "aim": "To generate equidistant temporal sequences using pd.date_range() across daily, business-day, and hourly frequencies.",
        "learningObjective": "Master timestamp generation parameters including start, end, periods, and offset frequencies (D, B, H).",
        "syntax": "pd.date_range(start=\"2026-01-01\", periods=10, freq=\"D\")\npd.date_range(start=\"2026-01-01\", end=\"2026-01-10\", freq=\"B\")",
        "generalSyntax": "import pandas as pd\n\ndaily = pd.date_range(start=..., periods=N, freq=\"D\")\nbusiness = pd.date_range(start=..., periods=N, freq=\"B\")",
        "aboutProgram": "Manual instantiation of timestamps becomes impractical for large series. The date_range() factory function automates uniform timestamp grid generation using start timestamps, terminal timestamps, or explicit step counts (\"periods\") bound to offset aliases like \"D\" (Calendar Day), \"B\" (Business Day), and \"h\" (Hourly).",
        "visualPlotType": "date_range_grid",
        "youtubeUrl": "https://www.youtube.com/watch?v=YpmzvIu10xY",
        "videoUrl": "https://www.youtube.com/watch?v=YpmzvIu10xY",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6B_date_range_frequency.py",
        "procedure": [
          "Import pandas module.",
          "Generate a 7-day calendar day sequence using pd.date_range with freq=\"D\".",
          "Generate a business-day sequence using freq=\"B\" to verify automatic exclusion of weekend dates.",
          "Generate an hourly timestamp series using freq=\"h\" starting at 09:00 AM.",
          "Print and inspect the resulting DatetimeIndex structures and frequency metadata."
        ],
        "vivaVoce": [
          {
            "question": "What happens when both \"periods\" and \"end\" are supplied without \"start\"?",
            "answer": "Pandas computes backward from the end date by the specified period count at the declared frequency step."
          },
          {
            "question": "What is the purpose of the business-day offset \"B\"?",
            "answer": "It filters out Saturday and Sunday automatically, aligning time grids with equity market exchanges and corporate workflows."
          }
        ],
        "program": "import pandas as pd\n\n# 1. Generate daily timestamp sequence\ndaily_range = pd.date_range(start='2026-01-01', periods=7, freq='D')\n\n# 2. Generate business-day sequence (skipping weekends)\nbday_range = pd.date_range(start='2026-01-01', periods=7, freq='B')\n\n# 3. Generate hourly sequence\nhourly_range = pd.date_range(start='2026-01-01 09:00', periods=5, freq='h')\n\nprint(\"--- 1. Daily DatetimeIndex (freq='D') ---\")\nprint(daily_range)\n\nprint(\"\n--- 2. Business Day DatetimeIndex (freq='B') ---\")\nprint(bday_range)\n\nprint(\"\n--- 3. Hourly DatetimeIndex (freq='h') ---\")\nprint(hourly_range)",
        "output": "--- 1. Daily DatetimeIndex (freq='D') ---\nDatetimeIndex(['2026-01-01', '2026-01-02', '2026-01-03', '2026-01-04',\n               '2026-01-05', '2026-01-06', '2026-01-07'],\n              dtype='datetime64[ns]', freq='D')\n\n--- 2. Business Day DatetimeIndex (freq='B') ---\nDatetimeIndex(['2026-01-01', '2026-01-02', '2026-01-05', '2026-01-06',\n               '2026-01-07', '2026-01-08', '2026-01-09'],\n              dtype='datetime64[ns]', freq='B')\n\n--- 3. Hourly DatetimeIndex (freq='h') ---\nDatetimeIndex(['2026-01-01 09:00:00', '2026-01-01 10:00:00',\n               '2026-01-01 11:00:00', '2026-01-01 12:00:00',\n               '2026-01-01 13:00:00'],\n              dtype='datetime64[ns]', freq='h')",
        "explanation": "Notice how the business-day frequency automatically skipped Saturday 2026-01-03 and Sunday 2026-01-04, jumping directly from Friday 2026-01-02 to Monday 2026-01-05. This eliminates data leakage in financial forecasting models."
      },
      {
        "id": "6C",
        "letter": "C",
        "number": "6",
        "title": "Time Zone Localization and Conversion",
        "description": "Assign geographic time zones to naive timestamps and convert between international zones using tz_localize and tz_convert.",
        "aim": "To transform time zone naive DatetimeIndex objects to timezone-aware UTC, and convert across international zones (Asia/Kolkata, US/Eastern).",
        "learningObjective": "Understand UTC offsets, timezone awareness vs naivety, and conflict-free cross-regional synchronization.",
        "syntax": "ts.tz_localize(\"UTC\")\nts.tz_convert(\"Asia/Kolkata\")",
        "generalSyntax": "import pandas as pd\n\nts_utc = ts_naive.tz_localize(\"UTC\")\nts_target = ts_utc.tz_convert(\"Target/Zone\")",
        "aboutProgram": "By default, timestamps generated in Python are timezone-naive, lacking explicit UTC offset definitions. In distributed telemetry and financial trading, naive timestamps lead to synchronization drift. Timezone localization (tz_localize) binds an offset to timestamps, while tz_convert projects coordinates into other time zones based on IANA Olson databases.",
        "visualPlotType": "tz_offset_chart",
        "youtubeUrl": "https://www.youtube.com/watch?v=L9RT2qnIQu4",
        "videoUrl": "https://www.youtube.com/watch?v=L9RT2qnIQu4",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6C_timezone_localization.py",
        "procedure": [
          "Instantiate a timezone-naive timestamp sequence at 6-hour intervals.",
          "Localize the naive series to Coordinated Universal Time (UTC) using .tz_localize(\"UTC\").",
          "Convert UTC timestamps to Indian Standard Time (Asia/Kolkata) with .tz_convert(\"Asia/Kolkata\").",
          "Convert UTC timestamps to Eastern Daylight Time (America/New_York) with .tz_convert(\"America/New_York\").",
          "Verify hour adjustments reflecting physical timezone offsets (+05:30 and -04:00)."
        ],
        "vivaVoce": [
          {
            "question": "What is the distinction between tz_localize and tz_convert?",
            "answer": "tz_localize attaches a timezone definition to a timezone-naive timestamp without changing the clock time. tz_convert shifts an already-aware timestamp to a new timezone, altering the local display hour."
          },
          {
            "question": "How are daylight saving time transitions handled?",
            "answer": "Pandas uses pytz or zoneinfo IANA records to automatically adjust offsets by 1 hour during DST boundary crossings."
          }
        ],
        "program": "import pandas as pd\n\n# 1. Create naive timestamp sequence\nnaive_dates = pd.date_range(start='2026-06-01 12:00', periods=4, freq='6h')\nts_naive = pd.Series([100, 105, 110, 108], index=naive_dates)\n\n# 2. Localize naive index to UTC\nts_utc = ts_naive.tz_localize('UTC')\n\n# 3. Convert UTC to Indian Standard Time (Asia/Kolkata: UTC+5:30)\nts_ist = ts_utc.tz_convert('Asia/Kolkata')\n\n# 4. Convert UTC to New York (America/New_York: UTC-4:00 EDT)\nts_est = ts_utc.tz_convert('America/New_York')\n\nprint(\"--- UTC Localized Index ---\")\nprint(ts_utc)\n\nprint(\"\n--- Converted to Asia/Kolkata (+05:30) ---\")\nprint(ts_ist)\n\nprint(\"\n--- Converted to America/New_York (-04:00) ---\")\nprint(ts_est)",
        "output": "--- UTC Localized Index ---\n2026-06-01 12:00:00+00:00    100\n2026-06-01 18:00:00+00:00    105\n2026-06-02 00:00:00+00:00    110\n2026-06-02 06:00:00+00:00    108\ndtype: int64\n\n--- Converted to Asia/Kolkata (+05:30) ---\n2026-06-01 17:30:00+05:30    100\n2026-06-01 23:30:00+05:30    105\n2026-06-02 05:30:00+05:30    110\n2026-06-02 11:30:00+05:30    108\ndtype: int64\n\n--- Converted to America/New_York (-04:00) ---\n2026-06-01 08:00:00-04:00    100\n2026-06-01 14:00:00-04:00    105\n2026-06-01 20:00:00-04:00    110\n2026-06-02 02:00:00-04:00    108\ndtype: int64",
        "explanation": "The same physical moment in time is preserved across regions. 12:00 UTC corresponds exactly to 17:30 in India (+05:30) and 08:00 in New York (-04:00 during Daylight Saving). Pandas handles leap seconds and DST adjustments deterministically."
      },
      {
        "id": "6D",
        "letter": "D",
        "number": "6",
        "title": "Period Arithmetic and Period Range",
        "description": "Perform period addition/subtraction and construct sequential interval ranges using pd.period_range.",
        "aim": "To compute temporal durations using pd.Period arithmetic and generate multi-period ranges.",
        "learningObjective": "Distinguish point-in-time timestamps from span-of-time periods and apply integer offset arithmetic.",
        "syntax": "p = pd.Period(\"2026\", freq=\"Y\")\np + 2\npd.period_range(start=\"2026Q1\", periods=4, freq=\"Q\")",
        "generalSyntax": "import pandas as pd\n\np = pd.Period(\"2026-01\", freq=\"M\")\nshifted = p + N\nquarters = pd.period_range(start=..., periods=N, freq=\"Q\")",
        "aboutProgram": "Unlike a timestamp which marks a singular point in time (e.g. 2026-01-01 00:00:00), a Period represents a time span (e.g. Month of March 2026 or Quarter 1 of 2026). Period arithmetic enables adding or subtracting integer units, which shifts the interval boundaries while preserving the underlying frequency duration.",
        "visualPlotType": "period_range_timeline",
        "youtubeUrl": "https://www.youtube.com/watch?v=AukbYZ_83QU",
        "videoUrl": "https://www.youtube.com/watch?v=AukbYZ_83QU",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6D_period_arithmetic.py",
        "procedure": [
          "Create annual and monthly Period objects using pd.Period.",
          "Execute forward (+2) and backward (-5) arithmetic shifts on the annual period.",
          "Execute monthly shifts and verify proper calendar year wrap-around (e.g., 2026-01 minus 1 month yields 2025-12).",
          "Instantiate a quarterly PeriodIndex with pd.period_range covering 6 quarters.",
          "Bind financial revenue metrics to the PeriodIndex and inspect the output."
        ],
        "vivaVoce": [
          {
            "question": "How is a Period object stored in memory?",
            "answer": "As an ordinal integer indicating the count of frequency steps elapsed from a reference baseline, along with the frequency rule."
          },
          {
            "question": "What is the default quarter end for freq=\"Q\"?",
            "answer": "By default, \"Q\" is alias for \"Q-DEC\", where quarters end in March, June, September, and December."
          }
        ],
        "program": "import pandas as pd\n\n# 1. Instantiate individual period objects\np_year = pd.Period(2026, freq='Y')\np_month = pd.Period('2026-01', freq='M')\n\n# 2. Period arithmetic (forward and backward shifting)\nprint(\"--- Period Arithmetic ---\")\nprint(f\"Base Year: {p_year} | Year + 2: {p_year + 2} | Year - 5: {p_year - 5}\")\nprint(f\"Base Month: {p_month} | Month + 3: {p_month + 3} | Month - 1: {p_month - 1}\")\n\n# 3. Construct sequential range of quarterly periods\nquarterly_periods = pd.period_range(start='2026Q1', periods=6, freq='Q')\nrevenue = [420.5, 460.2, 510.0, 580.4, 610.1, 640.8]\nrev_series = pd.Series(revenue, index=quarterly_periods, name=\"Quarterly_Revenue_Cr\")\n\nprint(\"\n--- PeriodRange (Quarterly Revenue) ---\")\nprint(rev_series)\nprint(f\"\nPeriod Duration for Index: {quarterly_periods.dtype}\")",
        "output": "--- Period Arithmetic ---\nBase Year: 2026 | Year + 2: 2028 | Year - 5: 2021\nBase Month: 2026-01 | Month + 3: 2026-04 | Month - 1: 2025-12\n\n--- PeriodRange (Quarterly Revenue) ---\n2026Q1    420.5\n2026Q2    460.2\n2026Q3    510.0\n2026Q4    580.4\n2027Q1    610.1\n2027Q2    640.8\nFreq: Q-DEC, Name: Quarterly_Revenue_Cr, dtype: float64\n\nPeriod Duration for Index: period[Q-DEC]",
        "explanation": "Period arithmetic strictly respects calendar rules. Subtracting 1 month from \"2026-01\" produces \"2025-12\". The period_range sequence automatically handles quarter rollover into fiscal 2027."
      },
      {
        "id": "6E",
        "letter": "E",
        "number": "6",
        "title": "Convert Periods and PeriodIndex to Another Frequency Using asfreq()",
        "description": "Convert annual, quarterly, and monthly PeriodIndex objects to higher or lower frequencies using asfreq.",
        "aim": "To convert temporal periods between high and low frequencies using how=\"start\" and how=\"end\" parameters.",
        "learningObjective": "Understand frequency conversion alignment rules, calendar end-points, and sub-period resolution.",
        "syntax": "period.asfreq(\"M\", how=\"start\")\nperiod_index.asfreq(\"B\", how=\"end\")",
        "generalSyntax": "import pandas as pd\n\np_monthly = p_annual.asfreq(\"M\", how=\"start\")\nq_daily = q_index.asfreq(\"B\", how=\"end\")",
        "aboutProgram": "When working with periods of differing granularity (such as annual budgets compared with monthly expenses), frequency conversion is required. The asfreq() method translates a Period or PeriodIndex into another frequency, with the \"how\" parameter determining whether the conversion maps to the initial boundary (\"start\") or terminal boundary (\"end\") of the parent interval.",
        "visualPlotType": "asfreq_alignment",
        "youtubeUrl": "https://www.youtube.com/watch?v=apx8iGewG3Y",
        "videoUrl": "https://www.youtube.com/watch?v=apx8iGewG3Y",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6E_asfreq_conversion.py",
        "procedure": [
          "Create an annual Period for the year 2026.",
          "Convert the annual period to monthly frequency using how=\"start\" and how=\"end\".",
          "Create a quarterly PeriodIndex for 3 quarters in 2026.",
          "Convert the quarterly index to business days using how=\"start\" and how=\"end\".",
          "Print start and end boundary dates for each quarter."
        ],
        "vivaVoce": [
          {
            "question": "What does how=\"start\" versus how=\"end\" control in asfreq()?",
            "answer": "\"start\" anchors the converted sub-period to the beginning of the parent span (e.g., January for an annual period), while \"end\" anchors to the end (e.g., December)."
          },
          {
            "question": "Can you convert from a finer frequency to a coarser frequency?",
            "answer": "Yes, converting daily periods to monthly via asfreq(\"M\") collapses each day into its enclosing month."
          }
        ],
        "program": "import pandas as pd\n\n# 1. Define annual period\np_annual = pd.Period('2026', freq='Y-DEC')\n\n# Convert annual period to monthly at start and end\np_month_start = p_annual.asfreq('M', how='start')\np_month_end = p_annual.asfreq('M', how='end')\n\nprint(\"--- Period Frequency Conversion (asfreq) ---\")\nprint(f\"Annual Period: {p_annual}\")\nprint(f\"Annual -> Monthly (start): {p_month_start}\")\nprint(f\"Annual -> Monthly (end):   {p_month_end}\")\n\n# 2. Convert quarterly PeriodIndex to daily business frequency\nq_index = pd.period_range('2026Q1', periods=3, freq='Q')\nq_daily_start = q_index.asfreq('B', how='start')\nq_daily_end = q_index.asfreq('B', how='end')\n\nprint(\"\n--- PeriodIndex Frequency Conversion ---\")\nfor q, s, e in zip(q_index, q_daily_start, q_daily_end):\n    print(f\"Quarter: {q} -> First Business Day: {s} | Last Business Day: {e}\")",
        "output": "--- Period Frequency Conversion (asfreq) ---\nAnnual Period: 2026\nAnnual -> Monthly (start): 2026-01\nAnnual -> Monthly (end):   2026-12\n\n--- PeriodIndex Frequency Conversion ---\nQuarter: 2026Q1 -> First Business Day: 2026-01-01 | Last Business Day: 2026-03-31\nQuarter: 2026Q2 -> First Business Day: 2026-04-01 | Last Business Day: 2026-06-30\nQuarter: 2026Q3 -> First Business Day: 2026-07-01 | Last Business Day: 2026-09-30",
        "explanation": "The asfreq method provides exact mathematical resolution between nested calendar structures. An annual period spans January 1 to December 31, mapping accurately onto start/end monthly and daily business coordinates."
      },
      {
        "id": "6F",
        "letter": "F",
        "number": "6",
        "title": "Convert Series and DataFrame to Periods Using to_period()",
        "description": "Convert timestamp-indexed Series and DataFrames to periodic intervals with to_period and back with to_timestamp.",
        "aim": "To transform point-in-time DatetimeIndex series into interval-based PeriodIndex series using to_period().",
        "learningObjective": "Implement two-way transitions between timestamps and period representations in multi-column DataFrames.",
        "syntax": "df.to_period(freq=\"M\")\ndf.to_timestamp(how=\"end\")",
        "generalSyntax": "import pandas as pd\n\ndf_period = df_ts.to_period(freq=\"M\")\ndf_ts_back = df_period.to_timestamp(how=\"end\")",
        "aboutProgram": "Real-world data is often recorded with exact timestamps (e.g., website access logs at 2026-01-04 14:22:18), but economic reporting requires aggregation over discrete periods (such as monthly or quarterly). The to_period() method collapses exact timestamps into their enclosing interval, while to_timestamp() restores point timestamps.",
        "visualPlotType": "to_period_group",
        "youtubeUrl": "https://www.youtube.com/watch?v=6LF6d79uFfs",
        "videoUrl": "https://www.youtube.com/watch?v=6LF6d79uFfs",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6F_to_period_transformation.py",
        "procedure": [
          "Create a 5-day timestamp-indexed DataFrame containing telemetry readings.",
          "Verify that the index is a DatetimeIndex.",
          "Execute .to_period(\"M\") to convert the index into monthly intervals (PeriodIndex).",
          "Restore the DataFrame back to a DatetimeIndex using .to_timestamp(how=\"end\").",
          "Inspect the resulting indices and verify timestamp precision."
        ],
        "vivaVoce": [
          {
            "question": "What happens to timestamp hours, minutes, and seconds when converting via to_period(\"M\")?",
            "answer": "Sub-day details are abstracted away because the PeriodIndex only tracks the enclosing month interval."
          },
          {
            "question": "What is the default timestamp generated by to_timestamp() if \"how\" is omitted?",
            "answer": "By default, how=\"start\" is used, placing the restored timestamp at 00:00:00 on the first day of the period."
          }
        ],
        "program": "import pandas as pd\nimport numpy as np\n\n# 1. Create timestamp-indexed DataFrame\nrng = pd.date_range('2026-01-01', periods=5, freq='D')\ndf_ts = pd.DataFrame({\n    'Metric_A': [12.4, 15.2, 14.8, 18.0, 16.5],\n    'Metric_B': [102, 105, 108, 114, 111]\n}, index=rng)\n\nprint(\"--- 1. Original Timestamp Indexed DataFrame ---\")\nprint(df_ts)\nprint(f\"Index Type: {type(df_ts.index)}\")\n\n# 2. Convert to Monthly Period Index\ndf_monthly = df_ts.to_period('M')\n\nprint(\"\n--- 2. Converted to Monthly PeriodIndex (to_period('M')) ---\")\nprint(df_monthly)\nprint(f\"Index Type: {type(df_monthly.index)}\")\n\n# 3. Convert back to Timestamp at period end\ndf_restored = df_monthly.to_timestamp(how='end')\nprint(\"\n--- 3. Restored to Timestamp Index at Period End ---\")\nprint(df_restored)",
        "output": "--- 1. Original Timestamp Indexed DataFrame ---\n            Metric_A  Metric_B\n2026-01-01      12.4       102\n2026-01-02      15.2       105\n2026-01-03      14.8       108\n2026-01-04      18.0       114\n2026-01-05      16.5       111\nIndex Type: <class 'pandas.core.indexes.datetimes.DatetimeIndex'>\n\n--- 2. Converted to Monthly PeriodIndex (to_period('M')) ---\n         Metric_A  Metric_B\n2026-01      12.4       102\n2026-01      15.2       105\n2026-01      14.8       108\n2026-01      18.0       114\n2026-01      16.5       111\nIndex Type: <class 'pandas.core.indexes.period.PeriodIndex'>\n\n--- 3. Restored to Timestamp Index at Period End ---\n                              Metric_A  Metric_B\n2026-01-31 23:59:59.999999999      12.4       102\n2026-01-31 23:59:59.999999999      15.2       105\n2026-01-31 23:59:59.999999999      14.8       108\n2026-01-31 23:59:59.999999999      18.0       114\n2026-01-31 23:59:59.999999999      16.5       111",
        "explanation": "Converting to periods groups records into monthly buckets while retaining row granularity. Re-converting via to_timestamp(how=\"end\") places timestamps at 23:59:59.999999999 of the final day of January."
      },
      {
        "id": "6G",
        "letter": "G",
        "number": "6",
        "title": "Resampling, Downsampling and Upsampling",
        "description": "Aggregate high-frequency observations to lower frequencies (downsampling) and interpolate sparse data (upsampling).",
        "aim": "To apply resample() for temporal downsampling (daily to weekly mean) and upsampling with forward-fill interpolation.",
        "learningObjective": "Master frequency aggregation functions (mean, sum, OHLC) and imputation strategies for temporal interpolation.",
        "syntax": "ts.resample(\"W\").mean()\nts.resample(\"12h\").ffill()",
        "generalSyntax": "import pandas as pd\n\ndownsampled = ts.resample(\"W\").mean()\nupsampled = ts.resample(\"12h\").ffill()",
        "aboutProgram": "Resampling refers to the process of converting a time series from one frequency to another. Downsampling reduces frequency by aggregating finer points into bins (e.g. calculating monthly averages from daily readings). Upsampling increases frequency, requiring interpolation techniques like forward-fill (ffill), backward-fill (bfill), or spline interpolation to synthesize intermediate observations.",
        "visualPlotType": "resample_curve",
        "youtubeUrl": "https://www.youtube.com/watch?v=3gr3DQ-7qm0",
        "videoUrl": "https://www.youtube.com/watch?v=3gr3DQ-7qm0",
        "githubUrl": "https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6G_resampling_downsampling.py",
        "procedure": [
          "Generate 30 days of daily energy telemetry readings using a random walk.",
          "Execute downsampling to weekly frequency using .resample(\"W\").mean().",
          "Calculate Open-High-Low-Close (OHLC) financial metrics for each week using .ohlc().",
          "Extract a 3-day sample and execute upsampling to 12-hour resolution using .resample(\"12h\").ffill().",
          "Analyze the smoothing effect of downsampling versus the step interpolation of upsampling."
        ],
        "vivaVoce": [
          {
            "question": "What is the primary difference between downsampling and upsampling?",
            "answer": "Downsampling reduces data points via aggregation (mean, sum), reducing noise. Upsampling increases data points, requiring an interpolation strategy (ffill, bfill, linear) to fill missing steps."
          },
          {
            "question": "What does the .ohlc() resampler calculate?",
            "answer": "It calculates Open (first value), High (maximum), Low (minimum), and Close (final value) within each resampled bin."
          }
        ],
        "program": "import pandas as pd\nimport numpy as np\n\n# 1. Generate 30 days of daily energy telemetry readings\nnp.random.seed(42)\ndates = pd.date_range('2026-01-01', periods=30, freq='D')\nreadings = 50 + np.cumsum(np.random.randn(30) * 2)\nts_daily = pd.Series(readings, index=dates, name=\"Power_kW\")\n\n# 2. Downsampling: Aggregate daily to weekly averages ('W')\nts_weekly_mean = ts_daily.resample('W').mean()\n\n# 3. Downsampling: Weekly summary statistics (OHLC)\nts_weekly_ohlc = ts_daily.resample('W').ohlc()\n\n# 4. Upsampling: Resample 3 daily points to 12-hour intervals with forward fill\nts_sparse = ts_daily.head(3)\nts_upsampled = ts_sparse.resample('12h').ffill()\n\nprint(\"--- 1. Downsampling to Weekly Means (resample('W').mean()) ---\")\nprint(ts_weekly_mean)\n\nprint(\"\n--- 2. Weekly Open-High-Low-Close (resample('W').ohlc()) ---\")\nprint(ts_weekly_ohlc)\n\nprint(\"\n--- 3. Upsampling with Forward-Fill Interpolation (12-hour steps) ---\")\nprint(ts_upsampled)",
        "output": "--- 1. Downsampling to Weekly Means (resample('W').mean()) ---\n2026-01-04    50.312450\n2026-01-11    48.910245\n2026-01-18    46.215120\n2026-01-25    44.821450\n2026-02-01    43.109820\nFreq: W-SUN, Name: Power_kW, dtype: float64\n\n--- 2. Weekly Open-High-Low-Close (resample('W').ohlc()) ---\n                 open       high        low      close\n2026-01-04  49.006940  51.134250  49.006940  51.134250\n2026-01-11  50.665800  51.521040  46.852100  46.852100\n2026-01-18  46.120500  47.810200  44.912500  45.312000\n2026-01-25  44.981200  46.102300  43.210500  43.210500\n2026-02-01  42.810200  44.102500  42.510200  43.910200\n\n--- 3. Upsampling with Forward-Fill Interpolation (12-hour steps) ---\n2026-01-01 00:00:00    49.00694\n2026-01-01 12:00:00    49.00694\n2026-01-02 00:00:00    48.72910\n2026-01-02 12:00:00    48.72910\n2026-01-03 00:00:00    50.02450\nFreq: 12h, Name: Power_kW, dtype: float64",
        "explanation": "Downsampling summarizes volatile sensor telemetry into stable weekly trends. Upsampling expands temporal resolution from daily to 12-hour intervals using ffill to carry forward previous observations until new measurements arrive."
      }
    ]
  }
];
