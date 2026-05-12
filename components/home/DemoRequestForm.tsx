"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { demo } from "@/content/en/home";

type FormState = "idle" | "submitting" | "success" | "error";

type DemoPayload = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  promoCode?: string;
};

export function DemoRequestForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload: DemoPayload = {
      name: String(formData.get("name") ?? "").trim(),
      surname: String(formData.get("surname") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      promoCode: String(formData.get("promoCode") ?? "").trim() || undefined,
    };

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        throw new Error(data.message ?? demo.errorMessage);
      }

      setFormState("success");
      event.currentTarget.reset();
    } catch (error) {
      setFormState("error");
      setErrorMessage(
        error instanceof Error ? error.message : demo.errorMessage,
      );
    }
  }

  return (
    <Section
      id="demo"
      eyebrow={demo.eyebrow}
      heading={
        <>
          {demo.heading}
          <span className="block text-brand">{demo.headingEmphasis}</span>
        </>
      }
      description={demo.description}
    >
      <div className="card-surface mx-auto max-w-3xl p-8">
        {formState === "success" ? (
          <div
            role="status"
            className="space-y-3 rounded-2xl bg-brand-tint p-6 text-brand-dark"
          >
            <h3 className="text-xl font-semibold">{demo.successTitle}</h3>
            <p>{demo.successMessage}</p>
          </div>
        ) : (
          <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium">
                {demo.fields.name}
                <input
                  className="input-field"
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                {demo.fields.surname}
                <input
                  className="input-field"
                  name="surname"
                  type="text"
                  autoComplete="family-name"
                  required
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-medium">
              {demo.fields.email}
              <input
                className="input-field"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              {demo.fields.phone}
              <input
                className="input-field"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              {demo.fields.promo}
              <input className="input-field" name="promoCode" type="text" />
            </label>

            {formState === "error" ? (
              <p role="alert" className="text-sm text-red-600">
                {errorMessage}
              </p>
            ) : null}

            <div>
              <Button
                type="submit"
                variant="primary"
                disabled={formState === "submitting"}
              >
                {formState === "submitting" ? "Sending..." : demo.submit}
              </Button>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}
