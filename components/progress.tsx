import React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

interface Props {
  value: number;
}

function Progress({ value }: Props) {
  return (
    <ProgressPrimitive.Root
      className="relative h-[25px] w-full overflow-hidden rounded-md bg-black"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: 'translateZ(0)',
      }}
      value={value}
    >
      <ProgressPrimitive.Indicator
        className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-white transition-transform duration-[660ms]"
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export default Progress;
