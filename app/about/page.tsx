'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import MainWrapper from '@/components/main-wrapper';
import NextLink from '@/components/next-link';
import PageTitle from '@/components/page-title';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
} satisfies Variants;

const item = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
} satisfies Variants;

function AboutPage() {
  return (
    <MainWrapper>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-y-6"
      >
        <PageTitle label="About Me" />
        <motion.div variants={item} className="relative h-80 overflow-hidden">
          <Image
            className="object-cover"
            src="/programming.svg"
            alt="Programming"
            fill
          />
        </motion.div>
        <motion.div
          variants={item}
          className="font-inter space-y-4 font-medium tracking-wide"
        >
          <p>
            I graduated from Tamkang University in the Department of Computer
            Science and Information Engineering.
          </p>
          <p>
            I am passionate about programming, so I tried a lot of different
            Programming languages such as JavaScript, TypeScript, Python,
            Golang, etc.
          </p>
          <p>
            However, due to university courses, I was exposed to web front-end
            development. Until now, I still love web front-end development.
          </p>
          <p>
            Now, I am still improving my skills, such as learning React.js,
            Next.js, CSS typography, etc.
          </p>
          <p>
            In addition, I am also very interested in back-end technology. Like
            Deno, Node.js, etc.
          </p>
          <p>
            So in the future, I will focus on the front-end. If I have spare
            time, I will also learn more about the back-end technology.
          </p>
        </motion.div>
        <motion.div variants={item} className="inline-block self-end">
          <NextLink next="skill" />
        </motion.div>
      </motion.div>
    </MainWrapper>
  );
}

export default AboutPage;
