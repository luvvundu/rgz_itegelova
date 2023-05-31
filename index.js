const table = document.getElementById("table");
const minSpan = document.getElementById("min_price");
const maxSpan = document.getElementById("max_price");

const finances = [
  {date: "12.07.2022", price: 5.555},
  {date: "12.07.2021", price: 6.915},
  {date: "24.07.2020", price: 10.725},
  {date: "21.06.2019", price: 7.77},
  {date: "04.01.2019", price: 6.925},
  {date: "05.10.2018", price: 6.99},
  {date: "25.05.2017", price: 7.715},
  {date: "12.09.2016", price: 4.85},
];
let min = finances[0].price;
let max = finances[0].price;
for(let i = 0; i < finances.length; i++) {
  const element = document.createElement("tr");
  element.innerHTML = `<p>${finances[i].date}: ${finances[i].price}</p>`;
  table.append(element);

  if(finances[i].price < min) min = finances[i].price;
  if(finances[i].price > max) max = finances[i].price;
}

minSpan.innerHTML = min;
maxSpan.innerHTML = max;