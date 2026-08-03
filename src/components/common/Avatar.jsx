function Avatar({ imageUrl, label, fallback, color = '#200404' }) {
  return (
    <div className="avatar" style={{ background: color }}>
      {imageUrl ? <img src={imageUrl} alt={label} loading="lazy" /> : fallback}
    </div>
  )
}

export default Avatar
