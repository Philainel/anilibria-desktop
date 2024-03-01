import { useSuspenseQuery } from "@tanstack/react-query";
import { TitleT } from "../api/anilibria-types";
import { VideoPlayer } from "./VideoPlayer";

/**
 * wrapper for videoplayer based on <Suspense>
 */
export function SuspensedVideoPlayer({ title, className, backArrow: enableBackArrow, episode = 1 }: { title: Promise<TitleT>, episode?: number, className?: string, backArrow?: boolean }) {
    const r = useSuspenseQuery({
        queryKey: ['suspended-video-player'],
        queryFn: () => title
    })
    return <VideoPlayer title={r.data} className={className} backArrow={enableBackArrow} episode={episode}/>
}

export default SuspensedVideoPlayer