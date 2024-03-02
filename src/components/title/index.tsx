import { Suspense } from "react";
import TitleFallback from "./fallback";
import TitleData from "./data";

export default function Title() {
	return <Suspense fallback={TitleFallback()}>
		<TitleData />
	</Suspense>
}
