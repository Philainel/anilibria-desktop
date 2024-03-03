import { Link, createFileRoute } from '@tanstack/react-router';
import Title from '../../components/title';
import getUpdatedTitles from '../../api/getUpdatedTitles';
import { TitleT, TitlesT } from '../../api/anilibria-types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useAppSelector } from '../../store';
import { getUnfinished } from '../../store/slice/watchProgress';
import getTitle from '../../api/getTitle';
import Shelf from '../../components/shelf';
import getSchedule from '../../api/getSchedule';
import { MDSpinner } from '../../components/MDSpinner';

// kraska was here owo :3
export function App() {
    const unfinishedTitles = useAppSelector(getUnfinished)
    return <>
        <main className='p-8 flex flex-col gap-4'>
            <Title suspendQuery={async () => {
                const recentTitles = (await getUpdatedTitles({ limit: 10 })).list.filter(t => t.player.list.length > 0)
                if (recentTitles.length == 0)
                    throw new Error('could not find suitable title withing 10 recent releases!')
                return recentTitles[Math.floor(Math.random() * recentTitles.length)]
            }} />
            <Shelf name='Продолжить просмотр'>{() => Promise.all(unfinishedTitles.map(it => getTitle({ code: it[0] })))}</Shelf>
            <Shelf name='Ожидается сегодня'>{async () => (await getSchedule({days: `${new Date().getDay()}`}))[0].list}</Shelf>
            <Link to='/player/$code/$episode' params={{ code: "tensei-shitara-slime-datta-ken", episode: "1" }}>Tensura debug link</Link>
        </main>
    </>
}

export const Route = createFileRoute('/_navbar/')({
    component: App,
})