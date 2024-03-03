import { Link } from "@tanstack/react-router";
import { MDIcon } from "../MDIcon";
import { TitleT } from "../../api/anilibria-types";
import { useState } from "react";
import { useAppSelector } from "../../store";
import { getTitleProgress } from "../../store/slice/watchProgress";
import { Img } from "react-suspense-img";

export function RawTitleData({ title, short=false, allowExpanding }: { title: TitleT; short?: boolean; allowExpanding?: boolean | undefined; }) {
	const lastEp = useAppSelector(getTitleProgress(title.code));
	const episode = lastEp == title.player?.episodes?.last ? "last" : lastEp;
	const [expanded, setExpanded] = useState(false);
	return <section className='flex items-center'>
		<Img className='block bg-brand-light text-brand-dark aspect-[2/3] rounded-md h-fit' width={short ? 210 : 256} height={short ? 240 : 384} src={`https://wwnd.anilib.moe${title.posters.medium.url}`} />
		<div className='bg-transparent text-brand-light p-8 flex flex-col gap-6 justify-stretch w-full'>
			<Link to="/title/$code" params={{ code: title.code }}><h2 className='text-3xl font-bold'>{title.names.ru}</h2></Link>
			<div className="flex flex-row justify-start gap-10 md:gap-16">
				<div className={`flex ${short ? 'flex-row' : 'flex-col'}`}>
					<div>
						<span className="font-bold">Тип: </span><span>{title.type.full_string}</span>
					</div>
					{short && "・"}
					<div>
						<span className="font-bold">Сезон: </span><span className='capitalize'>{title.season.string} {title.season.year}</span>
					</div>
					{short && "・"}
					<div>
						<span className="font-bold">Жанры: </span>{title.genres.map((v, k) => <span>{v}{title.genres.length - k == 1 ? "" : ", "}</span>)}
					</div>
					{!short &&
						<div>
							<span className="font-bold">Статус: </span><span>{title.status.string}</span>
						</div>}
				</div>
				{!short && <div className="flex flex-col">
					<div>
						<span className="font-bold">Озвучка: </span>{title.team.voice.map((v, k) => <span>{v}{title.team.voice.length - k == 1 ? "" : ", "}</span>)}
					</div>
					<div>
						<span className="font-bold">Тайминг: </span>{title.team.timing.map((v, k) => <span>{v}{title.team.timing.length - k == 1 ? "" : ", "}</span>)}
					</div>
					<div>
						<span className="font-bold">Работа над субтитрами: </span>{[...title.team.translator, ...title.team.editing, ...title.team.decor].map((v, k) => <span>{v}{title.team.translator.length + title.team.editing.length + title.team.decor.length - k == 1 ? "" : ", "}</span>)}
					</div>
				</div>}
			</div>
			<div>
				<span className={`inline-block text-xl w-full ${expanded ? `max-h-min ` : `max-h-20 overflow-hidden text-ellipsis`}`}>
					{title.description}
				</span>
				{allowExpanding && title?.description?.length > 250 && <button className="text-left text-blue-500 h-8" onClick={() => setExpanded(!expanded)}>{expanded ? 'Свернуть' : 'Подробнее...'}</button>}
			</div>
			<div className='my-4 mt-auto flex'>
				<Link to="/player/$code/$episode" params={{ code: title.code, episode: `${episode == "last" ? title.player.episodes.last : episode ?? 1}` }} className='bg-brand-primary text-brand-light px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon className='inline-block'>play_arrow</MDIcon>{(episode ?? 1) == 1 ? 'Начать просмотр' : episode == "last" ? 'Посмотреть заново' : `Продолжить с серии ${episode}`}</Link>
				{short && <Link to="/title/$code" params={{ code: title.code }} className='bg-brand-dark text-brand-light px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon className='inline-block'>list_alt</MDIcon>{title.type.string == "MOVIE" ? 'Подробнее' : 'Эпизоды'}</Link>}
				<a className='bg-brand-dark text-brand-light px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon className='inline-block'>schedule</MDIcon>Отложить</a>
				<a className='bg-brand-dark text-brand-light px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'><MDIcon className='inline-block'>star</MDIcon>Избранное</a>
			</div>
		</div>
	</section>;
}
