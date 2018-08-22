//https://mauriciopoppe.github.io/function-plot/

var parameters = {
	target: '#myFunction',
	data: [{
		fn: 'sin(x^2)', //first function
		color: 'red'
	},
	{
		fn: 'cos(x)', //second function
		color: 'blue'
	}],

	grid: true,
	yAxis: {domain: [-1, 1]},
	xAxis: {domain: [0, 2*Math.PI]}
};

functionPlot(parameters);

/*

functionPlot({
       target: '#myFunction',
       data: [{
       fn: 'sin(x)',
       color: 'red'
    }],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
});
*/