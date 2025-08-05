// Import your image assets at the top of the data file
import firstImage from "../assets/first.png";
import secondImage from "../assets/second.png";
import thirdImage from "../assets/third.png";
import fourthImage from "../assets/fourth.png";
import perfume1 from "../assets/perfume1.png";
import perfume2 from "../assets/perfume2.png";
import perfume3 from "../assets/perfume3.png";
import perfume4 from "../assets/perfume4.png";
import perfume5 from "../assets/perfume5.png";
import perfume6 from "../assets/perfume6.png";

export const collections = [
  { id: 1, title: "Summer Collection", image: firstImage },
  { id: 2, title: "Winter Elegance", image: secondImage },
  { id: 3, title: "Royal Series", image: thirdImage },
  { id: 4, title: "Classic Blend", image: fourthImage },
];

export const products = [
  {
    id: 1,
    name: "Alora Collection 35",
    description:
      "New 150ml and elegant 5ml perfume. This is a longer description to test the 'See More' functionality in the quick view modal. It should provide enough text to trigger the truncation and expansion. This perfume is a unique blend of floral and woody notes, perfect for any occasion, day or night. Its long-lasting scent will leave a memorable impression.",
    price: 199,
    oldPrice: 359,
    image: perfume1,
  },
  {
    id: 2,
    name: "Wild Pegasus 150ml",
    description:
      "Premium fragrance collection. A bold and adventurous scent for the modern explorer. Notes of citrus, spice, and amber create an invigorating aroma that lasts all day.",
    price: 128,
    oldPrice: 275,
    image: perfume2,
  },
  {
    id: 3,
    name: "Brooklyn Pegasus 150ml",
    description:
      "Urban inspired scent. Captures the vibrant energy of city life with fresh, clean notes and a hint of musk. Ideal for daily wear.",
    price: 128,
    oldPrice: 275,
    image: perfume3,
  },
  {
    id: 4,
    name: "Incense Pegasus 150ml",
    description:
      "Mystical aromatic blend. A deep, rich fragrance with notes of frankincense, myrrh, and exotic woods, perfect for evening wear or special occasions. It evokes a sense of mystery and sophistication.",
    price: 128,
    oldPrice: 275,
    image: perfume4,
  },
  {
    id: 5,
    name: "Ocean Breeze",
    description: "Fresh and invigorating scent",
    price: 99,
    oldPrice: 150,
    image: perfume5,
  },
  {
    id: 6,
    name: "Midnight Bloom",
    description: "Deep and mysterious floral notes",
    price: 110,
    oldPrice: 180,
    image: perfume6,
  },
  {
    id: 7,
    name: "Golden Hour",
    description: "Warm and inviting amber fragrance",
    price: 135,
    oldPrice: 200,
    image: perfume1,
  },
];