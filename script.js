const arrIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const eleForm = document.querySelector("form");
const eleSelect = document.querySelector("#options");
const container = document.querySelector(".container");
let arrTypeAnimal = [];
let arrTypeVegetables = [];
let arrTypeUser = [];

arrIcons.forEach(element => {
    const eleCard = document.createElement("div")
    eleCard.classList.add("card");
    eleCard.innerHTML += `
    <i class="${element.prefix}solid ${element.prefix}${element.name}"></i>
    <span class="icon-name">${element.name}</span>
    `;
    container.append(eleCard)
    if (element.type == "animal") {
        arrTypeAnimal.push(eleCard)
    } else if (element.type == "vegetable") {
        arrTypeVegetables.push(eleCard)
    } else if (element.type == "user") {
        arrTypeUser.push(eleCard)
    }
    eleCard.style.color = getRandomColor()

});

console.log(arrTypeAnimal);
console.log(arrTypeVegetables);
console.log(arrTypeUser);

eleForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (eleSelect.value == "animal") {
        arrTypeVegetables.forEach(element => element.classList.add("hidden"));
        arrTypeUser.forEach(element => element.classList.add("hidden"));
        arrTypeAnimal.forEach(element => element.classList.remove("hidden"));
    } else if (eleSelect.value == "vegetable") {
        arrTypeAnimal.forEach(element => element.classList.add("hidden"));
        arrTypeUser.forEach(element => element.classList.add("hidden"));
        arrTypeVegetables.forEach(element => element.classList.remove("hidden"));
    } else if (eleSelect.value == "user") {
        arrTypeAnimal.forEach(element => element.classList.add("hidden"));
        arrTypeVegetables.forEach(element => element.classList.add("hidden"));
        arrTypeUser.forEach(element => element.classList.remove("hidden"));
    } else {
        arrTypeAnimal.forEach(element => element.classList.remove("hidden"));
        arrTypeVegetables.forEach(element => element.classList.remove("hidden"));
        arrTypeUser.forEach(element => element.classList.remove("hidden"));
    }
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }