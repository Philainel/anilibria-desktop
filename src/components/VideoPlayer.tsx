import ReactPlayer from "react-player";
import { getTitleHLS } from "../api";
import { TitleT } from "../api/anilibria-types";
import { useState } from "react";

export function VideoPlayer({title}: {title: TitleT}) {
    const [isPlaying, setPlaying] = useState(false)
    return <div className="relative w-fit">
        <ReactPlayer autoPlay={false} controls={false} playing={isPlaying} url={getTitleHLS(title, title.player.list[0], "hd")} />
        <div className="absolute top-0 left-0 w-full h-full z-[1] flex flex-col">
            {/* overlay itself */}
            <div className="bg-gradient-to-b from-black to-transparent text-white p-4">
                <p>{title.names.ru}</p>
            </div>
            <div className="flex-grow-[1]">{/* Pause Icon and stuff! */}</div>
            <div className="bg-gradient-to-b from-transparent to-black text-white p-4">
                <button onClick={() => setPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
            </div>
        </div>
        {/* there is no className :skull: */}
    </div>
}