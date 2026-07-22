import LegalDocLayout from "@/Components/Front/LegalDocLayout";
import { refundDoc } from "@/data/front/refundPolicy";

/**
 * Refund Policy — static legal doc for deposits, milestones, cancellations.
 * Skills applied via LegalDocLayout (frontend-design, gsap-react, taste, ux).
 */
export default function RefundPolicy() {
    return (
        <LegalDocLayout
            eyebrow={refundDoc.eyebrow}
            title={refundDoc.title}
            updated={refundDoc.updated}
            intro={refundDoc.intro}
            sections={refundDoc.sections}
            related={refundDoc.related}
            metaDescription="Kiln Studio Refund Policy — deposits, milestones, cancellations, and how to request a refund. No self-serve checkout on this site."
            headTitle="Refund Policy — Kiln"
        />
    );
}
