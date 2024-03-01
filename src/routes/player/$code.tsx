import { createFileRoute } from "@tanstack/react-router";
import { VideoPlayer } from "../../components/VideoPlayer";
import { useEffect, useState } from "react";
import { getTitle } from "../../api/getTitle";
import { TitleT } from "../../api/anilibria-types";

export const Route = createFileRoute('/player/$code')({
    component: Player,
})

function Player() {
    const {code} = Route.useParams()
    const [title, setTitle] = useState<TitleT>()
    useEffect(() => {
        getTitle({ code }).then((title) => { console.log(title); setTitle(title) })
    }, [])
    return <>
        {title ? <VideoPlayer title={title} className="w-screen h-screen" backArrow /> : 'Loading...'}
    </>
}
