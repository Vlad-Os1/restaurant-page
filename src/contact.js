function createContact(){
  const contact = document.createElement("div");
  contact.id = "contact";

  contact.appendChild(createParagraph("Our contacts"));
  contact.appendChild(createParagraph("📞+1-123-456-7890"));
  contact.appendChild(createParagraph("✉loremIpsum@gmail.com"));

  return contact;
};

function createParagraph(text){
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
};

function loadContact(){
  const content = document.getElementById("content");
  content.textContent = "";
  content.appendChild(createContact());
};



export default loadContact