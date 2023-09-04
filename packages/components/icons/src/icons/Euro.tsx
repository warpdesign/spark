import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Euro = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Euro"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m16.44,4c.7,0,1.39.12,2.05.35.51.18,1.07-.1,1.25-.62.18-.52-.09-1.09-.6-1.27-.88-.31-1.8-.47-2.72-.46-.01,0-.03,0-.04,0-2.5.12-4.85,1.24-6.54,3.12-.95,1.05-1.64,2.29-2.05,3.63h-3.12c-.54,0-.98.45-.98,1s.44,1,.98,1h2.73c-.04.41-.05.83-.03,1.25-.02.42,0,.84.03,1.25h-2.73c-.54,0-.98.45-.98,1s.44,1,.98,1h3.12c.41,1.34,1.11,2.58,2.05,3.63,1.69,1.88,4.04,3,6.54,3.12,0,0,.02,0,.03,0h.02c1.15,0,2.28-.23,3.33-.7.5-.22.73-.81.51-1.31-.21-.51-.79-.74-1.29-.52-.8.35-1.66.53-2.53.53-1.97-.1-3.83-.99-5.17-2.47-.61-.67-1.08-1.45-1.41-2.28h3.62c.54,0,.98-.45.98-1s-.44-1-.98-1h-4.12c-.05-.4-.06-.8-.05-1.21,0-.03,0-.05,0-.08-.02-.41,0-.81.05-1.21h4.12c.54,0,.98-.45.98-1s-.44-1-.98-1h-3.62c.33-.83.81-1.6,1.41-2.28,1.34-1.49,3.19-2.38,5.17-2.47Z"/>',
      }}
    />
  )
)

Euro.displayName = 'Euro'

export const tags = ['Euro', '']
