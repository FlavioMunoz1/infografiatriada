import { useRef, useState } from 'react'
import { TRIAD_DATA } from './data/triadData'
import TriadDetailCard from './components/TriadDetailCard'
import RansomwareAlert from './components/RansomwareAlert'
import './App.css'

const PILLAR_ENTRIES = Object.entries(TRIAD_DATA)
const PILLAR_KEYS = PILLAR_ENTRIES.map(([key]) => key)

// Usa item.shortName si existe; si no, cae a la primera palabra de item.name.
const getShortName = (item) => item.shortName ?? item.name.split(' ')[0]

export default function App() {
  const [selectedKey, setSelectedKey] = useState(PILLAR_KEYS[0])
  const tabRefs = useRef({})
  const activePillar = TRIAD_DATA[selectedKey]

  // Navegación con flechas, Home y End (patrón WAI-ARIA para tabs).
  const handleKeyDown = (event) => {
    const index = PILLAR_KEYS.indexOf(selectedKey)
    let nextIndex = null

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % PILLAR_KEYS.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + PILLAR_KEYS.length) % PILLAR_KEYS.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = PILLAR_KEYS.length - 1

    if (nextIndex === null) return
    event.preventDefault()
    const nextKey = PILLAR_KEYS[nextIndex]
    setSelectedKey(nextKey)
    tabRefs.current[nextKey]?.focus()
  }

  return (
    <main className="app">
      <header className="app__header">
        <h1 className="app__title">La tríada CIA, explicada sencillo</h1>
        <p className="app__lead">
          Proteger los datos de una organización consiste en equilibrar tres propiedades:
          que no se filtren, que no se alteren y que estén disponibles cuando se necesiten.
        </p>
      </header>

      <div className="triad-tabs" role="tablist" aria-label="Pilares de la tríada CIA" onKeyDown={handleKeyDown}>
        {PILLAR_ENTRIES.map(([key, item]) => {
          const isSelected = selectedKey === key
          return (
            <button
              key={key}
              ref={(node) => {
                tabRefs.current[key] = node
              }}
              id={`tab-${key}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls="triad-panel"
              tabIndex={isSelected ? 0 : -1}
              className="triad-tab"
              style={{ '--pillar-color': item.color, '--pillar-bg': item.bgLight }}
              onClick={() => setSelectedKey(key)}
            >
              <span className="triad-tab__letter" aria-hidden="true">
                {key}
              </span>
              <span className="triad-tab__text">
                <strong className="triad-tab__name">{getShortName(item)}</strong>
                <span className="triad-tab__tagline">{item.tagline}</span>
              </span>
            </button>
          )
        })}
      </div>

      <section id="triad-panel" role="tabpanel" aria-labelledby={`tab-${selectedKey}`} tabIndex={0}>
        <TriadDetailCard pillar={activePillar} />
      </section>

      <RansomwareAlert />
    </main>
  )
}