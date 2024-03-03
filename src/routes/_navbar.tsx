import { Link, Outlet, createFileRoute, useNavigate, useRouterState } from "@tanstack/react-router";
import { MDIcon } from "../components/MDIcon";
import L from "../components/ActivatedLink";

export const Route = createFileRoute("/_navbar")({
    component: NavbarLayout
})

export function NavbarLayout({ notFound }: { notFound?: boolean }) {
    const navigate = useNavigate({ from: Route.fullPath })
    const { pathname } = useRouterState().location
    // const L = ({ path, children }: { path: string, children: React.ReactNode }) => <Link to={path} className={`${path == pathname ? 'bg-brand-light text-brand-dark' : 'bg-brand-primary text-brand-light'} px-4 py-2 rounded-md`}>{children}</Link>
    const submitSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        navigate({ to: "/search", search: { query: (e.currentTarget.firstElementChild as HTMLInputElement).value } })
    }
    const activeLink = 'bg-brand-light text-brand-dark'
    const inactiveLink = 'bg-brand-primary text-brand-light';
    return <div className="p-8 flex flex-col gap-8">
        <header>
            <nav className='flex gap-4 items-center'>
                <img src="/favicon.svg" width={32} className='rounded-full' />
                <L to="/" commonClass="px-4 py-2 rounded-md" activeClass={activeLink} inactiveClass={inactiveLink}>Релизы</L>
                <L to="/catalog" commonClass="px-4 py-2 rounded-md" activeClass={activeLink} inactiveClass={inactiveLink}>Каталог</L>
                <L to="/favorite" commonClass="px-4 py-2 rounded-md" activeClass={activeLink} inactiveClass={inactiveLink}>Избранное</L>
                <form onSubmit={submitSearch}>
                    <input type="text" className='bg-brand-light text-brand-dark px-4 py-2 rounded-md' placeholder='Поиск...' />
                </form>
                <L to="/random" commonClass="px-4 py-2 rounded-md" activeClass={activeLink} inactiveClass={inactiveLink}>Мне повезёт!</L>
                <L to="/settings" commonClass='p-2 flex items-center w-fit ml-auto' activeClass="rounded-md bg-brand-light text-brand-dark"><MDIcon>settings</MDIcon></L>
                <a className='p-2 flex items-center w-fit cursor-pointer'><MDIcon>notifications</MDIcon></a>
                <a className='p-2 flex items-center w-fit cursor-pointer'><img src="https://placehold.co/128x128.png" width={32} className='rounded-full' /></a>
            </nav>
        </header>
        {notFound && <main className='p-4'>
            Страница {pathname} не найдена! Сообщите разработчикам о неполадке.
        </main>}
        <Outlet />
    </div>
}
