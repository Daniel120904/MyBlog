import Section from '../Section/Section'
import './Header.css'
import { headerDescriptions } from './HeaderData'

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
  const headerDescription = headerDescriptions[genRandomInt(3)]

  return (
    <Section title="Meu Portfólio" id="header">
      <p>Um pouco sobre {headerDescription}</p>
    </Section>
  )
}
