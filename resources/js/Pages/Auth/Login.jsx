import AdminAuthLayout from "@/Components/Auth/AdminAuthLayout";
import AdminLoginForm from "@/Components/Auth/AdminLoginForm";

/**
 * Sole authentication entry for Kiln Ops (SuperAdmin).
 * Route: /admin/login — never linked from the public Front site.
 */
export default function Login({ status }) {
    return (
        <AdminAuthLayout title="Admin sign in">
            <AdminLoginForm status={status} />
        </AdminAuthLayout>
    );
}
