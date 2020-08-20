//init of chart
var xychart = am4core.create("xyChart",am4charts.XYChart);
//chart data
xychart.data = [
    {
    "name":"Mazda",
    "sales":500,
    "reputation":130
    },
    {
        "name":"Audi",
        "sales":1800,
        "reputation":100
    },
    {
        "name":"Ronault",
        "sales":600,
        "reputation":90
    },
    {
        "name":"Mercides",
        "sales":700,
        "reputation":260
    },
    {
        "name":"Mazirati",
        "sales":300,
        "reputation":180
    },
    {
        "name":"Bmw",
        "sales":1800,
        "reputation":300
    }
    
]

//add colors
xychart.colors.list=[
    am4core.color("indigo"),
    am4core.color("#8e02f5"),
 ]

//create category
 var categoryAxis = xychart.xAxes.push(new am4charts.CategoryAxis());
 categoryAxis.dataFields.category = "name";
 categoryAxis.title.text = "Cars";

 //center the bar inside the grid
 categoryAxis.renderer.grid.template.location = 0;
 categoryAxis.renderer.minGridDistance = 20;

// value axis
var valueAxis = xychart.yAxes.push(new am4charts.ValueAxis())
valueAxis.title.text = "Sales & Reputation";

// first chart series that takes sales as values

var series = xychart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "sales";
series.dataFields.categoryX = "name";
series.name = "sales";
series.tooltipText = "sales[bold] : {valueY}";
series.stacked = true;


//second series takes reputation
var series2 = xychart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "reputation";
series2.dataFields.categoryX = "name";
series2.name = "Reputation";
series2.tooltipText = "reputation[bolde] : {valueY}";
series2.stacked = true;
console.log(series2);

//activate chart cursor
xychart.cursor = new am4charts.XYCursor();
valueAxis.cursorTooltipEnabled = true;