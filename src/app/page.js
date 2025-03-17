"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import MusicPlayer from "./components/MusicPlayer";

const projects = [
  {
    title: "8-bit RISC Processor on FPGA",
    role: "",
    description: "Developed a digital calculator using an 8-bit RISC architecture in Xilinx Vivado for the Nexys A7-100T FPGA. Designed a UI with slide switches for input, push buttons for operations, and 7-segment displays for results. Built core modules—including an ALU with an 8-bit Ripple Carry Adder/Subtractor, an Array Multiplier/Divider, and a 16-bit register—and implemented a time-multiplexing scheme with self-checking test benches.",
    image: "/risc-processor.jpg",
    tags: ["FPGA", "Verilog", "Digital Design", "Hardware Architecture"],
    github: "https://github.com/JustDeg234/CECS-361-8BitRiscProcessor"
  },
  {
    title: "Space Invaders",
    role: "",
    description: "Developed an interactive LCD game on the TM4C123 microcontroller using the SSI protocol. Integrated potentiometer controls, sound effects via an R2R DAC with an amplifier, and precise animations using a SysTick Timer with interrupts. Documented the project with schematics, a software flowchart, and a breadboarded prototype featuring a Nokia5110 LCD, ADC, and internal DAC modules.",
    image: "/space-invaders.jpg",
    tags: ["Embedded C", "Microcontroller", "Hardware Integration", "Game Development"],
    github: "https://github.com/JustDeg234/space-invaders"
  },
  {
    title: "Augmented/Virtual Reality Kitchen Simulator",
    role: "Project Lead",
    description: "Developed an AR cooking experience that overlays digital ingredients and tools onto a real kitchen via an AR headset for safe, interactive lessons. Led a team of five to implement fluid dynamics, kinematics, and texture meshes, and created C# scripts in OpenXR Unity for a step-by-step recipe guide with tutorial videos.",
    image: "/ar-kitchen.gif",
    tags: ["Unity", "C#", "OpenXR", "AR Development"],
    github: "https://github.com/baconorigins/VROCnation"
  },
  {
    title: "OOP Banking System",
    role: "",
    description: "Developed an interactive banking console website supporting checking, savings, and credit accounts. Leveraged C/C++ skills with dynamic memory allocation, pointers, UML diagrams, vectors, and queues.",
    image: "/banking.jpg",
    tags: ["C++", "OOP", "Data Structures"],
    github: "https://github.com/JustDeg234/CECS275-BankingSystemProject"
  },
  {
    title: "XR Drone",
    role: "Project Lead",
    description: "Led a team of six to construct a 6-inch drone through CAD modeling and 3D-printing the chassis, soldering FC/ESC and BLDC motors via workshops, all with the goal of developing a 3-DOF telexistence drone controlled by a head mounted display via a Quest 3 application.",
    image: "/xr-drone.jpg",
    tags: ["CAD", "Soldering", "Unity", "BetaFlight"],
    github: "https://github.com/JustDeg234/xr-drone"
  }
];

export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);
  const experienceRefs = useRef([]);

  useEffect(() => {
    // Only run on mobile
    if (window.innerWidth >= 768) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add class to make content visible on mobile
            entry.target.classList.add('mobile-expanded');
          } else {
            // Remove class when out of view
            entry.target.classList.remove('mobile-expanded');
          }
        });
      },
      {
        root: null,
        rootMargin: '-10% 0px -30% 0px', // Larger detection window, triggers when element is in middle 60% of viewport
        threshold: 0.2 // Lower threshold for earlier detection
      }
    );

    // Observe all experience content boxes
    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-[#0a1625] text-white font-['Inter'] pt-4">
      <MusicPlayer />
      {/* Hero Section with Navigation */}
      <div className="container mx-auto px-4 max-w-[60%] md:max-w-[60%] w-full">
        <div className="bg-[#0f1e2e] rounded-lg overflow-hidden shadow-2xl border border-[#1e2937]">
          {/* Content Container */}
          <div className="flex flex-col-reverse md:flex-row md:h-[400px]">
            {/* Left Side - Information */}
            <div className="w-full md:w-2/3 p-4 md:p-6 flex flex-col justify-center">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Diego Davalos
                </h1>
                <h2 className="text-xl md:text-3xl font-light text-blue-300">Computer Engineer | Embedded & FPGA Systems | VR/AR Developer</h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Currently pursuing a Bachelor's degree in Computer Engineering & Physics at <span className="text-xl md:text-2xl text-emerald-300">California State University, Long Beach</span>.
                </p>
                <p className="text-lg md:text-xl text-gray-300">
                  Projected Graduation: <span className="text-xl md:text-2xl text-amber-300">May 2026</span>
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full md:w-1/3 p-4 md:p-6 flex items-center justify-center bg-[#0d1a29]">
              <div className="relative">
        <Image
                  className="rounded-full border-2 border-[#4a7397]/30"
                  src="/profile.jpg"
                  alt="Diego Davalos"
                  width={300}
                  height={300}
          priority
        />
                <div className="absolute -inset-6 bg-[#4a7397]/10 rounded-full blur-xl -z-10"></div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="border-t border-[#1e2937]">
            <div className="container mx-auto">
              <ul className="flex flex-wrap justify-center gap-4 md:gap-10 py-4 text-base md:text-lg">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-[#4a7397] transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-[#4a7397] transition-colors duration-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-300 hover:text-[#4a7397] transition-colors duration-300">
                    Experience
                  </a>
          </li>
                <li>
                  <a href="#leadership" className="text-gray-300 hover:text-[#4a7397] transition-colors duration-300">
                    Leadership
                  </a>
          </li>
                <li>
          <a
                    href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
                    className="bg-[#4a7397] text-white px-4 md:px-6 py-2 rounded-lg hover:bg-[#5a83a7] transition-all duration-300 shadow-lg hover:shadow-xl border border-[#1e2937]"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Contact Images Section */}
      <div className="container mx-auto px-4 max-w-[60%] md:max-w-[60%] w-full py-4 md:py-8">
        <div className="flex justify-center items-center space-x-6 md:space-x-12">
          <a href="mailto:diegodavalos234@gmail.com" className="transition-transform duration-300 hover:scale-110">
            <div className="relative w-9 h-9 md:w-12 md:h-12">
              <Image
                src="/gmail.png"
                alt="Gmail"
                fill
                className="object-contain"
              />
            </div>
          </a>
          <a href="https://github.com/JustDeg234" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
            <div className="relative w-9 h-9 md:w-12 md:h-12">
              <Image
                src="/github.png"
                alt="GitHub"
                fill
                className="object-contain"
              />
            </div>
          </a>
          <a href="https://linkedin.com/in/diegodavalos" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
            <div className="relative w-9 h-9 md:w-12 md:h-12">
            <Image
                src="/linkedin.png"
                alt="LinkedIn"
                fill
                className="object-contain"
              />
            </div>
          </a>
          <a href="https://www.xrengineering.club/" className="transition-transform duration-300 hover:scale-110">
            <div className="relative w-9 h-9 md:w-12 md:h-12">
              <Image
                src="/empty.png"
                alt="Empty"
                fill
                className="object-contain"
              />
            </div>
          </a>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 md:py-12 w-full md:max-w-[60%]">
        {/* About Section */}
        <section id="about" className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#4a7397]" data-aos="fade-right">About Me</h2>
          <div className="bg-[#0f1e2e] p-6 md:p-8 rounded-lg border border-[#1e2937]" data-aos="fade-right" data-aos-delay="100">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Facilitating VR/AR growth at CSULB, creating data acquisition solutions for rocketry avionics, and a passion for SoC & Embedded development.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12 md:mb-20 relative min-h-[400px] md:min-h-[600px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-[#4a7397] text-center" data-aos="fade-left">Featured Projects</h2>
          
          <div className="relative w-full h-[700px] md:h-[800px] overflow-hidden" data-aos="fade-left" data-aos-delay="100">
            <div className="absolute w-full h-full flex items-center justify-center">
              <button 
                onClick={prevProject}
                className="absolute left-2 md:left-4 z-30 bg-[#0f1e2e]/80 hover:bg-[#162c44] text-[#4a7397] rounded-full p-3 md:p-4 transition-all touch-manipulation"
                aria-label="Previous project"
              >
                <svg className="w-6 h-6 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {projects.map((project, index) => {
                const position = index - currentProject;
                return (
                  <div
                    key={project.title}
                    className={`
                      absolute w-[85%] md:w-[504px] h-[650px] md:h-[700px] transition-all duration-500 ease-in-out
                      ${position === 0 ? 'z-20 scale-100' : 
                        position === 1 ? 'z-10 scale-75 translate-x-[100%] md:translate-x-[60%] opacity-50' :
                        position === -1 ? 'z-10 scale-75 -translate-x-[100%] md:-translate-x-[60%] opacity-50' :
                        'scale-50 opacity-0'
                      }
                    `}
                  >
                    <div className="w-full h-full bg-[#0f1e2e] rounded-lg border border-[#1e2937] p-4 md:p-6 group flex flex-col">
                      <div className="relative w-full h-[35%] md:h-[40%] rounded-lg overflow-hidden mb-4">
          <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
                          <a
                            href={project.github}
          target="_blank"
          rel="noopener noreferrer"
                            className="bg-[#4a7397] text-white px-4 md:px-6 py-2 rounded-full hover:bg-[#5d8bb3] transition-colors text-sm md:text-base"
                          >
                            View on GitHub
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col flex-grow justify-between">
                        <div className="space-y-3 md:space-y-4">
                          <h3 className="text-lg md:text-2xl font-bold text-[#4a7397]">{project.title}</h3>
                          {project.role && (
                            <p className="text-base md:text-lg text-[#4a7397]">{project.role}</p>
                          )}
                          <p className="text-sm md:text-base text-gray-300">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 pb-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-[#1e2937] text-[#4a7397] px-2 md:px-3 py-1 rounded-full text-xs md:text-sm whitespace-nowrap"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <button 
                onClick={nextProject}
                className="absolute right-2 md:right-4 z-30 bg-[#0f1e2e]/80 hover:bg-[#162c44] text-[#4a7397] rounded-full p-3 md:p-4 transition-all touch-manipulation"
                aria-label="Next project"
              >
                <svg className="w-6 h-6 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-12 md:mb-20 -mt-4 md:-mt-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-[#4a7397] text-center" data-aos="fade-right">Work Experience</h2>
          
          {/* Timeline Container */}
          <div className="relative max-w-full md:max-w-5xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#4a7397]/30 transform md:-translate-x-1/2"></div>

            <div className="space-y-8 md:space-y-16">
              {/* Customer Engineer Intern */}
              <div className="relative group" data-aos="fade-up">
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="w-4 h-4 rounded-full bg-[#4a7397]"></div>
                </div>

                {/* Cummins Photo - Hidden on mobile, visible on desktop */}
                <div className="hidden md:block absolute left-[calc(50%-400px)] top-1/2 transform -translate-y-1/2">
                  <div className="relative w-64 h-64 rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-150">
          <Image
                      src="/cummins.jpg"
                      alt="Cummins"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="pl-12 md:pl-0 w-full md:w-[45%] md:ml-[52%] relative group">
                  <div className="md:absolute md:-left-12 md:top-1/2 md:transform md:-translate-y-1/2 md:w-12 md:h-[2px] md:bg-[#4a7397]/30 hidden md:block"></div>
                  <div className="bg-[#0f1e2e] p-4 md:p-6 rounded-lg border border-[#1e2937] transition-all duration-300 hover:shadow-xl group">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-[#4a7397]">Customer Engineer Intern</h3>
                      <span className="text-amber-300 text-sm md:text-base">Summer 2024</span>
                    </div>
                    <p className="text-lg md:text-xl text-[#4a7397] mb-4">Cummins, Integrated Gas Business & Power Generation</p>
                    <div className="max-h-0 group-hover:max-h-[500px] group-focus-within:max-h-[500px] overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 [&.mobile-expanded]:max-h-[500px] [&.mobile-expanded]:opacity-100"
                         ref={el => experienceRefs.current[0] = el}>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 md:space-y-3 pt-4">
                        <li className="text-base md:text-lg leading-relaxed">Designed and realized customer-specific Generator Set Enclosures in AutoCAD Electrical by creating 2D and 3D drawings to fit Power Generation needs.</li>
                        <li className="text-base md:text-lg leading-relaxed">Trained in the Power Generation Market including: Genset installation and applications, transfer switches, switchgears, sales process, diesel & natural gas engines, and fuel cell & hydrogen renewable power generation technologies.</li>
                        <li className="text-base md:text-lg leading-relaxed">Prepared in assessing a wide range of customer power needs from emergency back-up power to Data Centers, whilst conforming to ISO ratings & contracts.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Building Manager */}
              <div className="relative" data-aos="fade-up">
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="w-4 h-4 rounded-full bg-[#4a7397]"></div>
                </div>

                {/* Content Container */}
                <div className="pl-12 md:pl-0 w-full md:w-[45%] md:mr-[52%] relative group">
                  <div className="md:absolute md:-right-12 md:top-1/2 md:transform md:-translate-y-1/2 md:w-12 md:h-[2px] md:bg-[#4a7397]/30 hidden md:block"></div>
                  <div className="bg-[#0f1e2e] p-4 md:p-6 rounded-lg border border-[#1e2937] transition-all duration-300 hover:shadow-xl group">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-[#4a7397]">Building Manager</h3>
                      <span className="text-amber-300 text-sm md:text-base">March - September 2023</span>
                    </div>
                    <p className="text-lg md:text-xl text-[#4a7397] mb-4">CSULB University Student Union</p>
                    <div className="max-h-0 group-hover:max-h-[500px] group-focus-within:max-h-[500px] overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 [&.mobile-expanded]:max-h-[500px] [&.mobile-expanded]:opacity-100"
                         ref={el => experienceRefs.current[1] = el}>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 md:space-y-3 pt-4">
                        <li className="text-base md:text-lg leading-relaxed">Managed CSULB's main campus building, dedicated to providing students with a secure recreational space to relax, study, eat, and work.</li>
                        <li className="text-base md:text-lg leading-relaxed">Trained to set up AV equipment and to use the mixer to manage audio levels for constant live events held in the building and communicated with other building managers via radio to solve customer requests throughout the different club hosted dinners, networking, and outreach events.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* IT & Customer Service Intern */}
              <div className="relative" data-aos="fade-up">
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="w-4 h-4 rounded-full bg-[#4a7397]"></div>
                </div>

                {/* Content Container */}
                <div className="pl-12 md:pl-0 w-full md:w-[45%] md:ml-[52%] relative group">
                  <div className="md:absolute md:-left-12 md:top-1/2 md:transform md:-translate-y-1/2 md:w-12 md:h-[2px] md:bg-[#4a7397]/30 hidden md:block"></div>
                  <div className="bg-[#0f1e2e] p-4 md:p-6 rounded-lg border border-[#1e2937] transition-all duration-300 hover:shadow-xl group">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-[#4a7397]">Information Technology & Customer Service Intern</h3>
                      <span className="text-amber-300 text-sm md:text-base">Summer 2022</span>
                    </div>
                    <p className="text-lg md:text-xl text-[#4a7397] mb-4">Marvin Engineering Company</p>
                    <div className="max-h-0 group-hover:max-h-[500px] group-focus-within:max-h-[500px] overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 [&.mobile-expanded]:max-h-[500px] [&.mobile-expanded]:opacity-100"
                         ref={el => experienceRefs.current[2] = el}>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 md:space-y-3 pt-4">
                        <li className="text-base md:text-lg leading-relaxed">Delivered IT support at a private aerospace firm in Inglewood, California—specializing in manufacturing carriages, release solutions, and auxiliary equipment for fighter jets—by resolving hundreds of employee support tickets, employee inquiries on network connectivity, and new hire hardware setups.</li>
                        <li className="text-base md:text-lg leading-relaxed">Set-up a new MFA security measure using YubiKey, protecting sensitive data for 500+ employees, working alongside the cybersecurity team.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#4a7397]" data-aos="fade-left">Leadership & Extracurricular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Activity Card Template */}
            <div className="bg-[#0f1e2e] p-6 md:p-8 rounded-lg border border-[#1e2937]" data-aos="fade-left" data-aos-delay="100">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Beach Launch Team</h3>
              <p className="text-lg md:text-xl text-[#4a7397] mb-2 md:mb-3">Avionics Lead</p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">Collaborated with CSULB's liquid rocketry student organization—specializing in the design, fabrication, and testing of liquid fuel rockets—to enhance the
              legacy relay control and pressure transducer system by engineering an alternative solution that leverages the ESP-32's Wi-Fi module for RT data integration.</p>
              <ul className="list-disc list-inside text-base md:text-lg text-gray-300 leading-relaxed">
                <li>Engineered and executed comprehensive data acquisition during the successful Theseus rocket static fire, capturing pressure readings from transducers, thrust force
                via load cells, and temperature metrics using a LabJack DAQ and NI-DAQ.</li>
              </ul>
            </div>
            {/* Add more activity cards here */}
            <div className="bg-[#0f1e2e] p-6 md:p-8 rounded-lg border border-[#1e2937]" data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">XR Engineering Club</h3>
              <p className="text-lg md:text-xl text-[#4a7397] mb-2 md:mb-3">Founder/President</p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">Founded CSULB's first student-led academic COE club for developing VR/AR software and hardware in robotics, supported by Professor Emel Demircan.</p>
              <ul className="list-disc list-inside text-base md:text-lg text-gray-300 leading-relaxed">
                <li>Created "The Hub" virtual reality environment, featuring a VR Planet Simulator, Hole-in-the-Wall VR experience with full-body collision tracking, and AR
                Kitchen Simulator, developed collaboratively using Unity and GitHub.</li>
                <li>Equipment sponsored by CSULB's ISPACE through 3D printing/scanning, VR labs, Quest 3 headsets, and labs to host meetings/workshops.</li>
                <li>Demonstrated "The Hub" at CSULB's COE Senior Design Expo alongside the HPRL/MetaCenter booth.</li>
              </ul>
            </div>
            {/* Add more activity cards here */}
            <div className="bg-[#0f1e2e] p-6 md:p-8 rounded-lg border border-[#1e2937]" data-aos="fade-left" data-aos-delay="300">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">CSULB Human Performance and Robotics Lab</h3>
              <p className="text-lg md:text-xl text-[#4a7397] mb-2 md:mb-3">MetaCenter Student Lead</p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">Mentored by Dr. Emel Demircan, who advanced the MetaCenter mission through research, such as integrating VR environments with haptic feedback for the
              psychological rehabilitation of soccer athletes.</p>
              <ul className="list-disc list-inside text-base md:text-lg text-gray-300 leading-relaxed">
                <li>MetaCenter focuses on expanding education using VR/AR; HPRL focuses on research in rehabilitation robotics and deep learning in sports biomechanics. </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0f1e2e] py-4 md:py-6 mt-12 md:mt-20">
        <div className="container mx-auto px-4 text-center text-gray-300 max-w-[60%] md:max-w-[60%] w-full">
          <p className="text-sm md:text-base">© {new Date().getFullYear()} Diego Davalos. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
