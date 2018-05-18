var p2 = new Promise(function(resolve, reject)

p.then(){
    lookupPrice(123).then((price) => {
    console.log(`The price is ${price}`);   
}, () => {
    console.log(`Sorry we were unable to find that item`);   
}) // This prints 'Sorry we were unable to find that item'
}