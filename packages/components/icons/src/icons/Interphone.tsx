import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Interphone = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Interphone"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m8.93,6c.65,0,1.2.48,1.31,1.12h7.98c.71,0,1.28.59,1.28,1.31v8.27c0,.72-.58,1.31-1.28,1.31H5.78c-.71,0-1.28-.59-1.28-1.31v-8.27c0-.72.58-1.31,1.28-1.31h.06c.11-.63.66-1.12,1.31-1.12h1.78Zm-3.11,1.88h-.03c-.29,0-.53.24-.53.54v8.27c0,.3.24.54.53.54h12.44c.29,0,.53-.24.53-.54v-8.27c0-.3-.24-.54-.53-.54h-7.96v7.13c0,.75-.6,1.36-1.33,1.36h-1.78c-.74,0-1.33-.61-1.33-1.36v-7.13Zm3.11-1.12h-1.78c-.32,0-.58.27-.58.59v7.65c0,.33.26.59.58.59h1.78c.32,0,.58-.27.58-.59v-7.65c0-.33-.26-.59-.58-.59Zm3.75,7.92c.21,0,.38.17.38.38s-.17.38-.38.38h-.85c-.21,0-.38-.17-.38-.38s.17-.38.38-.38h.85Zm2.15,0c.21,0,.38.17.38.38s-.17.38-.38.38h-.85c-.21,0-.38-.17-.38-.38s.17-.38.38-.38h.85Zm2.15,0c.21,0,.38.17.38.38s-.17.38-.38.38h-.85c-.21,0-.38-.17-.38-.38s.17-.38.38-.38h.85Zm-.4-6c.43,0,.77.35.77.79v3.53c0,.43-.35.79-.77.79h-4.34c-.43,0-.77-.35-.77-.79v-3.53c0-.44.35-.79.77-.79h4.34Zm-4.34.76l-.02,3.55,4.36.02s.02-.01.02-.02v-3.53l-4.36-.02Z"/>',
      }}
    />
  )
)

Interphone.displayName = 'Interphone'

export const tags = ['Interphone', '']
