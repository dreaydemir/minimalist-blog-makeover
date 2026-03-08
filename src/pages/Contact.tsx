import { useState } from "react";
import { z } from "zod";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { MapPin } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqeyawby";

const contactSchema = z.object({
  name: z.string().trim().min(1, "İsim gereklidir").max(100, "İsim çok uzun"),
  email: z.string().trim().email("Geçerli bir e-posta girin").max(255),
  subject: z.string().trim().min(1, "Konu gereklidir").max(200, "Konu çok uzun"),
  message: z.string().trim().min(1, "Mesaj gereklidir").max(2000, "Mesaj çok uzun"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError("");

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Form gönderilemedi.");
      }

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitError("Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground";

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <section className="container mx-auto max-w-4xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">İletişim</p>
            <h1 className="mt-4 font-serif text-3xl font-medium text-foreground">
              Bana Ulaşın
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sorularınız, önerileriniz veya iş birliği teklifleriniz için
              aşağıdaki formu kullanabilirsiniz.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-foreground" />
                <span>Türkiye</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <h2 className="font-serif text-2xl text-foreground">Teşekkürler!</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağım.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Adınız"
                    maxLength={100}
                    className={inputClass}
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="E-posta adresiniz"
                    maxLength={255}
                    className={inputClass}
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>

                <div>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Konu"
                    maxLength={200}
                    className={inputClass}
                  />
                  {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Mesajınız"
                    rows={6}
                    maxLength={2000}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>

                {submitError && (
                  <p className="text-sm text-destructive">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-foreground px-6 py-3 text-xs uppercase tracking-widest text-background transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <BlogFooter />
    </div>
  );
};

export default Contact;
