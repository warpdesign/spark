import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AlarmOnOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="AlarmOnOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m7.13,2.41c.33.45.24,1.07-.21,1.4-.91.67-1.66,1.55-2.17,2.57-.38.75-.62,1.56-.73,2.4-.07.55-.57.94-1.13.87-.55-.07-.95-.57-.88-1.12.13-1.06.44-2.09.93-3.05.66-1.3,1.61-2.43,2.78-3.28.45-.33,1.08-.23,1.41.21Z"/><path fill-rule="evenodd" d="m14.05,4.16c1.05.33,2.02.91,2.81,1.7,1.3,1.3,2.03,3.06,2.03,4.89,0,2.78.47,4.32.96,5.21.39.71.58,1.59.26,2.37-.36.87-1.21,1.3-2.15,1.3h-2.94c-.18.68-.58,1.28-1.13,1.71s-1.24.66-1.95.66-1.39-.23-1.95-.66c-.56-.43-.96-1.03-1.13-1.7h0s-2.93,0-2.93,0c-.95,0-1.79-.42-2.15-1.29-.32-.78-.13-1.66.26-2.37.49-.89.96-2.43.96-5.21,0-1.83.73-3.59,2.03-4.89.79-.79,1.76-1.37,2.81-1.7.04-1.12.97-2.01,2.1-2.01s2.06.89,2.1,2.01Zm-2.1,1.68c1.31,0,2.56.52,3.48,1.44.92.92,1.44,2.17,1.44,3.48,0,2.99.51,4.89,1.21,6.17.22.41.17.63.16.66h0s-.09.05-.28.05H5.93c-.18,0-.26-.04-.28-.05h0s-.06-.25.16-.66c.7-1.28,1.21-3.17,1.21-6.17,0-1.3.52-2.56,1.44-3.48.92-.92,2.18-1.44,3.48-1.44Z"/><path d="m18.29,2.2c-.45-.33-1.08-.23-1.41.21-.33.45-.24,1.07.21,1.4.91.67,1.66,1.55,2.17,2.57.38.75.62,1.56.73,2.4.07.55.57.94,1.13.87s.95-.57.88-1.12c-.13-1.06-.44-2.09-.93-3.05-.66-1.3-1.61-2.43-2.78-3.28Z"/>',
      }}
    />
  )
)

AlarmOnOutline.displayName = 'AlarmOnOutline'

export const tags = ['AlarmOnOutline', '']
