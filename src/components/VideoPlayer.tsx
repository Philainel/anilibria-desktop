import ReactPlayer from "react-player";
import { getTitleHLS } from "../api/v3";
import { TitleT } from "../api/v3/anilibria-types";
import { useRef, useState } from "react";
import * as Slider from '@radix-ui/react-slider';

export function VideoPlayer({ title }: { title: TitleT }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const playerRef = useRef<ReactPlayer>(null)
    const [isPlaying, setPlaying] = useState(false)
    const [episode, setEpisode] = useState(0)
    const [progress, setProgress] = useState(0)
    const seek = (progress: number) => {
        playerRef.current?.seekTo(progress, "fraction")
        setProgress(progress)
    }
    const isFullscreen = () => document.fullscreenElement != null
    const toggleFullscreen = () => {
        if(isFullscreen()) {
            document.exitFullscreen()
        } else {
            containerRef.current?.requestFullscreen()
        }
    }
    return <div className="relative w-fit bg-black" ref={containerRef}>
        <ReactPlayer ref={playerRef} width={"100%"} height={"100%"} autoPlay={false} controls={false} playing={isPlaying} url={getTitleHLS(title, title.player.list[episode], "hd")} onProgress={({played}) => setProgress(played)}/>
        <div className="absolute top-0 left-0 w-full h-full z-[1] flex flex-col ">
            {/* overlay itself */}
            <div className="bg-gradient-to-b from-black to-transparent text-white p-4 h-16">
                <p>{title.names.ru}</p>
            </div>
            <div className="flex-grow-[1]" onClick={() => setPlaying(!isPlaying)}>{/* Pause Icon and stuff! */}</div>
            <div className="bg-gradient-to-b from-transparent to-black text-white flex flex-col items-center h-fit justify-end">
                <div className="px-2 w-full">
                    <Slider.Root className="h-3 px-2 w-full rounded-full relative flex items-center group" max={1000} value={[progress * 1000]} onValueChange={value => seek(value[0] / 1000)}>
                        <Slider.Track className="h-1 w-full rounded-full bg-gray-500 relative">
                            <Slider.Range className="h-full rounded-full bg-white absolute" />
                        </Slider.Track>
                        <Slider.Thumb className="group-hover:w-2 group-hover:h-2 block rounded-full bg-white" />
                    </Slider.Root>
                </div>
                <div className="flex items-center gap-2 px-2 w-full">
                    <button className={`w-8 h-8 flex items-center justify-center ${episode < 1 && 'text-gray-400'}`} onClick={() => setEpisode(episode - 1)} disabled={episode < 1}>
                        <span className="material-symbols-outlined">skip_previous</span>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center" onClick={() => setPlaying(!isPlaying)} >
                        {isPlaying ? <span className="material-symbols-outlined">pause</span> : <span className="material-symbols-outlined">play_arrow</span>}
                    </button>
                    <button className={`w-8 h-8 flex items-center justify-center ${episode >= title.player.list.length - 1 && 'text-gray-400'}`} onClick={() => setEpisode(episode + 1)} disabled={episode >= title.player.list.length - 1} >
                        <span className="material-symbols-outlined">skip_next</span>
                    </button>
                    <button className={`ml-auto w-8 h-8 flex items-center justify-center ${episode >= title.player.list.length - 1 && 'text-gray-400'}`} onClick={() => toggleFullscreen()} disabled={episode >= title.player.list.length - 1} >
                        <span className="material-symbols-outlined">{isFullscreen() ? 'fullscreen_exit' : 'fullscreen'}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
}