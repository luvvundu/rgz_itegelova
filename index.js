const table = document.getElementById("table");
const minSpan = document.getElementById("min_price");
const maxSpan = document.getElementById("max_price");

const finances = [
  {date: "01.01.1970", price: 103},
  {date: "02.01.1970", price: 113},
  {date: "03.01.1970", price: 143},
  {date: "04.01.1970", price: 83},
  {date: "05.01.1970", price: 323},
  {date: "06.01.1970", price: 133},
  {date: "07.01.1970", price: 185},
  {date: "08.01.1970", price: 199},
];
let min = finances[0].price;
let max = finances[0].price;
for(let i = 0; i < finances.length; i++) {
  const element = document.createElement("p");
  element.innerHTML = `<p>${finances[i].date}: ${finances[i].price}</p>`;
  table.append(element);

  if(finances[i].price < min) min = finances[i].price;
  if(finances[i].price > max) max = finances[i].price;
}

minSpan.innerHTML = min;
maxSpan.innerHTML = max;