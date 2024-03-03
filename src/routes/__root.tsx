import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { NavbarLayout } from './_navbar'
import { IS_DEV } from '../util'

export const Route = createRootRoute({
    component: () => <><Outlet />{IS_DEV && <TanStackRouterDevtools />}</>,
    notFoundComponent: () => <><NavbarLayout notFound /><Outlet />{IS_DEV && <TanStackRouterDevtools />}</>
})
