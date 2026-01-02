"use client";

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(event.target);

    // Use the environment variable instead of the hardcoded key
     const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    // Note: In production, move this key to an .env file
    if (accessKey) {
    formData.append("access_key", accessKey);
  }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
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
        <div className="flex flex-col items-center justify-center py-10 bg-green-50 rounded-2xl border border-green-100 animate-in fade-in zoom-in duration-300">
          <CheckCircle className="text-green-500 mb-4" size={48} />
          <h3 className="text-xl font-bold text-green-900">Message Received!</h3>
          <p className="text-green-700 text-center px-6">Thanks for reaching out. As an AEM Lead, I take communications seriously and will get back to you soon.</p>
          <button onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-green-800 underline">Send another</button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="Adobe Expert"
                className="px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="expert@aem.com"
                className="px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
            <textarea 
              name="message" 
              required 
              rows={5}
              placeholder="How can I help with your AEM architecture or project?"
              className="px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70"
          >
            {status === "loading" ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>Submit Inquiry <Send size={18} /></>
            )}
          </button>

          {status === "error" && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">
              <AlertCircle size={18} />
              <p className="text-sm font-medium">{message || "Something went wrong."}</p>
            </div>
          )}
        </form>
      )}
    </div>
  );
}