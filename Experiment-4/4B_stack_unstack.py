# ==============================================================================
# MOHAN BABU UNIVERSITY (MBU) — DEPARTMENT OF DATA SCIENCE
# EXPERIMENT 4: DATA WRANGLING & HIERARCHICAL INDEXING
# TASK 4B: Rearrange tabular data with hierarchical indexing using unstack and stack method
# Student: Tambali Sathvika (24102A030126) • Section: DS 2
# ==============================================================================

import pandas as pd

# Create hierarchical index
index = pd.MultiIndex.from_tuples(
    [
        ('Engineering', 'CSE'),
        ('Engineering', 'ECE'),
        ('Science', 'Physics'),
        ('Science', 'Chemistry')
    ],
    names=['Department', 'Branch']
)

# Create tabular data
data = pd.DataFrame(
    {
        '2025': [85, 78, 92, 88],
        '2026': [90, 82, 95, 91]
    },
    index=index
)

print("Original Tabular Data:")
print(data)

# Unstack the inner level
unstacked_data = data.unstack()

print("\nData after Unstack():")
print(unstacked_data)

# Stack the data back
stacked_data = unstacked_data.stack()

print("\nData after Stack():")
print(stacked_data)
