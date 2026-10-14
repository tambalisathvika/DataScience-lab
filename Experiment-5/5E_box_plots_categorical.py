# ==============================================================================
# MOHAN BABU UNIVERSITY (MBU) — DEPARTMENT OF DATA SCIENCE
# EXPERIMENT 5: DATA VISUALIZATION WITH MATPLOTLIB & SEABORN
# TASK 5E: Create box plots to visualize data with many categorical variables
# Student: Tambali Sathvika (24102A030126) • Section: DS 2
# ==============================================================================

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Sample department scores data
data = {
    'Department': [
        'CSE', 'CSE', 'CSE', 'CSE', 'CSE',
        'ECE', 'ECE', 'ECE', 'ECE', 'ECE',
        'EEE', 'EEE', 'EEE', 'EEE', 'EEE'
    ],
    'Marks': [
        78, 85, 90, 72, 88,
        65, 70, 82, 75, 80,
        60, 68, 72, 76, 85
    ]
}

df = pd.DataFrame(data)

print("Department Scores Dataset:")
print(df)

# Create Categorical Box Plot
plt.figure(figsize=(8, 5))
sns.boxplot(
    x='Department',
    y='Marks',
    data=df,
    palette=['#0d9488', '#38bdf8', '#fbbf24']
)

plt.title("Academic Marks Distribution Across Engineering Departments", fontweight="bold")
plt.xlabel("Engineering Department")
plt.ylabel("Marks Scored")
plt.grid(axis='y', linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()
