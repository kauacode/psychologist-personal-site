import './App.module.css'
import './global.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}