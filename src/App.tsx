import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { getRandomTitle } from "./api";

// kraska was here owo :3
export function App() {
    const [title, setTitle] = useState()
	useEffect(() => {
		getRandomTitle().then(setTitle)
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
            {/* <ReactHlsPlayer
                src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                autoPlay={false}
                controls={true}
                width="100%"
                height="auto"
                playerRef={stupidRef}
            /> */}
        </main>
    </>
}
