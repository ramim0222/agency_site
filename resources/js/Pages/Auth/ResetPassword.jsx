import AdminAuthLayout from "@/Components/Auth/AdminAuthLayout";
import AdminResetPasswordForm from "@/Components/Auth/AdminResetPasswordForm";

/**
 * Admin password reset completion (from emailed token link).
 * Route: /admin/reset-password/{token}
 */
export default function ResetPassword({
    token,
    email,
    resetComplete = false,
    status = null,
}) {
    return (
        <AdminAuthLayout
            title="Choose a new password"
            eyebrow="Internal lead desk · new password"
        >
            <AdminResetPasswordForm
                token={token}
                email={email}
                resetComplete={resetComplete}
                status={status}
            />
        </AdminAuthLayout>
    );
}
