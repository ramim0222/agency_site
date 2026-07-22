import AdminAuthLayout from "@/Components/Auth/AdminAuthLayout";
import AdminForgotPasswordForm from "@/Components/Auth/AdminForgotPasswordForm";

/**
 * Admin forgot-password request.
 * Route: /admin/forgot-password — linked only from /admin/login.
 */
export default function ForgotPassword({ status }) {
    return (
        <AdminAuthLayout
            title="Reset password"
            eyebrow="Internal lead desk · reset password"
        >
            <AdminForgotPasswordForm status={status} />
        </AdminAuthLayout>
    );
}
