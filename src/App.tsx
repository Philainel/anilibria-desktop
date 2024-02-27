import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { getRandomTitle } from "./api/getRandomTitle";
import { getTitleHLS } from "./api";
import { TitleT } from "./api/anilibria-types";
import { VideoPlayer } from "./components/VideoPlayer";
import { getTitle } from "./api/getTitle";

// kraska was here owo :3
export function App() {
    const [title, setTitle] = useState<TitleT>()
	useEffect(() => {
		getRandomTitle(/* {code: 'tensei-shitara-slime-datta-ken'} */).then((title) => {console.log(title); setTitle(title)})
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
            {title && <VideoPlayer title={title} />}
        </main>
    </>
}
