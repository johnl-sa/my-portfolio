'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import {FaGithubSquare} from 'react-icons/fa';

import {useSectionInView} from '@/lib/hooks';

export default function Intro() {
    const {ref} = useSectionInView('Home', 0.5);
    // const {ref, inView} = useInView({
    //     threshold: 0.5,
    // });
    // const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

    // useEffect(() => {
    //     if (inView && Date.now() - timeOfLastClick > 1000) {
    //         setActiveSection('Home');
    //     }
    // }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{type: 'tween', duration: 0.2}}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?fit=crop&w=2069&q=80"
                            alt="stock-photo"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>
                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋🏻
                    </motion.span>
                </div>
            </div>
            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
            >
                <span className="font-bold">Hello, I'm John.</span> I'm a{' '}
                <span className="font-bold">full-stack developer</span> with{' '}
                <span className="font-bold">8 years</span> of experience. I
                enjoy building <span className="italic">sites & apps</span>. My
                focus is <span className="underline">React (Next.js)</span>.
            </motion.h1>
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.1}}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                >
                    Contact me here
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>
                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full utline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
                    href="/cv.pdf"
                    download
                >
                    Download CV
                    <HiDownload className="opacity-60 group-hover:translate-y-1  focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10" />
                </a>
                <a
                    className="bg-white text-gray-700 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/70"
                    href="https://linkedin.com/in/j0hnlam"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>
                <a
                    className="bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/70"
                    href="https://github.com/johnl-sa"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}
