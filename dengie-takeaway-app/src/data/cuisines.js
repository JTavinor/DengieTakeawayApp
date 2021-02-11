import italianBackground from "../assets/pizzaBanner.jpg";
import indianBackground from "../assets/curryBanner.jpg";
import chineseBackground from "../assets/chineseBanner.jpg";

export const restaurants = [
  {
    name: "Italian",
    background: italianBackground,
    restaurants: [
      { name: "Mellows", open: "14:00-21:00", start: 10, close: 21 },
      { name: "Pizza Island", open: "09:00-12:00", start: 9, close: 14 },
      { name: "WAWA", open: "17:00-23:00", start: 5, close: 23 },
    ],
  },
  {
    name: "Indian",
    background: indianBackground,
    restaurants: [
      { name: "Curry Cottage", open: "19:00-01:00", start: 5, close: 1 },
      { name: "Polash", open: "14:00-21:00", start: 5, close: 21 },
    ],
  },
  {
    name: "Chinese",
    background: chineseBackground,
    restaurants: [
      { name: "Oriental House", open: "14:00-21:00", start: 5, close: 21 },
      { name: "Rickshaw", open: "14:00-21:00", start: 5, close: 21 },
    ],
  },
];

export const menus = {
  pizzaIsland: [
    {
      category: "Wiener",
      description: "Lovely jubbly drinks",
      items: [
        {
          itemName: "Coke",
          itemDescription: "Coca Cola",
          itemPrice: 4,
        },
        {
          itemName: "Water",
          itemDescription: "",
          itemPrice: 2.5,
        },
      ],
    },
    {
      category: "Starters",
      description: "",
      items: [
        {
          itemName: "Onion Bhajis",
          itemDescription: "Bhaji bahji bongos",
          itemPrice: 3.8,
        },
        {
          itemName: "Samosas",
          itemDescription: "Yummy",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Main",
      description: "Maindishes",
      items: [
        {
          itemName: "Korma",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
          itemOptions: { Lamb: 7, Chicken: 6, Vegetable: 5 },
        },
        {
          itemName: "Vindaloo",
          itemDescription: "Very hot!",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Sides",
      description: "Side dishes",
      items: [
        {
          itemName: "Pilau Rice",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
        },
        {
          itemName: "Channa Masala",
          itemDescription: "Chickpeas",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Breads",
      description: "Side dishes",
      items: [
        {
          itemName: "PPeshwari Nan",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
        },
        {
          itemName: "Channa Masala",
          itemDescription: "Chickpeas",
          itemPrice: 3.6,
        },
      ],
    },
  ],
  mellows: [
    {
      category: "Drinks",
      description: "Lovely jubbly drinks",
      items: [
        {
          itemName: "Coke",
          itemDescription: "Coca Cola",
          itemPrice: 4,
        },
        {
          itemName: "Water",
          itemDescription: "",
          itemPrice: 2.5,
        },
      ],
    },
    {
      category: "Starters",
      description: "",
      items: [
        {
          itemName: "Onion Bhajis",
          itemDescription: "Bhaji bahji bongos",
          itemPrice: 3.8,
        },
        {
          itemName: "Samosas",
          itemDescription: "Yummy",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Main",
      description: "Maindishes",
      items: [
        {
          itemName: "Korma",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
          itemOptions: { Lamb: 7, Chicken: 6, Vegetable: 5 },
        },
        {
          itemName: "Vindaloo",
          itemDescription: "Very hot!",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Sides",
      description: "Side dishes",
      items: [
        {
          itemName: "Pilau Rice",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
        },
        {
          itemName: "Channa Masala",
          itemDescription: "Chickpeas",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Breads",
      description: "Side dishes",
      items: [
        {
          itemName: "PPeshwari Nan",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
        },
        {
          itemName: "Channa Masala",
          itemDescription: "Chickpeas",
          itemPrice: 3.6,
        },
      ],
    },
  ],
  wawa: [
    {
      category: "Wiener",
      description: "Lovely jubbly drinks",
      items: [
        {
          itemName: "Coke",
          itemDescription: "Coca Cola",
          itemPrice: 4,
        },
        {
          itemName: "Water",
          itemDescription: "",
          itemPrice: 2.5,
        },
      ],
    },
    {
      category: "Starters",
      description: "",
      items: [
        {
          itemName: "Onion Bhajis",
          itemDescription: "Bhaji bahji bongos",
          itemPrice: 3.8,
        },
        {
          itemName: "Samosas",
          itemDescription: "Yummy",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Main",
      description: "Maindishes",
      items: [
        {
          itemName: "Korma",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
          itemOptions: { Lamb: 7, Chicken: 6, Vegetable: 5 },
        },
        {
          itemName: "Vindaloo",
          itemDescription: "Very hot!",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Sides",
      description: "Side dishes",
      items: [
        {
          itemName: "Pilau Rice",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
        },
        {
          itemName: "Channa Masala",
          itemDescription: "Chickpeas",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Breads",
      description: "Side dishes",
      items: [
        {
          itemName: "PPeshwari Nan",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
        },
        {
          itemName: "Channa Masala",
          itemDescription: "Chickpeas",
          itemPrice: 3.6,
        },
      ],
    },
  ],
  curryCottage: [
    {
      category: "Wiener",
      description: "Lovely jubbly drinks",
      items: [
        {
          itemName: "Coke",
          itemDescription: "Coca Cola",
          itemPrice: 4,
        },
        {
          itemName: "Water",
          itemDescription: "",
          itemPrice: 2.5,
        },
      ],
    },
    {
      category: "Starters",
      description: "",
      items: [
        {
          itemName: "Onion Bhajis",
          itemDescription: "Bhaji bahji bongos",
          itemPrice: 3.8,
        },
        {
          itemName: "Samosas",
          itemDescription: "Yummy",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Main",
      description: "Maindishes",
      items: [
        {
          itemName: "Korma",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
          itemOptions: { Lamb: 7, Chicken: 6, Vegetable: 5 },
        },
        {
          itemName: "Vindaloo",
          itemDescription: "Very hot!",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Sides",
      description: "Side dishes",
      items: [
        {
          itemName: "Pilau Rice",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
        },
        {
          itemName: "Channa Masala",
          itemDescription: "Chickpeas",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Breads",
      description: "Side dishes",
      items: [
        {
          itemName: "PPeshwari Nan",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
        },
        {
          itemName: "Channa Masala",
          itemDescription: "Chickpeas",
          itemPrice: 3.6,
        },
      ],
    },
  ],
  polash: [
    {
      category: "Wiener",
      description: "Lovely jubbly drinks",
      items: [
        {
          itemName: "Coke",
          itemDescription: "Coca Cola",
          itemPrice: 4,
        },
        {
          itemName: "Water",
          itemDescription: "",
          itemPrice: 2.5,
        },
      ],
    },
    {
      category: "Starters",
      description: "",
      items: [
        {
          itemName: "Onion Bhajis",
          itemDescription: "Bhaji bahji bongos",
          itemPrice: 3.8,
        },
        {
          itemName: "Samosas",
          itemDescription: "Yummy",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Main",
      description: "Maindishes",
      items: [
        {
          itemName: "Korma",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
          itemOptions: { Lamb: 7, Chicken: 6, Vegetable: 5 },
        },
        {
          itemName: "Vindaloo",
          itemDescription: "Very hot!",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Sides",
      description: "Side dishes",
      items: [
        {
          itemName: "Pilau Rice",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
        },
        {
          itemName: "Channa Masala",
          itemDescription: "Chickpeas",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Breads",
      description: "Side dishes",
      items: [
        {
          itemName: "PPeshwari Nan",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
        },
        {
          itemName: "Channa Masala",
          itemDescription: "Chickpeas",
          itemPrice: 3.6,
        },
      ],
    },
  ],
  orientalHouse: [
    {
      category: "Wiener",
      description: "Lovely jubbly drinks",
      items: [
        {
          itemName: "Coke",
          itemDescription: "Coca Cola",
          itemPrice: 4,
        },
        {
          itemName: "Water",
          itemDescription: "",
          itemPrice: 2.5,
        },
      ],
    },
    {
      category: "Starters",
      description: "",
      items: [
        {
          itemName: "Onion Bhajis",
          itemDescription: "Bhaji bahji bongos",
          itemPrice: 3.8,
        },
        {
          itemName: "Samosas",
          itemDescription: "Yummy",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Main",
      description: "Maindishes",
      items: [
        {
          itemName: "Korma",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
          itemOptions: { Lamb: 7, Chicken: 6, Vegetable: 5 },
        },
        {
          itemName: "Vindaloo",
          itemDescription: "Very hot!",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Sides",
      description: "Side dishes",
      items: [
        {
          itemName: "Pilau Rice",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
        },
        {
          itemName: "Channa Masala",
          itemDescription: "Chickpeas",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Breads",
      description: "Side dishes",
      items: [
        {
          itemName: "PPeshwari Nan",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
        },
        {
          itemName: "Channa Masala",
          itemDescription: "Chickpeas",
          itemPrice: 3.6,
        },
      ],
    },
  ],
  rickshaw: [
    {
      category: "Wiener",
      description: "Lovely jubbly drinks",
      items: [
        {
          itemName: "Coke",
          itemDescription: "Coca Cola",
          itemPrice: 4,
        },
        {
          itemName: "Water",
          itemDescription: "",
          itemPrice: 2.5,
        },
      ],
    },
    {
      category: "Starters",
      description: "",
      items: [
        {
          itemName: "Onion Bhajis",
          itemDescription: "Bhaji bahji bongos",
          itemPrice: 3.8,
        },
        {
          itemName: "Samosas",
          itemDescription: "Yummy",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Main",
      description: "Maindishes",
      items: [
        {
          itemName: "Korma",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
          itemOptions: { Lamb: 7, Chicken: 6, Vegetable: 5 },
        },
        {
          itemName: "Vindaloo",
          itemDescription: "Very hot!",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Sides",
      description: "Side dishes",
      items: [
        {
          itemName: "Pilau Rice",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
        },
        {
          itemName: "Channa Masala",
          itemDescription: "Chickpeas",
          itemPrice: 3.6,
        },
      ],
    },
    {
      category: "Breads",
      description: "Side dishes",
      items: [
        {
          itemName: "PPeshwari Nan",
          itemDescription: "Mild and creamy",
          itemPrice: 3.8,
        },
        {
          itemName: "Channa Masala",
          itemDescription: "Chickpeas",
          itemPrice: 3.6,
        },
      ],
    },
  ],
};
