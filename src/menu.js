function createMenu(){
  const menu = document.createElement("div");
  menu.id = "menu";

  menu.appendChild(
    createItem(
      "Supreme",
      "mozzarella cheese, pepperoni, sausage, green bell peppers, onions, black olives, mushrooms, ground beef, olive oil, oregano"
    )
  )
  menu.appendChild(
    createItem(
      "Pepperoni",
      "mozzarella cheese, pepperoni slices, olive oil, oregano, basil (optional)"
    )
  )
  menu.appendChild(
    createItem(
      "Margherita",
      "fresh mozzarella cheese, fresh basil leaves, olive oil, salt, oregano (optional)"
    )
  )
  menu.appendChild(
    createItem(
      "Meat lovers",
      "mozzarella cheese, pepperoni, sausage, bacon, ham, ground beef, olive oil, oregano"
    )
  )
  menu.appendChild(
    createItem(
      "Funghi",
      "mozzarella cheese, mushrooms, garlic, olive oil, fresh parsley, salt, pepper"
    )
  )
  menu.appendChild(
    createItem(
      "Capricciosa",
      "mozzarella cheese, artichoke hearts, mushrooms, ham, olives, olive oil, oregano"
    )
  )
  return menu
}


function createItem(name, description){
  const container = document.createElement("div");
  container.classList.add("product");
  
  const pizzaName = document.createElement("h2");
  pizzaName.textContent = `${name}`;

  const pizzaDescription = document.createElement("p");
  pizzaDescription.textContent = `${description}`;

  const image = document.createElement("img");
  image.src = `./img/${name.toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, '-')}.jpg`;
  image.alt = `${name} pizza`;

  container.appendChild(image);
  container.appendChild(pizzaName);
  container.appendChild(pizzaDescription);

  return container
}

function loadMenu(){
  const content = document.getElementById("content");
  content.textContent = "";
  content.appendChild(createMenu());
}

export default loadMenu;