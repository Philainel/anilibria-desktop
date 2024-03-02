import { Link, createFileRoute } from '@tanstack/react-router';
import Title from '../../components/title';

// kraska was here owo :3
export function App() {
    return <>
        <main className='p-4 flex flex-col gap-4'>
            <Title />
            <section className='flex-shrink flex flex-col'>
                <h2 className='text-3xl my-4'>Продолжить просмотр</h2>
                <div className="flex gap-4 overflow-x-auto">
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                </div>
            </section>
            <section className='flex-shrink flex flex-col'>
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
