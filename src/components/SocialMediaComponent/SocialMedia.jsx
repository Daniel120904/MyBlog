import { Link } from 'react-router-dom'
import './SocialMedia.css'

export default function SocialMedia({ image, title, description, link }) {
  const content = (
    <>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  )

  return <li>{link ? <a href={link}>{content}</a> : <>{content}</>}</li>
}
