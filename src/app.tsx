import { createRouter, createHashHistory, createBrowserHistory } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { IS_TAURI } from './util'

// Create a new router instance
export const router = createRouter({
	routeTree, history: IS_TAURI ? createHashHistory() : createBrowserHistory(),
	defaultPendingMinMs: 0
})


// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}