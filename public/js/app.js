const monedas = [
	{
		id: 1,
		nombre: 'Peso'
	},
	{
        id: 2,
        nombre: 'Dolar'
    },
	{
        id: 3,
        nombre: 'Euro'
    },
	{
        id: 4,
        nombre: 'Sol'
    },

];


const selectoresMonedas = () => {
	let monedaDesde = document.getElementById('monedaDesde');
	let monedahasta = document.getElementById('monedahasta');


	monedas.map(valor => {
		var opt1 = document.createElement("option");
		opt1.value = valor.id;
		opt1.text = valor.nombre;
		monedahasta.add(opt1, null);

		var newOption = document.createElement("option");
		newOption.value =  valor.id;
		newOption.text = valor.nombre;
		monedaDesde.appendChild(newOption);

		let {nombre} = valor;
		console.log(nombre);
	});
}


const changeConvertir = () => {
	let valor =  parseFloat(document.getElementById('cantidad').value);
	document.getElementById('valor').innerHTML = valor;

	let monedaDesde = document.getElementById('monedaDesde').value;
	let monedahasta = document.getElementById('monedahasta').value;

}

selectoresMonedas();