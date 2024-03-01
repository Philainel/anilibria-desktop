import { Link, createFileRoute, useRouter, useRouterState } from "@tanstack/react-router"
import { MDIcon } from "../../components/MDIcon"
import { useSuspenseQuery } from "@tanstack/react-query"
import apiSearch from "../../api/search"
import { Suspense } from "react"

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

function SearchResults({ query }: { query: string }) {
    const results = useSuspenseQuery({ queryKey: ["search-results"], queryFn: () => apiSearch({ search: query }) })

    return <ul>
        {results.data.list.map(it => <li>{it.names.ru}</li>)}
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