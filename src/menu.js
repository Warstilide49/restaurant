function menu(){
	const container=document.createElement("div");
	container.classList.add('food_container');
	const item1=createItem("../dist/imgs/food/food1.jpg","Burger with Coke!");
	const item2=createItem("../dist/imgs/food/food2.jpg","Good looking Pasta!");
	const item3=createItem("../dist/imgs/food/food3.jpg","Tasty yellow something!");
	const item4=createItem("../dist/imgs/food/food4.jpg","Healthy looking mess!");
	const item5=createItem("../dist/imgs/food/food5.jpg","Pancakes!");
	const item6=createItem("../dist/imgs/food/food6.jpg","Donuts!");

	container.appendChild(item1);
	container.appendChild(item2);
	container.appendChild(item3);
	container.appendChild(item4);
	container.appendChild(item5);
	container.appendChild(item6);
	return container;
}

function createItem(location,descrip){
	const container=document.createElement("div");
	container.classList.add('item_container');

	const img=document.createElement("img");
	img.src=location;
	img.height="180";
	img.classList.add('item_image');

	const text=document.createElement("div");
	text.textContent=descrip;
	text.classList.add('item_text');

	container.appendChild(img);
	container.appendChild(text);
	return container;
}

export default menu; 