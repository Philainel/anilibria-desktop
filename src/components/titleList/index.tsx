import { Suspense } from "react";
import { TitleT } from "../../api/anilibria-types";
import TitleListData from "./titleList";
import TitleListFallback from "./fallback";

export default function TitleList({ suspendQuery }: { suspendQuery: () => TitleT[] | Promise<TitleT[]>}) {
	return <Suspense fallback={TitleListFallback()}>
		<TitleListData suspendQuery={suspendQuery} />
	</Suspense>
}
