import LegalDocLayout from "@/Components/Front/LegalDocLayout";
import { termsDoc } from "@/data/front/terms";

/**
 * Terms of Service — static legal doc for ads/compliance.
 * Skills applied via LegalDocLayout (frontend-design, gsap-react, taste, ux).
 */
export default function Terms() {
    return (
        <LegalDocLayout
            eyebrow={termsDoc.eyebrow}
            title={termsDoc.title}
            updated={termsDoc.updated}
            intro={termsDoc.intro}
            sections={termsDoc.sections}
            related={termsDoc.related}
            metaDescription="Kiln Studio Terms of Service — rules for using our website, contact forms, and related services."
            headTitle="Terms of Service — Kiln"
        />
    );
}
