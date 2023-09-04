import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Couch = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Couch"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m23.16,6.74c-.53-.52-1.25-.82-2.01-.82h-1.33v-2.13c0-1.55-1.27-2.8-2.84-2.8H7c-1.57,0-2.84,1.25-2.84,2.8v2.13h-1.33c-.75,0-1.47.3-2.01.82-.53.52-.83,1.23-.83,1.98v7.38c0,.74.3,1.45.83,1.98.53.52,1.25.82,2.01.82h2.74l-.55,2.72c-.13.62.28,1.23.92,1.36.63.13,1.25-.28,1.38-.91l.64-3.17h8.07l.64,3.17c.13.62.74,1.03,1.38.91.63-.13,1.05-.73.92-1.36l-.55-2.72h2.74c.75,0,1.47-.3,2.01-.82.54-.52.83-1.23.83-1.98v-7.38c0-.74-.3-1.45-.83-1.98h-.01ZM6.51,3.8c0-.27.22-.49.5-.49h9.99c.27,0,.5.22.5.49v8.2c0,.27-.22.49-.5.49H7c-.27,0-.5-.22-.5-.49V3.8h0Zm15.14,12.31c0,.13-.05.26-.15.34s-.22.15-.35.15H2.85c-.13,0-.26-.05-.35-.15-.09-.09-.15-.22-.15-.34v-7.38c0-.13.05-.26.15-.34.09-.09.22-.15.35-.15h1.33v3.77c0,1.55,1.27,2.8,2.84,2.8h9.99c1.57,0,2.84-1.25,2.84-2.8v-3.77h1.33c.13,0,.26.05.35.15.09.1.15.22.15.34v7.38h-.02Z"/>',
      }}
    />
  )
)

Couch.displayName = 'Couch'

export const tags = ['Couch', '']
