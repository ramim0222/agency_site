import { useState } from "react";
import { Head } from "@inertiajs/react";
import AdminSidebar from "@/Components/SuperAdmin/AdminSidebar";
import AdminTopbar from "@/Components/SuperAdmin/AdminTopbar";

/**
 * Kiln Ops shell — zinc cockpit with teal accent.
 * Deliberately separate from the marketing Front site.
 */
export default function AdminLayout({
    title = "Dashboard",
    eyebrow = "Lead desk",
    children,
}) {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="admin relative flex min-h-[100dvh]">
            <Head title={title} />
            <div className="admin-dotgrid opacity-30" aria-hidden="true" />

            <AdminSidebar open={navOpen} onClose={() => setNavOpen(false)} />

            <div className="relative flex min-w-0 flex-1 flex-col">
                <AdminTopbar
                    title={eyebrow}
                    onMenuClick={() => setNavOpen(true)}
                />
                <main className="relative flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
