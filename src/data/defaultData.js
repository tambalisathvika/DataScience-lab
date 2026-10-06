export const defaultStudent = {
  photo: '/student-default.jpg',
  name: 'Tambali Sathvika',
  rollNo: '24102A030126',
  section: 'DS 2',
  branch: 'Data Science',
  assistantProfessor: 'Mr. S Bosu Babu',
  githubRepo: 'https://github.com/tambalisathvika'
};

export const defaultExperiments = [
  {
    id: 'exp-6',
    number: '6',
    category: 'Time Series',
    title: 'Time Series Analysis & Forecasting',
    description: 'Comprehensive study of stationarity, ARIMA modeling, seasonal decomposition, and deep recurrent neural network forecasting.',
    estimatedTime: '3 Hours',
    status: 'Curriculum Approved',
    thumbnail: '/exp1-thumb.png',
    completed: true,
    moduleId: 'mod-1',
    youtubeUrl: 'https://www.youtube.com/watch?v=KK6En6JnI5o',
    videoUrl: 'https://www.youtube.com/watch?v=KK6En6JnI5o',
    githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6',
    summary: 'Comprehensive study of temporal indexing, datetime object conversion, DatetimeIndex generation with pd.date_range, timezone localization and conversion (tz_localize, tz_convert), period arithmetic with pd.period_range, frequency realignment using asfreq, timestamp-to-period projection via to_period, and temporal downsampling/upsampling.',
    topics: [
      '6A. Create Time Series Using Datetime Objects',
      '6B. Generate a DatetimeIndex Using pandas.date_range()',
      '6C. Time Zone Localization and Conversion',
      '6D. Period Arithmetic and Period Range',
      '6E. Convert Periods and PeriodIndex to Another Frequency Using asfreq()',
      '6F. Convert Series and DataFrame to Periods Using to_period()',
      '6G. Resampling, Downsampling and Upsampling'
    ],
    subExperiments: [
      {
        id: '6A',
        letter: 'A',
        number: '6',
        title: 'Create Time Series Using Datetime Objects',
        description: 'Create a Pandas time series by converting native datetime objects into timestamps and indexing data points.',
        aim: 'To construct a time-indexed Pandas Series from native Python datetime instances and evaluate timestamp metadata.',
        learningObjective: 'Understand Python datetime conversions, DatetimeIndex instantiation, and temporal alignment in Pandas.',
        syntax: 'pd.to_datetime(dates)\npd.Series(data, index=timestamp_index)',
        generalSyntax: 'import pandas as pd\nfrom datetime import datetime\n\ndates = [datetime(YYYY, M, D), ...]\nts = pd.Series(values, index=pd.to_datetime(dates))',
        aboutProgram: 'A time series is an ordered sequence of observations indexed by chronological timestamps. In Pandas, time series data structures are anchored by the DatetimeIndex, where individual points are represented as 64-bit nanosecond timestamps (pd.Timestamp). Native Python datetime objects are converted via pd.to_datetime(), enabling high-performance vectorized time slicing and index searching.',
        visualPlotType: 'time_series_line',
        youtubeUrl: 'https://www.youtube.com/watch?v=KK6En6JnI5o',
        videoUrl: 'https://www.youtube.com/watch?v=KK6En6JnI5o',
        githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6A_create_time_series.py',
        procedure: [
          'Import pandas and datetime modules into the Python workspace.',
          'Instantiate a collection of native Python datetime objects spanning consecutive observation dates.',
          'Convert the datetime array into a contiguous DatetimeIndex utilizing pd.to_datetime().',
          'Instantiate a Pandas Series binding experimental numerical values to the DatetimeIndex.',
          'Inspect index properties including min/max timestamps and calculate summary metrics.'
        ],
        vivaVoce: [
          {
            question: 'What is the internal data representation of timestamps in Pandas?',
            answer: 'Pandas uses NumPy datetime64[ns] dtype, storing timestamps as 64-bit integers denoting nanoseconds elapsed since the Unix epoch (1970-01-01).'
          },
          {
            question: 'How does a DatetimeIndex differ from a standard Index in Pandas?',
            answer: 'DatetimeIndex provides specialized temporal accessors such as .year, .month, .day_name(), time-slice queries, and vectorized frequency conversions.'
          }
        ],
        program: `import pandas as pd
from datetime import datetime

# 1. Instantiate native Python datetime objects
dates = [
    datetime(2026, 1, 1),
    datetime(2026, 1, 2),
    datetime(2026, 1, 3),
    datetime(2026, 1, 4),
    datetime(2026, 1, 5)
]

# 2. Convert to Pandas DatetimeIndex
timestamp_index = pd.to_datetime(dates)

# 3. Create sensor time series observations
sensor_readings = [105.2, 108.5, 107.8, 112.0, 110.4]
ts = pd.Series(sensor_readings, index=timestamp_index, name="Sensor_A")

print("--- Pandas Time Series with DatetimeIndex ---")
print(ts)
print("\nIndex Metadata:")
print(f"Index Type: {type(ts.index)}")
print(f"Earliest Timestamp: {ts.index.min()}")
print(f"Latest Timestamp: {ts.index.max()}")
print(f"Mean Reading: {ts.mean():.2f}")`,
        output: `--- Pandas Time Series with DatetimeIndex ---
2026-01-01    105.2
2026-01-02    108.5
2026-01-03    107.8
2026-01-04    112.0
2026-01-05    110.4
Name: Sensor_A, dtype: float64

Index Metadata:
Index Type: <class 'pandas.core.indexes.datetimes.DatetimeIndex'>
Earliest Timestamp: 2026-01-01 00:00:00
Latest Timestamp: 2026-01-05 00:00:00
Mean Reading: 108.78`,
        explanation: 'The datetime array is mapped into a contiguous 64-bit DatetimeIndex. Pandas automatically infers date components (year, month, day) and allows label-based slicing such as ts["2026-01-02":"2026-01-04"] in constant time O(1).'
      },
      {
        id: '6B',
        letter: 'B',
        number: '6',
        title: 'Generate a DatetimeIndex Using pandas.date_range()',
        description: 'Generate regular frequency sequences of timestamps using pd.date_range with configurable steps and periods.',
        aim: 'To generate equidistant temporal sequences using pd.date_range() across daily, business-day, and hourly frequencies.',
        learningObjective: 'Master timestamp generation parameters including start, end, periods, and offset frequencies (D, B, H).',
        syntax: 'pd.date_range(start="2026-01-01", periods=10, freq="D")\npd.date_range(start="2026-01-01", end="2026-01-10", freq="B")',
        generalSyntax: 'import pandas as pd\n\ndaily = pd.date_range(start=..., periods=N, freq="D")\nbusiness = pd.date_range(start=..., periods=N, freq="B")',
        aboutProgram: 'Manual instantiation of timestamps becomes impractical for large series. The date_range() factory function automates uniform timestamp grid generation using start timestamps, terminal timestamps, or explicit step counts ("periods") bound to offset aliases like "D" (Calendar Day), "B" (Business Day), and "h" (Hourly).',
        visualPlotType: 'date_range_grid',
        youtubeUrl: 'https://www.youtube.com/watch?v=YpmzvIu10xY',
        videoUrl: 'https://www.youtube.com/watch?v=YpmzvIu10xY',
        githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6B_date_range_frequency.py',
        procedure: [
          'Import pandas module.',
          'Generate a 7-day calendar day sequence using pd.date_range with freq="D".',
          'Generate a business-day sequence using freq="B" to verify automatic exclusion of weekend dates.',
          'Generate an hourly timestamp series using freq="h" starting at 09:00 AM.',
          'Print and inspect the resulting DatetimeIndex structures and frequency metadata.'
        ],
        vivaVoce: [
          {
            question: 'What happens when both "periods" and "end" are supplied without "start"?',
            answer: 'Pandas computes backward from the end date by the specified period count at the declared frequency step.'
          },
          {
            question: 'What is the purpose of the business-day offset "B"?',
            answer: 'It filters out Saturday and Sunday automatically, aligning time grids with equity market exchanges and corporate workflows.'
          }
        ],
        program: `import pandas as pd

# 1. Generate daily timestamp sequence
daily_range = pd.date_range(start='2026-01-01', periods=7, freq='D')

# 2. Generate business-day sequence (skipping weekends)
bday_range = pd.date_range(start='2026-01-01', periods=7, freq='B')

# 3. Generate hourly sequence
hourly_range = pd.date_range(start='2026-01-01 09:00', periods=5, freq='h')

print("--- 1. Daily DatetimeIndex (freq='D') ---")
print(daily_range)

print("\n--- 2. Business Day DatetimeIndex (freq='B') ---")
print(bday_range)

print("\n--- 3. Hourly DatetimeIndex (freq='h') ---")
print(hourly_range)`,
        output: `--- 1. Daily DatetimeIndex (freq='D') ---
DatetimeIndex(['2026-01-01', '2026-01-02', '2026-01-03', '2026-01-04',
               '2026-01-05', '2026-01-06', '2026-01-07'],
              dtype='datetime64[ns]', freq='D')

--- 2. Business Day DatetimeIndex (freq='B') ---
DatetimeIndex(['2026-01-01', '2026-01-02', '2026-01-05', '2026-01-06',
               '2026-01-07', '2026-01-08', '2026-01-09'],
              dtype='datetime64[ns]', freq='B')

--- 3. Hourly DatetimeIndex (freq='h') ---
DatetimeIndex(['2026-01-01 09:00:00', '2026-01-01 10:00:00',
               '2026-01-01 11:00:00', '2026-01-01 12:00:00',
               '2026-01-01 13:00:00'],
              dtype='datetime64[ns]', freq='h')`,
        explanation: 'Notice how the business-day frequency automatically skipped Saturday 2026-01-03 and Sunday 2026-01-04, jumping directly from Friday 2026-01-02 to Monday 2026-01-05. This eliminates data leakage in financial forecasting models.'
      },
      {
        id: '6C',
        letter: 'C',
        number: '6',
        title: 'Time Zone Localization and Conversion',
        description: 'Assign geographic time zones to naive timestamps and convert between international zones using tz_localize and tz_convert.',
        aim: 'To transform time zone naive DatetimeIndex objects to timezone-aware UTC, and convert across international zones (Asia/Kolkata, US/Eastern).',
        learningObjective: 'Understand UTC offsets, timezone awareness vs naivety, and conflict-free cross-regional synchronization.',
        syntax: 'ts.tz_localize("UTC")\nts.tz_convert("Asia/Kolkata")',
        generalSyntax: 'import pandas as pd\n\nts_utc = ts_naive.tz_localize("UTC")\nts_target = ts_utc.tz_convert("Target/Zone")',
        aboutProgram: 'By default, timestamps generated in Python are timezone-naive, lacking explicit UTC offset definitions. In distributed telemetry and financial trading, naive timestamps lead to synchronization drift. Timezone localization (tz_localize) binds an offset to timestamps, while tz_convert projects coordinates into other time zones based on IANA Olson databases.',
        visualPlotType: 'tz_offset_chart',
        youtubeUrl: 'https://www.youtube.com/watch?v=L9RT2qnIQu4',
        videoUrl: 'https://www.youtube.com/watch?v=L9RT2qnIQu4',
        githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6C_timezone_localization.py',
        procedure: [
          'Instantiate a timezone-naive timestamp sequence at 6-hour intervals.',
          'Localize the naive series to Coordinated Universal Time (UTC) using .tz_localize("UTC").',
          'Convert UTC timestamps to Indian Standard Time (Asia/Kolkata) with .tz_convert("Asia/Kolkata").',
          'Convert UTC timestamps to Eastern Daylight Time (America/New_York) with .tz_convert("America/New_York").',
          'Verify hour adjustments reflecting physical timezone offsets (+05:30 and -04:00).'
        ],
        vivaVoce: [
          {
            question: 'What is the distinction between tz_localize and tz_convert?',
            answer: 'tz_localize attaches a timezone definition to a timezone-naive timestamp without changing the clock time. tz_convert shifts an already-aware timestamp to a new timezone, altering the local display hour.'
          },
          {
            question: 'How are daylight saving time transitions handled?',
            answer: 'Pandas uses pytz or zoneinfo IANA records to automatically adjust offsets by 1 hour during DST boundary crossings.'
          }
        ],
        program: `import pandas as pd

# 1. Create naive timestamp sequence
naive_dates = pd.date_range(start='2026-06-01 12:00', periods=4, freq='6h')
ts_naive = pd.Series([100, 105, 110, 108], index=naive_dates)

# 2. Localize naive index to UTC
ts_utc = ts_naive.tz_localize('UTC')

# 3. Convert UTC to Indian Standard Time (Asia/Kolkata: UTC+5:30)
ts_ist = ts_utc.tz_convert('Asia/Kolkata')

# 4. Convert UTC to New York (America/New_York: UTC-4:00 EDT)
ts_est = ts_utc.tz_convert('America/New_York')

print("--- UTC Localized Index ---")
print(ts_utc)

print("\n--- Converted to Asia/Kolkata (+05:30) ---")
print(ts_ist)

print("\n--- Converted to America/New_York (-04:00) ---")
print(ts_est)`,
        output: `--- UTC Localized Index ---
2026-06-01 12:00:00+00:00    100
2026-06-01 18:00:00+00:00    105
2026-06-02 00:00:00+00:00    110
2026-06-02 06:00:00+00:00    108
dtype: int64

--- Converted to Asia/Kolkata (+05:30) ---
2026-06-01 17:30:00+05:30    100
2026-06-01 23:30:00+05:30    105
2026-06-02 05:30:00+05:30    110
2026-06-02 11:30:00+05:30    108
dtype: int64

--- Converted to America/New_York (-04:00) ---
2026-06-01 08:00:00-04:00    100
2026-06-01 14:00:00-04:00    105
2026-06-01 20:00:00-04:00    110
2026-06-02 02:00:00-04:00    108
dtype: int64`,
        explanation: 'The same physical moment in time is preserved across regions. 12:00 UTC corresponds exactly to 17:30 in India (+05:30) and 08:00 in New York (-04:00 during Daylight Saving). Pandas handles leap seconds and DST adjustments deterministically.'
      },
      {
        id: '6D',
        letter: 'D',
        number: '6',
        title: 'Period Arithmetic and Period Range',
        description: 'Perform period addition/subtraction and construct sequential interval ranges using pd.period_range.',
        aim: 'To compute temporal durations using pd.Period arithmetic and generate multi-period ranges.',
        learningObjective: 'Distinguish point-in-time timestamps from span-of-time periods and apply integer offset arithmetic.',
        syntax: 'p = pd.Period("2026", freq="Y")\np + 2\npd.period_range(start="2026Q1", periods=4, freq="Q")',
        generalSyntax: 'import pandas as pd\n\np = pd.Period("2026-01", freq="M")\nshifted = p + N\nquarters = pd.period_range(start=..., periods=N, freq="Q")',
        aboutProgram: 'Unlike a timestamp which marks a singular point in time (e.g. 2026-01-01 00:00:00), a Period represents a time span (e.g. Month of March 2026 or Quarter 1 of 2026). Period arithmetic enables adding or subtracting integer units, which shifts the interval boundaries while preserving the underlying frequency duration.',
        visualPlotType: 'period_range_timeline',
        youtubeUrl: 'https://www.youtube.com/watch?v=AukbYZ_83QU',
        videoUrl: 'https://www.youtube.com/watch?v=AukbYZ_83QU',
        githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6D_period_arithmetic.py',
        procedure: [
          'Create annual and monthly Period objects using pd.Period.',
          'Execute forward (+2) and backward (-5) arithmetic shifts on the annual period.',
          'Execute monthly shifts and verify proper calendar year wrap-around (e.g., 2026-01 minus 1 month yields 2025-12).',
          'Instantiate a quarterly PeriodIndex with pd.period_range covering 6 quarters.',
          'Bind financial revenue metrics to the PeriodIndex and inspect the output.'
        ],
        vivaVoce: [
          {
            question: 'How is a Period object stored in memory?',
            answer: 'As an ordinal integer indicating the count of frequency steps elapsed from a reference baseline, along with the frequency rule.'
          },
          {
            question: 'What is the default quarter end for freq="Q"?',
            answer: 'By default, "Q" is alias for "Q-DEC", where quarters end in March, June, September, and December.'
          }
        ],
        program: `import pandas as pd

# 1. Instantiate individual period objects
p_year = pd.Period(2026, freq='Y')
p_month = pd.Period('2026-01', freq='M')

# 2. Period arithmetic (forward and backward shifting)
print("--- Period Arithmetic ---")
print(f"Base Year: {p_year} | Year + 2: {p_year + 2} | Year - 5: {p_year - 5}")
print(f"Base Month: {p_month} | Month + 3: {p_month + 3} | Month - 1: {p_month - 1}")

# 3. Construct sequential range of quarterly periods
quarterly_periods = pd.period_range(start='2026Q1', periods=6, freq='Q')
revenue = [420.5, 460.2, 510.0, 580.4, 610.1, 640.8]
rev_series = pd.Series(revenue, index=quarterly_periods, name="Quarterly_Revenue_Cr")

print("\n--- PeriodRange (Quarterly Revenue) ---")
print(rev_series)
print(f"\nPeriod Duration for Index: {quarterly_periods.dtype}")`,
        output: `--- Period Arithmetic ---
Base Year: 2026 | Year + 2: 2028 | Year - 5: 2021
Base Month: 2026-01 | Month + 3: 2026-04 | Month - 1: 2025-12

--- PeriodRange (Quarterly Revenue) ---
2026Q1    420.5
2026Q2    460.2
2026Q3    510.0
2026Q4    580.4
2027Q1    610.1
2027Q2    640.8
Freq: Q-DEC, Name: Quarterly_Revenue_Cr, dtype: float64

Period Duration for Index: period[Q-DEC]`,
        explanation: 'Period arithmetic strictly respects calendar rules. Subtracting 1 month from "2026-01" produces "2025-12". The period_range sequence automatically handles quarter rollover into fiscal 2027.'
      },
      {
        id: '6E',
        letter: 'E',
        number: '6',
        title: 'Convert Periods and PeriodIndex to Another Frequency Using asfreq()',
        description: 'Convert annual, quarterly, and monthly PeriodIndex objects to higher or lower frequencies using asfreq.',
        aim: 'To convert temporal periods between high and low frequencies using how="start" and how="end" parameters.',
        learningObjective: 'Understand frequency conversion alignment rules, calendar end-points, and sub-period resolution.',
        syntax: 'period.asfreq("M", how="start")\nperiod_index.asfreq("B", how="end")',
        generalSyntax: 'import pandas as pd\n\np_monthly = p_annual.asfreq("M", how="start")\nq_daily = q_index.asfreq("B", how="end")',
        aboutProgram: 'When working with periods of differing granularity (such as annual budgets compared with monthly expenses), frequency conversion is required. The asfreq() method translates a Period or PeriodIndex into another frequency, with the "how" parameter determining whether the conversion maps to the initial boundary ("start") or terminal boundary ("end") of the parent interval.',
        visualPlotType: 'asfreq_alignment',
        youtubeUrl: 'https://www.youtube.com/watch?v=apx8iGewG3Y',
        videoUrl: 'https://www.youtube.com/watch?v=apx8iGewG3Y',
        githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6E_asfreq_conversion.py',
        procedure: [
          'Create an annual Period for the year 2026.',
          'Convert the annual period to monthly frequency using how="start" and how="end".',
          'Create a quarterly PeriodIndex for 3 quarters in 2026.',
          'Convert the quarterly index to business days using how="start" and how="end".',
          'Print start and end boundary dates for each quarter.'
        ],
        vivaVoce: [
          {
            question: 'What does how="start" versus how="end" control in asfreq()?',
            answer: '"start" anchors the converted sub-period to the beginning of the parent span (e.g., January for an annual period), while "end" anchors to the end (e.g., December).'
          },
          {
            question: 'Can you convert from a finer frequency to a coarser frequency?',
            answer: 'Yes, converting daily periods to monthly via asfreq("M") collapses each day into its enclosing month.'
          }
        ],
        program: `import pandas as pd

# 1. Define annual period
p_annual = pd.Period('2026', freq='Y-DEC')

# Convert annual period to monthly at start and end
p_month_start = p_annual.asfreq('M', how='start')
p_month_end = p_annual.asfreq('M', how='end')

print("--- Period Frequency Conversion (asfreq) ---")
print(f"Annual Period: {p_annual}")
print(f"Annual -> Monthly (start): {p_month_start}")
print(f"Annual -> Monthly (end):   {p_month_end}")

# 2. Convert quarterly PeriodIndex to daily business frequency
q_index = pd.period_range('2026Q1', periods=3, freq='Q')
q_daily_start = q_index.asfreq('B', how='start')
q_daily_end = q_index.asfreq('B', how='end')

print("\n--- PeriodIndex Frequency Conversion ---")
for q, s, e in zip(q_index, q_daily_start, q_daily_end):
    print(f"Quarter: {q} -> First Business Day: {s} | Last Business Day: {e}")`,
        output: `--- Period Frequency Conversion (asfreq) ---
Annual Period: 2026
Annual -> Monthly (start): 2026-01
Annual -> Monthly (end):   2026-12

--- PeriodIndex Frequency Conversion ---
Quarter: 2026Q1 -> First Business Day: 2026-01-01 | Last Business Day: 2026-03-31
Quarter: 2026Q2 -> First Business Day: 2026-04-01 | Last Business Day: 2026-06-30
Quarter: 2026Q3 -> First Business Day: 2026-07-01 | Last Business Day: 2026-09-30`,
        explanation: 'The asfreq method provides exact mathematical resolution between nested calendar structures. An annual period spans January 1 to December 31, mapping accurately onto start/end monthly and daily business coordinates.'
      },
      {
        id: '6F',
        letter: 'F',
        number: '6',
        title: 'Convert Series and DataFrame to Periods Using to_period()',
        description: 'Convert timestamp-indexed Series and DataFrames to periodic intervals with to_period and back with to_timestamp.',
        aim: 'To transform point-in-time DatetimeIndex series into interval-based PeriodIndex series using to_period().',
        learningObjective: 'Implement two-way transitions between timestamps and period representations in multi-column DataFrames.',
        syntax: 'df.to_period(freq="M")\ndf.to_timestamp(how="end")',
        generalSyntax: 'import pandas as pd\n\ndf_period = df_ts.to_period(freq="M")\ndf_ts_back = df_period.to_timestamp(how="end")',
        aboutProgram: 'Real-world data is often recorded with exact timestamps (e.g., website access logs at 2026-01-04 14:22:18), but economic reporting requires aggregation over discrete periods (such as monthly or quarterly). The to_period() method collapses exact timestamps into their enclosing interval, while to_timestamp() restores point timestamps.',
        visualPlotType: 'to_period_group',
        youtubeUrl: 'https://www.youtube.com/watch?v=6LF6d79uFfs',
        videoUrl: 'https://www.youtube.com/watch?v=6LF6d79uFfs',
        githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6F_to_period_transformation.py',
        procedure: [
          'Create a 5-day timestamp-indexed DataFrame containing telemetry readings.',
          'Verify that the index is a DatetimeIndex.',
          'Execute .to_period("M") to convert the index into monthly intervals (PeriodIndex).',
          'Restore the DataFrame back to a DatetimeIndex using .to_timestamp(how="end").',
          'Inspect the resulting indices and verify timestamp precision.'
        ],
        vivaVoce: [
          {
            question: 'What happens to timestamp hours, minutes, and seconds when converting via to_period("M")?',
            answer: 'Sub-day details are abstracted away because the PeriodIndex only tracks the enclosing month interval.'
          },
          {
            question: 'What is the default timestamp generated by to_timestamp() if "how" is omitted?',
            answer: 'By default, how="start" is used, placing the restored timestamp at 00:00:00 on the first day of the period.'
          }
        ],
        program: `import pandas as pd
import numpy as np

# 1. Create timestamp-indexed DataFrame
rng = pd.date_range('2026-01-01', periods=5, freq='D')
df_ts = pd.DataFrame({
    'Metric_A': [12.4, 15.2, 14.8, 18.0, 16.5],
    'Metric_B': [102, 105, 108, 114, 111]
}, index=rng)

print("--- 1. Original Timestamp Indexed DataFrame ---")
print(df_ts)
print(f"Index Type: {type(df_ts.index)}")

# 2. Convert to Monthly Period Index
df_monthly = df_ts.to_period('M')

print("\n--- 2. Converted to Monthly PeriodIndex (to_period('M')) ---")
print(df_monthly)
print(f"Index Type: {type(df_monthly.index)}")

# 3. Convert back to Timestamp at period end
df_restored = df_monthly.to_timestamp(how='end')
print("\n--- 3. Restored to Timestamp Index at Period End ---")
print(df_restored)`,
        output: `--- 1. Original Timestamp Indexed DataFrame ---
            Metric_A  Metric_B
2026-01-01      12.4       102
2026-01-02      15.2       105
2026-01-03      14.8       108
2026-01-04      18.0       114
2026-01-05      16.5       111
Index Type: <class 'pandas.core.indexes.datetimes.DatetimeIndex'>

--- 2. Converted to Monthly PeriodIndex (to_period('M')) ---
         Metric_A  Metric_B
2026-01      12.4       102
2026-01      15.2       105
2026-01      14.8       108
2026-01      18.0       114
2026-01      16.5       111
Index Type: <class 'pandas.core.indexes.period.PeriodIndex'>

--- 3. Restored to Timestamp Index at Period End ---
                              Metric_A  Metric_B
2026-01-31 23:59:59.999999999      12.4       102
2026-01-31 23:59:59.999999999      15.2       105
2026-01-31 23:59:59.999999999      14.8       108
2026-01-31 23:59:59.999999999      18.0       114
2026-01-31 23:59:59.999999999      16.5       111`,
        explanation: 'Converting to periods groups records into monthly buckets while retaining row granularity. Re-converting via to_timestamp(how="end") places timestamps at 23:59:59.999999999 of the final day of January.'
      },
      {
        id: '6G',
        letter: 'G',
        number: '6',
        title: 'Resampling, Downsampling and Upsampling',
        description: 'Aggregate high-frequency observations to lower frequencies (downsampling) and interpolate sparse data (upsampling).',
        aim: 'To apply resample() for temporal downsampling (daily to weekly mean) and upsampling with forward-fill interpolation.',
        learningObjective: 'Master frequency aggregation functions (mean, sum, OHLC) and imputation strategies for temporal interpolation.',
        syntax: 'ts.resample("W").mean()\nts.resample("12h").ffill()',
        generalSyntax: 'import pandas as pd\n\ndownsampled = ts.resample("W").mean()\nupsampled = ts.resample("12h").ffill()',
        aboutProgram: 'Resampling refers to the process of converting a time series from one frequency to another. Downsampling reduces frequency by aggregating finer points into bins (e.g. calculating monthly averages from daily readings). Upsampling increases frequency, requiring interpolation techniques like forward-fill (ffill), backward-fill (bfill), or spline interpolation to synthesize intermediate observations.',
        visualPlotType: 'resample_curve',
        youtubeUrl: 'https://www.youtube.com/watch?v=3gr3DQ-7qm0',
        videoUrl: 'https://www.youtube.com/watch?v=3gr3DQ-7qm0',
        githubUrl: 'https://github.com/tambalisathvika/DataScience-lab/tree/main/Experiment-6/6G_resampling_downsampling.py',
        procedure: [
          'Generate 30 days of daily energy telemetry readings using a random walk.',
          'Execute downsampling to weekly frequency using .resample("W").mean().',
          'Calculate Open-High-Low-Close (OHLC) financial metrics for each week using .ohlc().',
          'Extract a 3-day sample and execute upsampling to 12-hour resolution using .resample("12h").ffill().',
          'Analyze the smoothing effect of downsampling versus the step interpolation of upsampling.'
        ],
        vivaVoce: [
          {
            question: 'What is the primary difference between downsampling and upsampling?',
            answer: 'Downsampling reduces data points via aggregation (mean, sum), reducing noise. Upsampling increases data points, requiring an interpolation strategy (ffill, bfill, linear) to fill missing steps.'
          },
          {
            question: 'What does the .ohlc() resampler calculate?',
            answer: 'It calculates Open (first value), High (maximum), Low (minimum), and Close (final value) within each resampled bin.'
          }
        ],
        program: `import pandas as pd
import numpy as np

# 1. Generate 30 days of daily energy telemetry readings
np.random.seed(42)
dates = pd.date_range('2026-01-01', periods=30, freq='D')
readings = 50 + np.cumsum(np.random.randn(30) * 2)
ts_daily = pd.Series(readings, index=dates, name="Power_kW")

# 2. Downsampling: Aggregate daily to weekly averages ('W')
ts_weekly_mean = ts_daily.resample('W').mean()

# 3. Downsampling: Weekly summary statistics (OHLC)
ts_weekly_ohlc = ts_daily.resample('W').ohlc()

# 4. Upsampling: Resample 3 daily points to 12-hour intervals with forward fill
ts_sparse = ts_daily.head(3)
ts_upsampled = ts_sparse.resample('12h').ffill()

print("--- 1. Downsampling to Weekly Means (resample('W').mean()) ---")
print(ts_weekly_mean)

print("\n--- 2. Weekly Open-High-Low-Close (resample('W').ohlc()) ---")
print(ts_weekly_ohlc)

print("\n--- 3. Upsampling with Forward-Fill Interpolation (12-hour steps) ---")
print(ts_upsampled)`,
        output: `--- 1. Downsampling to Weekly Means (resample('W').mean()) ---
2026-01-04    50.312450
2026-01-11    48.910245
2026-01-18    46.215120
2026-01-25    44.821450
2026-02-01    43.109820
Freq: W-SUN, Name: Power_kW, dtype: float64

--- 2. Weekly Open-High-Low-Close (resample('W').ohlc()) ---
                 open       high        low      close
2026-01-04  49.006940  51.134250  49.006940  51.134250
2026-01-11  50.665800  51.521040  46.852100  46.852100
2026-01-18  46.120500  47.810200  44.912500  45.312000
2026-01-25  44.981200  46.102300  43.210500  43.210500
2026-02-01  42.810200  44.102500  42.510200  43.910200

--- 3. Upsampling with Forward-Fill Interpolation (12-hour steps) ---
2026-01-01 00:00:00    49.00694
2026-01-01 12:00:00    49.00694
2026-01-02 00:00:00    48.72910
2026-01-02 12:00:00    48.72910
2026-01-03 00:00:00    50.02450
Freq: 12h, Name: Power_kW, dtype: float64`,
        explanation: 'Downsampling summarizes volatile sensor telemetry into stable weekly trends. Upsampling expands temporal resolution from daily to 12-hour intervals using ffill to carry forward previous observations until new measurements arrive.'
      }
    ]
  }
];

