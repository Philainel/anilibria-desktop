import { Link, Outlet, createFileRoute, useNavigate, useRouterState } from "@tanstack/react-router";
import { MDIcon } from "../components/MDIcon";
import L from "../components/ActivatedLink";
import * as Popover from '@radix-ui/react-popover'
import { useState } from "react";
import ActiveWrapper from "../components/ActiveWrapper";

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
    const [notificationsOpen, setNotificationsOpen] = useState(false)
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
                <Popover.Root open={notificationsOpen}>
                    <Popover.Trigger onClick={() => setNotificationsOpen(!notificationsOpen)}>
                        <ActiveWrapper commonClass="p-2 flex items-center w-fit" activeClass="rounded-md bg-brand-light text-brand-dark" activeCriterion={() => notificationsOpen}><button><MDIcon>notifications</MDIcon></button></ActiveWrapper>
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Content align="end" asChild sideOffset={16}>
                            <div className="rounded-md bg-brand-light text-brand-dark w-[24rem] p-4">
                                <p className="text-xl">Уведомления</p>
                                <div className="flex flex-col">
                                    <div className="bg-slate-500 bg-opacity-25 rounded-md p-2 flex gap-2">
                                        <img src="https://placehold.co/200x300.png" width={64} height={96} alt="" />
                                        <div className="grow flex flex-col">
                                            <p className="text-lg">Вышла новая серия!</p>
                                            <p>Tensei Slime</p>
                                            <div className="flex gap-2 mt-auto">
                                                <button className="p-1 rounded-md bg-brand-primary text-brand-light w-9 h-9 flex justify-center items-center"><MDIcon>play_arrow</MDIcon></button>
                                                <button className="p-1 rounded-md bg-brand-light text-brand-dark w-9 h-9 flex justify-center items-center"><MDIcon>schedule</MDIcon></button>
                                            </div>
                                        </div>
                                        <button className="w-8 flex justify-center items-center"><MDIcon>close</MDIcon></button>
                                    </div>
                                </div>
                            </div>
                        </Popover.Content>
                    </Popover.Portal>
                </Popover.Root>
                <L to="/profile" commonClass='p-2 flex items-center w-fit cursor-pointer max-w-40 max-h-40' activeClass="rounded-md bg-brand-primary" inactiveClass="rounded-full"><img src="https://placehold.co/128x128.png" width={32} className="rounded-[inherit]" /></L>
            </nav>
        </header>
        {notFound && <main className='p-4'>
            Страница {pathname} не найдена! Сообщите разработчикам о неполадке.
        </main>}
        <Outlet />
    </div>
}
