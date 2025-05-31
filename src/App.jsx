import { SocialMediaComponents } from './data.js'

const headerDescriptions = [
  'mim!',
  'minha história!',
  'minhas habilidades!',
  'meus estudos!',
]

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const headerDescription = headerDescriptions[genRandomInt(3)]

  return (
    <header>
      <h1>Meu Blog</h1>
      <p>Um pouco sobre {headerDescription}</p>
    </header>
  )
}

function SocialMedia({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="social-media">
          <h2>Minhas redes sociais e contatos</h2>
          <ul>
            <SocialMedia
              image={SocialMediaComponents[0].image}
              title={SocialMediaComponents[0].title}
              description={SocialMediaComponents[0].description}
            />
            <SocialMedia {...SocialMediaComponents[1]} />
            <SocialMedia {...SocialMediaComponents[2]} />
            <SocialMedia {...SocialMediaComponents[3]} />
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
