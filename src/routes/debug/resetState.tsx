import { Navigate, createFileRoute } from "@tanstack/react-router"

function ResetState() {
    window.localStorage.clear()
    return <Navigate to="/" replace />
}

export const Route = createFileRoute('/debug/resetState')({
    component: ResetState,
})