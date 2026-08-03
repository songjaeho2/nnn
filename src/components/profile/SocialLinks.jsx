import { links } from '../../data/links'

function SocialLinks() {
  return (
    <nav className="social-row" aria-label="소셜 및 음원 서비스">
      {links.map(({ title, href, icon: Icon }) => (
        <a key={title} href={href} target="_blank" rel="noopener noreferrer" aria-label={title} title={title}>
          <Icon />
        </a>
      ))}
    </nav>
  )
}

export default SocialLinks
