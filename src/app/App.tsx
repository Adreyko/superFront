import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { Suspense } from 'react'
import { useTheme } from './provides/ThemeProvider'
import { About, Main } from 'pages'
import { clsx } from 'shared/lib/helpers/clsx/clsx'




const App = () => {
  const {theme,toggleTheme} = useTheme()


  return (
    <div className={clsx('app',{}, [theme] )}>

  <p onClick={toggleTheme}>toggle theme</p>
    <Suspense fallback={<div>loading..</div>}>
    <Routes>
        <Route path="/about" Component={About} />
        <Route path="/main" Component={Main} />  
      </Routes>
      </Suspense>
    </div>
 
  )
}

export default App