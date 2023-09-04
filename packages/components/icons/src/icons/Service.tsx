import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Service = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Service"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m2.04,3.91c-2.65,2.65-2.51,6.97.16,9.64l7.51,7.51c1.25,1.25,3.28,1.25,4.53,0,0,0,0,0,0,0l5.51-5.51.02.02,2.02-2.02c2.67-2.67,2.81-6.99.16-9.64-2.65-2.65-6.97-2.51-9.64.16l-.32.32-.32-.32c-2.67-2.67-6.99-2.81-9.64-.16h0Zm8.26,2.18l-.32-.32c-1.8-1.8-4.6-1.81-6.25-.16-1.65,1.65-1.64,4.44.16,6.25l7.51,7.52c.31.31.82.31,1.13,0h0s.32-.32.32-.32l-1.86-1.86c-.46-.47-.46-1.23.01-1.7.47-.46,1.22-.46,1.68,0l1.86,1.86.9-.9-1.7-1.7c-.48-.46-.5-1.22-.04-1.7s1.22-.5,1.7-.04c.01.01.03.03.04.04l1.7,1.7.9-.9-2.84-2.85c-.29-.29-.77-.3-1.07,0l-.9.88c-1.44,1.41-3.76,1.4-5.19-.02-.98-.97-.98-2.55-.01-3.53,0,0,0,0,0,0l2.24-2.24Zm3.71-.32c1.8-1.8,4.6-1.81,6.25-.16,1.65,1.65,1.64,4.44-.16,6.24l-.32.32-2.86-2.86c-1.22-1.23-3.21-1.24-4.44-.03l-.9.88c-.51.5-1.32.49-1.82,0-.04-.04-.04-.1,0-.13h0s4.26-4.25,4.26-4.25Z"/>',
      }}
    />
  )
)

Service.displayName = 'Service'

export const tags = ['Service', '']
