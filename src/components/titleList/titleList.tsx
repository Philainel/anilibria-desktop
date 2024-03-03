import { useSuspenseQuery } from "@tanstack/react-query";
import { TitleT } from "../../api/anilibria-types";
import { RawTitleData } from "../title/rawTitle";

export default function TitleListData({ suspendQuery, key }: { suspendQuery: () => TitleT[] | Promise<TitleT[]>, key?: any }) {
	const results = useSuspenseQuery({
		queryKey: ['title-list-'+key], queryFn: suspendQuery, staleTime: 0
	})
	/*console.log(results.data)*/
	return <ul className="flex flex-col gap-4">
		{results.data.map(it => {
			/*console.log(it)*/
			return <li id={"title-list-title"+it.code} key={it.code}>
				<RawTitleData title={it} short={true} key={key+it.code.toString()} />
				{/* <Link to="/title/$code" params={{ code: it.code }}> */}
				{/* </Link> */}
			</li>
		})}
	</ul>
}
