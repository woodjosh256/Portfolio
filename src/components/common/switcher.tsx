import React, { ReactNode } from "react";
import { Pages } from "../../App";

interface SwitcherProps {
  about: () => void;
  projects: () => void;
  contact: () => void;
}

export function Switcher(props: SwitcherProps) {
  let [page, setPage] = React.useState<Pages>(Pages.ABOUT);

  function about() {
    setPage(Pages.ABOUT);
    props.about();
  }

  function projects() {
    setPage(Pages.EXPERIENCE);
    props.projects();
  }

  function contact() {
    setPage(Pages.CONTACT);
    props.contact();
  }

  return (
    <>
      <ul className="flex flex-row justify-between">
        <li
          className={`font-slab font-black text-4xl md:text-5xl list-none cursor-pointer hover:text-sea-green ${
            page == Pages.ABOUT ? "text-sea-green" : ""
          }`}
          onClick={about}
        >
          About
        </li>
        <li
          className={`font-slab font-black text-4xl md:text-5xl list-none cursor-pointer hover:text-selective-yellow ${
            page == Pages.EXPERIENCE ? "text-selective-yellow" : ""
          }`}
          onClick={projects}
        >
          Experience
        </li>
        <li
          className={`font-slab font-black text-4xl md:text-5xl list-none cursor-pointer hover:text-big-red ${(page ==
            Pages.CONTACT ? "text-big-red" : "")}`}
          onClick={contact}
        >
          Contact
        </li>
      </ul>
    </>
  );
}
