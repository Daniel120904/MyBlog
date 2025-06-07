import Section from '../Section/Section'
import SocialMedia from './SocialMedia'
import { SocialMediaComponents } from './SocialMediaData'

export default function socialMediaItem() {
  return (
    <Section title="Minhas redes sociais e contatos" id="socialMedia">
      <ul>
        {SocialMediaComponents.map((socialMediaItem) => (
          <SocialMedia key={socialMediaItem.title} {...socialMediaItem} />
        ))}
      </ul>
    </Section>
  )
}
