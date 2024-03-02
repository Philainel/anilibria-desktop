import { Suspense } from "react";
import TitleFallback from "./fallback";
import TitleData from "./data";
import { TitleT } from "../../api/anilibria-types";

export default function Title({ suspendQuery }: { suspendQuery: () => TitleT | Promise<TitleT> }) {
	return <Suspense fallback={TitleFallback()}>
		<TitleData suspendQuery={suspendQuery} />
	</Suspense>
}
