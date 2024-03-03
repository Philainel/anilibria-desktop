import ReactPlayer, { ReactPlayerProps } from "react-player";
import { getTitleHLS } from "../api";
import { TitleT } from "../api/anilibria-types";
import { useEffect, useRef, useState } from "react";
import * as Slider from '@radix-ui/react-slider';
import { useRouter } from "@tanstack/react-router";
import { MDIcon } from "./MDIcon";
import { useAppSelector } from "../store";
import { getEpisodeProgress } from "../store/slice/watchProgress";
import { MDSpinner } from "./MDSpinner";
import * as Dropdown from '@radix-ui/react-dropdown-menu'

export function VideoPlayer({ title, episode: defaultEpisode = 1, className, backArrow: enableBackArrow, initialProgress = 0, progressCallback = (progress) => { } }: { title: TitleT, episode?: number, className?: string, backArrow?: boolean, progressCallback?: (progress: number) => void, initialProgress?: number }) {
    const { history } = useRouter()
    const containerRef = useRef<HTMLDivElement>(null)
    const playerRef = useRef<ReactPlayer>(null)
    const [isPlaying, setPlaying] = useState(true)
    const [episode, setEpisode] = useState(defaultEpisode - 1)
    const [progress, setProgress] = useState(initialProgress)
    const seek = (progress: number) => {
        /*console.log("Seeking to "+progress)*/
        playerRef.current?.seekTo(progress, "fraction")
        setProgress(progress)
    }
    const [quality, setQuality] = useState<"sd" | "hd" | "fhd">("hd")
    const [isFullscreen, setFullscreen] = useState(false)
    const [isBuffering, setBuffering] = useState(false)
    const toggleFullscreen = () => {
        if (isFullscreen) {
            document.exitFullscreen()
            setFullscreen(false)
        } else {
            containerRef.current?.requestFullscreen()
            setFullscreen(true)
        }
    }
    /*console.log(title)*/
    useEffect(() => {
        setFullscreen(document.fullscreenElement != null)
    }, [])
    return <div className={className || "w-fit"} ref={containerRef}>
        <div className="relative bg-black w-[inherit] h-[inherit]"> {/* black bg for better vis */}
            <ReactPlayer ref={playerRef} height={"100%"} width={"100%"} autoPlay={true} controls={false} playing={isPlaying} url={getTitleHLS(title, title.player.list[episode], quality)} onProgress={({ played }) => { setProgress(played); progressCallback(played) }} onDuration={() => seek(progress)} onBuffer={() => setBuffering(true)} onBufferEnd={() => setBuffering(false)} />
            <div className="absolute top-0 left-0 w-full h-full z-[1] flex flex-col opacity-0 transition-all delay-[1s] duration-200 hover:opacity-100 hover:delay-0">
                {/* overlay itself */}
                <div className="bg-gradient-to-b from-black to-transparent text-white p-4 h-16 group flex items-center">
                    {enableBackArrow && <button className={`w-0 group-hover:w-8 group-hover:mr-4 opacity-0 group-hover:opacity-100 h-8 flex items-center justify-center transition-all`} onClick={() => history.back()}>
                        <MDIcon>arrow_back</MDIcon>
                    </button>}
                    <p>{title.names.ru}</p>
                </div>
                <div className="flex-grow-[1] flex justify-center items-center" onClick={() => setPlaying(!isPlaying)}>
                </div>
                <div className="bg-gradient-to-b from-transparent to-black text-white flex flex-col items-center h-fit justify-end">
                    <div className="px-2 w-full">
                        <Slider.Root className="h-3 px-2 w-full rounded-full relative flex items-center group cursor-pointer" max={1000} value={[progress * 1000]} onValueChange={value => seek(value[0] / 1000)}>
                            <Slider.Track className="h-1 w-full rounded-full bg-gray-500 relative">
                                <Slider.Range className="h-full rounded-full bg-brand-primary absolute" />
                            </Slider.Track>
                            <Slider.Thumb className="group-hover:w-2 group-hover:h-2 block rounded-full bg-white" />
                        </Slider.Root>
                    </div>
                    <div className="flex items-center gap-2 px-2 w-full">
                        <button className={`w-8 h-8 flex items-center justify-center ${episode < 1 && 'text-gray-400'}`} onClick={() => setEpisode(episode - 1)} disabled={episode < 1}>
                            <MDIcon>skip_previous</MDIcon>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center" onClick={() => setPlaying(!isPlaying)} >
                            {isPlaying ? <MDIcon className="material-symbols-outlined">pause</MDIcon> : <MDIcon>play_arrow</MDIcon>}
                        </button>
                        <button className={`w-8 h-8 flex items-center justify-center ${episode >= title.player.list.length - 1 && 'text-gray-400'}`} onClick={() => setEpisode(episode + 1)} disabled={episode >= title.player.list.length - 1} >
                            <MDIcon>skip_next</MDIcon>
                        </button>
                        <Dropdown.Root>
                            <Dropdown.Trigger asChild>
                                <button className={`ml-auto w-8 h-8 flex items-center justify-center`}>
                                    <MDIcon>{quality == 'fhd' ? 'full_hd' : quality}</MDIcon>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Portal>
                                <Dropdown.Content className="bg-brand-semidark rounded-md p-4" sideOffset={20}>
                                    <Dropdown.RadioGroup value={quality} onValueChange={(value) => setQuality(value as any)} className="flex flex-col gap-4">
                                        <Dropdown.RadioItem className="flex gap-2 items-center cursor-pointer" value="fhd">
                                            <MDIcon>full_hd</MDIcon>1080p
                                        </Dropdown.RadioItem>
                                        <Dropdown.RadioItem className="flex gap-2 items-center cursor-pointer" value="hd">
                                            <MDIcon>hd</MDIcon>720p
                                        </Dropdown.RadioItem>
                                        <Dropdown.RadioItem className="flex gap-2 items-center cursor-pointer" value="sd">
                                            <MDIcon>sd</MDIcon>480p
                                        </Dropdown.RadioItem>
                                    </Dropdown.RadioGroup>
                                </Dropdown.Content>
                            </Dropdown.Portal>
                        </Dropdown.Root>
                        <button className={`w-8 h-8 flex items-center justify-center`} onClick={() => toggleFullscreen()} >
                            <MDIcon>{isFullscreen ? 'fullscreen_exit' : 'fullscreen'}</MDIcon>
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-[1] flex flex-col pointer-events-none">
                <div className="flex-grow-[1] flex justify-center items-center">
                    {isBuffering && <div className="bg-black bg-opacity-25 p-4 rounded-lg"><MDSpinner /></div>}
                </div>
            </div>
        </div>
    </div>
}