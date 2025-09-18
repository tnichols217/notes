from json import load
from pathlib import Path
import plotly.express as px


data = load(Path("./Albums.json").open())
print(data)

fig = px.box(data, y="total_bill")
fig.show()
