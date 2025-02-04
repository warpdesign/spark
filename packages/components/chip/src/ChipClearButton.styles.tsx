import { tw } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

// eslint-disable-next-line tailwindcss/no-custom-classname
export const chipClearButtonWrapperStyles = cva(
  ['ml-md flex h-full items-center justify-center focus-visible:outline-none'],
  {
    variants: {
      disabled: {
        false: ['cursor-pointer'],
        true: ['cursor-not-allowed'],
      },
      isBordered: {
        false: ['pr-md'],
        true: ['pr-[7px]'],
      },
      design: {
        outlined: [],
        tinted: [],
        dashed: [],
      },
    },
    compoundVariants: [
      {
        design: 'outlined',
        disabled: false,
        class: tw(['hover:opacity-dim-1']),
      },
      {
        design: 'outlined',
        disabled: true,
        class: tw(['opacity-dim-3']),
      },
      {
        design: 'tinted',
        disabled: false,
        class: tw(['hover:opacity-dim-1']),
      },
      {
        design: 'tinted',
        disabled: true,
        class: tw(['opacity-dim-3']),
      },
      {
        design: 'dashed',
        disabled: false,
        class: tw(['hover:opacity-dim-1']),
      },
      {
        design: 'dashed',
        disabled: true,
        class: tw(['opacity-dim-3']),
      },
    ],
  }
)

export const chipClearButtonStyles = cva(
  ['rounded-full', 'focus-visible:outline-none focus-visible:u-ring-inset'],
  {
    variants: {
      disabled: {
        true: ['cursor-not-allowed'],
        false: ['cursor-pointer'],
      },
    },
  }
)

export type ChipClearButtonStylesProps = VariantProps<typeof chipClearButtonWrapperStyles>
