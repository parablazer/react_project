{/*import { StrictMode } from 'react' */}
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { Footer } from './Footer.jsx'



const root = createRoot(document.querySelector("#root"))

function Page() {
  return(

    <>
        <Header />
        <MainContent />
        <Footer />
    </>
  )
}

root.render(

  
  <App />

)



  


