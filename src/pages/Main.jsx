import { Header } from '../components/Header/Header/'
import { Hero } from '../components/Hero/Hero'
import { Benefits } from '../components/Benefits/Benefits'
import '../styles/App.module.css'
import '../styles/global.css'

export function Main() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
    </>
  )
}