import { Suspense } from "react";
import TitleFallback from "./fallback";
import TitleData from "./data";
import { TitleT } from "../../api/anilibria-types";

export default function Title({ suspendQuery, key, allowExpanding }: { suspendQuery: () => TitleT | Promise<TitleT>, key?: string , allowExpanding?: boolean}) {
	return <Suspense fallback={TitleFallback()} key={key}>
		<TitleData suspendQuery={suspendQuery} allowExpanding={allowExpanding}/>
	</Suspense>
}
