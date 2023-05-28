// all images imported from images directory
import product_01_image_01 from "../images/product_001.jpg";
import product_01_image_02 from "../images/product_001.1.jpg";
import product_02_image_01 from "../images/product_2.01.jpg";
import product_03_image_01 from "../images/product_3.01.jpg";
import product_03_image_02 from "../images/product_3.02.jpg";
import product_04_image_01 from "../images/product_4.01.jpg";
import product_05_image_01 from "../images/product_5.01.jpg";
import product_06_image_01 from "../images/product_6.01.jpg";
import product_07_image_01 from "../images/product_7.01.jpg";
import product_08_image_01 from "../images/product_8.01.jpg";
import product_09_image_01 from "../images/product_9.01.jpg";
import product_10_image_01 from "../images/product_10.1.jpg";
import product_11_image_01 from "../images/product_11.1.jpg";
import product_12_image_01 from "../images/product_12.1.jpg";
import product_13_image_01 from "../images/product_13.1.jpg";
import product_14_image_01 from "../images/product_14.1.jpg";
import product_15_image_01 from "../images/product_15.1.jpg";
import product_16_image_01 from "../images/product_16.1.jpg";
import product_17_image_01 from "../images/product_17.1.jpg";
import product_18_image_01 from "../images/product_18.1.jpg";
import product_19_image_01 from "../images/product_19.1.jpg";
import product_20_image_01 from "../images/product_20.1.jpg";
import product_21_image_01 from "../images/product_21.1.jpg";
import product_22_image_01 from "../images/product_22.1.jpg";
import product_23_image_01 from "../images/product_23.1.jpg";
import product_24_image_01 from "../images/product_24.1.jpg";
import product_25_image_01 from "../images/product_25.1.jpg";
import product_26_image_01 from "../images/product_26.1.png";
import product_27_image_01 from "../images/product_27.1.png";
import product_28_image_01 from "../images/product_28.1.png";
import product_29_image_01 from "../images/product_29.1.png";
import product_30_image_01 from "../images/product_30.1.png";
import product_31_image_01 from "../images/product_31.1.png";
import product_32_image_01 from "../images/product_32.1.png";
import product_33_image_01 from "../images/product_33.1.jpg";
import product_34_image_01 from "../images/product_34.1.jpg";




const products = [
  {
    id: "01",
    title: "Sinigang na Bangus",
    price: 380,
    image01: product_09_image_01,
    category: "Filipino Food",
    desc: "A tamarind-based soup that is known for its sour and savory taste.",
  },
  {
    id: "02",
    title: "Bulalo",
    price: 490,
    image01: product_02_image_01,
    category: "Filipino Food",
    
    desc: "A light colored soup that is made by cooking beef shanks and marrow bones",
  },
  {
    id: "03",
    sub: "03",
    title: "Sinigang na Baboy",
    price: 345,
    image01: product_11_image_01,
    category: "Filipino Food",
    
    desc: "A sour soup with pork ribs, vegetables, and tamarind-flavored broth.",
  },
  {
    id: "04",
    title: "Beef Kare-Kare",
    price: 490,
    image01: product_04_image_01,
    category: "Filipino Food",
    
    desc: "A stew complimented with a thick savory peanut sauce.",
  },
  {
    id: "05",
    title: "Lechon Kawali",
    price: 240,
    image01: product_05_image_01,
    category: "Filipino Food",
    desc: "A pork dish deep-fried to golden perfection.",
  },
  {
    id: "06",
    title: "Roasted Chicken",
    price: 330,
    image01: product_06_image_01,
    category: "Filipino Food",
    desc: "A roasting whether in a home kitchen, over a fire, or with a rotisserie (rotary spit).",
  },
  {
    id: "07",
    sub: "01",
    title: "Crispy Pata",
    price: 730,
    image01: product_01_image_01,
    image02: product_01_image_02,
    category: "Filipino Food",
    
    desc: "A pork-lover's delight—crunchy pork skin enclosing savory tender meat.",
  },
  {
    id: "08",
    title: "Sizzling Sisig",
    price: 290,
    image01: product_03_image_01,
    image02: product_03_image_02,
    category: "Filipino Food",
    
    desc: "A street food of chopped pig parts and chicken livers tossed with a spicy and sour dressing",
  },
  {
    id: "09",
    sub: "02",
    title: "Grilled Bangus",
    price: 320,
    image01: product_07_image_01,
    category: "Filipino Food",
    
    desc: "It is grilled with stuffing made of spices, and then wrapped in aluminum foil to aid in the cooking process.",
  },
  {
    id: "10",
    title: "Shrimp Tofu Oriental",
    price: 440,
    image01: product_08_image_01,
    category: "Filipino Food",
    desc: "The silky bean curd nuggets are lightly fried until golden, then smothered in a thick prawn and scallop sauce",
  },
  {
    id: "11",
    title: "Beef Kaldereta",
    price: 380,
    image01: product_10_image_01,
    
    category: "Filipino Food",
    desc: "Beef stewed in tomato with potato, carrot, olives, bell peppers, and liver spread.",
  },
  {
    id: "12",
    title: "Pinakbet",
    sub: "04",
    price: 220,
    image01: product_12_image_01,
    
    category: "Filipino Food",
    desc: "Mixed fresh vegetables stir fried with a little sweet bagoong",
  },
  {
    id: "13",
    title: "Pork Katsudon",
    price: 245,
    image01: product_13_image_01,
    
    category: "Japanese Food",
    
    desc: " a Japanese pork cutlet rice bowl made with Tonkatsu, eggs, and sauteed onions simmered in a sweet and savory sauce.",
  },
  {
    id: "14",
    title: "Beef Ramen",
    price: 320,
    image01: product_14_image_01,
    
    category: "Japanese Food",
    
    desc: "a Japanese noodle soup, with a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats or vegetables, often topped with a boiled egg.",
  },
  {
    id: "15",
    title: "Chicken Teriyaki",
    price: 245,
    image01: product_15_image_01,
    
    category: "Japanese Food",
    
    desc: "Griddle cooked slices of chicken fillet topped with our original Teriyaki sauce served over steamed Japanese rice.",
  },
  {
    id: "16",
    title: "Gyudon",
    price: 245,
    image01: product_16_image_01,
    
    category: "Japanese Food",
    
    desc: "Thin strips of tender beef, slowly simmered in our signature gyudon sauce served over Japanese rice",
  },
  {
    id: "17",
    title: "Prawn Tempura",
    price: 290,
    image01: product_17_image_01,
    
    category: "Japanese Food",
    
    desc: " Crispy fried shrimp coated in our traditional Japanese style tempura batter served over steamed Japanese rice",
  },
  {
    id: "18",
    title: "Beef Yakiniku",
    price: 245,
    image01: product_18_image_01,
    
    category: "Japanese Food",
    
    desc: "Grilled slices of tender beef glazed with our sweet Yakiniku sauce served over steaming Japanese rice",
  },
  {
    id: "19",
    title: "Chicken Karaage",
    price: 275,
    image01: product_19_image_01,
    
    category: "Japanese Food",
    
    desc: "Crispy Japanese Style Fried Chicken. Thick cuts of chicken thigh marinated in special marinade, deep-fried until crisp golden brown. Served over steamed Japanese rice",
  },
  {
    id: "20",
    title: "Togarashi Pork",
    price: 245,
    image01: product_20_image_01,
    
    category: "Japanese Food",
    
    desc: "Thin strips of pork belly, slowly simmered in mildly sweet-savory sauce, topped with Togarashi & Sesame Chili oil. Served over steamed Japanese rice",
  },
  {
    id: "21",
    title: "Chicken Karaage Bento",
    price: 380,
    image01: product_21_image_01,
    
    category: "Japanese Food",
    
    desc: "Crispy Japanese Style Fried Chicken served with steamed Japanese rice, Kani Salad, Sweet Potato Tempura and Coffee Jelly",
  },
  {
    id: "22",
    title: "Prawn Tempura Bento",
    price: 380,
    image01: product_22_image_01,
    category: "Japanese Food",
    desc: "Crispy shrimp tempura served with steamed Japanese rice, Kani Salad, Sweet Potato Tempura and Coffee Jelly",
  },

  {
    id: "23",
    title: "Chicken Cacciatore",
    price: 720,
    image01: product_31_image_01,
    category: "Italian Food",
    desc: "Roasted chicken, onions, bellpeppers, mushrooms simmered in rich red wine tomato sauce",
  },


  {
    id: "24",
    title: "Minestrone Bouillon",
    price: 280,
    image01: product_32_image_01,

    category: "Italian Food",

    desc: "Basil, pesto, maccheroni pasta, grated parmesan cheese",
  },

  {
    id: "25",
    title: "Herb Chicken Milanese",
    price: 720,
    image01: product_30_image_01,

    category: "Italian Food",

    desc: "Grilled chicken breast, spinach gorgonzola , cream sauce, tomato balsamic relish",
  },
  {
    id: "26",
    title: "Toasted Ravioli",
    price: 540,
    image01: product_26_image_01,
    
    category: "Italian Food",
    
    desc: "Filled ravioli, marinara sauce, basil pesto",
  },

  {
    id: "27",
    title: "Salmon Oreganato",
    price: 780,
    image01: product_27_image_01,

    category: "Italian Food",

    desc: "Salmon fllet, rosemary potatoes, sautéed vegetables",
  },

  {
    id: "28",
    title: "Mussels Lombardi",
    price: 445,
    image01: product_28_image_01,

    category: "Italian Food",

    desc: "Mussels, white wine, olive oil, garlic, butter, herbs, toasted garlic bread",
  },

  {
    id: "29",
    title: "Parmesan Crusted Fish Fillet",
    price: 680,
    image01: product_29_image_01,

    category: "Italian Food",

    desc: "White fsh fllet with parmesan cheese breading, mashed potatoes, vegetables, caper cream sauce",
  },

  {
    id: "30",
    title: "Crispy Chicken Au Poivre",
    price: 680,
    image01: product_31_image_01,

    category: "Italian Food",

    desc: "Grilled pepper-crusted pork chops, rosemary potatoes, carrots, crispy-fried spinach, wild mushroom, marsala wine sauce and steamed rice",
  },

  {
    id: "31",
    title: "Tuna Garganelli",
    price: 780,
    image01: product_27_image_01,

    category: "Italian Food",

    desc: "Romaine, arugula, cherry tomatoes, walnuts, feta, grapes, parmesan, balsamic vinaigrette dressing",
  },

  {
    id: "32",
    title: "Spaghetti Meat balls",
    price: 540,
    image01: product_25_image_01,

    category: "Italian Food",

    desc: "A famous huge homemade meatballs, spaghetti, marinara sauce.",
  },

  {
    id: "33",
    title: "Truffle Chicken Pasta",
    price: 620,
    image01: product_23_image_01,

    category: "Italian Food",

    desc: "Fettuccine pasta, creamy truffe sauce, grilled chicken",
  },

  {
    id: "34",
    title: "Chicken Parmigiana",
    price: 580,
    image01: product_24_image_01,

    category: "Italian Food",

    desc: "Parmesan crusted chicken, mozzarella, spaghetti marinara",
  },

  {
    id: "35",
    title: "Gyoza",
    price: 160,
    image01: product_33_image_01,

    category: "Japanese Food",

    desc: "Japanese style dumplings made with tender pork and a combination of fresh vegetables",
  },

  {
    id: "36",
    title: "Kani salad",
    price: 105,
    image01: product_34_image_01,

    category: "Japanese Food",

    desc: "Crab stick salad with sweet fresh mango cubes, crisp lettuce and cucumber, fresh Tobiko and Japanese mayonnaise",
  },


];

export default products;