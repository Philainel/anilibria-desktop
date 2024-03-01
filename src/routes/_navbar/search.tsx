import { Link, createFileRoute, useRouter, useRouterState } from "@tanstack/react-router"
import { MDIcon } from "../../components/MDIcon"
import { useSuspenseQuery } from "@tanstack/react-query"
import apiSearch from "../../api/search"
import { Suspense } from "react"
import { TitleT } from "../../api/anilibria-types"

export function Search() {
    const { query } = Route.useSearch()
    return <>
        <main className='p-4 flex flex-col gap-4'>
            <Suspense key={query} fallback={<p>Man we should get a spinner or something this text is ugly!</p>}>
                <SearchResults query={query} />
            </Suspense>
        </main>
    </>
}

function TitleCard({title}: {title: TitleT}) {
    return <Link to="/title/$code" params={{code: title.code}}>
        <article className="bg-brand-light text-brand-dark rounded-3xl flex p-4 gap-4">
            <img src={"https://anilibria.tv"+title.posters.original.url} alt={`Постер для "${title.names.ru}"`} className="rounded-3xl h-[16rem]" />
            <div>
                <h1 className="text-2xl my-4">{title.names.ru}</h1>
                <p className="my-4 text-xl">{title.description}</p>
            </div>
        </article>
    </Link>
}

function SearchResults({ query }: { query: string }) {
    const results = useSuspenseQuery({ queryKey: ["search-results"], queryFn: () => apiSearch({ search: query }) })

    return <ul className="flex flex-col gap-4">
        {results.data.list.map(it => <li key={it.code}><TitleCard title={it}/></li>)}
    </ul>
}

export const Route = createFileRoute('/_navbar/search')({
    component: Search,
    validateSearch: (search: Record<string, unknown>): { query: string } => {
        // validate and parse the search params into a typed state
        return {
            query: search["query"] as string
        }
    },
})