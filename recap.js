//Variable
var bottleColor = 'yellow';
var waterQuantity = 1;
var isFull = false;

//Array
var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('paper'); // -1
items.indexOf('pen');
console.log(items);
items.push('ketli');
console.log(items);
items.pop();
console.log(items);
var lengthOfItems = items.length;
console.log(lengthOfItems);

//conditional
if (items.length >= 4) {
    console.log('You have too many stuff on your desk');
}
else if (items.length == 4) {
    onsole.log('You have one hali items');
}
else {
    console.log('Wow you have a clean desk');
}