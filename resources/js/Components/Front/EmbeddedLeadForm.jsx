import MultiStepForm from "@/Components/Front/MultiStepForm";

/**
 * Campaign-embedded quote form — posts to /contact → /thank-you.
 */
export default function EmbeddedLeadForm({
    title = "Get a Free Quote",
    note,
    defaults = {},
}) {
    return (
        <div>
            <div className="mb-5">
                <h2 className="text-[1.35rem] font-semibold tracking-[-0.02em] text-front-ink sm:text-[1.5rem]">
                    {title}
                </h2>
                {note ? (
                    <p className="mt-2 text-[14.5px] leading-relaxed text-front-slate">
                        {note}
                    </p>
                ) : null}
            </div>
            <MultiStepForm defaults={defaults} />
        </div>
    );
}
