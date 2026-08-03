import { FaArrowRight } from 'react-icons/fa6'

function LinkButton({ href, icon: Icon, title, description }) {
  return (
    <a
      className="link-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} 새 창에서 열기`}
    >
      <span className="link-button__icon" aria-hidden="true">
        <Icon />
      </span>
      <span className="link-button__content">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <FaArrowRight className="link-button__arrow" aria-hidden="true" />
    </a>
  )
}

export default LinkButton
