import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const License = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="License"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m18.48,7c1.12,0,2.02.86,2.02,1.92v6.15c0,1.06-.91,1.92-2.02,1.92H5.52c-1.12,0-2.02-.86-2.02-1.92v-6.15c0-1.06.91-1.92,2.02-1.92h12.95Zm.03.77H5.49c-.67,0-1.22.52-1.22,1.15v6.15c0,.64.55,1.15,1.22,1.15h13.01c.67,0,1.22-.52,1.22-1.15v-6.15c0-.64-.55-1.15-1.22-1.15Zm-9.28,2.31c.26,0,.5.16.6.4l.22.82.51-.11c.21-.04.41.09.46.3.02.1,0,.2-.06.29-.06.09-.14.14-.25.16l-.09.02c.11.16.18.34.18.54v1.08c0,.2-.15.36-.35.38h-.12s0,.35,0,.35c0,.21-.17.38-.39.38-.21,0-.39-.17-.39-.38v-.35h-2.43v.35c0,.21-.17.38-.39.38s-.39-.17-.39-.38v-.35s-.06,0-.06,0c-.18-.03-.32-.19-.32-.38v-1.08c0-.21.08-.4.19-.55h-.03c-.11-.03-.2-.09-.26-.18-.06-.09-.08-.2-.06-.3.03-.1.09-.18.18-.24.09-.05.19-.07.29-.04l.4.1.21-.77c.09-.27.35-.45.64-.45h1.68Zm7.8,3.08c.21,0,.39.17.39.38,0,.19-.14.35-.32.38h-.07s-4.64,0-4.64,0c-.21,0-.39-.17-.39-.38,0-.19.14-.35.32-.38h.07s4.64,0,4.64,0Zm-7.2-.82s-.07,0-.11,0h-2.67s-.06,0-.09,0c0,0-.2,0-.2.16l.04.67h.03s.07.02.1.03h2.87c.05-.02.11-.04.17-.04.03,0,.06,0,.09,0v-.66c0-.14-.18-.16-.23-.17h.02Zm8.75-.72c.21,0,.39.17.39.38,0,.19-.14.35-.32.38h-.07s-6.18,0-6.18,0c-.21,0-.39-.17-.39-.38,0-.19.14-.35.32-.38h.07s6.18,0,6.18,0Zm-9.44-.77h-1.51l-.15.72h1.86l-.19-.72Zm9.44-.77c.21,0,.39.17.39.38,0,.19-.14.35-.32.38h-.07s-6.18,0-6.18,0c-.21,0-.39-.17-.39-.38,0-.19.14-.35.32-.38h.07s6.18,0,6.18,0Z"/>',
      }}
    />
  )
)

License.displayName = 'License'

export const tags = ['License', '']
