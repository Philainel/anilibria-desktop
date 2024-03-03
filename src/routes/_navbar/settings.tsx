import { Link, createFileRoute } from '@tanstack/react-router'

function Settings() {
    return <main>
        <p>Настройки скоро будут!</p>
        <Link to="/" className='text-blue-500'>Вернутся домой...</Link>
    </main>
}

export const Route = createFileRoute('/_navbar/settings')({
    component: Settings,
})