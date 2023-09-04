import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const DissatisfiedFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="DissatisfiedFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m19.89,6.8c-.8-1.38-1.83-2.52-3.19-3.41-1.35-.81-2.87-1.3-4.38-1.38-1.59-.08-3.11.33-4.46,1.06-1.51.73-2.71,1.79-3.5,3.09-.88,1.3-1.35,2.84-1.51,4.47-.08,1.63.16,3.17.8,4.63.56,1.3,1.43,2.44,2.55,3.33v1.06c0,.65.24,1.22.72,1.71.4.41,1.04.65,1.59.65h.88v-3.49c0-.57.4-.98.96-.98s.96.41.96.98v3.49h1.27v-3.49c0-.57.4-.98.96-.98s.96.41.96.98v3.49h.88c.64,0,1.19-.24,1.67-.73.4-.41.72-1.06.72-1.71v-1.06c.96-.81,1.83-1.87,2.39-3.01.64-1.3,1.04-2.76,1.04-4.23-.16-1.54-.56-3.09-1.27-4.47Zm-11.23,3.53c-.87,0-1.67.71-1.67,1.67,0,.87.71,1.67,1.67,1.67s1.67-.71,1.67-1.67-.71-1.67-1.67-1.67Zm5,1.67c0-.95.79-1.67,1.67-1.67.95,0,1.67.71,1.67,1.67s-.71,1.67-1.67,1.67-1.67-.79-1.67-1.67Z"/>',
      }}
    />
  )
)

DissatisfiedFill.displayName = 'DissatisfiedFill'

export const tags = ['DissatisfiedFill', '']
