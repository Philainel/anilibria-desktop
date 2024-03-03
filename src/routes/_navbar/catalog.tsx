import { Link, createFileRoute } from '@tanstack/react-router'

function Catalog() {
    return <main>
        <p>Каталог скоро будет!</p>
        <Link to="/" className='text-blue-500'>Вернутся домой...</Link>
    </main>
}

export const Route = createFileRoute('/_navbar/catalog')({
    component: Catalog,
})