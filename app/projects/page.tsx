import Image from "next/image";
import "./page.css";
import { projectList } from "@/util/data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <>
      <div className="projects-container container-layout display-flex-center">
        <div className="projects-header-container">
          <h1 className="header">Projects</h1>
        </div>

        <div className="projects-grid-container">
          {projectList.map((content, index) => {
            return (
              <div className="projects-grid-box" key={index}>
                <Image
                  src={content.img}
                  alt=""
                  className="projects-image"
                ></Image>
                <h2 className="projects-title ">
                  <FontAwesomeIcon
                    icon={faMeteor}
                    style={{ marginRight: "5px" }}
                  />{" "}
                  {content.name}
                </h2>

                <ul className="projects-content-list">
                  {content.content.map((explanation, contentIndex) => {
                    return (
                      <li className="projects-content" key={contentIndex}>
                        {explanation}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
