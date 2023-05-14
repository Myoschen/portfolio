import React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

interface Props {
  value: number;
}

function Progress({ value }: Props) {
  return (
    <ProgressPrimitive.Root
      className="bg-mauve-3 dark:bg-mauveDark-3 relative h-[25px] w-full overflow-hidden rounded"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: 'translateZ(0)',
      }}
      value={value}
    >
      <ProgressPrimitive.Indicator
        className="bg-violet-9 dark:bg-violet-9 h-full w-full"
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export default Progress;
