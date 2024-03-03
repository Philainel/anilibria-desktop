import { useSuspenseQuery } from "@tanstack/react-query";
import { TitlesT } from "../../api/anilibria-types";
import { Link } from "@tanstack/react-router";
import { Suspense } from "react";
import { Img } from "react-suspense-img";

export function ShelfData({ name, children: queryFn }: { name: string, children: () => TitlesT | Promise<TitlesT> }) {
    const query = useSuspenseQuery({ queryKey: ['shelf', name], queryFn })
    const titles = query.data
    return <section className='flex flex-col'>
        <h2 className='text-3xl my-4'>{name}</h2>
        <div className="flex gap-4 overflow-x-auto">
            {titles.map(it => <Link to="/title/$code" params={{ code: it.code }} key={it.code}>
                <Suspense fallback={<div className="block bg-brand-semidark aspect-[2/3] rounded-md h-fit animate-pulse" style={{ width: 256, height: 384 }} />}>
                    <Img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-md max-w-[unset]' width={256} height={384} src={`https://wwnd.anilib.moe${it.posters.medium.url}`} />
                </Suspense>
            </Link>)}
        </div>
    </section>;
}

export default ShelfData