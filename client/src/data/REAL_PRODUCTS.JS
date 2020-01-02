//MY FAVORITE SO FAR: an object of objects with array of objects
const REAL_PRODUCTS = {
  laptops: [
    {
      name: "macbook pro",
      votes: 12344
    },
    {
      name: "surface pro",
      votes: 10444
    }
  ],
  mice: [
    {
      name: "logitech mouse",
      votes: 356
    },
    {
      name: "razer mouse",
      votes: 234
    }
  ]
};

//an array with objects with all the products
const REAL_PRODUCTS2 = [
  {
    id: 1,
    name: "Mx Master",
    image: "logitech.png",
    votes: 16450,
    description: "This is the best mouse in the market right now"
  },
  {
    id: 2,
    name: "MacBook Pro 2019",
    image: "macbook.png",
    votes: 21599,
    description:
      "Apple keeps delivering the best quality in laptops in the market"
  }
];

//an array that builds up from all the products
const REAL_PRODUCTS3 = [
  "import {laptops} from ./laptops.js",
  "import {mice} from ./mice.js"
];
