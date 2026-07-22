export default function TeamMemberCard({ member }) {
    if (!member) return null;

    return (
        <article
            data-team-card
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-front-panel transition-colors hover:border-white/18"
        >
            <div className="relative overflow-hidden">
                <img
                    src={member.photo.src}
                    alt={member.photo.alt}
                    width={480}
                    height={560}
                    className="aspect-[480/560] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-front-panel to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[1.1rem] font-semibold tracking-[-0.015em] text-white">
                    {member.name}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-front-ember-soft">
                    {member.role}
                </p>
                {member.bio ? (
                    <p className="mt-3 text-[14px] leading-relaxed text-front-steel">
                        {member.bio}
                    </p>
                ) : null}
            </div>
        </article>
    );
}
