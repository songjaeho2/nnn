import { socialLinks } from '../../data/socialLinks'

function SocialLinks() {
  return (
    <nav className="social-row" aria-label="소셜 및 음원 서비스">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          <Icon />
        </a>
      ))}
    </nav>
  )
}

export default SocialLinks
