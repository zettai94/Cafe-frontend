import biscoffImg from '../../../assets/images/biscoffTiramisu.png';
import sconesImg from '../../../assets/images/scones.png';
import kyotoImg from '../../../assets/images/kyotosSummer.png';
import smoresImg from '../../../assets/images/smoresChocolatePie.png';
import carrotImg from '../../../assets/images/carrotWalnutCake.png';
import mangoImg from '../../../assets/images/mangoCheesecake.png';
import coffeeImg from '../../../assets/images/coffee.jpg';
import hotChocoImg from '../../../assets/images/hotChoco.png';
import pumpkinImg from '../../../assets/images/halloweenPumpkin.png';

export const menu = [
  {
    picture: biscoffImg,
    title: "Biscoff Tiramisu",
    description: "Classic tiramisu with a twist",
  },
  {
    picture: sconesImg,
    title: "Cranberry Scones",
    description: "Flaky & buttery, cranberries & hint of orange",
  },
  {
    picture: kyotoImg,
    title: "Kyoto's Summer",
    description: "Creamy & rich matcha cake with adzuki bean, & mochi base",
  },
  {
    picture: smoresImg,
    title: "S'mores Chocolate Pie",
    description: "Classic s'mores but a pie!",
  },
  {
    picture: carrotImg,
    title: "Carrot Walnut Cake",
    description: "Classic carrot walnut cake with cranberries and coconut flakes",
  },
  {
    picture: mangoImg,
    title: "Mango Cheesecake",
    description: "Chilled cheesecake with mango puree & cubes",
  }
];

export const coffee = [
  {
    title: "Coffee",
    image: coffeeImg,
    items: [
      {
        name: "Latte",
        price: "$ 4.25",
      },
      {
        name: "Flat White",
        price: "$ 4.25",
      },
      {
        name: "Cappuccino",
        price: "$ 4.50",
      },
      {
        name: "Espresso",
        price: "$ 2.75",
      }
    ]
  }
];

export const non_coffee = [
  {
    title: "Non-Coffee",
    image: hotChocoImg,
    items: [
      {
        name: "Hot Chocolate",
        price: "$ 4.75",
      },
      {
        name: "Matcha Latte",
        price: "$ 4.75",
      },
      {
        name: "Strawberry Milkshake",
        price: "$ 5.50",
      },
      {
        name: "Chai Latte",
        price: "$ 4.75",
      }
    ]
  }
];

export const baked = [
  {
    title: "Cakes & Pastries",
    image: pumpkinImg,
    items: [
      {
        name: "Cranberry Scones",
        price: "$ 3.00",
      },
      {
        name: "Kyoto's Summer",
        price: "$ 5.25",
      },
      {
        name: "Biscoff Tiramisu",
        price: "$ 5.50",
      },
      {
        name: "Mango Cheesecake",
        price: "$ 6.25",
      }
    ]
  }
];