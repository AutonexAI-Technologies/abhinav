// ============================================================
// SHARED TYPES FOR ABHINAV LIFTS WEBSITE
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface WhyCard {
  title: string;
  items: string[];
  highlighted?: boolean;
}

export interface PricingPlan {
  id: string;
  emoji: string;
  title: string;
  duration: string;
  platform: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercent: string;
  features: string[];
  popular?: boolean;
  ctaLabel: string;
}

export interface OnlinePlan {
  id: string;
  title: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
  ctaLabel: string;
}

export interface DietPlan {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  macros: string[];
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  image?: string;
}

export interface TransformationItem {
  id: string;
  name: string;
  achievement: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  quote: string;
}

// ============================================================
// BOOKING FORM TYPES & ZOD SCHEMA
// ============================================================
export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  age: string;
  gender: "male" | "female" | "other";
  heightFt: string;
  weightKg: string;
  residence: string;
  workType: string;
  gymExperience: string;
  dietPreference: "vegetarian" | "eggetarian" | "non-veg" | "vegan";
  medicalHistory: string;
  fitnessGoal: string;
  disciplineRating: string;
  profession: string;
}

export type PricingTab = "consultation" | "online";
