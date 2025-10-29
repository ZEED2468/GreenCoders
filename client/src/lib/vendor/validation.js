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


export const ProductSchema = z.object({
  name: z.string().min(2, "Product name is required"),
  description: z.string().min(5, "Description is required"),
  size: z.enum(["Small", "Medium", "Large", "X-Large"]).optional(),
  count: z
    .number({ invalid_type_error: "Count must be a number" })
    .min(1, "Minimum count is 1")
    .max(999, "Count too high"),
  fileUrl: z.string().optional(),
  fileName: z.string().optional(),
});

export const ProductStoreSchema = z.object({
  categories: z
    .array(z.enum(["Bags", "Smart Phones", "Shoes", "Clothing"]))
    .min(1, "Select at least one category"),
  productsByCategory: z.record(z.array(ProductSchema)),
});


export const productDetailsSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  country: z.string().min(1, "Country is required"),
  region: z.string().min(1, "Region is required"),
  state: z.string().min(1, "State is required"),
});


export const businessDetailsSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  registrationNumber: z.string().min(3, "Registration number is required"),
  website: z.string().url("Enter a valid website URL").optional(),
  email: z.string().email("Enter a valid email address"),
  instagram: z.string().url("Enter a valid Instagram link").optional(),
  tiktok: z.string().url("Enter a valid Tiktok link").optional(),
  whatsapp: z.string().url("Enter a valid Whatsapp link").optional(),
});