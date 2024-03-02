import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { router } from "./app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { saveState, store } from "./store";
import { Provider as ReduxProvider } from "react-redux";

const queryClient = new QueryClient()

setInterval(() => saveState(), 3000)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</ReduxProvider>
		{/* <TanStackRouterDevtools router={router} /> */}
	</React.StrictMode>,
);
