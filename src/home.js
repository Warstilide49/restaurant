function home(){
	const container=document.createElement("div");
	container.id='container';

	const welcome=document.createElement("div");
	welcome.textContent="Welcome, we hope you have a nice time here!";
	welcome.id='welcome'

	const image=document.createElement("img");
	image.id='bg';
	image.src="../dist/imgs/bg.jpg";

	container.appendChild(welcome);
	container.appendChild(image);
	return container;
}


export default home;