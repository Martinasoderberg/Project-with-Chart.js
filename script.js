// Our labels along the x-axis
var years = [2010,2011,2012,2013,2015,2016,2017];
// For drawing the lines, Revenue(in billion U.S.dollars)
var Nike = [11,13,13,14,16,18,19];
var Adidas = [7,8,9,9,8,9,11];
var Puma =[1,2,2,1,1,1,2];


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: Nike,
        label:'Nike',
        fill: false,
        borderColor: '#ff0000'
      },
    { 
        data: Puma,
        label:'Puma',
        fill: false,
        borderColor: '#00ff00'
      },
       { 
        data: Adidas,
        label:'Adidas',
        fill: false,
        borderColor: '#3e95cd'
      },
  

    ]

  },
	options:{
	scales:{
		yAxes:[{
			scaleLabel: {
				display: true,
				labelString: 'Revenue(in billion U.S. dollars)'
			}
		}]

		}
	
}

});