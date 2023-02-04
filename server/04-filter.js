const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('newArray', newArray);
console.log('original', words);

const calidad = words.filter(item => (item.length>= 6));
console.log('newArray', calidad);
const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
    },
];
const rta= orders.filter(item=> (item.delivered && item.total <70))
console.log('newArray', rta);
console.log('original', orders);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

// console.log(search('Nico'));
console.log(search('hsdjkfhdsj'));


