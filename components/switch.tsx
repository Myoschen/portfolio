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
        className="bg-mauve-3 focus:outline-violet-7 dark:bg-mauveDark-3 dark:focus:outline-violetDark-7 relative h-[25px] w-[50px] rounded-full outline-none focus:outline"
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <SwitchPrimitive.Thumb className="bg-violet-9 dark:bg-violetDark-9 block h-5 w-5 translate-x-0.5 rounded-full shadow transition-[background-color_transform] will-change-transform data-[state=checked]:translate-x-[27px]" />
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
