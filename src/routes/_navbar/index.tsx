import { Link, createFileRoute } from '@tanstack/react-router';
import Title from '../../components/title';
import getUpdatedTitles from '../../api/getUpdatedTitles';

// kraska was here owo :3
export function App() {
    return <>
        <main className='p-8 flex flex-col gap-4'>
            <Title suspendQuery={async () => {
                const recentTitles = (await getUpdatedTitles({ limit: 10 })).list.filter(t => t.player.list.length > 0)
                if (recentTitles.length == 0)
                    throw new Error('could not find suitable title withing 10 recent releases!')
                return recentTitles[Math.floor(Math.random() * recentTitles.length)]
            }} />
            <section className='flex-shrink flex flex-col'>
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
