import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AppearanceFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="M4.6 5.239h14.8c.551 0 1 .467 1 1.042 0 .574-.449 1.041-1 1.041H4.6c-.551 0-1-.467-1-1.041 0-.575.449-1.042 1-1.042Zm0 3.75h14.8c1.434 0 2.6-1.215 2.6-2.708 0-1.494-1.166-2.709-2.6-2.709H4.6C3.166 3.572 2 4.787 2 6.281c0 1.493 1.166 2.708 2.6 2.708Zm0 8.75h14.8c.551 0 1 .467 1 1.042 0 .574-.449 1.041-1 1.041H4.6c-.551 0-1-.467-1-1.041 0-.575.449-1.042 1-1.042Zm0 3.75h14.8c1.434 0 2.6-1.215 2.6-2.708 0-1.494-1.166-2.709-2.6-2.709H4.6c-1.434 0-2.6 1.215-2.6 2.709 0 1.493 1.166 2.708 2.6 2.708Zm-.421-11.25H19.82A2.18 2.18 0 0 1 22 12.416a2.18 2.18 0 0 1-2.179 2.179H4.18A2.18 2.18 0 0 1 2 12.416c0-1.2.978-2.177 2.179-2.177Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

AppearanceFill.displayName = 'AppearanceFill'

export const tags = ['AppearanceFill', '']
