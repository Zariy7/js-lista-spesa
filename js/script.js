let groceries = ['Meat', 'Fish', 'Grains', 'Bread', 'Oil',  'Fat', 'Dairy',  'Eggs', 'Tinned Produce',  'Dried Produce', 'Condiments'];
let count = 0;
let ul = document.getElementById('groceries');

while(count<groceries.length){
    let li = document.createElement('li');
    li.setAttribute('class', `list-group-item`);
    li.innerText = `${groceries[count]}`;
    ul.appendChild(li);
    count++;
}