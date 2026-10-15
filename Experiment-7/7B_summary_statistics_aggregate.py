# ==============================================================================
# EXPERIMENT 7B: COMPUTE SUMMARY STATISTICS USING THE AGGREGATE() METHOD
# Course: Data Science Laboratory (22DS102006)
# Institution: Mohan Babu University (MBU), School of Computing
# Student: Tambali Sathvika (24102A030126)
# ==============================================================================

import pandas as pd

# Create a DataFrame
data = {
    'Department': ['CSE', 'CSE', 'CSE', 'ECE', 'ECE', 'ECE',
                   'EEE', 'EEE', 'EEE'],
    'Marks': [80, 75, 85, 70, 65, 75, 90, 85, 95],
    'Attendance': [90, 85, 95, 80, 75, 85, 95, 90, 100]
}

df = pd.DataFrame(data)
print("Original DataFrame:")
print(df)

# Group data by Department and calculate summary statistics
result = df.groupby('Department').aggregate({
    'Marks': ['sum', 'mean', 'std'],
    'Attendance': ['sum', 'mean', 'std']
})

print("\nSummary Statistics:")
print(result)
