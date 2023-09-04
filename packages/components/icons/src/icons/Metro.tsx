import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Metro = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Metro"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m12,4.5c3.38,0,5.94,1.15,6,2.67h0v.04s0,0,0,0h0v7.9c0,1.5-1.24,2.72-2.76,2.72h-.32l1.12,1.02c.15.14.16.38.02.53-.07.08-.18.12-.28.12-.09,0-.19-.03-.26-.1l-1.72-1.57h-3.59l-1.72,1.57c-.07.07-.17.1-.26.1-.1,0-.2-.04-.28-.12-.14-.15-.13-.39.02-.53l1.12-1.02h-.32c-1.52,0-2.76-1.22-2.76-2.72v-7.94c.06-1.53,2.61-2.67,6-2.67Zm5.24,7.16H6.76v3.45c0,1.08.9,1.97,2,1.97h6.48c1.1,0,2-.88,2-1.97v-3.45Zm-2.45,1.13c.73,0,1.32.59,1.32,1.3s-.59,1.3-1.32,1.3-1.32-.59-1.32-1.3.59-1.3,1.32-1.3Zm-5.58,0c.73,0,1.32.59,1.32,1.3s-.59,1.3-1.32,1.3-1.32-.59-1.32-1.3.59-1.3,1.32-1.3Zm5.58.75c-.31,0-.56.25-.56.55s.25.55.56.55.56-.25.56-.55-.25-.55-.56-.55Zm-5.58,0c-.31,0-.56.25-.56.55s.25.55.56.55.56-.25.56-.55-.25-.55-.56-.55Zm8.03-5.62h-4.86v2.99h4.86v-2.99Zm-5.62,0h-4.86v2.99h4.86v-2.99Zm.38-2.67c-3.03,0-5.16,1-5.23,1.92h10.46c-.07-.92-2.2-1.92-5.23-1.92Z"/>',
      }}
    />
  )
)

Metro.displayName = 'Metro'

export const tags = ['Metro', '']
