import { Head } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import CultureBlurb from "@/Components/Front/CultureBlurb";
import OpenRolesList from "@/Components/Front/OpenRolesList";
import ApplicationCta from "@/Components/Front/ApplicationCta";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";
import {
    applicationCta,
    careersPage,
    culture,
    openRoles,
} from "@/data/front/careers";

/**
 * Careers — hiring/credibility page (works with zero open roles).
 * Skills: frontend-design (culture + roles split), taste-design (list rhythm),
 * gsap-react (hero + role stagger), ui-ux-pro-max (empty roles, apply CTAs).
 */
export default function Careers() {
    return (
        <div className="front bg-front-graphite">
            <Head title="Careers — Kiln">
                <meta
                    name="description"
                    content="Join Kiln — a small product engineering studio. See open roles or reach out if you’re exceptional."
                />
            </Head>

            <Header />

            <main>
                <CultureBlurb
                    page={careersPage}
                    culture={culture}
                    aboutLink={careersPage.aboutLink}
                />

                <OpenRolesList
                    roles={openRoles}
                    emptyMessage={careersPage.emptyRoles}
                    aboutHref="/about"
                />

                <ApplicationCta content={applicationCta} />
            </main>

            <Footer />
            <WhatsAppButton message={applicationCta.whatsappMessage} />
        </div>
    );
}
