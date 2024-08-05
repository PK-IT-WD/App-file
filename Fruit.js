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