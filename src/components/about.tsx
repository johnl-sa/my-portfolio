'use client';

import React from 'react';
import SectionHeading from './section-heading';
import {motion} from 'framer-motion';
import {useSectionInView} from '@/lib/hooks';

export default function About() {
    const {ref} = useSectionInView('About');

    return (
        <motion.section
            ref={ref}
            className="mb-2 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            id="about"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.175}}
        >
            <SectionHeading>About Me</SectionHeading>
            <p>
                After graduating UCSD with a degree in{' '}
                <span className="font-medium">Mass Commnication</span>, I
                decided to resume my passion for programming. I enrolled in a
                coding bootcamp and learned{' '}
                <span className="font-medium">full-stack web development</span>.{' '}
                <span className="italic">My favorite part of programming</span>{' '}
                is the problem-solving aspect. I{' '}
                <span className="underline">love</span> the feeling of finally
                figuring out a solution to a problem. My core stack is{' '}
                <span className="font-medium">
                    React, Next.js, Node.js, and MongoDB
                </span>
                . I am also familiar with TypeScript and Prisma and am always
                looking to learn new technologies.
            </p>
            <p>
                <span className="italic">When I'm not coding</span>, I enjoy
                playing video games, watching movies, and traveling. I also
                enjoy
            </p>
        </motion.section>
    );
}
