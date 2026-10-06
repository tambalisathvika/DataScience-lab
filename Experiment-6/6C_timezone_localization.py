"""
Experiment 6C — Time Zone Localization and Conversion
Mohan Babu University — School of Computing — Department of Data Science
"""
import pandas as pd

# 1. Instantiate naive timestamps (freq='6h')
naive_idx = pd.date_range('2026-03-01 00:00', periods=4, freq='6h')
ts = pd.Series([100, 105, 110, 115], index=naive_idx)

# 2. Localize naive index to UTC
ts_utc = ts.tz_localize('UTC')

# 3. Convert UTC to Indian Standard Time (Asia/Kolkata: UTC+05:30)
ts_ist = ts_utc.tz_convert('Asia/Kolkata')

# 4. Convert UTC to US Eastern Time (America/New_York)
ts_ny = ts_utc.tz_convert('America/New_York')

print("--- 1. Time Zone Naive Series ---")
print(ts)

print("\n--- 2. Localized to UTC ---")
print(ts_utc)

print("\n--- 3. Converted to Asia/Kolkata (IST: UTC+05:30) ---")
print(ts_ist)

print("\n--- 4. Converted to America/New_York ---")
print(ts_ny)
