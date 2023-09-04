import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Moto = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Moto"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m15.84,6.56c.08.05.14.14.16.23l.21.9c.27,0,.53.08.76.21.44.31.73.76.82,1.28.4,1.72-.67,2.09-.72,2.11h-.02s.07.32.07.32h.14c1.58-.08,2.98,1.01,3.2,2.53.23,1.56-.86,3.03-2.49,3.32-.19.04-.38.05-.56.05-1.36,0-2.53-.83-2.94-2.01h-4.83c-.41,1.17-1.55,1.98-2.86,2.01-1.71,0-3.09-1.32-3.09-2.95,0-.06,0-.12,0-.19-.12-.24-.18-.5-.19-.78v-2.02c0-.62.31-1.17.79-1.52-.2-.2-.32-.47-.32-.77,0-.57.44-1.04,1.03-1.11h3.59c.59.07,1.03.54,1.03,1.11,0,.13-.02.25-.07.37h.67c.25-.03.5.05.68.22.12.16.15.37.09.55-.07.17-.02.36.12.49.31.36,1.05,1.26,1.54,2.06h2.13c.36-.55.92-.99,1.58-1.21l-1.04-4.46-1.36.27c-.21.04-.41-.1-.46-.3s.09-.4.3-.44l1.74-.33c.1-.02.2,0,.29.05ZM4.61,15.28h0c.33.89,1.2,1.48,2.18,1.48.91.02,1.75-.48,2.13-1.27h-3.39c-.32,0-.63-.07-.91-.21Zm12.69-2.95l.5,2.14c.02.1,0,.2-.05.28-.06.08-.14.14-.24.16l-.08.05c-.18,0-.33-.12-.37-.29l-.52-2.21c-.46.18-.85.5-1.11.9v-.02c0,.1-.04.19-.11.26l-.04.03c-.06.13-.11.27-.14.41-.2.88.18,1.78.95,2.29.77.51,1.79.52,2.58.03.74-.46,1.14-1.29,1.04-2.12l-.02-.15c-.23-1.02-1.17-1.76-2.27-1.76h0s-.13-.02-.13-.02Zm-2.85,1.39h-1.41c.05.14.08.27.08.38,0,.27-.05.48-.15.66h1.36s0-.04,0-.06c-.02-.34.03-.67.12-.98Zm-4.21-3.32h-4.71c-.33,0-.64.12-.88.34s-.37.52-.37.83v2.02c.01.57.44,1.04,1,1.15.07.01.14.02.21.02h3.94s1.42,0,1.42,0c1.15,0,1.5-.16,1.5-.66,0-.36-.93-1.68-1.79-2.7-.28-.27-.4-.64-.32-1.01Zm6.17-1.92l.49,2.09c.11-.1.35-.4.16-1.21-.04-.32-.22-.61-.49-.81-.05-.03-.1-.05-.16-.07Zm-7.8.45h-3.59c-.18.04-.32.19-.32.37s.13.33.32.37h3.59c.18-.04.32-.19.32-.37s-.13-.33-.32-.37Z"/>',
      }}
    />
  )
)

Moto.displayName = 'Moto'

export const tags = ['Moto', '']
