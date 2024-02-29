import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { RouterProvider } from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import { router } from "./app";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		{/* <TanStackRouterDevtools router={router} /> */}
	</React.StrictMode>,
);
