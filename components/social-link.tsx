export type SocialLinkInfo = {
  label: string;
  href: string;
  icon: JSX.Element;
};

interface Props {
  info: SocialLinkInfo;
}

function SocialLink({ info }: Props) {
  const { label, href, icon } = info;
  return (
    <a
      className="flex max-w-min items-center gap-x-2"
      href={href}
      target="_blank"
      // https://pjchender.blogspot.com/2020/05/relnoreferrer-targetblank.html
      rel="noreferrer noopener"
    >
      {icon}
      <span className="font-inter font-medium">{label}</span>
    </a>
  );
}

export default SocialLink;
