import '../styles/globals.css'
import { MediumProvider } from '../context/MediumContext'
import { useContext } from 'react'
import { MediumContext } from '../context/MediumContext'
function MyApp({ Component, pageProps })
{
   return (
   
  <MediumProvider>
   <Component {...pageProps} /> 
  </MediumProvider>
  )
}

export default MyApp
