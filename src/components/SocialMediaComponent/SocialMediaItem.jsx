import SocialMedia from "./SocialMedia"
import { SocialMediaComponents } from "./SocialMediaData"


export default function socialMediaItem() {
  return (
    <section id="social-media">
      <h2>Minhas redes sociais e contatos</h2>
      <ul>
        {SocialMediaComponents.map((socialMediaItem) => (
          <SocialMedia key={socialMediaItem.title} {...socialMediaItem} />
        ))}
      </ul>
    </section>
  )
}
