import Image from "next/image";
import "./page.css";
import { techStackData } from "@/util/data/data";

export default function Home() {
  return (
    <>
      <div className="home-container container-layout">
        <div className="home-flex display-flex">
          <div className="home-flexbox display-flex-center">
            <Image
              src="/JunLee.webp"
              width={200}
              height={200}
              className="home-profile-picture"
              alt="Picture of Jeong Hyun Lee"
            />
          </div>
          <div className="home-flexbox">
            <h1 className="home-header header">Jeong Hyun Lee</h1>
            <h4 className="home-subheader"> Future Full-Stack Developer</h4>
            <p className="home-content">
              I'm a dedicated computer science student who's on a path to
              becoming a full-stack developer. With a strong foundation in
              programming and a passion for creating intuitive user interfaces,
              I proficiently work with HTML/CSS, JavaScript/TypeScript, React,
              and Next.js – the modern trending languages and frameworks of web
              development. Moreover, I am adept at utilizing Express with
              Node.js for backend development, enabling me to create full-stack
              applications. I'm eager to combine my technical skills with
              creativity to craft engaging web experiences. I'm excited about
              the opportunity to learn and grow in the world of frontend
              development.
            </p>
          </div>
        </div>

        <div className="home-tech-stack">
          <h1 className="home-header header">Tech Stack</h1>
          <h4 className="home-subheader"> Click each icon to see details</h4>
          <div className="home-tech-stack-flex-container display-flex">
            {techStackData.map((content, index) => {
              return (
                <div className="home-tech-stack-flexbox" key={index}>
                  <Image
                    src={content.img}
                    width={80}
                    height={80}
                    className="home-tech-stack-icon"
                    alt="icon for the tech stack"
                  />
                  <h5>{content.name}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
