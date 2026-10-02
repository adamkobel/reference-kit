# Line chart


```python
import matplotlib.pyplot as plt

# create lists of hours and miles traveled
hours = [0, 1, 2, 3, 4, 5]
miles = [0, 1, 4, 9, 16, 25]

# create a line chart, hours on x-axis, miles on y-axis
plt.plot(hours, miles, color='green', marker='o', linestyle='solid')

# set chart title and label axes
plt.title("Distance Traveled")
plt.xlabel("Hours")
plt.ylabel("Miles")

# display the chart
plt.show()

# save chart to file
# plt.savefig("line_chart.png", dpi=150)
```