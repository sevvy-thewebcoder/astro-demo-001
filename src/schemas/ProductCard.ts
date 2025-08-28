import { z } from 'zod';

export const ProductCardSchema = z.object({
  id: z.string(),
  title: z.string().min(2).max(100),
  brandName: z.string().min(2).max(100),
  price: z.number().min(0),
  coverImage: z.object({
    url: z.string().url(),
    alt: z.string().max(100),
  }),
  imageVariants: z.array(
    z.object({
      url: z.string().url(),
      alt: z.string().max(100),
    })
  ),
  description: z.string().max(500),
  colorVariants: z.array(
    z.object({
      colorCode: z.string().max(7), // e.g., #RRGGBB
    })
  ),
  category: z.string().min(2).max(100),
});

export type ProductCard = z.infer<typeof ProductCardSchema>;