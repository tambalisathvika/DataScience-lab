# ==============================================================================
# MOHAN BABU UNIVERSITY (MBU) — DEPARTMENT OF DATA SCIENCE
# EXPERIMENT 4: DATA WRANGLING & HIERARCHICAL INDEXING
# TASK 4A: Perform hierarchical indexing and select data subsets using partial indexing
# Student: Tambali Sathvika (24102A030126) • Section: DS 2
# ==============================================================================

import pandas as pd

# Create a list of lists for hierarchical index
index = [
    ['Engineering', 'Engineering', 'Science', 'Science'],
    ['CSE', 'ECE', 'Physics', 'Chemistry']
]

# Create MultiIndex
multi_index = pd.MultiIndex.from_arrays(
    index,
    names=['Department', 'Branch']
)

# Create a Series using the hierarchical index
marks = pd.Series(
    [85, 78, 92, 88],
    index=multi_index
)

print("Original Series:")
print(marks)

# Partial indexing at the outer level
print("\nData for Engineering:")
print(marks.loc['Engineering'])

# Partial indexing at the inner level
print("\nData for CSE:")
print(marks.loc[('Engineering', 'CSE')])

# Selecting a subset using both levels
print("\nData for Science:")
print(marks.loc['Science'])
