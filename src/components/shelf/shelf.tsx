import { useSuspenseQuery } from "@tanstack/react-query";
import { TitlesT } from "../../api/anilibria-types";
import { Link } from "@tanstack/react-router";

export function ShelfData({ name, children: queryFn, key = name }: { name: string, children: () => TitlesT | Promise<TitlesT>, key?: string }) {
    const query = useSuspenseQuery({ queryKey: ["shelf-" + key], queryFn })
    const titles = query.data
    return <section className='flex flex-col'>
        <h2 className='text-3xl my-4'>{name}</h2>
        <div className="flex gap-4 overflow-x-auto">
            {titles.map(it => <Link to="/title/$code" params={{code: it.code}} key={it.code}><img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-md max-w-[unset]' width={256} height={384} src={`https://wwnd.anilib.moe${it.posters.medium.url}`} /></Link>)}
        </div>
    </section>;
}

export default ShelfData