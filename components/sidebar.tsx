'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BarChartIcon, DashboardIcon, HomeIcon, PersonIcon } from '@radix-ui/react-icons';

const navLinks = [
  {
    label: 'Home',
    href: '/',
    icon: <HomeIcon className="-mb-1" />,
  },
  {
    label: 'About',
    href: '/about',
    icon: <PersonIcon className="-mb-1" />,
  },
  {
    label: 'Skill',
    href: '/skill',
    icon: <BarChartIcon className="-mb-1" />,
  },
  {
    label: 'Project',
    href: '/project',
    icon: <DashboardIcon className="-mb-1" />,
  },
];

function Sidebar() {
  const pathname = usePathname();
  const [hoverNav, setHoverNav] = useState<number | null>(null);

  return (
    <aside className="px-6 md:w-[150px] md:shrink-0 md:px-0">
      <div className="md:sticky md:top-20">
        <div className="-ml-2 mb-4 flex justify-start md:mb-8">
          <Link href="/">
            <Image
              className="object-cover"
              src="/icon.png"
              alt="icon"
              width={60}
              height={60}
            />
          </Link>
        </div>
        <nav>
          <div
            className="-ml-2 flex flex-wrap items-start gap-x-2 md:flex-col md:gap-x-0 md:gap-y-2"
            onMouseLeave={() => setHoverNav(null)}
          >
            {navLinks.map(({ label, href, icon }, index) => (
              <Link
                className="flex text-neutral-500 transition-colors hover:text-neutral-200"
                href={href}
                key={href}
                onMouseEnter={() => setHoverNav(index)}
              >
                <span className="font-ibm relative flex items-center gap-x-1 px-2 py-1 font-medium tracking-wider">
                  {icon}
                  {label}
                  {pathname === href ? (
                    <motion.div
                      className="absolute inset-0 z-[-1] rounded-md bg-neutral-800"
                      layoutId="background"
                    />
                  ) : null}
                  {hoverNav === index ? (
                    <motion.div
                      className="absolute bottom-[-2px] left-0 h-[2px] w-full rounded-md bg-neutral-400"
                      layoutId="underline"
                    />
                  ) : null}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
