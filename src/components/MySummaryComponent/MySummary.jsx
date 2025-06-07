import Section from '../Section/Section'
import './MySummary.css'
import { MySummaryComponent } from './MySummaryData'

export default function MySummary() {
  return (
    <Section title="Meu Resumo" id="mySummary">
      <p>{MySummaryComponent.description}</p>
    </Section>
  )
}
