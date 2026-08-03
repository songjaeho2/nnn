function ExternalLink({ href, className, ariaLabel, children }) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

export default ExternalLink
