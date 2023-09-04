import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ProCursorFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="ProCursorFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m9.31,2c-.56,0-1.01.45-1.01,1v2.09c0,.55.45,1,1.01,1s1.01-.45,1.01-1v-2.09c0-.55-.45-1-1.01-1Zm-5.62,1.69c-.39.39-.39,1.02,0,1.41l1.4,1.39c.39.39,1.03.39,1.42,0,.39-.39.39-1.02,0-1.41l-1.4-1.39c-.39-.39-1.03-.39-1.42,0Zm1.41,4.58c.56,0,1.01.45,1.01,1s-.45,1-1.01,1h-2.1c-.56,0-1.01-.45-1.01-1s.45-1,1.01-1h2.1Zm2.11,3.08c-.39-.39-1.03-.39-1.42,0l-1.4,1.39c-.39.39-.39,1.02,0,1.41s1.03.39,1.42,0l1.4-1.39c.39-.39.39-1.02,0-1.41Zm5.59-6.97c.39-.39,1.03-.39,1.42,0,.39.39.39,1.02,0,1.41l-1.4,1.39c-.39.39-1.03.39-1.42,0s-.39-1.02,0-1.41l1.4-1.39Zm-5.79,5.24c-.12-.35-.14-.73-.06-1.09.08-.36.27-.69.53-.96.26-.26.6-.45.96-.53.36-.08.75-.06,1.1.06l11.16,3.86c.32.05.62.19.85.42.28.28.44.66.44,1.06s-.16.78-.44,1.06c-.23.23-.53.38-.85.42l-5.06,1.78-1.83,5.03c-.05.31-.19.61-.42.84-.28.28-.66.44-1.06.44s-.78-.16-1.06-.44c-.23-.23-.38-.53-.43-.85l-3.83-11.09Z"/>',
      }}
    />
  )
)

ProCursorFill.displayName = 'ProCursorFill'

export const tags = ['ProCursorFill', '']
