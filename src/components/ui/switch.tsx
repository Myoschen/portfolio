import * as SwitchPrimitive from '@radix-ui/react-switch';

interface Props {
  id: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

function Switch({id, leftIcon, rightIcon, checked, onCheckedChange}: Props) {
  return (
    <div className="flex items-center gap-x-2">
      {leftIcon && (
        <label className="leading-none" htmlFor={id}>
          {leftIcon}
        </label>
      )}
      <SwitchPrimitive.Root
        id={id}
        className="relative h-[25px] w-[50px] rounded-full bg-mauve-3 outline-none focus:outline focus:outline-violet-7 dark:bg-mauve-dark-3 dark:focus:outline-violet-dark-7"
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <SwitchPrimitive.Thumb className="block h-5 w-5 translate-x-0.5 rounded-full bg-violet-9 shadow transition-[background-color_transform] will-change-transform data-[state=checked]:translate-x-[27px] dark:bg-violet-dark-9" />
      </SwitchPrimitive.Root>
      {rightIcon && (
        <label className="leading-none" htmlFor={id}>
          {rightIcon}
        </label>
      )}
    </div>
  );
}

export default Switch;
