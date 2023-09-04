import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ShoeSize = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="ShoeSize"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m9.01,6.64c1.86.06,2.42,2.47,2.52,2.95.29,1.51.19,3.47-.31,5.67-.03.3.2,1.29.2,1.3.25.93.22,1.65-.09,2.14-.25.39-.69.64-1.31.76-1.11.19-1.93-.32-2.37-1.5-.28-.73-.35-1.55-.39-2.18-.04-.33-.23-.8-.45-1.34-.31-.77-.7-1.73-.78-2.65-.15-1.73.28-3.28,1.19-4.27.53-.57,1.16-.89,1.78-.89Zm1.51,9.07l-2.48.36h-.07s0,.08,0,.08c.1,1.37.41,2.07.93,2.45.19.14.41.21.66.21.11,0,.22-.01.34-.04.41-.07.69-.22.85-.45.26-.39.13-.97-.02-1.63l-.03-.13c-.08-.34-.15-.48-.17-.77v-.08Zm4.49-11.21c.62,0,1.25.32,1.77.89.91.99,1.34,2.55,1.19,4.27-.08.92-.47,1.88-.78,2.65-.22.54-.41,1-.45,1.34-.03.63-.11,1.44-.38,2.17-.44,1.18-1.26,1.7-2.38,1.5-.62-.11-1.05-.37-1.3-.76-.31-.49-.34-1.21-.09-2.14,0,0,.24-1,.2-1.3-.5-2.19-.6-4.15-.31-5.67.09-.48.66-2.89,2.52-2.95h.01Zm-1.52,9.05v.08c-.03.3-.1.45-.18.79l-.03.13c-.15.66-.28,1.23-.02,1.63.15.23.43.38.84.45.12.03.23.04.34.04.24,0,.46-.07.66-.21.52-.38.84-1.1.94-2.47v-.07s-2.55-.37-2.55-.37Zm-4.48-6.21h-.01c-.61.08-1.11.39-1.51.95-.8,1.11-.92,2.83-.69,3.95.05.24.28.88.52,1.56l.11.32c.21.57.4,1.1.45,1.3l.02.07,2.64-.39v-.05c.71-3.13.53-5.93-.44-7.13-.3-.37-.68-.57-1.09-.57Zm6-2.14h-.01c-.4,0-.78.2-1.08.57-.98,1.2-1.16,4-.45,7.13v.05s2.58.38,2.58.38h.07s.02-.06.02-.06c.05-.2.25-.73.45-1.3.29-.79.58-1.6.64-1.88.23-1.13.11-2.84-.69-3.95-.4-.55-.9-.87-1.52-.95Z"/>',
      }}
    />
  )
)

ShoeSize.displayName = 'ShoeSize'

export const tags = ['ShoeSize', '']
