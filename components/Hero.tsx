import React from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <div className="max-w-screen-xl m-auto p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full h-full mt-[60px] gap-20">
          <div className="flex-1 flex-col gap-[1.2rem]">
            <h2 className="text-xl">
              Hi, I&apos;m{" "}
              <span className="text-3xl bg-gradient-to-tl from-[#a5d0d3] to-[#21a392] text-transparent bg-clip-text">
                {" "}
                Gulshan Mustafa
              </span>
            </h2>
            <p className="text-[1.2rem] mt-[10px]">
              A passionate front-end web developer enthusiastic about creating
              user-friendly and visually appealing web experiences.
            </p>

            <div>
              <ul className="flex items-center gap-8 mt-[10px]">
                <li>
                  <Link href="">
                    <Facebook className="text-white hover:text-black" />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <Linkedin className="text-white hover:text-black" />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <Github className="text-white hover:text-black" />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <Instagram className="text-white hover:text-black" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-8">
              <button className="p-[10px] outline-none ring-1 ring-gray-200 hover:bg-gray-600 hover:text-black hover:ring-black mt-[15px] mr-[10px] rounded-lg text-lg">
                <Link href="/My Resume.pdf">Download CV</Link>
              </button>
              <button className="p-[10px] outline-none ring-1 ring-gray-200 hover:bg-gray-600 hover:text-black hover:ring-black  mt-[15px] mr-[10px] rounded-lg text-lg">
                <Link href="/about">About Me</Link>
              </button>
            </div>
          </div>
          <div className="flex-1 items-center justify-center">
            <Image
              src="/hero.png"
              alt="Profile Picture"
              className="rounded-full"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
