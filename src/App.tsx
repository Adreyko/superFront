import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import './styles/index.scss'
import Test from './components/Test'

import { Suspense } from 'react'
import { About } from './pages/About/AboutAsync'
import { Main } from './pages/Main/MainAsync'
import { useTheme } from './theme/useTheme'
import { clsx } from './helpers/clsx/clsx'

const App = () => {
  const {theme,toggleTheme} = useTheme()


  return (
    <div className={clsx('app',{}, [theme] )}>

  <p onClick={toggleTheme}>toggle theme</p>
    <Suspense fallback={<div>loading..</div>}>
    <Routes>
        <Route path="/" Component={Test} /> 
        <Route path="/counter" Component={Counter} /> 
        <Route path="/about" Component={About} />
        <Route path="/main" Component={Main} />  
      </Routes>
      </Suspense>
    </div>
 
  )
}

export default App