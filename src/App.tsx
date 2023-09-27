import { ReactNode, useRef, useState } from "react"
import { Switcher } from "./components/common/switcher"
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";

export enum Pages {
  ABOUT,
  PROJECTS,
  CONTACT
}

function App() {
  
  let [page, setPage] = useState<Pages>(Pages.ABOUT);

  return (
    <>
      <div className='w-screen h-screen bg-off-white'>
        <div className='h-screen pl-4 pr-4 mt-2 md:p-0 md:w-2/3 lg:w-1/2 xl:w-5/12 m-auto flex flex-col space-y-4'>
          <Switcher about={() => setPage(Pages.ABOUT)} projects={() => setPage(Pages.PROJECTS)} contact={() => setPage(Pages.CONTACT)}/>
          {page == Pages.ABOUT && <About/>}
          {page == Pages.PROJECTS && <Projects/>}
          {page == Pages.CONTACT && <Contact/>}
        </div>
      </div>
    </>
  )
}

export default App
