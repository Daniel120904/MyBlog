import Header from '../components/HeaderComponent/Header.jsx'
import MySummary from '../components/MySummaryComponent/MySummary.jsx'
import AboutMe from '../components/AboutMeComponent/AboutMe.jsx'
import SocialMedia from '../components/SocialMediaComponent/SocialMediaItem.jsx'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MySummary />
        <AboutMe />
        <SocialMedia />
      </main>
    </>
  )
}
