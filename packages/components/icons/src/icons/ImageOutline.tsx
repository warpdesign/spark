import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ImageOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="ImageOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m20.06,19.64c0,.23-.19.42-.42.42h-3.54c-.3-1.14-.78-2.22-1.41-3.2.92-.27,1.88-.41,2.85-.41h0c.85,0,1.69.11,2.51.32v2.87Zm0-4.87c-.82-.18-1.67-.27-2.51-.27-1.41,0-2.81.24-4.13.73-.34-.36-.7-.7-1.09-1.01-2.06-1.67-4.64-2.55-7.29-2.5-.36,0-.73.02-1.09.05v-7.41c0-.23.19-.42.42-.42h15.27c.23,0,.42.19.42.42v10.41Zm-.42,7.23h-4.3s-.02,0-.04,0H4.37c-1.3,0-2.36-1.06-2.36-2.36v-6.59c-.02-.11-.02-.22,0-.33V4.36c0-1.3,1.06-2.36,2.36-2.36h15.27c1.3,0,2.36,1.06,2.36,2.36v15.28c0,1.3-1.06,2.36-2.36,2.36Zm-8.53-6.27c1.39,1.13,2.42,2.64,2.97,4.33H4.37c-.23,0-.42-.19-.42-.42v-5.91c.36-.04.73-.06,1.09-.06,0,0,.02,0,.02,0,2.19-.05,4.33.68,6.03,2.06Zm2.55-6.85c0-.81.65-1.46,1.46-1.46s1.46.65,1.46,1.46-.65,1.46-1.46,1.46-1.46-.65-1.46-1.46Zm1.46-3.4c-1.88,0-3.4,1.52-3.4,3.4s1.52,3.4,3.4,3.4,3.4-1.52,3.4-3.4-1.52-3.4-3.4-3.4Z"/>',
      }}
    />
  )
)

ImageOutline.displayName = 'ImageOutline'

export const tags = ['ImageOutline', '']
