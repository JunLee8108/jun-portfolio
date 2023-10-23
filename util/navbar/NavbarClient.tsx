"use client";

import "./page.css";
import { navbarMenu } from "../data/data";

import { useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function NavbarClient() {
  const [isClick, setClick] = useState(false);
  return (
    <>
      <div className="navbar-bg">
        <div className="navbar-container">
          <FontAwesomeIcon
            icon={faBars}
            className="navbar-menu-icon"
            size="lg"
          />

          <div className="navbar-sidebar-container display-flex-center">
            <div className="navbar-sidebar-top">
              <h4 className="navbar-sidebar-name mg-left-right-auto">
                Jeong Hyun Lee
              </h4>
              <p className="navbar-sidebar-intro mg-left-right-auto">
                ‣ Hello, my name is Jeong Hyun Lee. I'm a computer science
                student who seek a Full-Stack developer.
              </p>
              <Link href="https://github.com/JunLee8108" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="navbar-sidebar-brand-icon"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jeong-hyun-lee-a5362319a/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="navbar-sidebar-brand-icon"
                />
              </Link>
            </div>

            <ul className="navbar-sidebar-content ">
              {navbarMenu.map((content, index) => {
                const link = content.name
                  .replaceAll(" ", "-")
                  .toLocaleLowerCase();

                return (
                  <li className="navbar-sidebar-list" key={index}>
                    {link === "about-me" ? (
                      <Link href="/" className="navbar-link">
                        {content.icon} {content.name}
                      </Link>
                    ) : (
                      <Link href={link} className="navbar-link">
                        {content.icon} {content.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
