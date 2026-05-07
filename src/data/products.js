const products = {
  furniture: [
    {
      id: 1,
      name: "Modern Sofa",
      price: "$499.99",
      image: "../product/furniture/furniture1.webp",
      category: "Furniture",
    },
    {
      id: 2,
      name: "Elegant Coffee Table",
      price: "$199.99",
      image: "../product/furniture/furniture2.webp",
      category: "Furniture",
    },
    {
      id: 3,
      name: "Stylish Armchair",
      price: "$299.99",
      image: "../product/furniture/furniture3.webp",
      category: "Furniture",
    },
    {
      id: 4,
      name: "Contemporary TV Stand",
      price: "$249.99",
      image: "../product/furniture/furniture4.webp",
      category: "Furniture",
    },
    {
      id: 5,
      name: "Minimalist Bookshelf",
      price: "$149.99",
      image: "../product/furniture/furniture5.webp",
      category: "Furniture",
    },
  ],
  vase: [
    {
      id: 6,
      name: "Ceramic Vase",
      price: "$39.99",
      image: "../product/vase/vase1.webp",
      category: "Vase",
    },
    {
      id: 7,
      name: "Glass Vase",
      price: "$29.99",
      image: "../product/vase/vase2.webp",
      category: "Vase",
    },
    {
      id: 8,
      name: "Metal Vase",
      price: "$49.99",
      image: "../product/vase/vase3.webp",
      category: "Vase",
    },
    {
      id: 9,
      name: "Wooden Vase",
      price: "$34.99",
      image: "../product/vase/vase4.webp",
      category: "Vase",
    },
  ],
  lighting: [
    {
      id: 10,
      name: "Modern Pendant Light",
      price: "$89.99",
      image: "../product/lighting/lighting1.webp",
      category: "Lighting",
    },
    {
      id: 11,
      name: "Elegant Table Lamp",
      price: "$59.99",
      image: "../product/lighting/lighting2.webp",
      category: "Lighting",
    },
    {
      id: 12,
      name: "Stylish Floor Lamp",
      price: "$129.99",
      image: "../product/lighting/lighting3.webp",
      category: "Lighting",
    },
    {
      id: 13,
      name: "Contemporary Wall Sconce",
      price: "$49.99",
      image: "../product/lighting/lighting4.webp",
      category: "Lighting",
    },
  ],
  candle: [],
  art: [
    {
      id: 14,
      name: "Abstract Canvas Art",
      price: "$199.99",
      image: "../product/art/art1.webp",
      category: "Art",
    },
    {
      id: 15,
      name: "Modern Sculpture",
      price: "$299.99",
      image: "../product/art/art2.webp",
      category: "Art",
    },
    {
      id: 16,
      name: "Contemporary Wall Art",
      price: "$149.99",
      image: "../product/art/art3.webp",
      category: "Art",
    },
    {
      id: 17,
      name: "Stylish Decorative Art",
      price: "$89.99",
      image: "../product/art/art4.webp",
      category: "Art",
    },
    {
      id: 18,
      name: "Minimalist Art Print",
      price: "$49.99",
      image: "../product/art/art5.webp",
      category: "Art",
    },
  ],
};

function getProducts(category) {
  if (category === "all") {
    return Object.values(products).flat();
  }
  return products[category] || [];
}

export default getProducts;
