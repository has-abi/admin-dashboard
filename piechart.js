var pieChart = new am4core.create("pieChart",am4charts.PieChart);

pieChart.data = [
    {
        "car":"Mazda",
        "sales":501,
        "color":am4core.color("indigo")
    },
    {
        "car":"Audi",
        "sales":301,
        "color":am4core.color("#8e02f5")
    },
    {
        "car":"Bmw",
        "sales":100,
        "color":am4core.color("#6900b8")
    },
    {
        "car":"Mazirati",
        "sales":165,
        "color":am4core.color("#390163")
    }
]

//add series

var pieSeries = pieChart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "sales";
pieSeries.dataFields.category = "car";
pieSeries.slices.template.propertyFields.fill = "color";

pieChart.legend = new am4charts.Legend();