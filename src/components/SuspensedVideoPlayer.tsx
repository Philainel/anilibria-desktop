import { useSuspenseQuery } from "@tanstack/react-query";
import { TitleT } from "../api/anilibria-types";
import { VideoPlayer, VideoPlayerProps } from "./VideoPlayer";

/**
 * wrapper for videoplayer based on <Suspense>
 */
export function SuspensedVideoPlayer({ title, ...props }: Omit<VideoPlayerProps, 'title'> & {title: Promise<TitleT>}) {
    const r = useSuspenseQuery({
        queryKey: ['video', title],
        queryFn: () => title
    })
    return <VideoPlayer title={r.data} {...props}/>
}

export default SuspensedVideoPlayer