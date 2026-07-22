import Reveal from "@/Components/Front/Reveal";

export default function TestimonialQuote({ testimonial }) {
    if (!testimonial?.quote) return null;

    return (
        <section className="front-container py-16 lg:py-20">
            <Reveal>
                <figure className="mx-auto max-w-3xl border-l-2 border-front-ember/50 pl-6 sm:pl-8">
                    <blockquote className="font-serif text-[1.45rem] italic leading-[1.35] tracking-[-0.01em] text-front-paper sm:text-[1.75rem]">
                        “{testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-6">
                        <p className="text-[15px] font-medium text-white">
                            {testimonial.name}
                        </p>
                        <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel">
                            {testimonial.role}
                            {testimonial.company
                                ? ` · ${testimonial.company}`
                                : ""}
                        </p>
                    </figcaption>
                </figure>
            </Reveal>
        </section>
    );
}
