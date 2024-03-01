import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useEffect, useState } from "react";
import { TitleT } from "../api/anilibria-types";
import { VideoPlayer } from "../components/VideoPlayer";
import { getTitle } from "../api/getTitle";
import { NavbarLayout } from './_navbar';

export const Route = createRootRoute({
    component: () => <><Outlet /><TanStackRouterDevtools/></>,
    notFoundComponent: () => <><NavbarLayout notFound/><Outlet /><TanStackRouterDevtools/></>
})