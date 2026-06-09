import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Send, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

const Schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  class: z.string().min(1, "Please select"),
  course: z.string().min(1, "Please select"),
  message: z.string().max(500).optional().or(z.literal("")),
});
type FormData = z.infer<typeof Schema>;

const CLASS_OPTIONS = ["Class 11", "Class 12", "Dropper / Repeater", "Foundation (9th-10th)"];
const COURSE_OPTIONS = ["Class 11 Chemistry", "Class 12 Chemistry", "JEE Chemistry", "NEET Chemistry"];

export function EnquiryForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(Schema) });

  const onSubmit = async (data: FormData) => {
    // TODO: wire to Lovable Cloud table when backend is enabled.
    await new Promise((r) => setTimeout(r, 700));
    console.info("[enquiry]", data);
    toast.success("Enquiry received — we'll call you shortly.");
    setDone(true);
    reset();
  };

  return (
    <section id="admission" className="py-20 md:py-28">
      <div className="tc-container">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Book A Free Demo Class"
              align="left"
              title="Sit in a live Chemistry class — then decide."
              desc="Share a few details and we'll call you back within working hours to schedule a free demo class with Shashi Bhushan Sir. No payment, no commitment."
            />
            <Reveal variant="fade-up" delay={160}>
              <ul className="mt-8 space-y-4">
                {[
                  ["Personal counselling", "Understand the right batch for your child."],
                  ["Free trial class", "Sit in a live class before deciding."],
                  ["Transparent fees", "No hidden costs, clear payment plans."],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-[color:var(--cta)]/10 text-[color:var(--cta)]">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t}</p>
                      <p className="text-sm text-muted-foreground">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="fade-up" delay={240}>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-[color:var(--cta)]" />
                Your information stays private — used only for admissions follow-up.
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale-in" delay={120}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl border border-border bg-card p-6 tc-shadow-lg md:p-8"
              noValidate
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Admission Form
              </p>
              <h3 className="mt-1 text-xl font-bold text-foreground md:text-2xl">
                Tell us about the student
              </h3>

              <div className="mt-6 grid gap-4">
                <Field label="Full Name" error={errors.name?.message}>
                  <input
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Riya Sharma"
                    {...register("name")}
                    className={inputCls(!!errors.name)}
                  />
                </Field>

                <Field label="Mobile Number" error={errors.mobile?.message}>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground">
                      +91
                    </span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      autoComplete="tel"
                      placeholder="10-digit number"
                      {...register("mobile")}
                      className={cn(inputCls(!!errors.mobile), "pl-12")}
                    />
                  </div>
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Class" error={errors.class?.message}>
                    <select {...register("class")} className={inputCls(!!errors.class)} defaultValue="">
                      <option value="" disabled>Select class</option>
                      {CLASS_OPTIONS.map((c) => (<option key={c} value={c}>{c}</option>))}
                    </select>
                  </Field>
                  <Field label="Target Exam" error={errors.course?.message}>
                    <select {...register("course")} className={inputCls(!!errors.course)} defaultValue="">
                      <option value="" disabled>Select target</option>
                      {COURSE_OPTIONS.map((c) => (<option key={c} value={c}>{c}</option>))}
                    </select>
                  </Field>
                </div>

                <Field label="Message (optional)" error={errors.message?.message}>
                  <textarea
                    rows={3}
                    placeholder="Anything you'd like us to know"
                    {...register("message")}
                    className={cn(inputCls(!!errors.message), "min-h-[88px] resize-y")}
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="tc-cta mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold disabled:opacity-70"
              >
                {isSubmitting ? "Submitting…" : (<>
                  Submit Enquiry <Send className="h-4 w-4" />
                </>)}
              </button>

              {done && (
                <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-[color:var(--cta)]">
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks! Our team will contact {SITE.phone.replace("+91 ", "+91 ")} shortly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function inputCls(invalid: boolean) {
  return cn(
    "w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors",
    "focus:border-[color:var(--cta)] focus:ring-2 focus:ring-[color:var(--cta)]/15",
    invalid ? "border-destructive" : "border-border"
  );
}