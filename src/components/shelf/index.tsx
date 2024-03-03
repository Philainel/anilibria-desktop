import { Suspense } from "react"
import ShelfFallback from "./fallback"
import { TitlesT } from "../../api/anilibria-types"
import ShelfData from "./shelf"

export function Shelf({ name, children: queryFn, key }: { name: string, children: () => TitlesT | Promise<TitlesT>, key?: string }) {
    return <Suspense fallback={ShelfFallback()}><ShelfData name={name} key={key}>{queryFn}</ShelfData></Suspense>
}

export default Shelf