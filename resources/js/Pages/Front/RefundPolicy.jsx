import LegalDocLayout from "@/Components/Front/LegalDocLayout";
import { refundDoc } from "@/data/front/refundPolicy";

/** Stub so /refund-policy links from Terms resolve — full copy in Front-22. */
export default function RefundPolicy() {
    return (
        <LegalDocLayout
            eyebrow={refundDoc.eyebrow}
            title={refundDoc.title}
            updated={refundDoc.updated}
            intro={refundDoc.intro}
            sections={refundDoc.sections}
            related={refundDoc.related}
            metaDescription="Kiln Studio Refund Policy — deposits, milestones, and refunds for engagements."
            headTitle="Refund Policy — Kiln"
        />
    );
}
