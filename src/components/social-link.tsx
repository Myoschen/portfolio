import type {SocialLink} from '@/types/common';

interface Props extends SocialLink {}

export default function SocialLink({label, href, icon}: Props) {
  return (
    <a
      className="flex max-w-min items-center gap-x-2 transition-all will-change-transform hover:-translate-y-1 hover:text-violet-9 dark:hover:text-violet-dark-9"
      href={href}
      target="_blank"
      // https://pjchender.blogspot.com/2020/05/relnoreferrer-targetblank.html
      rel="noreferrer noopener"
    >
      {icon}
      <span className="tracking-wide">{label}</span>
    </a>
  );
}
//
