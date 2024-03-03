import { Link, Outlet, createFileRoute, useNavigate, useRouterState } from "@tanstack/react-router";
import { MDIcon } from "../components/MDIcon";

export const Route = createFileRoute("/_navbar")({
    component: NavbarLayout
})

export function NavbarLayout({ notFound }: { notFound?: boolean }) {
    const navigate = useNavigate({ from: Route.fullPath })
    const { pathname } = useRouterState().location
    const L = ({ path, children }: { path: string, children: React.ReactNode }) => <Link to={path} className={`${path == pathname ? 'bg-brand-light text-brand-dark' : 'bg-brand-primary text-brand-light'} px-4 py-2 rounded-md`}>{children}</Link>
    const submitSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        navigate({ to: "/search", search: { query: (e.currentTarget.firstElementChild as HTMLInputElement).value } })
    }
    return <>
        <header>
            <nav className='flex gap-4 p-4 items-center'>
                <img src="/favicon.svg" width={32} className='rounded-full' />
                <L path="/">Релизы</L>
                <L path="/catalog">Каталог</L>
                <L path="/favorite">Избранное</L>
                <form onSubmit={submitSearch}>
                    <input type="text" className='bg-brand-light text-brand-dark px-4 py-2 rounded-md' placeholder='Поиск...' />
                </form>
                <L path="/random">Мне повезёт!</L>
                <a className='text-brand-light p-2 rounded-md flex items-center w-fit gap-2 cursor-pointer ml-auto'><MDIcon>settings</MDIcon></a>
                <a className='text-brand-light p-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon>notifications</MDIcon></a>
                <a className='text-brand-light p-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><img src="https://placehold.co/128x128.png" width={32} className='rounded-full' /></a>
            </nav>
        </header>
        {notFound && <main className='p-4'>
            Страница {pathname} не найдена! Сообщите разработчикам о неполадке.
        </main>}
        <Outlet />
    </>
}
