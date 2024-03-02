import { Link, createFileRoute } from '@tanstack/react-router';
import { Suspense, useEffect, useState } from "react";
import { TitleT } from "../../api/anilibria-types";
import { getTitle } from "../../api/getTitle";
import { MDIcon } from '../../components/MDIcon';
import { useSuspenseQuery } from '@tanstack/react-query';
import getUpdatedTitles from '../../api/getUpdatedTitles';

// kraska was here owo :3
export function App() {
    return <>
        <main className='p-4 flex flex-col gap-4'>
            <Suspense fallback={"Loading hot release..."}>
                <HotReleaseSection />
            </Suspense>
            <section className='shrink flex flex-col'>
                <h2 className='text-3xl my-4'>Продолжить просмотр</h2>
                <div className="flex gap-4 overflow-x-auto">
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                </div>
            </section>
            <section className='shrink flex flex-col'>
                <h2 className='text-3xl my-4'>Ожидается сегодня</h2>
                <div className="flex gap-4 overflow-x-auto">
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                </div>
            </section>
            <Link to='/player/$code/$episode' params={{ code: "tensei-shitara-slime-datta-ken", episode: "1" }}>Tensura debug link</Link>
        </main>
    </>
}

export const Route = createFileRoute('/_navbar/')({
    component: App,
})

function HotReleaseSection() {
    const query = useSuspenseQuery({
        queryKey: ["hot-release"], queryFn: async () => {
            const recentTitles = await getUpdatedTitles({ limit: 10 })
            for (const title of recentTitles.list) {
                if (title.player.list.length >= 1) return title
            }
            throw new Error('could not find suitable title withing 10 recent releases!')
        }
    })
    const title = query.data
    return <section className='shrink flex gap-4'>
        <div className='aspect-[2/3] w-full'>
            <img className='block bg-brand-light text-brand-dark aspect-[2/3] w-full h-full rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
        </div>
        <div className='bg-brand-light text-brand-dark rounded-3xl px-8 py-4 shrink flex flex-col'>
            <h2 className='text-3xl my-4'>{title.names.ru}</h2>
            <p className='my-4 text-xl'>
                {title.description}
            </p>
            <div className='my-4 mt-auto flex gap-4'>
                <Link to="/player/$code/$episode" params={{ code: title.code, episode: `${title.player.episodes.last}` }} className='bg-brand-primary text-brand-light px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon className='inline-block'>play_arrow</MDIcon>Смотреть</Link>
                <a className='bg-brand-dark text-brand-light px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon className='inline-block'>schedule</MDIcon>Отложить</a>
                <a className='bg-brand-dark text-brand-light px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon className='inline-block'>star</MDIcon>Избранное</a>
            </div>
        </div>
    </section>;
}