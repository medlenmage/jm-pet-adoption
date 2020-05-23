# Pet Adoption

## Description
This is a small assignment which uses a loop to build simple cards and print them to the dom of the site.

---

### Features
* showcases six unique cards that feature a diffirent pent on each.
* cards are evenly space in 2 rows across the page
* buttons at the top meant to filter the pet cards(still a work in progress)

---

### How to run
1. clone down the repo
2. using hs command in console load server and choose from the two
3. in browser go to local host where it is being held

---

## Contributors
* [Joshua Medlen](https://github.com/medlenmage)

## To-Do
- [] gather images and bits of information on a few dogs, birds, and cats.
- [] build an array of pets with the given information.
- [] build a loop that goes through the pets array and builds a card that prints to the dom

---

## Code Example

```
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
```
