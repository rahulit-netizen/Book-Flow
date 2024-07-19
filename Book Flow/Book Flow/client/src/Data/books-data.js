const books = [
    {
      id:1,
      shop: 5,
      name: "Margherita",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 99,
          medium: 199,
          large: 399,
        },
      ],
      category: "maths",
      image: "/images/margherita.jpg",
      description: "Classic delight with 100% real mozzarella cheese",
      pincode:223103,
    },
    {
      id:2,
      shop:0,
      name: "Farmhouse",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 229,
          medium: 399,
          large: 599,
        },
      ],
      category: "physics",
      image: "/images/farmhouse.jpg",
      description:
        "Delightful combination of onion, capsicum, tomato & grilled mushroom",
        pincode:225433,
    },
    {
      id:3,
      shop:0,
      name: "Veggie Paradise",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 180,
          medium: 290,
          large: 460,
        },
      ],
      category: "chemistry",
      description:
        "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
      image: "/images/veggie_paradise.jpg",
      pincode:222313,
    },
    {
      id:4,
      shop:1,
      name: "Chicken Golden Delight",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 249,
          medium: 349,
          large: 599,
        },
      ],
      category: "maths",
      image: "/images/chicken_golden_delight.jpg",
      description:
        "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
        pincode:225403,
    },
    {
      id:5,
      shop:1,
      name: "Chicken Pepperoni",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 320,
          medium: 580,
          large: 800,
        },
      ],
      category: "physics",
      image: "/images/cheesepepperoni.jpg",
      description:
        "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
        pincode:221203,
    },
    {
      id:6,
      shop:1,
      name: "Indi Chicken Tikka",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 250,
          medium: 380,
          large: 500,
        },
      ],
      category: "maths",
      image: "/images/IndianTandooriChickenTikka.jpg",
      description:
        "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
        pincode:225023,
    },
   
  ];
  module.exports = books
  