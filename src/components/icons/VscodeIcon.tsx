import type { SVGBaseProps } from '@/lib/types'

export default function VscodeIcon({ size = 16, ...props }: SVGBaseProps) {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} xmlnsXlink={'http://www.w3.org/1999/xlink'} viewBox={'0 0 256 254'} preserveAspectRatio={'xMidYMid'} width={size} height={size} {...props}>
      <defs>
        <linearGradient id={'vscode-c'} x1={'50%'} x2={'50%'} y1={'0%'} y2={'100%'}>
          <stop offset={'0%'} stopColor={'#FFF'} />
          <stop offset={'100%'} stopColor={'#FFF'} stopOpacity={'0'} />
        </linearGradient>
        <path id={'vscode-a'} d={'M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.507 91.695a15.853 15.853 0 0 0 5.464 3.571Zm10.464-183.649-76.262 57.889 76.262 57.888V68.956Z'} />
      </defs>
      <mask id={'vscode-b'} fill={'#fff'}><use xlinkHref={'#vscode-a'} /></mask>
      <path fill={'#0065A9'} d={'M246.135 26.873 193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36Z'} mask={'url(#vscode-b)'} />
      <path fill={'#007ACC'} d={'m246.135 226.816-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36Z'} mask={'url(#vscode-b)'} />
      <path fill={'#1F9CF0'} d={'M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363l-52.533 25.262Z'} mask={'url(#vscode-b)'} />
      <path fill={'url(#vscode-c)'} fillOpacity={'.25'} d={'M180.828 252.605a15.874 15.874 0 0 0 12.65-.486l52.5-25.263a15.938 15.938 0 0 0 9.026-14.363V41.197a15.939 15.939 0 0 0-9.025-14.363L193.477 1.57a15.877 15.877 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.506 91.695a15.857 15.857 0 0 0 5.465 3.571Zm10.464-183.65-76.262 57.89 76.262 57.888V68.956Z'} mask={'url(#vscode-b)'} />
    </svg>
  )
}
