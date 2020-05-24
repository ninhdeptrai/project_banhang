var man = [
{ 
	id: 1 ,
	name: "Quần Nam",
	code: "40140120501",
	price :"2000",
	image: "https://bizweb.dktcdn.net/thumb/large/100/287/440/products/ractrack-black2.png"

},
{
	id: 2 ,
	name: "Quần Nam",
	code: "4023109602",
	price :"500000",
	image:"https://bizweb.dktcdn.net/thumb/large/100/287/440/products/warrior-short2.jpg"

},
{
	id: 3 ,
	name: "Quần Nam",
	code: "4012129202",
	price :"200000",
	image:"https://bizweb.dktcdn.net/thumb/large/100/287/440/products/warrior-jacket.png"

},
{
	id: 4 ,
	name: "Quần Nam",
	code: "40140120301",
	price :"200000",
	image:"https://bizweb.dktcdn.net/100/287/440/products/gheps-quan.jpg?v=1583070131670"

},

];
var women = [
{
	id: 1,
	name :"DSS JACKET ARCTIC DEVIL",
	code: "16209012001",
	price : "390.000₫",
	image:"https://bizweb.dktcdn.net/thumb/large/100/287/440/products/artic2.jpg"

},
{
	id: 2,
	name :"DSS HOODIE PREMIUM",
	code: "TC543235",
	price : "280.000₫",
	image:"https://bizweb.dktcdn.net/thumb/large/100/287/440/products/prem-hoodie.jpg"

},
{
	id: 3,
	name :"DSS TEE RAGLANT D DEVIL",
	code: "16228092001",
	price : "280.000₫",
	image:"https://bizweb.dktcdn.net/thumb/large/100/287/440/products/raglan2.jpg"

},
{
	id: 4,
	name :"DSS LS TEE DEVIL SKETCH",
	code: "16228091601",
	price : "280.000₫s",
	image:"https://bizweb.dktcdn.net/thumb/large/100/287/440/products/long.jpg"

},

];

function listProducts(){
	for (var i =  0; i <= man.length-1; i++) {
		var demo = '<div class="col-3">';
		demo += '<div class ="card" style="width: 18rem;">';
		demo += '<img src="'+man[i].image+'" class="card-img-top" style="height: 400px;">	';
		demo += '<div class="card-body">';
		demo += '<h5 class="card-title">'+man[i].name+'</h5>';
		demo += '<p class"card-text">'+man[i].price+'</p>';
		demo += '<a href="#" class ="btn btn-primary" onclick=order()">Dat mua </a>';
		demo += '</div>';
		demo += '</div>';
		demo += '</div>';
		
		console.log(demo);
		document.getElementById("man").innerHTML += demo;
		}
		for (var i =  0; i <= women.length-1; i++) {
		var demo = '<div class="col-3">';
		demo += '<div class ="card" style="width: 18rem;">';
		demo += '<img src="'+women[i].image+'" class="card-img-top" style="height: 400px;">	';
		demo += '<div class="card-body">';
		demo += '<h5 class="card-title">'+women[i].name+'</h5>';
		demo += '<p class"card-text">'+women[i].price+'</p>';
		demo += '<a href="#" class ="btn btn-primary" onclick=order()">Dat mua </a>';
		demo += '</div>';
		demo += '</div>';
		demo += '</div>';
		
		console.log(demo);
		document.getElementById("women").innerHTML += demo;
		}
	}