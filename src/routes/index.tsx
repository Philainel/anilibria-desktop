import { Link, createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from "react";
import { TitleT } from "../api/anilibria-types";
import { getTitle } from "../api/getTitle";
import { MDIcon } from '../components/MDIcon';

// kraska was here owo :3
export function App() {
    return <>
        <header>
            <nav className='flex gap-4 p-4 items-center'>
                <img src="https://placehold.co/128x128.png" width={32} className='rounded-full' />
                <a className='bg-brand-light text-brand-dark px-4 py-2 rounded-md'>Релизы</a>
                <a className='bg-brand-primary text-brand-light px-4 py-2 rounded-md'>Каталог</a>
                <a className='bg-brand-primary text-brand-light px-4 py-2 rounded-md'>Избранное</a>
                <a className='text-brand-light p-2 rounded-md flex items-center w-fit gap-2 cursor-pointer ml-auto'><MDIcon>settings</MDIcon></a>
                <a className='text-brand-light p-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon>notifications</MDIcon></a>
                <a className='text-brand-light p-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><img src="https://placehold.co/128x128.png" width={32} className='rounded-full' /></a>
            </nav>
        </header>
        <main className='p-4 flex flex-col gap-4'>
            <section className='flex gap-4'>
                <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                <div className='bg-brand-light text-brand-dark rounded-3xl px-8 py-4 flex-shrink flex flex-col'>
                    <h2 className='text-3xl my-4'>Горячая новинка</h2>
                    <p className='my-4 text-xl'>
                        Описание.<br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis repellendus tempore omnis minima aspernatur. Molestias optio labore nulla quas rem? Maiores sint provident placeat similique reiciendis fuga aliquam est!
                    </p>
                    <div className='my-4 mt-auto flex gap-4'>
                        <a className='bg-brand-primary text-brand-light px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon className='inline-block'>play_arrow</MDIcon>Смотреть</a>
                        <a className='bg-brand-dark text-brand-light px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon className='inline-block'>schedule</MDIcon>Отложить</a>
                        <a className='bg-brand-dark text-brand-light px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon className='inline-block'>star</MDIcon>Избранное</a>
                    </div>
                </div>
            </section>
            <section className='flex-shrink flex flex-col'>
                <h2 className='text-3xl my-4'>Продолжить просмотр</h2>
                <div className="flex gap-4 overflow-x-auto">
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                </div>
            </section>
            <section className='flex-shrink flex flex-col'>
                <h2 className='text-3xl my-4'>Ожидается сегодня</h2>
                <div className="flex gap-4 overflow-x-auto">
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                    <img className='bg-brand-light text-brand-dark aspect-[2/3] rounded-3xl' src="https://placehold.co/256x384.png?text=Poster" />
                </div>
            </section>
            <Link to='/player/$code' params={{ code: "tensei-shitara-slime-datta-ken" }}>Tensura debug link</Link>
        </main>
    </>
}

export const Route = createFileRoute('/')({
    component: App,
})