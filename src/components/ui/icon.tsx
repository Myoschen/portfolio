import {
  IconArrowRight,
  IconBrandCss3,
  IconBrandFirebase,
  IconBrandGithub,
  IconBrandGolang,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandPython,
  IconBrandReact,
  IconBrandRedux,
  IconBrandRust,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBrandTypescript,
  IconBrandVue,
  IconChartBar,
  IconCommand,
  IconFolderCode,
  IconHome,
  IconLanguage,
  IconListDetails,
  IconMail,
  IconMoon,
  IconPalette,
  IconRocket,
  IconSun,
  IconUserCircle,
  type TablerIconsProps,
} from '@tabler/icons-react';

const IconMap = {
  demo: IconRocket,
  arrowRight: IconArrowRight,
  css: IconBrandCss3,
  firebase: IconBrandFirebase,
  github: IconBrandGithub,
  golang: IconBrandGolang,
  html: IconBrandHtml5,
  javascript: IconBrandJavascript,
  mongodb: IconBrandMongodb,
  nextjs: IconBrandNextjs,
  python: IconBrandPython,
  react: IconBrandReact,
  redux: IconBrandRedux,
  rust: IconBrandRust,
  tailwindcss: IconBrandTailwind,
  twitter: IconBrandTwitter,
  typescript: IconBrandTypescript,
  vue: IconBrandVue,
  chart: IconChartBar,
  command: IconCommand,
  folderCode: IconFolderCode,
  home: IconHome,
  language: IconLanguage,
  listDetails: IconListDetails,
  mail: IconMail,
  moon: IconMoon,
  palette: IconPalette,
  sun: IconSun,
  profile: IconUserCircle,
};

interface Props extends TablerIconsProps {
  name: keyof typeof IconMap;
}

export default function Icon({name, size = 18, ...props}: Props) {
  const Comp = IconMap[name];
  return <Comp size={size} {...props} />;
}
