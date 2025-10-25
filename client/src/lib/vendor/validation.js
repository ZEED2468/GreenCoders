import { z } from "zod";

export const storeSchema = z.object({
  storeName: z.string().min(1, "Field cannot be blank"),
  categoryType: z.enum(["Single Category", "Multiple Categories"]),
  numCategories: z
    .number({ invalid_type_error: "Must be a number" })
    .min(1, "At least 1 category"),
  categories: z
    .array(z.string())
    .min(1, "Select at least one category")
    .max(2, "Select maximum of two categories"),
});

export const productSchema = z.object({
  name: z.string().min(2, "Product name is required"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  size: z.string().min(1, "Size is required"),
  count: z
    .string()
    .regex(/^\d+$/, "Count must be a number")
    .transform(Number),
  file: z.any().optional(),
});

export const ProductStoreSchema = z.object({
  storeName: z.string().min(2, "Store name is required"),
  categoryType: z.enum(["Single Category", "Multiple Categories"]),
  categories: z
    .array(z.string())
    .min(1, "Select at least one category")
    .max(5, "Maximum of 5 categories allowed"),
  products: z.array(productSchema).min(1, "At least one product is required"),
});
