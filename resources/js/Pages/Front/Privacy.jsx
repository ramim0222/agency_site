import LegalDocLayout from "@/Components/Front/LegalDocLayout";
import { privacyDoc } from "@/data/front/privacy";

/**
 * Privacy Policy — static legal doc for lead-form PII compliance.
 * Skills applied via LegalDocLayout (frontend-design, gsap-react, taste, ux).
 */
export default function Privacy() {
    return (
        <LegalDocLayout
            eyebrow={privacyDoc.eyebrow}
            title={privacyDoc.title}
            updated={privacyDoc.updated}
            intro={privacyDoc.intro}
            sections={privacyDoc.sections}
            related={privacyDoc.related}
            metaDescription="Kiln Studio Privacy Policy — how we collect and use inquiry form data, UTMs, and site communications."
            headTitle="Privacy Policy — Kiln"
        />
    );
}
