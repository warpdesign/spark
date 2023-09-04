import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const DiyProduct = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="DiyProduct"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m5.89,4.56l2.01,1.23c.1.04.18.12.22.22.03.1,0,.21-.05.3l-.47.7,3.65,3.66h0c.12-.14.3-.21.48-.21.11,0,.21.02.31.05l1.44-1.45c-.1-.3-.15-.62-.15-.94,0-1.71,1.39-3.11,3.1-3.11.37,0,.73.07,1.08.2.13.05.22.16.24.29.02.13-.02.27-.12.36l-1.46,1.33.21,1.02,1,.34,1.4-1.22c.1-.09.25-.12.38-.08.13.04.23.15.26.29.04.2.07.41.07.62,0,1.71-1.39,3.11-3.1,3.11-.38,0-.75-.07-1.1-.21l-.61.61,4.28,4.29c.35.34.55.81.56,1.3,0,.36-.16.7-.42.95l-.91.92c-.23.22-.53.35-.84.37h-.12c-.48,0-.94-.21-1.28-.56l-4.25-4.26-4.36,4.43c-.23.23-.54.37-.87.39h-.12c-.35,0-.69-.14-.94-.39-.25-.25-.4-.59-.39-.95,0-.35.14-.69.39-.94l5.1-5.16c-.04-.1-.07-.21-.07-.32,0-.19.07-.36.2-.5l.02-.02-3.67-3.66-.68.47c-.08.07-.19.11-.3.09-.1-.04-.18-.12-.22-.22l-1.23-2.01c-.09-.15-.07-.35.05-.47l.4-.4.4-.4c.13-.12.32-.15.47-.05Zm7.25,7.18c-.13,0-.25.03-.35.11l-.98.93c-.15.24-.17.53-.07.78.05.11.13.21.23.3.03.03.05.06.07.1l4.44,4.46c.19.2.45.32.73.33.15,0,.29-.05.4-.15l.91-.92c.1-.11.15-.24.15-.39,0-.29-.12-.57-.33-.78l-4.42-4.45s-.08-.04-.11-.07c-.04-.04-.07-.08-.12-.11-.16-.1-.36-.13-.56-.13Zm-2.16.95l-5.02,5.08c-.11.1-.17.24-.17.39,0,.15.06.3.17.4.08.09.19.14.3.16h.09c.15,0,.29-.05.39-.16l4.44-4.45c-.15-.23-.24-.49-.26-.76-.02-.18-.01-.36.03-.54l.03-.12Zm.8-1.42l-.26.2s-.02.02-.03.03c-.02.02-.04.04-.07.06l-.22.22s.02.01.03.02h.04s.19.19.19.19l.52-.51-.18-.18h-.01s-.01-.02-.01-.02Zm3.05-4.78c-.45.43-.72,1.02-.73,1.64,0,.31.08.61.21.88.06.15.03.31-.09.43l-1.55,1.55c.14-.04.29-.06.43-.06.33-.03.67.05.96.23l.87-.88c.12-.12.3-.15.45-.07.67.32,1.45.29,2.1-.06.65-.35,1.09-.99,1.19-1.73l-.97.87c-.1.09-.25.12-.38.08l-1.42-.47c-.13-.04-.23-.16-.26-.29l-.29-1.47c-.03-.13.01-.27.12-.36l1.04-.92c-.62-.02-1.22.2-1.68.63Zm-9.04-1.11l-.19.19s-.06.05-.1.07l-.14.16.84,1.4.53-.36.4-.6-1.35-.86Z"/>',
      }}
    />
  )
)

DiyProduct.displayName = 'DiyProduct'

export const tags = ['DiyProduct', '']
