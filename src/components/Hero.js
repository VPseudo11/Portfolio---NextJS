import Image from "next/image";
import profile from '/public/Profile.png'

export function Hero({theme}) {
    return (
        <div className={theme ? 'dark' : ''}>
            <div className="flex flex-col md:flex-row mt-16 justify-center h-screen mx-6 md:mx-0 gap-9">
                <div className="flex flex-col justify-center gap-4">
                    <h1 className="w-fit text-links-clear typewriter dark:text-text-clear text-xl md:text-2xl">Full Stack Developer</h1>
                    <h2 className="font-bold text-4xl md:text-5xl text-links-dark dark:text-links-clear animate-pulse">Diego Javier Calva</h2>
                    <p className="text-lg leading-8 text-text-dark dark:text-text-clear">I love cats, new challenges and web programming.</p>
                </div>
                <div className='flex items-center mx-6'>
                    <Image className="rounded-3xl" width={500} height='auto' src={profile} alt={profile} priority />
                </div>
            </div>
        </div>
    )
}