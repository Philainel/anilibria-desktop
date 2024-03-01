import { createFileRoute } from '@tanstack/react-router'
import { TitleT } from "../api/anilibria-types";
import { useEffect, useState } from 'react';
import getTitle from '../api/getTitle';
import { VideoPlayer } from '../components/VideoPlayer';

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