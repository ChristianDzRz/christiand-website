'use client';

import { useState } from 'react';
import { SiGithub,  SiGmail } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  /* ---------- Data ---------- */
  const experiences = [
    {
      company: 'Goldman Sachs',
      role: 'Data Analyst – Risk Engineering',
      period: 'Aug 2024 – Present',
      summary: 'Automated monthly risk reports & implemented data‑quality checks.',
      details: [
        'Designed and implemented a straight‑through‑processing framework using Python, SQL & Pure, eliminating manual compilation.',
        'Built reusable Python and Slang modules to standardise calculations and created Tableau dashboards for internal analytics.',
        'Developed automated data‑quality checks and collaborated with upstream teams to resolve issues quickly.',
        'Configured and monitored Procmon schedules to ensure reliable report delivery.',
        'Presented insights to risk, trading and infrastructure stakeholders.',
      ],
    },
    {
      company: 'Mercer',
      role: 'Analyst',
      period: 'Jan 2024 – Aug 2024',
      summary: 'Automated HR‑survey pipelines & built insight dashboards.',
      details: [
        'Automated HR‑survey processing with Python, R and Excel for multinational clients.',
        'Developed Tableau and R Shiny dashboards to visualise survey results.',
        'Integrated Jira and Qualtrics APIs to streamline data flow and progress tracking.',
      ],
    },
    {
      company: 'Mercer',
      role: 'Junior Analyst',
      period: 'Mar 2020 – Mar 2021',
      summary: 'Built multilingual QA tools & client dashboards.',
      details: [
        'Cleaned and transformed large HR datasets with R and Excel.',
        'Automated multilingual survey QA using Python/Selenium, reducing manual effort by 50%.',
        'Built Tableau dashboards highlighting engagement drivers adopted in client action plans.',
      ],
    },
    {
      company: 'IBM',
      role: 'Linux Administrator Intern',
      period: 'Jul 2019 – Sep 2019',
      summary: 'Supported RHEL server maintenance.',
      details: ['Assisted with routine Red Hat Enterprise Linux server maintenance and user support.'],
    },
  ];

  const projects = [
    {
      title: 'Stress Detection Using Facial Cues',
      description: 'CNN‑RNN model & Flask demo for real‑time stress detection.',
      image: '/images/design_stress_detection.png',
      link: 'https://github.com/ChristianDzRz/Stress-Detection-Thesis',
    },
    {
      title: 'Meal Planner Assisted by ML',
      description: 'Reinforcement‑learning meal recommender deployed as a web app.',
      image: '/images/Meal_Planner.jpg',
      link: 'https://github.com/ChristianDzRz/Meal_Planner_ML',
    },
    {
      title: 'Weakly‑Supervised Sound Event Detection',
      description: 'CRNN trained on DCASE2018 for sound‑event boundary detection.',
      image: '/images/samsung_project.png',
      link: 'https://github.com/ChristianDzRz/Students-2019-Weakly-Learning',
    },
  ];

  const skills = [
    'Python',
    'SQL',
    'R',
    'Tableau',
    'Power BI',
    'Matplotlib',
    'AWS',
    'PySpark',
    'Pure / Procmon',
    'REST / JSON',
    'Linux (RHEL)',
    'Communication',
  ];

  /* ---------- JSX ---------- */
  return (
    <main className='font-sans antialiased min-h-screen'>
      {/* -------------------------------------------------- Hero */}
      <section className='relative flex flex-col items-center justify-center text-center py-24 overflow-hidden bg-gradient-to-br from-cyan-600 via-sky-500 to-indigo-600 text-white'>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <div className='relative w-40 h-40 mx-auto mb-6'>
          </div>
          <h1 className='text-5xl font-extrabold tracking-tight'>Christian Diaz Rodriguez</h1>
          <p className='mt-2 text-xl font-medium'>Data Analyst · Emerging Data Engineer</p>
          <div className='mt-6 flex gap-4 justify-center'>
            <Button asChild variant='secondary' size='icon' className='bg-white/20 hover:bg-white/30'>
              <a href='mailto:christiandzrz@gmail.com' aria-label='Email'>
                <SiGmail />
              </a>
            </Button>
            <Button asChild variant='secondary' size='icon' className='bg-white/20 hover:bg-white/30'>
              <a href='https://github.com/ChristianDzRz' aria-label='GitHub'>
                <SiGithub />
              </a>
            </Button>
            <Button asChild variant='secondary' size='icon' className='bg-white/20 hover:bg-white/30'>
              <a href='https://linkedin.com/in/christiandiazrz' aria-label='LinkedIn'>
                <FaLinkedin />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Blurred moving blobs */}
        <motion.div className='absolute -z-10 inset-0' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className='absolute left-1/2 top-1/3 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute right-1/4 bottom-1/4 w-72 h-72 bg-white/10 rounded-full blur-2xl animate-pulse delay-300'></div>
        </motion.div>
      </section>

      {/* -------------------------------------------------- About */}
      <section className='py-16 bg-white dark:bg-slate-900'>
        <div className='container mx-auto px-6 max-w-3xl'>
          <motion.h2 initial='hidden' whileInView='show' viewport={{ once: true }} variants={fadeIn} className='text-3xl font-bold mb-4 text-center'>
            About Me
          </motion.h2>
          <motion.p initial='hidden' whileInView='show' viewport={{ once: true }} variants={fadeIn} className='leading-relaxed text-center'>
            Curious data professional passionate about turning complex data into meaningful narratives. From bouldering to building data pipelines, I thrive on challenges and continuous learning.
          </motion.p>
        </div>
      </section>

      {/* -------------------------------------------------- Skills (moved up) */}
      <section className='py-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>
        <div className='container mx-auto px-6 max-w-4xl'>
          <h2 className='text-3xl font-bold mb-6 text-center'>Core Skills</h2>
          <ul className='flex flex-wrap justify-center gap-3'>
            {skills.map((skill, i) => (
              <li key={i} className='px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium shadow-md'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------- Experience */}
      <section className='py-16 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900'>
        <div className='container mx-auto px-6 max-w-5xl'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Experience</h2>
          <div className='space-y-4'>
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                layout
                className='overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-slate-800 cursor-pointer'
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

      {/* -------------------------------------------------- Projects */}
      <section className='py-16 bg-white dark:bg-slate-950'>
        <div className='container mx-auto px-6 max-w-6xl'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Projects</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {projects.map((proj, idx) => (
              <motion.a
                key={idx}
                href={proj.link}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ y: -5 }}
                className='block rounded-xl overflow-hidden shadow-lg bg-slate-100 dark:bg-slate-800'
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

      {/* -------------------- Footer -------------------- */}
      <footer className='bg-slate-900 text-slate-300 py-8 text-center mt-auto'>
        <div className='space-x-4 mb-2'>
          <a
            href='https://github.com/ChristianDzRz'
            className='hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a href='mailto:christiandzrz@gmail.com' className='hover:underline'>
            Email
          </a>
          <a
            href='https://linkedin.com/in/christiandiazrz'
            className='hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </div>
        <p className='text-xs'>
          &copy; {new Date().getFullYear()} Christian Diaz. Built with ♥ using Next.js & Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
