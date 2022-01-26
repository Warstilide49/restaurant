import home from "./home.js";
import menu from "./menu.js"
import contact from "./contact.js"

function createHeader(){
	const header=document.createElement("div");
	header.id='header';

	const name=document.createElement("div");
	name.textContent="Classic Restaurant";
	name.id='name';

	const tabs=document.createElement("div");
	tabs.id='tabs';

	const home=document.createElement("div");
	home.addEventListener("click",bring_home);
	home.textContent="Home";
	home.id='home';

	const menu=document.createElement("div");
	menu.addEventListener("click",bring_menu);
	menu.textContent="Menu";
	menu.id='menu';

	const contact=document.createElement("div");
	contact.addEventListener("click",bring_contact);
	contact.textContent="Contact";
	contact.id='home';

	tabs.appendChild(home);
	tabs.appendChild(menu);
	tabs.appendChild(contact);

	header.appendChild(name);
	header.appendChild(tabs);
	return header;
}

function footer(){
	const footer=document.createElement("div");
	footer.id='footer';
	footer.textContent="@warstilide49";
	return footer;
}

function bring_home(){
	const content=removeChildren();
    content.appendChild(createHeader());
    content.appendChild(home());
    content.appendChild(footer());
}

function bring_menu(){
	const content=removeChildren();
    content.appendChild(createHeader());
    content.appendChild(menu());
    content.appendChild(footer());
}

function bring_contact(){
	const content=removeChildren();
    content.appendChild(createHeader());
    content.appendChild(contact());
    content.appendChild(footer());
}

function removeChildren(){
	const content=document.getElementById("content")
	let child = content.lastElementChild; 
    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
    return content;
}

function initialSite(){
	const content=document.getElementById("content")
	content.appendChild(createHeader());
	content.appendChild(home());
	content.appendChild(footer());
}


initialSite();