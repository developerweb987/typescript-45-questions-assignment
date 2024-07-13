// Exercise 21

interface item {
    name:string
    price:number
}
const Mobile: item ={
    name: 'Vivo S1',
    price: 25000
}

const Bike: item ={
    name: 'Unique 70',
    price: 85000
}

console.log(`Mobile name: ${Mobile.name}, price: ${Mobile.price}`)
console.log(`Bike name: ${Bike.name}, price: ${Bike.price}`)