import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { NavbarLayout } from './_navbar';

export const Route = createRootRoute({
    component: () => <><Outlet /><TanStackRouterDevtools/></>,
    notFoundComponent: () => <><NavbarLayout notFound/><Outlet /><TanStackRouterDevtools/></>
})
