import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6'

const socialLinks = [
  { label: 'TikTok', href: 'https://www.tiktok.com/', icon: FaTiktok },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: FaInstagram },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: FaYoutube },
]

function SocialIcons() {
  return (
    <nav className="social-icons" aria-label="소셜 미디어">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} 새 창에서 열기`}
        >
          <Icon aria-hidden="true" />
        </a>
      ))}
    </nav>
  )
}

export default SocialIcons
