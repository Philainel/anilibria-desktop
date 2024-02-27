import ReactPlayer from "react-player";
import { getTitleHLS } from "../api";
import { TitleT } from "../api/anilibria-types";

export function VideoPlayer({title}: {title: TitleT}) {
    return <ReactPlayer autoPlay={false} controls={false} url={getTitleHLS(title, title.player.list[0], "hd")} />
}