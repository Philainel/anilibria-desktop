import { Link, createFileRoute } from '@tanstack/react-router'

function Profile() {
    return <main>
        <p>Профиль скоро будет!</p>
        <Link to="/" className='text-blue-500'>Вернутся домой...</Link>
    </main>
}

export const Route = createFileRoute('/_navbar/profile')({
    component: Profile,
})