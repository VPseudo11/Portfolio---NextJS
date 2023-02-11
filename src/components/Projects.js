import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { projectsImages } from './../assets/index'
import Image from "next/image";
import projects from '../json/portfolio.json'
import Link from 'next/link';
import { AiFillCode } from 'react-icons/ai'

export function Projects({ theme }) {

    return (
        <div className={theme ? 'dark' : ''} id="projects">
            <div className='flex items-center h-screen'>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    effect="fade"
                    loop={true}
                    mousewheel={{ invert: false }}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {
                        projects.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col items-center gap-6'>
                                    <Image src={projectsImages[index]} />
                                    <div className='mb-6 w-9/12 text-text-dark dark:text-text-clear'>
                                        <h1 className='font-bold mb-3 text-xl '>{item.title}</h1>
                                        <ul>
                                            {
                                                item.description.map((i, indexj) => (
                                                    <li key={indexj}>
                                                        <p className='flex gap-1'><span><AiFillCode /></span>{i}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <p className='mt-3 flex flex-col'>
                                            <span className='text-lg underline font-bold'>View Project:</span>
                                            <Link href={item.link} target='_blank'>{item.link}</Link>
                                        </p>
                                        <p className='mt-3 flex flex-col'>
                                            <span className='text-lg underline font-bold'>View Repository:</span>
                                            <Link href={item.repository} target='_blank'>{item.repository}</Link>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}