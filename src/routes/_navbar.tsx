import { Link, Outlet, ParsedLocation, createFileRoute, useNavigate, useRouter, useRouterState } from "@tanstack/react-router";
import { MDIcon } from "../components/MDIcon";

export const Route = createFileRoute("/_navbar")({
    component: NavbarLayout
})

function NavbarLayout() {
    const navigate = useNavigate({from: Route.fullPath})
    const { pathname } = useRouterState().location
    const L = ({ path, children }: { path: string, children: React.ReactNode }) => <Link to={path} className={`${path == pathname ? 'bg-brand-light text-brand-dark' : 'bg-brand-primary text-brand-light'} px-4 py-2 rounded-md`}>{children}</Link>
    const submitSearch: React.FormEventHandler<HTMLFormElement>  = (e) => {
        e.preventDefault()
        navigate({to: "/search", search: {query: (e.currentTarget.firstElementChild as HTMLInputElement).value}})
    }
    return <>
        <header>
            <nav className='flex gap-4 p-4 items-center'>
                <img src="https://placehold.co/128x128.png" width={32} className='rounded-full' />
                <L path="/">Релизы</L>
                <L path="/catalog">Каталог</L>
                <L path="/favourite">Избранное</L>
                <form onSubmit={submitSearch}>
                    <input type="text" className='bg-brand-light text-brand-dark px-4 py-2 rounded-md' placeholder='Поиск...' />
                </form>
                <a className='text-brand-light p-2 rounded-md flex items-center w-fit gap-2 cursor-pointer ml-auto'><MDIcon>settings</MDIcon></a>
                <a className='text-brand-light p-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon>notifications</MDIcon></a>
                <a className='text-brand-light p-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><img src="https://placehold.co/128x128.png" width={32} className='rounded-full' /></a>
            </nav>
        </header>
        <Outlet />
    </>
}