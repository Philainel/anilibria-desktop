export function ShelfFallback() {
    return <section className='flex-shrink flex flex-col font-lines animate-pulse text-brand-semidark'>
        <h2 className='text-3xl my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <div className="flex gap-4 overflow-x-auto">
            <div className='bg-brand-semidark aspect-[2/3] rounded-3xl' />
        </div>
    </section>;
}

export default ShelfFallback