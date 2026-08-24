"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { bookingFormSchema, type BookingFormSchema } from "@/lib/schemas";
import { buildWhatsAppUrl } from "@/lib/utils";
import styles from "./BookingForm.module.css";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormSchema>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: { gender: "male", dietPreference: "vegetarian" },
  });

  const onSubmit = (data: BookingFormSchema) => {
    const url = buildWhatsAppUrl(data);
    window.open(url, "_blank");
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="book" className="section section-dark">
      <div className="container-sm">
        <div className={styles.header}>
          <div className="section-tag">Intake Form</div>
          <h2 className="heading-lg">
            Start Your <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted">
            Fill in the form below and you&apos;ll be redirected to WhatsApp with all
            your details — Abhinav will get back to you personally.
          </p>
        </div>

        {submitted && (
          <div className={styles.successBanner}>
            <CheckCircle2 size={20} />
            <span>
              Redirecting you to WhatsApp! Abhinav will reach out shortly. 🎉
            </span>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className={styles.form}
        >
          {/* Row 1 */}
          <div className={styles.grid2}>
            <div className="form-group">
              <label className="form-label">
                Full Name <span>*</span>
              </label>
              <input
                {...register("fullName")}
                className={`form-input ${errors.fullName ? "error" : ""}`}
                placeholder="e.g. Rahul Sharma"
              />
              {errors.fullName && (
                <span className="form-error">
                  <AlertCircle size={12} /> {errors.fullName.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Phone Number <span>*</span>
              </label>
              <input
                {...register("phone")}
                className={`form-input ${errors.phone ? "error" : ""}`}
                placeholder="e.g. +91 9876543210"
                type="tel"
              />
              {errors.phone && (
                <span className="form-error">
                  <AlertCircle size={12} /> {errors.phone.message}
                </span>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className={styles.grid2}>
            <div className="form-group">
              <label className="form-label">
                Email Address <span>*</span>
              </label>
              <input
                {...register("email")}
                className={`form-input ${errors.email ? "error" : ""}`}
                placeholder="you@example.com"
                type="email"
              />
              {errors.email && (
                <span className="form-error">
                  <AlertCircle size={12} /> {errors.email.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Age <span>*</span>
              </label>
              <input
                {...register("age")}
                className={`form-input ${errors.age ? "error" : ""}`}
                placeholder="e.g. 25"
                type="number"
                min={14}
                max={80}
              />
              {errors.age && (
                <span className="form-error">
                  <AlertCircle size={12} /> {errors.age.message}
                </span>
              )}
            </div>
          </div>

          {/* Row 3 */}
          <div className={styles.grid3}>
            <div className="form-group">
              <label className="form-label">
                Gender <span>*</span>
              </label>
              <select
                {...register("gender")}
                className={`form-input ${errors.gender ? "error" : ""}`}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                Height (feet) <span>*</span>
              </label>
              <input
                {...register("heightFt")}
                className={`form-input ${errors.heightFt ? "error" : ""}`}
                placeholder="e.g. 5.9"
              />
              {errors.heightFt && (
                <span className="form-error">
                  <AlertCircle size={12} /> {errors.heightFt.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Current Weight (kgs) <span>*</span>
              </label>
              <input
                {...register("weightKg")}
                className={`form-input ${errors.weightKg ? "error" : ""}`}
                placeholder="e.g. 76"
              />
              {errors.weightKg && (
                <span className="form-error">
                  <AlertCircle size={12} /> {errors.weightKg.message}
                </span>
              )}
            </div>
          </div>

          {/* Row 4 */}
          <div className={styles.grid2}>
            <div className="form-group">
              <label className="form-label">
                Place of Residence <span>*</span>
              </label>
              <input
                {...register("residence")}
                className={`form-input ${errors.residence ? "error" : ""}`}
                placeholder="e.g. Hyderabad, India"
              />
              {errors.residence && (
                <span className="form-error">
                  <AlertCircle size={12} /> {errors.residence.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Profession <span>*</span>
              </label>
              <input
                {...register("profession")}
                className={`form-input ${errors.profession ? "error" : ""}`}
                placeholder="e.g. Software Engineer"
              />
              {errors.profession && (
                <span className="form-error">
                  <AlertCircle size={12} /> {errors.profession.message}
                </span>
              )}
            </div>
          </div>

          {/* Work type */}
          <div className="form-group">
            <label className="form-label">
              Type of Work <span>*</span>
            </label>
            <input
              {...register("workType")}
              className={`form-input ${errors.workType ? "error" : ""}`}
              placeholder="e.g. Office work / sitting desk job / standing job"
            />
            {errors.workType && (
              <span className="form-error">
                <AlertCircle size={12} /> {errors.workType.message}
              </span>
            )}
          </div>

          {/* Gym Experience */}
          <div className="form-group">
            <label className="form-label">
              Prior Gym / Physical Activity Experience <span>*</span>
            </label>
            <input
              {...register("gymExperience")}
              className={`form-input ${errors.gymExperience ? "error" : ""}`}
              placeholder="e.g. Gym for 6 months, 2 years ago — or None"
            />
            {errors.gymExperience && (
              <span className="form-error">
                <AlertCircle size={12} /> {errors.gymExperience.message}
              </span>
            )}
          </div>

          {/* Dietary Preference */}
          <div className="form-group">
            <label className="form-label">
              Dietary Preference <span>*</span>
            </label>
            <div className={styles.radioGroup}>
              {[
                { value: "vegetarian", label: "🌿 Vegetarian" },
                { value: "eggetarian", label: "🥚 Eggetarian" },
                { value: "non-veg", label: "🍗 Non-Vegetarian" },
                { value: "vegan", label: "🌱 Vegan" },
              ].map((opt) => (
                <label key={opt.value} className={styles.radioLabel}>
                  <input
                    type="radio"
                    value={opt.value}
                    {...register("dietPreference")}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioCustom} />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          {/* Medical History */}
          <div className="form-group">
            <label className="form-label">Previous Medical History</label>
            <textarea
              {...register("medicalHistory")}
              className={`form-input form-textarea ${errors.medicalHistory ? "error" : ""}`}
              placeholder="e.g. I had a knee surgery 3 years ago — or None"
            />
          </div>

          {/* Fitness Goal */}
          <div className="form-group">
            <label className="form-label">
              Fitness Goal <span>*</span>
            </label>
            <textarea
              {...register("fitnessGoal")}
              className={`form-input form-textarea ${errors.fitnessGoal ? "error" : ""}`}
              placeholder="e.g. I want to lose 10kgs in 3 months and build lean muscle"
            />
            {errors.fitnessGoal && (
              <span className="form-error">
                <AlertCircle size={12} /> {errors.fitnessGoal.message}
              </span>
            )}
          </div>

          {/* Discipline Rating */}
          <div className="form-group">
            <label className="form-label">
              Self-Discipline Rating (1–10) <span>*</span>
              <span className={styles.ratingHint}>
                &nbsp;— How well can you stick to a strict plan?
              </span>
            </label>
            <input
              {...register("disciplineRating")}
              className={`form-input ${errors.disciplineRating ? "error" : ""}`}
              placeholder="e.g. 7"
              type="number"
              min={1}
              max={10}
            />
            {errors.disciplineRating && (
              <span className="form-error">
                <AlertCircle size={12} /> {errors.disciplineRating.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn btn-whatsapp btn-lg ${styles.submitBtn}`}
          >
            <Send size={18} />
            {isSubmitting ? "Sending..." : "Send to Abhinav via WhatsApp 📲"}
          </button>

          <p className={styles.disclaimer}>
            Your details will be sent directly to Abhinav on WhatsApp. No payment required at this step.
          </p>
        </form>
      </div>
    </section>
  );
}
