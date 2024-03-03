import { createFileRoute } from "@tanstack/react-router"
import apiSearch from "../../api/search"
import TitleList from "../../components/titleList"

export function Search() {
    const { query } = Route.useSearch()
    return <>
        <main className='flex flex-col gap-4'>
            <TitleList suspendQuery={async () => {let a = (await apiSearch({ search: query })); /*console.log(a);*/ return a.list}} key={'search-results-'+query} />
        </main>
    </>
}

{/* <article className="text-brand-light flex gap-4">
    <img src={"https://wwnd.anilib.moe"+title.posters.original.url} alt={`Постер для "${title.names.ru}"`} width={256} height={384} className="rounded-md h-[16rem]" />
    <div className="flex flex-col gap-4 py-4">
        <h1 className="text-2xl font-bold">{title.names.ru}</h1>
            ・
        <p className="text-xl">{title.description}</p>
    </div>
</article> */}

// function SearchResults({ query }: { query: string }) {
//     const results = useSuspenseQuery({ queryKey: ["search-results"], queryFn: async () => await apiSearch({ search: query }) })
//     /*console.log(results.data.list)*/
//     return <ul className="flex flex-col gap-4">
//         {results.data.list.map(it => <li key={it.code}><Link to="/title/$code" params={{ code: it.code }}>
//             <Title suspendQuery={() => it} short={true} key={it.id.toString()} /> </Link></li>)}
//     </ul>
// }

export const Route = createFileRoute('/_navbar/search')({
    component: Search,
    validateSearch: (search: Record<string, unknown>): { query: string } => {
        // validate and parse the search params into a typed state
        return {
            query: search["query"] as string
        }
    },
})
