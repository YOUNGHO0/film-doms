interface Props {
  width?: string
  height?: string
  fill?: string
}

const Thumb = ({ width = '22', height = '22', fill = '#FF5414' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.13884 1.18648C9.32756 0.768592 9.74357 0.5 10.2021 0.5C11.2601 0.5 12.2785 0.913453 13.0323 1.65523C13.7866 2.39763 14.2139 3.40855 14.2139 4.46665V7.03329H18.4093C18.8481 7.02943 19.283 7.11893 19.6846 7.29629C20.0884 7.47465 20.4495 7.73795 20.7421 8.06913C21.0348 8.40038 21.2519 8.79153 21.3771 9.21594C21.5023 9.6404 21.5324 10.087 21.4649 10.5244L20.1561 18.9242C20.1561 18.9246 20.1562 18.9239 20.1561 18.9242C20.0437 19.652 19.6684 20.3123 19.1048 20.7838C18.5431 21.2536 17.8315 21.5063 17.1005 21.4999H3.56343C2.75693 21.4999 1.97977 21.1848 1.40388 20.618C0.827365 20.0506 0.5 19.2771 0.5 18.4666V11.9333C0.5 11.1227 0.827365 10.3492 1.40388 9.78181C1.97977 9.21507 2.75693 8.89995 3.56343 8.89995H5.65533L9.13884 1.18648ZM5.24191 11.2333H3.56343C3.36383 11.2333 3.17609 11.3115 3.04055 11.4449C2.90564 11.5776 2.83333 11.7537 2.83333 11.9333V18.4666C2.83333 18.6461 2.90564 18.8222 3.04055 18.955C3.17609 19.0883 3.36383 19.1665 3.56343 19.1665H5.24191V11.2333ZM7.57524 19.1665H17.1193C17.3007 19.1686 17.474 19.1059 17.6076 18.9941C17.7409 18.8827 17.8251 18.7309 17.85 18.5689L19.1588 10.1688C19.1589 10.1685 19.1588 10.169 19.1588 10.1688C19.1737 10.0714 19.1672 9.9712 19.1391 9.87616C19.111 9.78084 19.0618 9.69128 18.9936 9.61413C18.9254 9.53693 18.8397 9.47393 18.7419 9.4307C18.6439 9.38744 18.5368 9.36534 18.4281 9.36655L18.4151 9.3667L13.0472 9.36662C12.4029 9.36662 11.8806 8.84429 11.8806 8.19996V4.46665C11.8806 4.03954 11.7084 3.62609 11.3956 3.31829C11.2492 3.17427 11.0777 3.059 10.8904 2.97704L7.57524 10.3178V19.1665Z"
        fill={fill}
      />
    </svg>
  )
}

export default Thumb