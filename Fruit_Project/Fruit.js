const main_heading = document.getElementById('main-heading');
main_heading.textContent = 'Fruit World';
main_heading.style.color = 'orange';

const header = document.getElementById('header');
header.style.backgroundColor = 'green';
header.style.borderBottom = 'orange';

const basket_heading = document.getElementById('basket-heading');
basket_heading.style.color = 'green';

const thanks = document.getElementById('thanks');
thanks.innerHTML = '<p>Please visit us again</p>'

const fruit = document.getElementsByClassName('fruit');
fruit[2].style.backgroundColor = 'yellow';

for(let i = 0; i < fruit.length; i++) {
  fruit[i].style.fontWeight = 'bold';
}

const link_items = document.getElementsByTagName('li');
link_items[4].style.color = 'blue';

for (let i = 0; i < link_items.length; i++) {
  link_items[i].style.fontStyle = 'italic';
}

const main_heading = document.querySelector('#main-heading');
main_heading.style.textAlign = 'center';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const basket_heading = document.querySelector('h2');
basket_heading.style.marginLeft = '30px';

const fruit_items = document.querySelectorAll('.fruit');

for (let i = 0; i < fruit_items.length; i++) {
  fruit_items[i].style.backgroundColor = 'white';
  fruit_items[i].style.padding = '10px';
  fruit_items[i].style.margin = '10px';
  fruit_items[i].style.borderRadius = '5px';
}

basket_heading.style.color = 'brown';

const even_fruits = document.querySelectorAll('.fruit:nth-child(even)');

for (let i = 0; i < even_fruits.length; i++) {
  even_fruits[i].style.backgroundColor = 'brown';
  even_fruits[i].style.color = 'white';
}

const h3 = document.createElement('h3');
const text01 = document.createTextNode('Buy high quality organic fruits online');
h3.appendChild(text01);

const div = document.getElementsByTagName('div');
const div01 = div[0];
div01.appendChild(h3);

h3.style.fontStyle = 'italic';

const p = document.createElement('p');
const text02 = document.createTextNode('Total fruits: 4');
p.appendChild(text02);

const div02 = div[1];
const fruits = document.querySelector('.fruits');
const basket_heading = document.getElementById('basket-heading');
div02.insertBefore(p, fruits);

p.id = 'fruits-total';

const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const fruit_to_add = document.getElementById('fruit-to-add');
  const list = document.createElement('li');
  list.className = 'fruit'; // Add the 'fruit' class to the list item

  // Create a span to hold the fruit name
  const fruitNameSpan = document.createElement('span');
  fruitNameSpan.textContent = fruit_to_add.value + ' ';

  // Create the delete button
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-btn';
  deleteButton.textContent = 'x';

  // Create the edit button
  const editButton = document.createElement('button');
  editButton.className = 'edit-btn';
  editButton.textContent = 'Edit';

  // Append the span and buttons to the list item
  list.appendChild(fruitNameSpan);
  list.appendChild(deleteButton);
  list.appendChild(editButton);

  // Append the list item to the fruits list
  fruits.appendChild(list);
});

fruits.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const fruit_deletion = event.target.parentElement;
    fruits.removeChild(fruit_deletion);
  }
});