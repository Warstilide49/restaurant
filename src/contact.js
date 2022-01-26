function contact(){
	const container=document.createElement("div");
	container.id='contact';

	const info=document.createElement("div");
	info.textContent="Please contact us through these platforms:";

	const icons=document.createElement("img");
	icons.src="../dist/imgs/icons.png";
	icons.height=100;
	icons.id='icons';

	const location=document.createElement("div");
	location.textContent="Or visit us at Classic Restaurant, Antartica, Earth";

	container.appendChild(info);
	container.appendChild(icons);
	container.appendChild(location);

	return container;
}

export default contact;