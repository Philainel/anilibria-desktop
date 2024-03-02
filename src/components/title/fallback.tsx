export default function TitleFallback() {
	return <section className='flex animate-pulse'>
		<div className='block bg-brand-semidark aspect-[2/3] rounded-md w-[256px] h-[384px]' />
		<div className='bg-transparent text-brand-semidark p-8 flex flex-col gap-6 justify-stretch font-lines'>
			<div className='text-3xl font-bold w-full'> Lorem ipsum dolor sit amet.</div>
			<div className="flex flex-row">
				<div className="flex flex-col w-2/5">
					<div>
						<span>title.type.full_stringtitle.type</span>
					</div>
					<div>
						<span>title.season.e.season.ye</span>
					</div>
					<div>
						<span>title.genres.maptle.genres.map</span>
					</div>
					<div>
						<span>title.status.string</span>
					</div>
				</div>
				<div className="flex flex-col">
					<div>
						<span>title.team.voice.map</span>
					</div>
					<div>
						<span>title.team.timing.map</span>
					</div>
					<div>
						<span>fhfdbvhervhdfnvkj.map</span>
					</div>
				</div>
			</div>
			<p className='text-xl w-full h-20 overflow-hidden text-ellipsis'>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel porta est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur condimentum dapibus ipsum vitae tempor. Aliquam vestibulum vitae nisl quis cursus. Aenean sit amet neque vel nulla venenatis molestie blandit nec dolor. Vivamus et rhoncus risus. Sed porta, massa ac euismod ornare, felis tortor placerat odio, at sodales est quam ac nunc. Vestibulum non rhoncus turpis. In pretium imperdiet tincidunt. Pellentesque rhoncus justo ut eros semper maximus. 
			</p>
			<div className='my-4 mt-auto flex'>
				<a className='bg-brand-dark text-brand-semidark px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'>Начать_просмотр</a>
				<a className='bg-brand-dark text-brand-semidark px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'>Отложить</a>
				<a className='bg-brand-dark text-brand-semidark px-4 py-2 rounded-md flex items-center w-fit gap-2 cursor-pointer'>Избранное</a>
			</div>
		</div>
	</section>
}
