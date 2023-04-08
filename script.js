
const weight = document.getElementById('weight-input');
const items = document.getElementById('items');
const doneBtn = document.getElementById('doneBtn');
const displayField = document.getElementById('display-field');

const knapsack = {
    capacity: 0,
    items:[],
    weight: 0,
    value: 0
}

doneBtn.addEventListener('click', () => {
    knapsack.capacity = weight.value;
    weight.disabled = true
    console.log(knapsack)
})

const arr = [
    {name: 'Banana', weight:2, value:100},
    {name: 'Oranges', weight:4, value:50},
    {name: 'Lemon', weight:6, value:150},
    {name: 'Peach', weight:8, value:400},
    {name: 'Waterlemon', weight:10, value:500},
    {name: 'pineapple', weight:12, value:800},
    {name: 'Pawpaw', weight:14, value:350},
    {name: 'Mango', weight:16, value:75},
    {name: 'Apple', weight:18, value:350},
    {name: 'Kiwis', weight:20, value:100},
    {name: 'Grapes', weight:22, value:200}
]











