import { Link, createFileRoute } from '@tanstack/react-router'
import getTitle from '../../../api/getTitle'
import { MDIcon } from '../../../components/MDIcon'

export function TitleInformation({Route}: {Route: any}) {
    const title = Route.useLoaderData()
    return <main className='p-4 flex gap-4'>
        <img src={"https://anilibria.tv" + title.posters.original.url} alt={`Постер для "${title.names.ru}"`} className="rounded-3xl h-[16rem]" />
        <div>
            <h2 className="text-3xl mb-4">{title.names.ru}</h2>
            <p className="my-4 text-xl">{title.description}</p>
            <div className='my-4 mt-auto flex gap-4'>
                <Link to="/player/$code/$episode" params={{ code: title.code, episode: "1" }} className='bg-brand-primary text-brand-light px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon className='inline-block'>play_arrow</MDIcon>Смотреть</Link>
                <a className='bg-brand-light text-brand-dark px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon className='inline-block'>schedule</MDIcon>Отложить</a>
                <a className='bg-brand-light text-brand-dark px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon className='inline-block'>star</MDIcon>Избранное</a>
            </div>
            <h3 className="my-4 text-2xl">Список эпизодов</h3>
            <ul>
                {title.player.list.map(it => <li key={it.uuid} className='text-brand-primary underline'><Link to="/player/$code/$episode" params={{code: title.code, episode: `${it.episode}`}}>{it.name == null ? "Эпизод " : "E"}{it.episode.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                })}{it.name != null && ` - ${it.name}`}</Link></li>)}
            </ul>
        </div>
    </main>
}

export const Route = createFileRoute('/_navbar/title/$code')({
    component: () => <TitleInformation Route={Route}/>,
    loader: ({ params }) => getTitle({ code: params.code })
})