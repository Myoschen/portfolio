interface Props {
  label: string;
}

function PageTitle({ label }: Props) {
  return (
    <h1 className="font-work-sans text-4xl font-bold leading-relaxed">
      {label}
    </h1>
  );
}

export default PageTitle;
