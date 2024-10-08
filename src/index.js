import "./styles.css"
import loadHome from "./home"
import loadMenu from "./menu"
import loadContact from "./contact"


function createHeader() {
  const header = document.createElement("header");
  const heading = document.createElement("h1");
  heading.textContent = "Pizzeria 🍕";
  
  
  header.appendChild(heading);
  header.appendChild(createNav())

  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  const buttons = [
    { text: "Home", loadFunction: loadHome},
    { text: "Menu", loadFunction: loadMenu},
    { text: "Contact", loadFunction: loadContact},
  ];
  
  buttons.forEach(({text, loadFunction}) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add("nav-button");

    button.addEventListener( "click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(button);
      loadFunction();
    });

    nav.appendChild(button);
  });

  return nav;
}


function setActiveButton (activeButton) {
  const buttons = document.querySelectorAll(".nav-button")

  buttons.forEach(button => {
    button.classList.toggle("active", button === activeButton);
  });
}


function init() {

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper")
  document.body.appendChild(wrapper);

  wrapper.appendChild(createHeader());
  setActiveButton(document.querySelector(".nav-button"));

  const content = document.createElement("div");
  content.id = "content";
  wrapper.appendChild(content);
  loadHome()

  const footer = document.createElement("footer");
  const footerParagraph = document.createElement("p");
  const gitHubLink = document.createElement("a");
  gitHubLink.textContent = "GitHub";
  gitHubLink.href = "https://github.com/Vlad-Os1/restaurant-page/tree/main";
  gitHubLink.target = "_blank";
  footerParagraph.textContent = "View project on ";
  footerParagraph.appendChild(gitHubLink);

  footer.appendChild(footerParagraph);

  wrapper.appendChild(footer);
}

init();