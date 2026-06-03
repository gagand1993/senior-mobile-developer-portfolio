"use client";

import { Loader2, Send } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<FormValues>;

const initialValues: FormValues = {
  name: "",
  email: "",
  message: ""
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues) {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Project brief is required.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("Usually replies within one business day.");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value
    }));

    if (errors[name as keyof FormValues]) {
      setErrors((current) => ({
        ...current,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Please complete all fields correctly before sending.");
      return;
    }

    setStatus("loading");
    setStatusMessage("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim()
        })
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Message could not be sent.");
      }

      setValues(initialValues);
      setErrors({});
      setStatus("success");
      setStatusMessage("Message sent successfully. Thank you for reaching out.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Message could not be sent. Please try again.");
    }
  };

  return (
    <form
      className="contact-form glass rounded-lg"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="contact-form__grid">
        <label className="contact-field">
          <span>Name</span>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            className="contact-input focus-ring"
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name ? <small id="name-error" className="contact-error">{errors.name}</small> : null}
        </label>
        <label className="contact-field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="contact-input focus-ring"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email ? <small id="email-error" className="contact-error">{errors.email}</small> : null}
        </label>
      </div>
      <label className="contact-field">
        <span>Project brief</span>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={4}
          className="contact-input contact-textarea focus-ring"
          placeholder="Tell me about the app, timeline, platform, and goals"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message ? <small id="message-error" className="contact-error">{errors.message}</small> : null}
      </label>
      <div className="contact-form__footer">
        <p className={`contact-status contact-status--${status}`}>{statusMessage}</p>
        <button type="submit" className="contact-submit focus-ring" disabled={status === "loading"}>
          {status === "loading" ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
