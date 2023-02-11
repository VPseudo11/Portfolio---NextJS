import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai'
import { DiCss3Full, DiMysql } from 'react-icons/di'
import { SiExpress, SiJavascript, SiMongodb, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa'

export function Skills({ theme }) {
    return (
        <div className={theme ? 'dark' : ''} id='skills'>
            <div className='flex flex-col justify-center mt-16 md:h-screen md:mt-0 mx-6 md:mx-0'>
                <h1 className='font-bold text-xl md:text-3xl text-text-dark dark:text-text-clear mb-9 animate-pulse'>knowledge and skills</h1>
                <div className='grid justify-center grid-cols-1 sm:grid-cols-3 gap-12'>
                    <div className='flex flex-col items-center gap-9'>
                        <h2 className='text-text-dark text-lg md:text-2xl dark:text-text-clear border-b-2 animate-bounce'>Frontend</h2>
                        <section className='grid place-content-center grid-cols-2 gap-6 text-5xl md:text-7xl'>
                            <div className='flex flex-col items-center'>
                                <AiFillHtml5 className='text-[#F25320]' />
                                <h2 className='text-xs md:text-sm text-center w-full border-b-2 rounded-md text-text-dark dark:text-text-clear'>HTML</h2>
                            </div>
                            <div className='flex flex-col items-center'>
                                <DiCss3Full className='text-[#2449D8]' />
                                <h2 className='text-xs md:text-sm text-center w-full border-b-2 rounded-md text-text-dark dark:text-text-clear'>CSS</h2>
                            </div>
                            <div className='flex flex-col items-center'>
                                <SiJavascript className='text-[#EAD41C]' />
                                <h2 className='text-xs md:text-sm text-center w-full border-b-2 rounded-md text-text-dark dark:text-text-clear'>JavaScript</h2>
                            </div>
                            <div className='flex flex-col items-center'>
                                <SiTailwindcss className='text-[#27ACE7]' />
                                <h2 className='text-xs md:text-sm text-center w-full border-b-2 rounded-md text-text-dark dark:text-text-clear'>TailwindCss</h2>
                            </div>
                            <div className='flex flex-col items-center'>
                                <FaReact className='text-[#5CCFEE]' />
                                <h2 className='text-xs md:text-sm text-center w-full border-b-2 rounded-md text-text-dark dark:text-text-clear'>React</h2>
                            </div>
                            <div className='flex flex-col items-center'>
                                <SiNextdotjs className='text-[#EBF0F6] dark:text-[#000000]' />
                                <h2 className='text-xs md:text-sm text-center w-full border-b-2 rounded-md text-text-dark dark:text-text-clear'>NextJs</h2>
                            </div>
                        </section>
                    </div>
                    <div className='flex flex-col items-center gap-9'>
                        <h2 className='text-text-dark text-lg md:text-2xl dark:text-text-clear border-b-2 animate-bounce'>BackEnd</h2>
                        <section className='grid place-content-center grid-cols-2 gap-6 text-5xl md:text-7xl'>
                            <div className='flex flex-col items-center'>
                                <FaNodeJs className='text-[#4D9641]' />
                                <h2 className='text-xs md:text-sm text-center w-full border-b-2 rounded-md text-text-dark dark:text-text-clear'>NodeJs</h2>
                            </div>
                            <div className='flex flex-col items-center'>
                                <SiExpress className='text-[#6E6E6E] dark:text-[#2F2F2F]' />
                                <h2 className='text-xs md:text-sm text-center w-full border-b-2 rounded-md text-text-dark dark:text-text-clear'>Express</h2>
                            </div>
                            <div className='flex flex-col items-center'>
                                <SiPostgresql className='text-[#30628A]' />
                                <h2 className='text-xs md:text-sm text-center w-full border-b-2 rounded-md text-text-dark dark:text-text-clear'>PostgreSQL</h2>
                            </div>
                            <div className='flex flex-col items-center'>
                                <DiMysql className='text-[#004F66]' />
                                <h2 className='text-xs md:text-sm text-center w-full border-b-2 rounded-md text-text-dark dark:text-text-clear'>MySQL</h2>
                            </div>
                            <div className='flex flex-col items-center'>
                                <SiMongodb className='text-[#54AE40]' />
                                <h2 className='text-xs md:text-sm text-center w-full border-b-2 rounded-md text-text-dark dark:text-text-clear'>MongoDB</h2>
                            </div>
                        </section>
                    </div>
                    <div className='flex flex-col items-center gap-9'>
                        <h2 className='text-text-dark text-lg md:text-2xl dark:text-text-clear border-b-2 animate-bounce'>FullStack</h2>
                        <section className='grid place-content-center grid-cols-2 gap-6 text-5xl md:text-7xl'>
                            <div className='flex flex-col items-center'>
                                <SiTypescript className='text-[#2F72BC]' />
                                <h2 className='text-xs md:text-sm text-center w-full border-b-2 rounded-md text-text-dark dark:text-text-clear'>TypeScript</h2>
                            </div>
                            <div className='flex flex-col items-center'>
                                <AiFillGithub className='text-[#EBF0F6] dark:text-[#0C2433]' />
                                <h2 className='text-xs md:text-sm text-center w-full border-b-2 rounded-md text-text-dark dark:text-text-clear'>GitHub</h2>
                            </div>
                            <div className='flex flex-col items-center'>
                                <FaGitAlt className='text-[#E44D30]' />
                                <h2 className='text-xs md:text-sm text-center w-full border-b-2 rounded-md text-text-dark dark:text-text-clear'>Git</h2>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}