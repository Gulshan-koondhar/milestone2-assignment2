import React from "react";
import Skills from "./Skills";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="max-w-screen-xl m-auto p-4">
        <div className="lg:flex-row flex-col flex items-center justify-between mt-2 gap-20">
          <div className="flex-1 flex-col gap-[1.2rem]">
            <h2 className="text-[2.5rem] bg-gradient-to-tl from-[#a5d0d3] to-[#21a392] text-transparent bg-clip-text">
              About
            </h2>
            <p className="text-justify text-[1.2rem]">
              I’m Gulshan Mustafa, a passionate front-end web developer
              enthusiastic about creating user-friendly and visually appealing
              web experiences. I’ve embarked on a journey to transform my love
              for coding into impactful digital solutions. During my academic
              journey and beyond, I’ve honed my skills in HTML, CSS, and
              JavaScript, with a keen interest in frameworks like React.js. My
              projects, such as a responsive calculator, a dynamic weather app,
              and an intuitive to-do list application, reflect my commitment to
              learning and applying the latest web technologies. I thrive on
              challenges that push me to innovate and solve problems creatively.
              Each project I undertake not only strengthens my technical
              abilities but also reinforces my dedication to delivering clean,
              efficient code that enhances user experience. Currently, I’m eager
              to contribute my skills and learn from experienced professionals
              in the field. I’m excited about opportunities to collaborate on
              meaningful projects where I can contribute my enthusiasm for
              front-end development and continue to grow as a developer.
            </p>
            <div>
              <h2 className="text-[2.5rem] mt-8 bg-gradient-to-tl from-[#a5d0d3] to-[#21a392] text-transparent bg-clip-text">
                Skills
              </h2>
              <div className="flex items-center justify-between mt-[10px]">
                <Skills src="/html.png" />
                <Skills src="/css.png" />
                <Skills src="/js.png" />
                <Skills src="/Typescript.png" />
                <Skills src="/tailwind.png" />
                <Skills src="/React.png" />
                <Skills src="/nextjs.png" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/about.png"
              alt="Profile Picture"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
