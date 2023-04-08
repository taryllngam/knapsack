
const weight = document.getElementById('weight-input');
const items = document.getElementById('items');
const doneBtn = document.getElementById('doneBtn');
const display = document.querySelector('.displayField');

const knapSack = {
    capacity: 0,
    items:[],
    weight: 0,
    value: 0
}

doneBtn.addEventListener("click", () => {
    if (weight.value == "") {
        weight.style.border = "2px solid red"
        weight.placeholder = "please enter a weigth"
    }else {
        knapSack.capacity = weight.value;
        weight.disabled = true;


        items.addEventListener("change", () => {
            for (let i = 0; i < arr.length; i++){
                if (items.value == arr[i].name){
                    if (arr[i].weight + knapSack.weight < knapSack.capacity) {
                        knapSack.items.push(arr[i]);
                        knapSack.weight += arr[i].weight;
                        knapSack.value += arr[i].value;
                    } else if (arr[i].weight + knapSack.weight == knapSack.capacity) {
                        display.style.background = "red";
                        items.disabled = true
                    } else {
                        alert ('This item will overfill the knapSack')
                    }console.log(items.value)

                }
            }
            display.innerHTML = knapSack.weight + ' ' + "is the weight" + ',' + knapSack.value + ' ' + 'is the vlaue';
        })
        display.innerHTML += knapSack.weight + ' ' + "is the weight" + ',' + knapSack.value + ' ' + 'is the vlaue';
    }
    
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

console.log(knapSack)










