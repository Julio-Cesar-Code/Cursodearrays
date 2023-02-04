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
];

// const total = orders.map(item => item.total);
// console.log(total);
// const calidad = orders[0].customerName;
// console.log(calidad);
// const tax = orders.map(item=>item.tax=.19)
// console.log(tax);
// const rta2 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("rta2", rta2);
// console.log("original", orders);
const rta2 = orders.map((item) => {
  
    return { ...item, tax: 0.19 };
});
console.log("rta2", rta2);
console.log("original", orders);
