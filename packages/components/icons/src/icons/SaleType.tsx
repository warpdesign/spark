import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SaleType = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="SaleType"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m11.82,4.58c.13-.1.31-.1.44,0l7.11,5.61c.27.21.12.64-.22.64h-1.41v8.32c0,.18-.13.32-.29.35h-.06s-10.02,0-10.02,0c-.2,0-.36-.16-.36-.36v-8.32h-2.14c-.32,0-.47-.38-.27-.6l.05-.04,7.18-5.61Zm.22.74l-6.14,4.8h1.46c.18,0,.32.13.35.29v.06s0,8.32,0,8.32h9.31v-8.32c0-.18.13-.32.29-.35h.06s.73,0,.73,0l-6.08-4.8Zm0,9.31c.31,0,.56.25.56.56s-.25.56-.56.56c-.31,0-.55-.26-.56-.56,0-.31.25-.56.56-.56Zm1.32-4.42c.36.32.55.76.52,1.21.03.58-.26,1.13-.78,1.49-.35.21-.58.55-.63.93,0,.24-.22.43-.48.43-.13,0-.25-.05-.34-.13-.09-.08-.14-.19-.14-.31,0-.54.29-1.04.78-1.35.38-.23.61-.62.61-1.03.04-.23-.04-.47-.21-.65-.17-.18-.42-.28-.68-.28-.43,0-.82.25-.95.62-.06.19-.25.31-.47.31-.25,0-.45-.18-.46-.4,0-.07.02-.14.05-.2.29-.67,1.02-1.11,1.83-1.09.5-.03,1,.14,1.35.46Z"/>',
      }}
    />
  )
)

SaleType.displayName = 'SaleType'

export const tags = ['SaleType', '']
