interface Props {
  width?: string
  height?: string
  fill?: string
}

const Person = ({ width = '32', height = '32', fill = 'black' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_594_2233"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect x="0.460938" width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_594_2233)">
        <path
          d="M16.1276 15.6667C14.6609 15.6667 13.4054 15.1444 12.3609 14.1C11.3165 13.0556 10.7943 11.8 10.7943 10.3333C10.7943 8.86667 11.3165 7.61111 12.3609 6.56667C13.4054 5.52222 14.6609 5 16.1276 5C17.5943 5 18.8498 5.52222 19.8943 6.56667C20.9387 7.61111 21.4609 8.86667 21.4609 10.3333C21.4609 11.8 20.9387 13.0556 19.8943 14.1C18.8498 15.1444 17.5943 15.6667 16.1276 15.6667ZM5.46094 26.3333V22.6C5.46094 21.8444 5.65538 21.15 6.04427 20.5167C6.43316 19.8833 6.94983 19.4 7.59427 19.0667C8.97205 18.3778 10.372 17.8611 11.7943 17.5167C13.2165 17.1722 14.6609 17 16.1276 17C17.5943 17 19.0387 17.1722 20.4609 17.5167C21.8832 17.8611 23.2832 18.3778 24.6609 19.0667C25.3054 19.4 25.822 19.8833 26.2109 20.5167C26.5998 21.15 26.7943 21.8444 26.7943 22.6V26.3333H5.46094ZM8.1276 23.6667H24.1276V22.6C24.1276 22.3556 24.0665 22.1333 23.9443 21.9333C23.822 21.7333 23.6609 21.5778 23.4609 21.4667C22.2609 20.8667 21.0498 20.4167 19.8276 20.1167C18.6054 19.8167 17.372 19.6667 16.1276 19.6667C14.8832 19.6667 13.6498 19.8167 12.4276 20.1167C11.2054 20.4167 9.99427 20.8667 8.79427 21.4667C8.59427 21.5778 8.43316 21.7333 8.31094 21.9333C8.18872 22.1333 8.1276 22.3556 8.1276 22.6V23.6667ZM16.1276 13C16.8609 13 17.4887 12.7389 18.0109 12.2167C18.5332 11.6944 18.7943 11.0667 18.7943 10.3333C18.7943 9.6 18.5332 8.97222 18.0109 8.45C17.4887 7.92778 16.8609 7.66667 16.1276 7.66667C15.3943 7.66667 14.7665 7.92778 14.2443 8.45C13.722 8.97222 13.4609 9.6 13.4609 10.3333C13.4609 11.0667 13.722 11.6944 14.2443 12.2167C14.7665 12.7389 15.3943 13 16.1276 13Z"
          fill={fill}
        />
      </g>
    </svg>
  )
}

export default Person