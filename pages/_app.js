import '@/styles/globals.css'

import { ERC20Provider } from "@/context/FunToken"
import NavBar from '@/components/NavBar/NavBar'

const  App=({ Component, pageProps })=> 
  <ERC20Provider>
     <NavBar />
  <Component {...pageProps} />
</ERC20Provider>


export default App

