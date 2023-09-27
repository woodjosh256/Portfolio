import { ReactNode, useRef, useState } from "react"
import { Switcher } from "./components/common/switcher"
import { About } from "./components/about";

enum Pages {
  ABOUT,
  PROJECTS,
  CONTACT
}

function App() {
  
  let [page, setPage] = useState<Pages>(Pages.ABOUT);

  let switcherMap = new Map(Object.entries({
    "About": doesNothing,
    "Projects": doesNothing,
    "Contact": doesNothing
  }))


  return (
    <>
      <div className='w-screen h-screen'>
        <div className='h-screen md:w-2/3 lg:w-1/2 xl:w-5/12 m-auto flex flex-row'>
          <Switcher titles={switcherMap}/>
          {page == Pages.ABOUT && <About/>}
          
        </div>
      </div>
    </>
  )
}

export default App
