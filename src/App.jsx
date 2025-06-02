import { useState } from 'react'

import { SocialMediaComponents } from './data.js'
import { AboutMyComponents } from './data.js'
import Header from './components/HeaderComponent/Header.jsx'
import SocialMedia from './components/SocialMediaComponent/SocialMedia.jsx'
import TabButton from './components/AboutMyComponent/TabButton.jsx'

function App() {
  const [selectedTopic, setSelectedTopic] = useState()

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
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
    <>
      <Header />
      <main>
        <section id="social-media">
          <h2>Minhas redes sociais e contatos</h2>
          <ul>
            {SocialMediaComponents.map((socialMediaItem) => (
              <SocialMedia key={socialMediaItem.title} {...socialMediaItem} />
            ))}
          </ul>
        </section>
        <section id="aboutMy">
          <h2>Sobre mim</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'faculdade'}
              onSelect={() => handleSelect('faculdade')}
            >
              Facudade
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'cursos'}
              onSelect={() => handleSelect('cursos')}
            >
              Cursos
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'projetos'}
              onSelect={() => handleSelect('projetos')}
            >
              Progetos
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'experiencias'}
              onSelect={() => handleSelect('experiencias')}
            >
              Experiências
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  )
}

export default App
