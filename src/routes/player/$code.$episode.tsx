import { createFileRoute } from "@tanstack/react-router";
import { VideoPlayer } from "../../components/VideoPlayer";
import { Suspense, useEffect, useState } from "react";
import { getTitle } from "../../api/getTitle";
import { TitleT } from "../../api/anilibria-types";
import SuspensedVideoPlayer from "../../components/SuspensedVideoPlayer";

export const Route = createFileRoute('/player/$code/$episode')({
    component: Player,
})

function Player() {
    const {code, episode} = Route.useParams()
    return <Suspense fallback={<div className="w-screen h-screen flex justify-center items-center">Loading...</div>}>
        <SuspensedVideoPlayer title={getTitle({code})} episode={+episode} className="w-screen h-screen" backArrow />
    </Suspense>
}
