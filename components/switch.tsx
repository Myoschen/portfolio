import * as SwitchPrimitive from '@radix-ui/react-switch';

interface Props {
  id: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

function Switch({ id, leftIcon, rightIcon, checked, onCheckedChange }: Props) {
  return (
    <div className="flex items-center gap-x-2">
      {leftIcon ? (
        <label className="leading-none" htmlFor={id}>
          {leftIcon}
        </label>
      ) : null}
      <SwitchPrimitive.Root
        id={id}
        className="bg-mauve-mauve3 focus:outline-violet-violet7 dark:bg-mauveDark-mauve3 dark:focus:outline-violetDark-violet7 relative h-[25px] w-[50px] rounded-full outline-none focus:outline"
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <SwitchPrimitive.Thumb className="bg-violet-violet9 dark:bg-violetDark-violet9 block h-5 w-5 translate-x-0.5 rounded-full shadow transition-[background-color_transform] will-change-transform data-[state=checked]:translate-x-[27px]" />
      </SwitchPrimitive.Root>
      {rightIcon ? (
        <label className="leading-none" htmlFor={id}>
          {rightIcon}
        </label>
      ) : null}
    </div>
  );
}

export default Switch;
