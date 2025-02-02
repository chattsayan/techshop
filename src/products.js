import { assets } from "./assets/assets";

const products = [
  {
    _id: "1",
    name: "Airpods Wireless Bluetooth Headphones",
    image: `${assets.airpods}`,
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: "7,999",
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "2",
    name: "iPhone 13 Pro Max 256GB",
    image: `${assets.iphone}`,
    description:
      "Introducing the iPhone 13 Pro Max. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: "1,21,300",
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "3",
    name: "Canon EOS R50 Mirrorless Camera",
    image: `${assets.camera}`,
    description:
      "Characterized by versatile imaging specs, the Canon EOS R50 further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: "80,900",
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: "4",
    name: "Sony Playstation 4 Pro White Version",
    image: `${assets.ps5}`,
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: "55,599",
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "5",
    name: "Logitech G-Series Gaming Mouse",
    image: `${assets.mouse}`,
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 999,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "6",
    name: "Amazon Echo Dot 3rd Generation",
    image: `${assets.alexa}`,
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: "2,599",
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
];

export default products;
