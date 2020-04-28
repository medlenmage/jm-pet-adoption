const pets = [
  {
    type: 'cat',
    name: 'Stache',
    color: "black and white",
    specialSkill: "being super chill",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/06/17/web-black-white-cat-alamy.jpg?w968h681"
  },
  
  {
    type: 'dog' ,
    name: 'Taco',
    color: 'Greyish Brown and White',
    specialSkill: 'cuddling', 
    image: 'https://cf.ltkcdn.net/dogs/images/orig/245944-2121x1414-Pitbull.jpg'

  },
  
  {
    type: 'dog',
    name: 'Tank',
    color: 'brindle',
    specialSkill: 'can jump really freaking high', 
    image: 'https://www.dogbreedplus.com/dog_breeds/images/bull_boxer.jpg'

  },
  
  {
    type: 'cat',
    name: 'cleopatra',
    color: 'cream white and dark brown',
    specialSkill: 'being sassy', 
    image: 'https://www.travelingwithyourcat.com/wp-content/uploads/2018/12/siamese-cat.jpg'

  },
  
  {
    type: 'bird',
    name: 'Ranger',
    color: 'grey and yellow',
    specialSkill: 'talks to much', 
    image: 'https://animals.net/wp-content/uploads/2019/06/Cockatiel-5-650x425.jpg'

  },
  
  {
    type: 'bird',
    name: 'Polly',
    color: 'Rainbow',
    specialSkill: 'really loves crackers', 
    image: 'https://bit.ly/2Vwt6ek'

  }
]


const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const petsToAdopt = () => {
  let domString = '';

  for (let i = 0; i < pets.length; i++) {
    domString += '<div class="adopt">';
    domString += `<header class="head"><h3>${pets[i].name}</h3></header>`
    domString += `<img class="petPic" src="${pets[i].image}">`
    domString += `<p class="color">${pets[i].color}</p>`
    domString += `<p class="specialskill">${pets[i].specialSkill}</p>`
    domString += `<footer class="petType">${pets[i].type}</footer>`
    domString += '</div>'
  }
  printToDom('#pet-adopt', domString);

}

const filterPets = (event) => {
  const buttonId = event.target.id;

  const tempPetCollection = [];

  if (buttonId === all) {
    petsToAdopt(pets);
    return
  }

  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === buttonId) {
      tempPetCollection.push(pets[i]);
    }
  }
  petsToAdopt(tempPetCollection)
}


const clickEvents = () => {
  document.querySelector('#all').addEventListener('click', filterPets);
  document.querySelector('#dog').addEventListener('click', filterPets);
  document.querySelector('#cat').addEventListener('click', filterPets);
  document.querySelector('#bird').addEventListener('click', filterPets);
}

const init = () => {
  petsToAdopt(pets);
  clickEvents();
}

init();
