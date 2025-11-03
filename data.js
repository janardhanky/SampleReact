// src/data.js

import chaiImage from "./assets/latte-coffee_1122-2728.avif";
import maggiImage from "./assets/Maggi.jpg";
import idliImage from "./assets/idli-recipe.jpg";
import dosaImage from "./assets/dosa.jpg";
import biryaniImage from "./assets/biryani.webp";

export const recipes = [
  {
    id: "chai",
    name: "Chai",
    time: 5,
    info1: "Simple Tea",
    info2: "Serves 2",
    info3: "Refreshing Morning Drink",
    image: chaiImage,
  },
  {
    id: "maggi",
    name: "Maggi",
    time: 10,
    info1: "Quick Noodles",
    info2: "Serves 1",
    info3: "Favorite Snack",
    image: maggiImage,
  },
  {
    id: "idli",
    name: "Idli",
    time: 15,
    info1: "Soft Rice Cakes",
    info2: "Serves 4",
    info3: "Healthy South Indian Dish",
    image: idliImage,
  },
  {
    id: "dosa",
    name: "Dosa",
    time: 20,
    info1: "Crispy Crepes",
    info2: "Serves 3",
    info3: "Perfect Breakfast",
    image: dosaImage,
  },
  {
    id: "biryani",
    name: "Biryani",
    time: 40,
    info1: "Rich Rice Dish",
    info2: "Serves 5",
    info3: "Aromatic & Flavorful",
    image: biryaniImage,
  },
];
