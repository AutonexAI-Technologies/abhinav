import { z } from "zod";

export const bookingFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(20, "Phone number too long")
    .regex(/^[+\d\s\-()]+$/, "Invalid phone number format"),
  email: z.string().email("Enter a valid email address"),
  age: z
    .string()
    .regex(/^\d+$/, "Age must be a number")
    .refine((v) => parseInt(v) >= 14 && parseInt(v) <= 80, {
      message: "Age must be between 14 and 80",
    }),
  gender: z.enum(["male", "female", "other"]),
  heightFt: z
    .string()
    .min(1, "Enter your height")
    .regex(/^\d+(\.\d+)?$/, "Enter height in feet (e.g. 5.9)"),
  weightKg: z
    .string()
    .min(1, "Enter your weight")
    .regex(/^\d+(\.\d+)?$/, "Enter weight in kgs (e.g. 76)"),
  residence: z
    .string()
    .min(3, "Enter your city/country")
    .max(100, "Too long"),
  workType: z
    .string()
    .min(5, "Describe your type of work")
    .max(200, "Too long"),
  gymExperience: z
    .string()
    .min(3, "Please describe your experience (or type 'None')")
    .max(300, "Too long"),
  dietPreference: z.enum(["vegetarian", "eggetarian", "non-veg", "vegan"]),
  medicalHistory: z.string().max(500, "Too long"),
  fitnessGoal: z
    .string()
    .min(10, "Please describe your goal in more detail")
    .max(400, "Too long"),
  disciplineRating: z
    .string()
    .regex(/^\d+$/, "Must be a number")
    .refine((v) => parseInt(v) >= 1 && parseInt(v) <= 10, {
      message: "Rating must be between 1 and 10",
    }),
  profession: z.string().min(2, "Enter your profession").max(100, "Too long"),
});

export type BookingFormSchema = z.infer<typeof bookingFormSchema>;
