import { useRef } from "react";
import ReactPlayer from "react-player";

// kraska was here owo :3
export function App() {
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
            <ReactPlayer autoPlay={false} controls url="https://cache.libria.fun/videos/media/ts/9604/1/720/71e1676f903cfb3cfe61fd0792d57171.m3u8" />
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
