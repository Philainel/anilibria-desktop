import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { router } from "./app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
		{/* <TanStackRouterDevtools router={router} /> */}
	</React.StrictMode>,
);
