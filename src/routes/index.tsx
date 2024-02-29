import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from "react";
import { TitleT } from "../api/anilibria-types";
import { getTitle } from "../api/getTitle";

// kraska was here owo :3
export function App() {
    const [title, setTitle] = useState<TitleT>()
    useEffect(() => {
        getTitle({ code: 'tensei-shitara-slime-datta-ken' }).then((title) => { console.log(title); setTitle(title) })
    }, [])

    return <>
        <header>
            <nav>
                <ul>
                    <li>Релизы</li>
                    <li>Каталог</li>
                    <li>Избранное</li>
                </ul>
            </nav>
        </header>
        <main>
            <ul>
                <li>реиз крупным планом</li>
            </ul>
            <ul>
                <li>список недавних</li>
                <li>список ожидаемых сегодня</li>

            </ul>
        </main>
    </>
}

export const Route = createFileRoute('/')({
    component: App,
})