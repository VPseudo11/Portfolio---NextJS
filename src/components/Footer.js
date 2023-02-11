import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'
export function Footer({ theme }) {
    return (
        <footer className={theme ? 'dark' : ''}>
            <div className="mx-6 md:mx-0 flex flex-col items-center border-t-[1px] gap-6 text-text-dark dark:text-text-clear m-auto">
                <div className="w-full my-5">
                    <div className=''>
                        <h1 className='text-buttons-dark dark:text-buttons-clear font-bold text-lg'>Social Media</h1>
                        <div className='flex gap-3 mt-3'>
                            <Link href='https://github.com/VPseudo11' target='_blank' className='text-3xl'><AiFillGithub className='dark:text-[#0C2433] text-text-dark' /></Link>
                            <Link href='https://www.linkedin.com/in/diego-javier-calva-a150ab233/' target='_blank' className='text-3xl'><AiFillLinkedin className='text-[#0961B8]' /></Link>
                            <Link href='https://api.whatsapp.com/send?phone=593958791418&text=Hola,%20revise%20tu%20portafolio%20y%20estoy%20interesado%20en%20informacion' target='_blank' className='text-3xl'><AiOutlineWhatsApp className='text-[#23C861]' /></Link>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <h1 className='text-buttons-dark dark:text-buttons-clear font-bold text-lg'>My Services</h1>
                        <ul className='list-disc ml-5'>
                            <li>Front-End Development (React, Nextjs)</li>
                            <li>Back-End Development (NodeJs, Express)</li>
                            <li>Database designer (PostgreSQL, MySQL, MongoDB)</li>
                        </ul>
                    </div>
                </div>
                <p className='border-t-[1px] w-full text-center'>&copy; 2023 Copyright | Designed by Ps3udoDev</p>
            </div>
        </footer>
    )
}