import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AlarmOffFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="AlarmOffFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m15.02,4.42c-.32-.15-.64-.28-.98-.39-.04-1.13-.98-2.03-2.14-2.03s-2.09.9-2.14,2.03c-1.07.34-2.05.92-2.85,1.72-1.32,1.31-2.06,3.08-2.06,4.93s-.2,3.1-.48,4.02c-.08.27-.04.54.08.77L15.35,4.67s-.2-.19-.33-.26Z"/><path fill-rule="evenodd" d="m18.1,7.34l3.6-3.54c.4-.39.4-1.03,0-1.43s-1.05-.39-1.45,0L2.3,20.04c-.4.39-.4,1.03,0,1.43.4.39,1.05.39,1.45,0l1.88-1.85h3.14c.18.69.59,1.29,1.15,1.72.57.43,1.26.66,1.98.66s1.41-.23,1.98-.66c.57-.43.97-1.03,1.15-1.72h0s2.98,0,2.98,0c.96,0,1.82-.43,2.19-1.3.33-.79.14-1.67-.26-2.39-.5-.9-.98-2.45-.98-5.25,0-1.17-.3-2.32-.86-3.33Z"/>',
      }}
    />
  )
)

AlarmOffFill.displayName = 'AlarmOffFill'

export const tags = ['AlarmOffFill', '']
