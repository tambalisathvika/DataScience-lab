# ==============================================================================
# EXPERIMENT 7A: GROUPBY OPERATIONS WITH SINGLE AND MULTIPLE KEYS
# Course: Data Science Laboratory (22DS102006)
# Institution: Mohan Babu University (MBU), School of Computing
# Student: Tambali Sathvika (24102A030126)
# ==============================================================================

import pandas as pd

# Create a tabular dataset
data = {
    'Name': ['Ravi', 'Sita', 'Arun', 'Priya', 'Kiran', 'Anil', 'Lakshmi', 'Rahul'],
    'Department': ['CSE', 'CSE', 'ECE', 'ECE', 'CSE', 'ECE', 'CSE', 'ECE'],
    'Year': [2, 2, 3, 3, 2, 3, 3, 2],
    'Marks': [85, 90, 78, 88, 75, 82, 95, 70]
}

# Create DataFrame
df = pd.DataFrame(data)
print("Original DataFrame:")
print(df)

# 1. Group by a SINGLE KEY
print("\n1. Group by Department:")
group1 = df.groupby('Department')
for name, group in group1:
    print("\nDepartment:", name)
    print(group)

# Calculate average marks for each department
print("\nAverage Marks by Department:")
print(df.groupby('Department')['Marks'].mean())

# 2. Group by MULTIPLE KEYS
print("\n2. Group by Department and Year:")
group2 = df.groupby(['Department', 'Year'])
for name, group in group2:
    print("\nGroup:", name)
    print(group)

# Calculate average marks for each Department and Year
print("\nAverage Marks by Department and Year:")
print(df.groupby(['Department', 'Year'])['Marks'].mean())
