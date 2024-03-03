import { Navigate, createFileRoute, useNavigate } from "@tanstack/react-router"
import { useEffect } from "react"

function ResetState() {
    useEffect(() => {
        window.localStorage.clear()
        window.location.href = "/"
    }, [])
    return <>You should be redirected.</>
}

export const Route = createFileRoute('/debug/resetState')({
    component: ResetState,
})