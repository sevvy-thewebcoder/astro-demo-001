import { type ProductCard } from "../schemas/ProductCard";

export const products: ProductCard[] = [
  {
    id: "eclaire-cotton-t-shirt",
    title: "Eclaire Cotton T-Shirt",
    brandName: "Zara",
    price: 29.99,
    coverImage: {
      url: "/images/products/image-01.jpg",
      alt: "Eclaire Cotton T-Shirt Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-01-variant1.jpg",
        alt: "Eclaire Cotton T-Shirt Variant 1"
      },
      {
        url: "/images/products/image-01-variant2.jpg",
        alt: "Eclaire Cotton T-Shirt Variant 2"
      },
      {
        url: "/images/products/image-01-variant3.jpg",
        alt: "Eclaire Cotton T-Shirt Variant 3"
      },
      {
        url: "/images/products/image-01-variant4.jpg",
        alt: "Eclaire Cotton T-Shirt Variant 4"
      }
    ],
    description: "A comfortable and stylish cotton t-shirt perfect for everyday wear.",
    colorVariants: [
      { colorCode: "#FF5733" },
      { colorCode: "#000000" },
      { colorCode: "#3357FF" },
      { colorCode: "#FFFFFF" }
    ],
    category: "Women"
  },
  {
    id: "serene-linen-dress",
    title: "Serene Linen Dress",
    brandName: "Mango",
    price: 59.99,
    coverImage: {
      url: "/images/products/image-02.jpg",
      alt: "Serene Linen Dress Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-02-variant1.jpg",
        alt: "Serene Linen Dress Variant 1"
      },
      {
        url: "/images/products/image-02-variant2.jpg",
        alt: "Serene Linen Dress Variant 2"
      },
      {
        url: "/images/products/image-02-variant3.jpg",
        alt: "Serene Linen Dress Variant 3"
      },
      {
        url: "/images/products/image-02-variant4.jpg",
        alt: "Serene Linen Dress Variant 4"
      }
    ],
    description: "Lightweight and breathable linen dress for a relaxed and elegant look.",
    colorVariants: [
      { colorCode: "#A0522D" },
      { colorCode: "#D2B48C" },
      { colorCode: "#F5F5DC" },
      { colorCode: "#808000" }
    ],
    category: "Women"
  },
  {
    id: "urban-denim-jeans",
    title: "Urban Denim Jeans",
    brandName: "Levi's",
    price: 79.50,
    coverImage: {
      url: "/images/products/image-03.jpg",
      alt: "Urban Denim Jeans Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-03-variant1.jpg",
        alt: "Urban Denim Jeans Variant 1"
      },
      {
        url: "/images/products/image-03-variant2.jpg",
        alt: "Urban Denim Jeans Variant 2"
      },
      {
        url: "/images/products/image-03-variant3.jpg",
        alt: "Urban Denim Jeans Variant 3"
      },
      {
        url: "/images/products/image-03-variant4.jpg",
        alt: "Urban Denim Jeans Variant 4"
      }
    ],
    description: "Classic high-waisted denim jeans with a modern slim fit.",
    colorVariants: [
      { colorCode: "#4682B4" },
      { colorCode: "#2F4F4F" },
      { colorCode: "#696969" },
      { colorCode: "#87CEEB" }
    ],
    category: "Women"
  },
  {
    id: "cozy-cashmere-sweater",
    title: "Cozy Cashmere Sweater",
    brandName: "H&M",
    price: 49.99,
    coverImage: {
      url: "/images/products/image-04.jpg",
      alt: "Cozy Cashmere Sweater Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-04-variant1.jpg",
        alt: "Cozy Cashmere Sweater Variant 1"
      },
      {
        url: "/images/products/image-04-variant2.jpg",
        alt: "Cozy Cashmere Sweater Variant 2"
      },
      {
        url: "/images/products/image-04-variant3.jpg",
        alt: "Cozy Cashmere Sweater Variant 3"
      },
      {
        url: "/images/products/image-04-variant4.jpg",
        alt: "Cozy Cashmere Sweater Variant 4"
      }
    ],
    description: "Soft and luxurious cashmere sweater, perfect for cold weather.",
    colorVariants: [
      { colorCode: "#D3D3D3" },
      { colorCode: "#B0C4DE" },
      { colorCode: "#F5DEB3" },
      { colorCode: "#A9A9A9" }
    ],
    category: "Women"
  },
  {
    id: "sleek-faux-leather-jacket",
    title: "Sleek Faux Leather Jacket",
    brandName: "Zara",
    price: 89.00,
    coverImage: {
      url: "/images/products/image-05.jpg",
      alt: "Sleek Faux Leather Jacket Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-05-variant1.jpg",
        alt: "Sleek Faux Leather Jacket Variant 1"
      },
      {
        url: "/images/products/image-05-variant2.jpg",
        alt: "Sleek Faux Leather Jacket Variant 2"
      },
      {
        url: "/images/products/image-05-variant3.jpg",
        alt: "Sleek Faux Leather Jacket Variant 3"
      },
      {
        url: "/images/products/image-05-variant4.jpg",
        alt: "Sleek Faux Leather Jacket Variant 4"
      }
    ],
    description: "Edgy faux leather jacket with a modern cropped design.",
    colorVariants: [
      { colorCode: "#000000" },
      { colorCode: "#8B4513" },
      { colorCode: "#4B0082" },
      { colorCode: "#A52A2A" }
    ],
    category: "Women"
  },
  {
    id: "floral-chiffon-blouse",
    title: "Floral Chiffon Blouse",
    brandName: "Forever 21",
    price: 35.50,
    coverImage: {
      url: "/images/products/image-06.jpg",
      alt: "Floral Chiffon Blouse Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-06-variant1.jpg",
        alt: "Floral Chiffon Blouse Variant 1"
      },
      {
        url: "/images/products/image-06-variant2.jpg",
        alt: "Floral Chiffon Blouse Variant 2"
      },
      {
        url: "/images/products/image-06-variant3.jpg",
        alt: "Floral Chiffon Blouse Variant 3"
      },
      {
        url: "/images/products/image-06-variant4.jpg",
        alt: "Floral Chiffon Blouse Variant 4"
      }
    ],
    description: "Light and airy chiffon blouse with a delicate floral print.",
    colorVariants: [
      { colorCode: "#FFC0CB" },
      { colorCode: "#98FB98" },
      { colorCode: "#EE82EE" },
      { colorCode: "#F0E68C" }
    ],
    category: "Women"
  },
  {
    id: "athletic-yoga-leggings",
    title: "Athletic Yoga Leggings",
    brandName: "Adidas",
    price: 65.00,
    coverImage: {
      url: "/images/products/image-07.jpg",
      alt: "Athletic Yoga Leggings Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-07-variant1.jpg",
        alt: "Athletic Yoga Leggings Variant 1"
      },
      {
        url: "/images/products/image-07-variant2.jpg",
        alt: "Athletic Yoga Leggings Variant 2"
      },
      {
        url: "/images/products/image-07-variant3.jpg",
        alt: "Athletic Yoga Leggings Variant 3"
      },
      {
        url: "/images/products/image-07-variant4.jpg",
        alt: "Athletic Yoga Leggings Variant 4"
      }
    ],
    description: "Stretchy and supportive leggings designed for maximum comfort during workouts.",
    colorVariants: [
      { colorCode: "#000000" },
      { colorCode: "#800000" },
      { colorCode: "#000080" },
      { colorCode: "#808080" }
    ],
    category: "Women"
  },
  {
    id: "classic-trench-coat",
    title: "Classic Trench Coat",
    brandName: "Burberry",
    price: 199.99,
    coverImage: {
      url: "/images/products/image-08.jpg",
      alt: "Classic Trench Coat Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-08-variant1.jpg",
        alt: "Classic Trench Coat Variant 1"
      },
      {
        url: "/images/products/image-08-variant2.jpg",
        alt: "Classic Trench Coat Variant 2"
      },
      {
        url: "/images/products/image-08-variant3.jpg",
        alt: "Classic Trench Coat Variant 3"
      },
      {
        url: "/images/products/image-08-variant4.jpg",
        alt: "Classic Trench Coat Variant 4"
      }
    ],
    description: "Timeless and elegant trench coat with a double-breasted design.",
    colorVariants: [
      { colorCode: "#D2B48C" },
      { colorCode: "#BDB76B" },
      { colorCode: "#CD853F" },
      { colorCode: "#F5F5DC" }
    ],
    category: "Women"
  },
  {
    id: "casual-cotton-hoodie",
    title: "Casual Cotton Hoodie",
    brandName: "Uniqlo",
    price: 39.90,
    coverImage: {
      url: "/images/products/image-09.jpg",
      alt: "Casual Cotton Hoodie Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-09-variant1.jpg",
        alt: "Casual Cotton Hoodie Variant 1"
      },
      {
        url: "/images/products/image-09-variant2.jpg",
        alt: "Casual Cotton Hoodie Variant 2"
      },
      {
        url: "/images/products/image-09-variant3.jpg",
        alt: "Casual Cotton Hoodie Variant 3"
      },
      {
        url: "/images/products/image-09-variant4.jpg",
        alt: "Casual Cotton Hoodie Variant 4"
      }
    ],
    description: "Soft and cozy cotton hoodie for a comfortable, laid-back style.",
    colorVariants: [
      { colorCode: "#000000" },
      { colorCode: "#FFFFFF" },
      { colorCode: "#D3D3D3" },
      { colorCode: "#FF6347" }
    ],
    category: "Women"
  },
  {
    id: "striped-long-sleeve-shirt",
    title: "Striped Long-Sleeve Shirt",
    brandName: "Ralph Lauren",
    price: 55.00,
    coverImage: {
      url: "/images/products/image-10.jpg",
      alt: "Striped Long-Sleeve Shirt Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-10-variant1.jpg",
        alt: "Striped Long-Sleeve Shirt Variant 1"
      },
      {
        url: "/images/products/image-10-variant2.jpg",
        alt: "Striped Long-Sleeve Shirt Variant 2"
      },
      {
        url: "/images/products/image-10-variant3.jpg",
        alt: "Striped Long-Sleeve Shirt Variant 3"
      },
      {
        url: "/images/products/image-10-variant4.jpg",
        alt: "Striped Long-Sleeve Shirt Variant 4"
      }
    ],
    description: "A classic striped shirt made from high-quality cotton, perfect for a preppy look.",
    colorVariants: [
      { colorCode: "#1E90FF" },
      { colorCode: "#DC143C" },
      { colorCode: "#FFD700" },
      { colorCode: "#20B2AA" }
    ],
    category: "Women"
  },
  {
    id: "elegant-pleated-skirt",
    title: "Elegant Pleated Skirt",
    brandName: "Zara",
    price: 45.99,
    coverImage: {
      url: "/images/products/image-11.jpg",
      alt: "Elegant Pleated Skirt Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-11-variant1.jpg",
        alt: "Elegant Pleated Skirt Variant 1"
      },
      {
        url: "/images/products/image-11-variant2.jpg",
        alt: "Elegant Pleated Skirt Variant 2"
      },
      {
        url: "/images/products/image-11-variant3.jpg",
        alt: "Elegant Pleated Skirt Variant 3"
      },
      {
        url: "/images/products/image-11-variant4.jpg",
        alt: "Elegant Pleated Skirt Variant 4"
      }
    ],
    description: "A chic pleated skirt with a fluid silhouette, ideal for both casual and formal occasions.",
    colorVariants: [
      { colorCode: "#000000" },
      { colorCode: "#B0E0E6" },
      { colorCode: "#800080" },
      { colorCode: "#FF69B4" }
    ],
    category: "Women"
  },
  {
    id: "sleek-silk-camisole",
    title: "Sleek Silk Camisole",
    brandName: "Mango",
    price: 35.00,
    coverImage: {
      url: "/images/products/image-12.jpg",
      alt: "Sleek Silk Camisole Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-12-variant1.jpg",
        alt: "Sleek Silk Camisole Variant 1"
      },
      {
        url: "/images/products/image-12-variant2.jpg",
        alt: "Sleek Silk Camisole Variant 2"
      },
      {
        url: "/images/products/image-12-variant3.jpg",
        alt: "Sleek Silk Camisole Variant 3"
      },
      {
        url: "/images/products/image-12-variant4.jpg",
        alt: "Sleek Silk Camisole Variant 4"
      }
    ],
    description: "Luxurious silk camisole with a delicate lace trim, perfect for layering or as a standalone top.",
    colorVariants: [
      { colorCode: "#FFFFFF" },
      { colorCode: "#000000" },
      { colorCode: "#C0C0C0" },
      { colorCode: "#B22222" }
    ],
    category: "Women"
  },
  {
    id: "high-waisted-tailored-trousers",
    title: "High-Waisted Tailored Trousers",
    brandName: "H&M",
    price: 49.99,
    coverImage: {
      url: "/images/products/image-13.jpg",
      alt: "High-Waisted Tailored Trousers Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-13-variant1.jpg",
        alt: "High-Waisted Tailored Trousers Variant 1"
      },
      {
        url: "/images/products/image-13-variant2.jpg",
        alt: "High-Waisted Tailored Trousers Variant 2"
      },
      {
        url: "/images/products/image-13-variant3.jpg",
        alt: "High-Waisted Tailored Trousers Variant 3"
      },
      {
        url: "/images/products/image-13-variant4.jpg",
        alt: "High-Waisted Tailored Trousers Variant 4"
      }
    ],
    description: "Classic tailored trousers with a high-waisted fit for a sophisticated and professional look.",
    colorVariants: [
      { colorCode: "#4B0082" },
      { colorCode: "#696969" },
      { colorCode: "#000000" },
      { colorCode: "#F5F5DC" }
    ],
    category: "Women"
  },
  {
    id: "relaxed-fit-blazer",
    title: "Relaxed Fit Blazer",
    brandName: "Uniqlo",
    price: 79.90,
    coverImage: {
      url: "/images/products/image-14.jpg",
      alt: "Relaxed Fit Blazer Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-14-variant1.jpg",
        alt: "Relaxed Fit Blazer Variant 1"
      },
      {
        url: "/images/products/image-14-variant2.jpg",
        alt: "Relaxed Fit Blazer Variant 2"
      },
      {
        url: "/images/products/image-14-variant3.jpg",
        alt: "Relaxed Fit Blazer Variant 3"
      },
      {
        url: "/images/products/image-14-variant4.jpg",
        alt: "Relaxed Fit Blazer Variant 4"
      }
    ],
    description: "A comfortable and stylish blazer with a relaxed fit, perfect for a smart-casual ensemble.",
    colorVariants: [
      { colorCode: "#A9A9A9" },
      { colorCode: "#778899" },
      { colorCode: "#000000" },
      { colorCode: "#BDB76B" }
    ],
    category: "Women"
  },
  {
    id: "boho-maxi-dress",
    title: "Boho Maxi Dress",
    brandName: "Forever 21",
    price: 65.00,
    coverImage: {
      url: "/images/products/image-15.jpg",
      alt: "Boho Maxi Dress Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-15-variant1.jpg",
        alt: "Boho Maxi Dress Variant 1"
      },
      {
        url: "/images/products/image-15-variant2.jpg",
        alt: "Boho Maxi Dress Variant 2"
      },
      {
        url: "/images/products/image-15-variant3.jpg",
        alt: "Boho Maxi Dress Variant 3"
      },
      {
        url: "/images/products/image-15-variant4.jpg",
        alt: "Boho Maxi Dress Variant 4"
      }
    ],
    description: "Flowy and free-spirited maxi dress with a beautiful print and tiered design.",
    colorVariants: [
      { colorCode: "#A0522D" },
      { colorCode: "#FF4500" },
      { colorCode: "#8A2BE2" },
      { colorCode: "#9ACD32" }
    ],
    category: "Women"
  },
  {
    id: "ribbed-knit-top",
    title: "Ribbed Knit Top",
    brandName: "Zara",
    price: 25.99,
    coverImage: {
      url: "/images/products/image-16.jpg",
      alt: "Ribbed Knit Top Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-16-variant1.jpg",
        alt: "Ribbed Knit Top Variant 1"
      },
      {
        url: "/images/products/image-16-variant2.jpg",
        alt: "Ribbed Knit Top Variant 2"
      },
      {
        url: "/images/products/image-16-variant3.jpg",
        alt: "Ribbed Knit Top Variant 3"
      },
      {
        url: "/images/products/image-16-variant4.jpg",
        alt: "Ribbed Knit Top Variant 4"
      }
    ],
    description: "A versatile ribbed knit top that's perfect for layering or wearing on its own.",
    colorVariants: [
      { colorCode: "#000000" },
      { colorCode: "#FFFFFF" },
      { colorCode: "#C0C0C0" },
      { colorCode: "#D2B48C" }
    ],
    category: "Women"
  },
  {
    id: "cropped-cardigan",
    title: "Cropped Cardigan",
    brandName: "H&M",
    price: 32.50,
    coverImage: {
      url: "/images/products/image-17.jpg",
      alt: "Cropped Cardigan Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-17-variant1.jpg",
        alt: "Cropped Cardigan Variant 1"
      },
      {
        url: "/images/products/image-17-variant2.jpg",
        alt: "Cropped Cardigan Variant 2"
      },
      {
        url: "/images/products/image-17-variant3.jpg",
        alt: "Cropped Cardigan Variant 3"
      },
      {
        url: "/images/products/image-17-variant4.jpg",
        alt: "Cropped Cardigan Variant 4"
      }
    ],
    description: "A cute and cozy cropped cardigan, perfect for layering over dresses or tops.",
    colorVariants: [
      { colorCode: "#FFB6C1" },
      { colorCode: "#87CEEB" },
      { colorCode: "#98FB98" },
      { colorCode: "#FFFACD" }
    ],
    category: "Women"
  },
  {
    id: "satin-slip-dress",
    title: "Satin Slip Dress",
    brandName: "Mango",
    price: 75.00,
    coverImage: {
      url: "/images/products/image-18.jpg",
      alt: "Satin Slip Dress Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-18-variant1.jpg",
        alt: "Satin Slip Dress Variant 1"
      },
      {
        url: "/images/products/image-18-variant2.jpg",
        alt: "Satin Slip Dress Variant 2"
      },
      {
        url: "/images/products/image-18-variant3.jpg",
        alt: "Satin Slip Dress Variant 3"
      },
      {
        url: "/images/products/image-18-variant4.jpg",
        alt: "Satin Slip Dress Variant 4"
      }
    ],
    description: "Elegant and sleek satin slip dress, perfect for a night out or special occasion.",
    colorVariants: [
      { colorCode: "#C0C0C0" },
      { colorCode: "#800000" },
      { colorCode: "#000000" },
      { colorCode: "#BDB76B" }
    ],
    category: "Women"
  },
  {
    id: "puffer-jacket",
    title: "Puffer Jacket",
    brandName: "Uniqlo",
    price: 99.90,
    coverImage: {
      url: "/images/products/image-19.jpg",
      alt: "Puffer Jacket Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-19-variant1.jpg",
        alt: "Puffer Jacket Variant 1"
      },
      {
        url: "/images/products/image-19-variant2.jpg",
        alt: "Puffer Jacket Variant 2"
      },
      {
        url: "/images/products/image-19-variant3.jpg",
        alt: "Puffer Jacket Variant 3"
      },
      {
        url: "/images/products/image-19-variant4.jpg",
        alt: "Puffer Jacket Variant 4"
      }
    ],
    description: "Warm and lightweight puffer jacket for ultimate comfort and protection from the cold.",
    colorVariants: [
      { colorCode: "#00008B" },
      { colorCode: "#FF4500" },
      { colorCode: "#32CD32" },
      { colorCode: "#D3D3D3" }
    ],
    category: "Women"
  },
  {
    id: "denim-mini-skirt",
    title: "Denim Mini Skirt",
    brandName: "Levi's",
    price: 45.00,
    coverImage: {
      url: "/images/products/image-20.jpg",
      alt: "Denim Mini Skirt Image"
    },
    imageVariants: [
      {
        url: "/images/products/image-20-variant1.jpg",
        alt: "Denim Mini Skirt Variant 1"
      },
      {
        url: "/images/products/image-20-variant2.jpg",
        alt: "Denim Mini Skirt Variant 2"
      },
      {
        url: "/images/products/image-20-variant3.jpg",
        alt: "Denim Mini Skirt Variant 3"
      },
      {
        url: "/images/products/image-20-variant4.jpg",
        alt: "Denim Mini Skirt Variant 4"
      }
    ],
    description: "A classic denim mini skirt with a faded wash and raw hem for a retro look.",
    colorVariants: [
      { colorCode: "#4682B4" },
      { colorCode: "#B0C4DE" },
      { colorCode: "#2F4F4F" },
      { colorCode: "#F0E68C" }
    ],
    category: "Women"
  },
];
