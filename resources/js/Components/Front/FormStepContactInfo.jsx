import { cn } from "@/lib/utils";

const fieldClass =
    "w-full rounded-lg border border-front-ink/15 bg-white px-3.5 py-2.5 text-[15px] text-front-ink outline-none transition-colors placeholder:text-front-slate/55 focus:border-front-ink/40 focus-visible:ring-2 focus-visible:ring-front-ember/40 disabled:cursor-not-allowed disabled:opacity-60";

export default function FormStepContactInfo({
    data,
    onChange,
    errors = {},
    disabled = false,
}) {
    return (
        <fieldset disabled={disabled} className="space-y-5">
            <legend className="text-[1.35rem] font-semibold tracking-[-0.02em] text-front-ink">
                How do we reach you?
            </legend>
            <p className="mt-2 max-w-[48ch] text-[14.5px] leading-relaxed text-front-slate">
                No account created. We follow up manually by email or WhatsApp.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                    id="lead-name"
                    label="Name"
                    error={errors.name}
                    className="sm:col-span-2"
                >
                    <input
                        id="lead-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={data.name}
                        onChange={(e) => onChange("name", e.target.value)}
                        className={cn(fieldClass, errors.name && "border-red-400")}
                        placeholder="Your name"
                        required
                    />
                </Field>

                <Field id="lead-email" label="Email" error={errors.email}>
                    <input
                        id="lead-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => onChange("email", e.target.value)}
                        className={cn(fieldClass, errors.email && "border-red-400")}
                        placeholder="you@company.com"
                        required
                    />
                </Field>

                <Field
                    id="lead-phone"
                    label="Phone / WhatsApp"
                    error={errors.phone}
                >
                    <input
                        id="lead-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={data.phone}
                        onChange={(e) => onChange("phone", e.target.value)}
                        className={cn(fieldClass, errors.phone && "border-red-400")}
                        placeholder="+1 555 010 2938"
                        required
                    />
                </Field>

                <Field
                    id="lead-message"
                    label="Project notes"
                    hint="Optional — anything that helps us prepare"
                    error={errors.message}
                    className="sm:col-span-2"
                >
                    <textarea
                        id="lead-message"
                        name="message"
                        rows={4}
                        value={data.message}
                        onChange={(e) => onChange("message", e.target.value)}
                        className={cn(fieldClass, "resize-y min-h-[120px]", errors.message && "border-red-400")}
                        placeholder="What exists today, who it's for, and what 'done' looks like."
                    />
                </Field>
            </div>
        </fieldset>
    );
}

function Field({ id, label, hint, error, className, children }) {
    return (
        <div className={className}>
            <label htmlFor={id} className="block text-[13.5px] font-medium text-front-ink">
                {label}
            </label>
            {hint && (
                <p className="mt-0.5 text-[12.5px] text-front-slate">{hint}</p>
            )}
            <div className="mt-1.5">{children}</div>
            {error && (
                <p className="mt-1.5 text-[13px] text-red-700" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}
