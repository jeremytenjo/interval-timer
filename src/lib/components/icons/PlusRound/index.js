import { createSvgIcon } from '@mui/material/utils'

export default createSvgIcon(
  <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z'
      fill='url(#paint0_linear)'
    />
    <path
      d='M10 6V14'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6 10H14'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <defs>
      <linearGradient
        id='paint0_linear'
        x1='1.73913'
        y1='18.2353'
        x2='21.4349'
        y2='16.0256'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#5D59FF' />
        <stop offset='1' stopColor='#9076FF' />
      </linearGradient>
    </defs>
  </svg>,
  'PlusRound',
)
