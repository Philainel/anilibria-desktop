import ReactPlayer from "react-player";
import { getTitleHLS } from "../api";
import { TitleT } from "../api/anilibria-types";

export function VideoPlayer({title}: {title: TitleT}) {
    
    return <div className="relative">
        <ReactPlayer autoPlay={false} controls={false} url={getTitleHLS(title, title.player.list[0], "hd")} />
        <div className="absolute top-0 left-0 w-full h-full z-[1]">
            {/* overlay itself */}
            <p> HELLO I AM OVERLAID!!</p>
        </div>
        {/* there is no className :skull: */}
    </div>
}