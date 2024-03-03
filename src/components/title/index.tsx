import { Suspense } from "react";
import TitleFallback from "./fallback";
import TitleData from "./title";
import { TitleT } from "../../api/anilibria-types";

export default function Title({ suspendQuery, allowExpanding, short = false }: { suspendQuery: () => TitleT | Promise<TitleT>, allowExpanding?: boolean, short?: boolean }) {
	return <Suspense fallback={TitleFallback({short})}>
		<TitleData suspendQuery={suspendQuery} allowExpanding={allowExpanding} short={short} />
	</Suspense>
}
