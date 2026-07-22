import { Head } from "@inertiajs/react";
import MinimalHeader from "@/Components/Front/MinimalHeader";
import LandingHero from "@/Components/Front/LandingHero";
import EmbeddedLeadForm from "@/Components/Front/EmbeddedLeadForm";
import TrustSignal from "@/Components/Front/TrustSignal";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";
import MinimalFooter from "@/Components/Front/MinimalFooter";
import Reveal from "@/Components/Front/Reveal";
import { getCampaignBySlug } from "@/data/front/campaigns";

/**
 * Ad campaign landing — template driven by static campaign data.
 * Skills: frontend-design (single focus), taste-design (serif hero),
 * gsap-react (hero), ui-ux-pro-max (embedded form, empty trust).
 * Not linked from site nav — ads only.
 */
export default function CampaignLanding({ slug }) {
    const campaign = getCampaignBySlug(slug);

    if (!campaign) {
        return (
            <div className="front min-h-[100dvh] bg-front-graphite">
                <Head title="Campaign not found — Kiln" />
                <MinimalHeader />
                <main className="front-container py-32 text-center">
                    <h1 className="font-serif text-3xl italic text-front-paper">
                        Campaign not found
                    </h1>
                    <p className="mt-4 text-[15px] text-front-steel">
                        This landing page is unavailable.
                    </p>
                </main>
                <MinimalFooter />
            </div>
        );
    }

    const trustSignals = (campaign.trust ?? []).slice(0, 2);
    const formDefaults = {
        ...(campaign.form?.defaults ?? {}),
        utm_campaign: campaign.utmCampaignDefault,
    };

    return (
        <div className="front bg-front-graphite">
            <Head title={campaign.metaTitle}>
                <meta name="description" content={campaign.metaDescription} />
                <meta name="robots" content="noindex,nofollow" />
            </Head>

            <MinimalHeader />

            <main>
                <LandingHero hero={campaign.hero} />

                <section className="bg-front-paper pb-20 pt-6 lg:pb-24 lg:pt-10">
                    <div className="front-container grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                        <div className="order-1 lg:order-2 lg:col-span-7 xl:col-span-8">
                            <Reveal>
                                <EmbeddedLeadForm
                                    title={campaign.form?.title}
                                    note={campaign.form?.note}
                                    defaults={formDefaults}
                                />
                            </Reveal>
                        </div>

                        <aside className="order-2 flex flex-col gap-5 lg:order-1 lg:col-span-5 xl:col-span-4">
                            <Reveal>
                                <div className="rounded-2xl border border-front-ink/10 bg-white p-6">
                                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-front-slate">
                                        Prefer WhatsApp?
                                    </p>
                                    <p className="mt-3 text-[15px] leading-relaxed text-front-ink">
                                        Same promise as the ad — send a short note and we’ll reply on chat.
                                    </p>
                                    <WhatsAppButton
                                        variant="solid"
                                        label="Chat on WhatsApp"
                                        message={campaign.whatsappMessage}
                                        className="mt-5 w-full justify-center py-3"
                                    />
                                </div>
                            </Reveal>

                            {trustSignals.length === 0 ? (
                                <TrustSignal signal={null} />
                            ) : (
                                trustSignals.map((signal, index) => (
                                    <Reveal
                                        key={`${signal.type}-${index}`}
                                        delay={0.06 * (index + 1)}
                                    >
                                        <TrustSignal signal={signal} />
                                    </Reveal>
                                ))
                            )}
                        </aside>
                    </div>
                </section>
            </main>

            <MinimalFooter />
        </div>
    );
}
