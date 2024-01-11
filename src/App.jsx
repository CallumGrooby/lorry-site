import { Routes } from "./utils/Routes"
import '../src/assets/style.scss'

import { library } from "@fortawesome/fontawesome-svg-core"
import { faWarehouse, faTruck, faEarthEurope, faSnowflake } from "@fortawesome/free-solid-svg-icons"


library.add(faWarehouse, faTruck, faEarthEurope, faSnowflake)

function App() {

  return (
    <>
      <Routes></Routes>

    </>
  )
}

export default App
