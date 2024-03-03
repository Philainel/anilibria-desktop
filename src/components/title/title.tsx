import { useSuspenseQuery } from "@tanstack/react-query"
import { TitleT } from "../../api/anilibria-types"
import { RawTitleData } from "./rawTitle"

export default function TitleData({ suspendQuery, allowExpanding, short }: { suspendQuery: () => TitleT | Promise<TitleT>, allowExpanding?: boolean, short: boolean }) {
	const query = useSuspenseQuery({
		queryKey: ['title', suspendQuery], queryFn: suspendQuery, staleTime: 0
	})
	if (!query.isSuccess) return <></>
	/*console.log(query.data)*/
	const title = query.data
	return RawTitleData({ title, short, allowExpanding })
}

