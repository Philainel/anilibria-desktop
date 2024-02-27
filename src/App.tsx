import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { getRandomTitle } from "./api/getRandomTitle";
import { getTitleHLS } from "./api";

// kraska was here owo :3
export function App() {
    const [title, setTitle] = useState<string>()
	useEffect(() => {
		getRandomTitle().then((title) => {
            console.log(title)
            console.log(title.player.list[0].hls.hd)
            console.log(getTitleHLS(title, title.player.list[0], "hd"))
            setTitle(getTitleHLS(title, title.player.list[0], "hd"))
        })
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
            <ReactPlayer autoPlay={false} controls url={title} />
        </main>
    </>
}
