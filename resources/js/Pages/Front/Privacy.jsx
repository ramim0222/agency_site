import LegalDocLayout from "@/Components/Front/LegalDocLayout";
import { privacyDoc } from "@/data/front/privacy";

/** Stub so /privacy links from Terms resolve — full copy in Front-21. */
export default function Privacy() {
    return (
        <LegalDocLayout
            eyebrow={privacyDoc.eyebrow}
            title={privacyDoc.title}
            updated={privacyDoc.updated}
            intro={privacyDoc.intro}
            sections={privacyDoc.sections}
            related={privacyDoc.related}
            metaDescription="Kiln Studio Privacy Policy — how we handle inquiry and site data."
            headTitle="Privacy Policy — Kiln"
        />
    );
}
