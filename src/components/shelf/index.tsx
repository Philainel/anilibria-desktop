import { Suspense } from "react"
import ShelfFallback from "./fallback"
import { TitlesT } from "../../api/anilibria-types"
import ShelfData from "./shelf"

export function Shelf({ name, children: queryFn }: { name: string, children: () => TitlesT | Promise<TitlesT> }) {
    return <Suspense fallback={ShelfFallback()}><ShelfData name={name}>{queryFn}</ShelfData></Suspense>
}

export default Shelf