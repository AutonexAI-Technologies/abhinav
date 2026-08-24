import type { BookingFormSchema } from "@/lib/schemas";
import { WHATSAPP_NUMBER } from "@/data";

/**
 * Builds a formatted WhatsApp message from the booking form data
 * and returns the full wa.me URL with encoded text.
 */
export function buildWhatsAppUrl(data: BookingFormSchema): string {
  const message = `
Hi Abhinav! 👋 I just filled out your intake form. Here are my details:

━━━━━━━━━━━━━━━━━━━━
📋 *INTAKE FORM*
━━━━━━━━━━━━━━━━━━━━

👤 *Name:* ${data.fullName}
📱 *Phone:* ${data.phone}
📧 *Email:* ${data.email}
🎂 *Age:* ${data.age}
⚧ *Gender:* ${data.gender}
📏 *Height:* ${data.heightFt} ft
⚖️ *Current Weight:* ${data.weightKg} kgs
📍 *Location:* ${data.residence}

💼 *Work Type:* ${data.workType}
🏋️ *Gym/Physical Experience:* ${data.gymExperience}
🥗 *Diet Preference:* ${data.dietPreference}
🏥 *Medical History:* ${data.medicalHistory || "None"}

🎯 *Fitness Goal:* ${data.fitnessGoal}
⭐ *Discipline Self-Rating:* ${data.disciplineRating}/10
👔 *Profession:* ${data.profession}

━━━━━━━━━━━━━━━━━━━━
Looking forward to starting this journey! 💪
`.trim();

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Returns a direct WhatsApp link with an optional pre-filled message.
 */
export function getWhatsAppLink(message?: string): string {
  if (message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}`;
}

/**
 * Scrolls to a section by id with smooth behavior.
 */
export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
