import './Header.css';

const headerDescriptions = [
  'mim!',
  'minha história!',
  'minhas habilidades!',
  'meus estudos!',
]

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
  const headerDescription = headerDescriptions[genRandomInt(3)]

  return (
    <header>
      <h1>Meu Portfolio</h1>
      <p>Um pouco sobre {headerDescription}</p>
    </header>
  )
}
