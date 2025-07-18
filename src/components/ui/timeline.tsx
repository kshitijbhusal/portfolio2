"use client";
import { projectData } from "../../data/data"


import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
// import { Link } from 'react-router-dom';

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 90%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full font-sans md:px-10  space-y-10 "
            ref={containerRef}
        >

            <div className='text-start space-y-2 text-text-muted   '>
                <h1 className='text-sky-400 text-3xl font-semibold'>Projects</h1>
                <p className=' text-text-muted leading-relaxed text-[1.1rem]'>A collection of my work spanning from blockchain applications to full-stack projects, both personal and professional.</p>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">

                {/* -------------Project Section------------------------ */}
                {projectData.map((project, index) => {
                    return <ProjectCard key={index} project={project} />
                })}



                {/* -------------Experience Section------------------------ */}

                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-[-80px] left-[-20px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};




function ProjectCard({ project }: any) {


    return (
        <section className='bg-gradient-to-b from-cyan-500/50 to-purple-500/50  w-[100%] rounded-md pl-1 text-text/80  '>

            <div className='bg-bg-light space-y-2  text-start px-6 py-6 rounded-md mb-12  '>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-semibold  '>{project.title} </h1>
                    <div className='space-x-2'>

                        <a href="#">live</a>
                        <a href="#">github</a>

                    </div>
                </div>


                <div className='space-y-2'>
                    <p className='max-w-96 mb-6 '>{project.description} </p>
                    <div className='flex gap-4'>
                        <p>{project.stack[0]}</p>
                        <p>{project.stack[1]}</p>
                        <p>{project.stack[2]}</p>

                    </div>
                </div>
            </div>


        </section>
    )
}