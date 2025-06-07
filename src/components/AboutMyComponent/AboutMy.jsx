import { useState } from 'react'

import { AboutMyComponents } from './AboutMyData'
import TabButton from './TabButton'
import Section from '../Section'
import Tabs from './Tabs'
import './AboutMy.css'

export default function AboutMy() {
  const [selectedTopic, setSelectedTopic] = useState()

  function handleSelect(topic) {
    setSelectedTopic(topic)
  }

  let tabContent = (
    <div id="tab-content">
      <p>Escolha algum tópico sobre mim</p>
    </div>
  )

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{AboutMyComponents[selectedTopic].title}</h3>
        <p>{AboutMyComponents[selectedTopic].description}</p>
      </div>
    )
  }

  return (
    <Section title="Sobre mim" id="aboutMy">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'faculdade'}
              onClick={() => handleSelect('faculdade')}
            >
              Facudade
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'cursos'}
              onClick={() => handleSelect('cursos')}
            >
              Cursos
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'projetos'}
              onClick={() => handleSelect('projetos')}
            >
              Progetos
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'experiencias'}
              onClick={() => handleSelect('experiencias')}
            >
              Experiências
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  )
}
