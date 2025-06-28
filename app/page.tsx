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

  // First, add this to your data section at the top of the file
  const personalInfo = [
    {
      title: 'Hobbies',
      content: 'Passionate about bouldering and rock climbing. When not scaling walls, you\'ll find me experimenting with new coding projects or exploring hiking trails.',
      icon: '🧗‍♂️'
    },
    {
      title: 'Learning Journey',
      content: 'Currently diving deep into cloud architecture and MLOps. I believe in continuous learning and regularly take on new technical challenges.',
      icon: '📚'
    },
    {
      title: 'Work Style',
      content: 'Detail-oriented problem solver who thrives in collaborative environments. I enjoy bridging the gap between data and practical solutions.',
      icon: '💡'
    },
    {
      title: 'Goals',
      content: 'Aspiring to become a technical lead who can mentor others. Committed to creating impactful data solutions that drive business value.',
      icon: '🎯'
    }
  ];

  /* ---------- JSX ---------- */
  return (
    
<main className='font-sans antialiased min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900'>
  {/* Hero section - keep its own background due to the image */}
  <section className='relative flex flex-col items-center justify-center text-center py-24 overflow-hidden'>
    {/* Background Image */}
    <div className='absolute inset-0 w-full h-full'>
      <Image
        src="/images/about_me_2.JPG"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay for better text readability */}
      <div className='absolute inset-0 bg-black/50'></div>
    </div>
    
    <motion.div 
      className='relative z-10' 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <h1 className='text-5xl font-extrabold tracking-tight text-white drop-shadow-lg'>
        Christian Diaz Rodriguez
      </h1>
      <p className='mt-2 text-xl font-medium text-white drop-shadow-lg'>
        Data Analyst · Emerging Data Engineer
      </p>
      <div className='mt-6 flex gap-4 justify-center'>
        <Button asChild variant='secondary' size='icon' className='bg-white/20 hover:bg-white/30 backdrop-blur-sm'>
          <a href='mailto:christiandzrz@gmail.com' aria-label='Email'>
            <SiGmail />
          </a>
        </Button>
        <Button asChild variant='secondary' size='icon' className='bg-white/20 hover:bg-white/30 backdrop-blur-sm'>
          <a href='https://github.com/ChristianDzRz' aria-label='GitHub'>
            <SiGithub />
          </a>
        </Button>
        <Button asChild variant='secondary' size='icon' className='bg-white/20 hover:bg-white/30 backdrop-blur-sm'>
          <a href='https://linkedin.com/in/christiandiazrz' aria-label='LinkedIn'>
            <FaLinkedin />
          </a>
        </Button>
      </div>
    </motion.div>
  </section>

  {/* About section - remove background */}
  <section className='py-16'>
    <div className='container mx-auto px-6 max-w-3xl'>
      <motion.h2 initial='hidden' whileInView='show' viewport={{ once: true }} variants={fadeIn} className='text-3xl font-bold mb-4 text-center'>
        About Me
      </motion.h2>
      <motion.p initial='hidden' whileInView='show' viewport={{ once: true }} variants={fadeIn} className='leading-relaxed text-center'>
        Curious data professional passionate about turning complex data into meaningful narratives. From bouldering to building data pipelines, I thrive on challenges and continuous learning.
      </motion.p>
    </div>
  </section>

  {/* Skills section - remove background */}
  <section className='py-16'>
    <div className='container mx-auto px-6 max-w-4xl'>
      <motion.h2 
        initial='hidden' 
        whileInView='show' 
        viewport={{ once: true }} 
        variants={fadeIn} 
        className='text-3xl font-bold mb-6 text-center text-slate-800 dark:text-white'
      >
        Core Skills
      </motion.h2>
      <motion.ul 
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className='flex flex-wrap justify-center gap-3'
      >
        {skills.map((skill, i) => (
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

  {/* Experience section - remove background */}
  <section className='py-16'>
    <div className='container mx-auto px-6 max-w-5xl'>
      {/* Experience content remains the same but update card backgrounds */}
      <h2 className='text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white'>Experience</h2>
      <div className='space-y-4'>
        {experiences.map((exp, idx) => (
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
      <motion.h2 
        initial='hidden' 
        whileInView='show' 
        viewport={{ once: true }} 
        variants={fadeIn} 
        className='text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white'
      >
        Get to Know Me
      </motion.h2>
      <div className='grid md:grid-cols-2 gap-6'>
        {personalInfo.map((info, idx) => (
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

  {/* Projects section - remove background */}
  <section className='py-16'>
    <div className='container mx-auto px-6 max-w-6xl'>
      <h2 className='text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white'>Projects</h2>
      <div className='grid md:grid-cols-3 gap-6'>
        {projects.map((proj, idx) => (
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