"""
Experiment 6A — Create Time Series Using Datetime Objects in Pandas
Mohan Babu University — School of Computing — Department of Data Science
"""
import pandas as pd
from datetime import datetime

# 1. Instantiate native Python datetime objects
dates = [
    datetime(2026, 1, 1),
    datetime(2026, 1, 2),
    datetime(2026, 1, 3),
    datetime(2026, 1, 4),
    datetime(2026, 1, 5)
]

# 2. Convert native datetime instances to DatetimeIndex
timestamp_index = pd.to_datetime(dates)

# 3. Create experimental observation values
measurements = [102.5, 105.8, 104.2, 108.9, 107.4]

# 4. Construct time-indexed Series
ts = pd.Series(measurements, index=timestamp_index)

print("--- 1. Generated Pandas Time Series (DatetimeIndex) ---")
print(ts)
print("\n--- 2. Metadata Diagnostics ---")
print("Data Type (dtype):", ts.dtype)
print("Index Class:", type(ts.index))
print("Start Timestamp:", ts.index.min())
print("End Timestamp:", ts.index.max())
