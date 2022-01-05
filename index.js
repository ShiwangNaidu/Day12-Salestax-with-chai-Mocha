let input = {
  BookSS: {
    price: 27.99,
    qty: 1,
    imp: true
  },
  MusicCD: {
    price: 18.99,
    qty: 1,
    imp: false
  },
  Chocolate: {
    price: 11.25,
    qty: 1,
    imp: true
  },
  Pills: {
    price: 9.75,
    qty: 1,
    imp: false
  }
}
let output = {};
let finaloutput = {};
let salesTax = 0;
let total = 0;

for (data in input) {

  if (data != "Book" && data != "Chocolate" && data != "Pills") {
    salesTax += 0.1 * input[data].price;
    output[data] = {
      price: Number((0.1 * input[data].price + input[data].price).toFixed(2)),
      qty: input[data].qty,
      imp: input[data].imp
    }


  }
  else {
    output[data] = {
      price: (input[data].price),
      qty: input[data].qty,
      imp: input[data].imp
    }


  }
  if (input[data].imp == true) {
    salesTax += 0.05 * output[data].price;
    output[data] = {
      price: Number((0.05 * output[data].price + output[data].price).toFixed(2)),
      qty: input[data].qty,
      imp: input[data].imp
    }
  }
  total += output[data].price;
}

module.exports={
  output:()=>{
    return output;
  },
  total:()=>{
    return total;
  },
  salesTax:()=>{
    return salesTax.toPrecision(3)
  }
}
console.log(output)
console.log(total);
console.log(salesTax.toPrecision(3));