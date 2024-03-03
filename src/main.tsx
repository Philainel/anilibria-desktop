import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { router } from "./app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { saveState, store } from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { AnilibriaWS } from "./websocket";
import { pushNewRelease } from "./store/slice/notifications";
import getTitle from "./api/getTitle";

const queryClient = new QueryClient()
// console.log(import.meta.env.WS)
const anilibriaWS = new AnilibriaWS(/* import.meta.env.WS == "LOCAL" ? */ /* "ws://localhost:1800" */ /* : */ "wss://api.anilibria.tv/v3/ws")

anilibriaWS.subscribe("encode_finish", (e) => {
	console.log("owo encoding done!")
	getTitle({ filter: "code", id: +e.data.id }).then(({ code }) => { console.log(code); store.dispatch(pushNewRelease(code)) })
})

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
