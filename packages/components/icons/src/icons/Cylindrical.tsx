import { IconProps } from '../Types'

export const Cylindrical = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7498 5.26376L20.8343 8.68419C20.9193 8.74147 20.9769 8.82904 20.9944 8.92743C21.0119 9.02582 20.9879 9.12686 20.9276 9.2081L19.5521 11.1294C19.6079 11.1817 19.6462 11.2496 19.6609 11.3244C19.6799 11.4217 19.6573 11.5222 19.5982 11.6032C19.5264 11.7012 19.4117 11.762 19.2872 11.7678C19.2294 11.7676 19.1726 11.7554 19.1205 11.7324L18.9129 12.0202C19.0141 12.1196 19.0518 12.264 19.0075 12.3979C18.9558 12.5541 18.8045 12.6597 18.6341 12.6585C18.5807 12.6582 18.5282 12.647 18.48 12.6261L17.9422 13.377C17.9021 13.4372 17.8442 13.4836 17.777 13.5109L15.9441 18.938C15.8978 19.0822 15.766 19.1855 15.6098 19.1999H9.42904C9.25841 19.2009 9.10705 19.0947 9.05586 18.938L7.21851 13.4959C7.17026 13.4682 7.12848 13.4303 7.09667 13.3845L6.53995 12.6155L6.53364 12.6199C6.48174 12.6448 6.42437 12.6581 6.36586 12.6585C6.19554 12.6597 6.04421 12.5541 5.9925 12.3979C5.94609 12.2577 5.9896 12.106 6.09995 12.0086L5.89473 11.7247L5.88628 11.7293C5.83236 11.7543 5.77312 11.7675 5.71279 11.7678C5.58554 11.7643 5.46743 11.7033 5.39404 11.6032C5.33567 11.5213 5.3143 11.4201 5.33481 11.3227C5.35148 11.2436 5.39466 11.1726 5.4569 11.12L4.07236 9.2081C4.01211 9.12686 3.98807 9.02582 4.00559 8.92743C4.02311 8.82904 4.08074 8.74147 4.16565 8.68419L9.25023 5.26376C9.33573 5.21167 9.43766 5.19045 9.53789 5.20389C9.64109 5.22287 9.73287 5.27909 9.79445 5.36106L11.1786 7.269L11.1924 7.26149C11.2657 7.22641 11.3492 7.2143 11.431 7.22779C11.5332 7.24466 11.6242 7.30013 11.6837 7.38188C11.7942 7.54117 11.7641 7.75209 11.6197 7.87727L11.8223 8.1569L11.8365 8.14934C11.9396 8.10272 12.0602 8.10138 12.1657 8.14819C12.2924 8.20436 12.3784 8.32134 12.3912 8.45505C12.4025 8.57304 12.3554 8.68824 12.2659 8.76698L12.5 9.09048L12.7349 8.76627L12.7184 8.7525C12.5888 8.62526 12.5681 8.42319 12.6788 8.27254C12.793 8.11713 13.0074 8.07042 13.1779 8.15617L13.384 7.87174L13.3715 7.86206C13.2416 7.73553 13.2179 7.53489 13.3241 7.38188C13.3836 7.30013 13.4746 7.24466 13.5768 7.22779C13.6618 7.21375 13.7488 7.22743 13.8243 7.26586L15.2056 5.36106C15.2671 5.27909 15.3589 5.22287 15.4621 5.20389C15.5623 5.19045 15.6643 5.21167 15.7498 5.26376ZM12.4992 10.2053L11.8841 10.6187L7.98297 13.347L9.7478 18.4515H15.3299L17.0559 13.347L13.323 10.7594L12.4992 10.2053ZM12.5 12.2019C13.7881 12.2019 14.8324 13.2072 14.8324 14.4473C14.8324 15.6873 13.7881 16.6926 12.5 16.6926C11.2119 16.6926 10.1676 15.6873 10.1676 14.4473C10.1676 13.2072 11.2119 12.2019 12.5 12.2019ZM12.5 12.9504C11.6412 12.9504 10.9451 13.6206 10.9451 14.4473C10.9451 15.274 11.6412 15.9442 12.5 15.9442C13.3588 15.9442 14.0549 15.274 14.0549 14.4473C14.0549 13.6206 13.3588 12.9504 12.5 12.9504ZM13.3701 9.19806L13.0448 9.64827L13.095 9.6829L17.4913 12.6435L17.8202 12.1896L13.3701 9.19806ZM11.6291 9.19806L7.179 12.1896L7.50872 12.6435L11.9135 9.677L11.9545 9.64827L11.6291 9.19806ZM14.0153 8.30353L13.8152 8.58132L18.2653 11.5766L18.4662 11.2995L14.0153 8.30353ZM10.9862 8.30648L6.533 11.3003L6.73391 11.5766L11.1848 8.58132L10.9862 8.30648ZM9.39017 6.09454L4.92756 9.08835L6.09023 10.6902L10.5435 7.69269L9.39017 6.09454ZM15.6098 6.09454L14.4581 7.68974L18.909 10.6902L20.0724 9.08835L15.6098 6.09454Z"/>',
    }}
  />
)

export const tags = ['cylindrical', 'criteria', 'automobile']
