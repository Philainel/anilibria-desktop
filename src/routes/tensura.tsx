import { createFileRoute } from "@tanstack/react-router";
import { VideoPlayer } from "../components/VideoPlayer";
import { useEffect, useState } from "react";
import { getTitle } from "../api/getTitle";
import { TitleT } from "../api/anilibria-types";

function Tensura() {
    const [title, setTitle] = useState<TitleT>()
    useEffect(() => {
        getTitle({ code: 'tensei-shitara-slime-datta-ken' }).then((title) => { console.log(title); setTitle(title) })
    }, [])
    return <>
        {title ? <VideoPlayer title={title} className="w-screen h-[50vh]" /> : 'Loading...'}
    </>
}

export const Route = createFileRoute('/tensura')({
    component: Tensura,
})