import { ReactNode, useRef, useState } from "react"
import { Switcher } from "./components/common/switcher";
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Contact } from "./components/contact";

export enum Pages {
  ABOUT,
  EXPERIENCE,
  CONTACT
}

function App() {
  
  let [page, setPage] = useState<Pages>(Pages.ABOUT);

  return (
    <>
      <div className='w-screen h-screen bg-off-white'>
        <div className='h-screen pl-4 pr-4 pt-4 md:pl-0 md:pr-0 md:w-2/3 lg:w-1/2 m-auto flex flex-col space-y-8'>
          <Switcher about={() => setPage(Pages.ABOUT)} projects={() => setPage(Pages.EXPERIENCE)} contact={() => setPage(Pages.CONTACT)}/>
          {page == Pages.ABOUT && <About/>}
          {page == Pages.EXPERIENCE && <Experience/>}
          {page == Pages.CONTACT && <Contact/>}
        </div>
      </div>
    </>
  )
}

export default App
