import { Link, createFileRoute } from '@tanstack/react-router'
import getTitle from '../../../api/getTitle'
import { TitleT } from '../../../api/anilibria-types'
import Title from '../../../components/title'
import TitleFallback from '../../../components/title/fallback'

// TODO: POSTER DOMAIN
export function TitleInformation() {
    const title: TitleT = Route.useLoaderData()
    return <main className='flex flex-col gap-4'>
        <Title suspendQuery={() => title} allowExpanding />
        <h3 className="my-4 text-2xl">Список эпизодов</h3>
        <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {title.player.list.map(it => <li key={it.uuid} className='text-brand-primary bg-brand-semidark rounded-md'>
                <Link to="/player/$code/$episode" params={{ code: title.code, episode: `${it.episode}` }}>
                    {it.preview && <img src={`https://wwnd.anilib.moe/${it.preview}`} alt="" className="rounded-t-md" />}
                    <div className="px-2 py-1 min-h-14">
                        Эпизод {it.episode.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}{it.name != null && `・${it.name}`}
                    </div>
                </Link>
            </li>)}
        </ul>
    </main>
}

export const Route = createFileRoute('/_navbar/title/$code')({
    component: () => <TitleInformation />,
    pendingComponent: () => <main className='p-8 flex flex-col gap-4'><TitleFallback short={false} /></main>,
    loader: ({ params }) => getTitle({ code: params.code }),
})
