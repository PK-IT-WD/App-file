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