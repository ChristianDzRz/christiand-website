'use client';

import { useState, useEffect } from 'react';
import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getResumeData } from '@/lib/resume-data';
import type { ResumeData } from '@/types/resume';

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getResumeData();
        setResumeData(data);
      } catch (error) {
        console.error('Error loading resume data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (loading || !resumeData) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>;
  }

  // Rest of your component code remains the same, just use resumeData as before
  return (
    <main className='font-sans antialiased min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900'>
      {/* Hero */}
      <section className='relative flex flex-col items-center justify-center text-center min-h-[600px] lg:min-h-[700px] overflow-hidden'>
        <div className='absolute inset-0 w-full h-full'>
          <Image
            src="/images/about_me_2.JPG"
            alt="Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            style={{
              objectPosition: '50% 30%'
            }}
          />
          <div className='absolute inset-0 bg-black/50'></div>
        </div>

        <motion.div
          className='relative z-10 px-4'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-5xl font-extrabold tracking-tight text-white drop-shadow-lg'>
            {resumeData.personalInfo.name}
          </h1>
          <p className='mt-2 text-xl font-medium text-white drop-shadow-lg'>
            {resumeData.personalInfo.title}
          </p>
          <div className='mt-6 flex gap-4 justify-center'>
            <Button asChild variant='secondary' size='icon' className='bg-white/60 hover:bg-white/95 backdrop-blur-sm'>
              <a href={`mailto:${resumeData.personalInfo.email}`} aria-label='Email'>
                <SiGmail />
              </a>
            </Button>
            <Button asChild variant='secondary' size='icon' className='bg-white/60 hover:bg-white/95 backdrop-blur-sm'>
              <a href={resumeData.personalInfo.github} aria-label='GitHub'>
                <SiGithub />
              </a>
            </Button>
            <Button asChild variant='secondary' size='icon' className='bg-white/60 hover:bg-white/95 backdrop-blur-sm'>
              <a href={resumeData.personalInfo.linkedin} aria-label='LinkedIn'>
                <FaLinkedin />
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* About section */}
      <section className='py-16'>
        <div className='container mx-auto px-6 max-w-3xl'>
          <motion.h2 initial='hidden' whileInView='show' viewport={{ once: true }} variants={fadeIn} className='text-3xl font-bold mb-4 text-center'>
            About Me
          </motion.h2>
          <motion.p initial='hidden' whileInView='show' viewport={{ once: true }} variants={fadeIn} className='leading-relaxed text-center'>
            {resumeData.personalInfo.summary}
          </motion.p>
        </div>
      </section>

      {/* Skills section */}
      <section className='py-16'>
        <div className='container mx-auto px-6 max-w-4xl'>
          <motion.h2 initial='hidden' whileInView='show' viewport={{ once: true }} variants={fadeIn} className='text-3xl font-bold mb-6 text-center text-slate-800 dark:text-white'>
            Core Skills
          </motion.h2>
          <motion.ul initial='hidden' whileInView='show' viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className='flex flex-wrap justify-center gap-3'
          >
            {resumeData.skills.map((skill, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className='px-4 py-2 rounded-lg bg-white/80 dark:bg-slate-800/80
                           backdrop-blur-sm shadow-lg border border-slate-200 dark:border-slate-700
                           text-sm font-medium text-slate-700 dark:text-slate-200
                           hover:bg-slate-50 dark:hover:bg-slate-700/80
                           transition-all duration-300 ease-in-out'
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Experience section */}
      <section className='py-16'>
        <div className='container mx-auto px-6 max-w-5xl'>
          <h2 className='text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white'>Experience</h2>
          <div className='space-y-4'>
            {resumeData.experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                layout
                className='overflow-hidden rounded-2xl shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm cursor-pointer
                           border border-slate-200 dark:border-slate-700'
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <motion.div layout className='p-6'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <h3 className='text-lg font-bold'>{exp.role}</h3>
                      <p className='text-sm text-slate-500 dark:text-slate-400'>
                        {exp.company} · {exp.period}
                      </p>
                    </div>
                    <motion.span layout className='text-xl font-bold select-none'>{open === idx ? '-' : '+'}</motion.span>
                  </div>
                  <p className='mt-2'>{exp.summary}</p>
                  <AnimatePresence>
                    {open === idx && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className='mt-4 list-disc list-inside space-y-1 text-sm marker:text-cyan-500'
                      >
                        {exp.details.map((d, di) => (
                          <li key={di}>{d}</li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get to Know Me section */}
      <section className='py-16'>
        <div className='container mx-auto px-6 max-w-5xl'>
          <motion.h2 initial='hidden' whileInView='show' viewport={{ once: true }} variants={fadeIn} className='text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white'>
            Get to Know Me
          </motion.h2>
          <div className='grid md:grid-cols-2 gap-6'>
            {resumeData.personalDetails.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className='overflow-hidden rounded-2xl shadow-lg
                         bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm
                         border border-slate-200 dark:border-slate-700
                         transform transition-all duration-300 ease-in-out
                         hover:shadow-xl hover:scale-[1.02]'
              >
                <div className='p-6'>
                  <div className='flex items-center gap-3 mb-4'>
                    <span className='text-3xl'>{info.icon}</span>
                    <h3 className='text-xl font-bold text-slate-800 dark:text-white'>
                      {info.title}
                    </h3>
                  </div>
                  <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
                    {info.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section className='py-16'>
        <div className='container mx-auto px-6 max-w-6xl'>
          <h2 className='text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white'>Projects</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {resumeData.projects.map((proj, idx) => (
              <motion.a
                key={idx}
                href={proj.link}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ y: -5 }}
                className='block rounded-xl overflow-hidden shadow-lg bg-white/80 dark:bg-slate-800/80
                          backdrop-blur-sm border border-slate-200 dark:border-slate-700'
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={600}
                  height={400}
                  className='object-cover w-full h-48'
                />
                <div className='p-4'>
                  <h3 className='text-xl font-bold mb-1'>{proj.title}</h3>
                  <p className='text-sm'>{proj.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-slate-900/90 backdrop-blur-sm text-slate-300 py-8 text-center mt-auto'>
        <div className='space-x-4 mb-2'>
          <a href={resumeData.personalInfo.github} className='hover:underline' target='_blank' rel='noopener noreferrer'>
            GitHub
          </a>
          <a href={`mailto:${resumeData.personalInfo.email}`} className='hover:underline'>
            Email
          </a>
          <a href={resumeData.personalInfo.linkedin} className='hover:underline' target='_blank' rel='noopener noreferrer'>
            LinkedIn
          </a>
        </div>
        <p className='text-xs'>
          &copy; {new Date().getFullYear()} {resumeData.personalInfo.name}. Built with ♥ using Next.js & Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}