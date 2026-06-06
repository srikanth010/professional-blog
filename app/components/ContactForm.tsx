"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.target);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (accessKey) {
      formData.append("access_key", accessKey);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Form Submitted Successfully");
        event.target.reset();
      } else {
        setStatus("error");
        setMessage(data.message);
      }
    } catch (error) {
      setStatus("error");
      setMessage("Client-side error occurred.");
    }
  };

  return (
    <div className="w-full">
      {status === "success" ? (
        <div
          className="flex flex-col items-center justify-center py-10 rounded-2xl border animate-in fade-in zoom-in duration-300"
          style={{
            background: "rgba(16, 185, 129, 0.1)",
            borderColor: "rgba(16, 185, 129, 0.3)",
          }}
        >
          <CheckCircle
            className="mb-4"
            size={48}
            style={{ color: "rgb(52, 211, 153)" }}
          />
          <h3 className="text-xl font-bold" style={{ color: "rgb(167, 243, 208)" }}>
            Message Received!
          </h3>
          <p
            className="text-center px-6"
            style={{ color: "rgba(167, 243, 208, 0.8)" }}
          >
            Thanks for reaching out. As an AEM Lead, I take communications
            seriously and will get back to you soon.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-semibold underline"
            style={{ color: "rgb(167, 243, 208)" }}
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold ml-1"
                style={{ color: "var(--foreground)" }}
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Adobe Expert"
                className="px-4 py-3 rounded-xl border outline-none transition-all focus-visible:ring-2 focus-visible:ring-accent"
                style={{
                  borderColor: "var(--card-border)",
                  background: "var(--card)",
                  color: "var(--foreground)",
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold ml-1"
                style={{ color: "var(--foreground)" }}
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="expert@aem.com"
                className="px-4 py-3 rounded-xl border outline-none transition-all focus-visible:ring-2 focus-visible:ring-accent"
                style={{
                  borderColor: "var(--card-border)",
                  background: "var(--card)",
                  color: "var(--foreground)",
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold ml-1"
              style={{ color: "var(--foreground)" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="How can I help with your AEM architecture or project?"
              className="px-4 py-3 rounded-xl border outline-none transition-all focus-visible:ring-2 focus-visible:ring-accent"
              style={{
                borderColor: "var(--card-border)",
                background: "var(--card)",
                color: "var(--foreground)",
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 hover:opacity-90"
            style={{ background: "var(--accent)" }}
          >
            {status === "loading" ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                Submit Inquiry <Send size={18} />
              </>
            )}
          </button>

          {status === "error" && (
            <div
              className="flex items-center gap-2 p-3 rounded-lg border"
              style={{
                background: "rgba(239, 68, 68, 0.1)",
                borderColor: "rgba(239, 68, 68, 0.3)",
                color: "rgb(248, 113, 113)",
              }}
            >
              <AlertCircle size={18} />
              <p className="text-sm font-medium">
                {message || "Something went wrong."}
              </p>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
