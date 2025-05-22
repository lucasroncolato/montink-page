import imageProduct1 from "../assets/images/product/image-product-1.jpg";
import imageProduct1Thumbnail from "../assets/images/product/image-product-1-thumbnail.jpg";
import imageProduct2 from "../assets/images/product/image-product-2.jpg";
import imageProduct2Thumbnail from "../assets/images/product/image-product-2-thumbnail.jpg";
import imageProduct3 from "../assets/images/product/image-product-3.jpg";
import imageProduct3Thumbnail from "../assets/images/product/image-product-3-thumbnail.jpg";
import imageProduct4 from "../assets/images/product/image-product-4.jpg";
import imageProduct4Thumbnail from "../assets/images/product/image-product-4-thumbnail.jpg";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  brand: string;
  images: string[];
  thumbnails: string[];
}

export const products: Product[] = [
  {
    id: 1,
    title: "Tênis Edição Limitada de Outono",
    description:
      "Estes tênis de perfil baixo são a companhia ideal para um visual casual. Com solado de borracha resistente, eles enfrentam qualquer clima com estilo e conforto.",
    price: 150.0,
    discountPercentage: 40,
    brand: "Sneaker Company",
    images: [imageProduct1, imageProduct2, imageProduct3, imageProduct4],
    thumbnails: [
      imageProduct1Thumbnail,
      imageProduct2Thumbnail,
      imageProduct3Thumbnail,
      imageProduct4Thumbnail,
    ],
  },
];
