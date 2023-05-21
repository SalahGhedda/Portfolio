import AccordionGroup from "./AccordionGroup";

const AboutPage = () => {
  const headings = [
    "Who am I?",
    "Academic Background",
    "Programming skills",
    "Personnal skills",
    "Passions and interests",
    "Contact Information",
  ];

  const bodies = [
    "My name is Salah and I am a second-year software engineering student with a passion for technology and problem-solving. At 23 years old, I have dedicated myself to pursuing a career in the field of software and web development. Throughout my studies, I have gained a solid foundation in programming languages, software design, and development methodologies. I am eager to apply my knowledge and skills to real-world projects and contribute to innovative solutions. With a strong commitment to continuous learning, I am excited to embark on a career that allows me to improve my skills and stay updated with the latest advancements in coding and software conception.",
    "I am currently pursuing a Bachelor's degree in Software Engineering at École de technologie supérieure (ÉTS) in Montreal. Prior to that, I completed a DEC (Diplôme d'études collégiales) in Natural Sciences at Collège de Maisonneuve in Montreal in 2020. These academic experiences have provided me with a strong foundation in the principles of software engineering and a solid understanding of scientific concepts. I am dedicated to expanding my knowledge and skills in the field and staying up-to-date with the latest advancements to excel in my career as a software engineer.",
    "I have a strong foundation in various programming languages and technologies. I am proficient in Java, C#, C++, TypeScript, and JavaScript, which enables me to develop robust and efficient software solutions. Additionally, I have experience working with Oracle SQL, allowing me to effectively manage and manipulate databases. I am also well-versed in web development technologies such as HTML, CSS, and React, enabling me to create responsive and interactive user interfaces. My diverse skill set allows me to tackle a wide range of projects and contribute effectively to software development teams.",
    "I possess a range of personal skills that contribute to my effectiveness and success. These include adaptability, problem-solving, teamwork, initiative, and communication. I easily adapt to new situations, break down complex problems, collaborate effectively, take initiative, and communicate clearly. These skills enhance my overall capabilities in projects and enable me to work effectively with diverse teams.",
    "I am passionate about programming, technology, science, and soccer. Programming allows me to express my creativity and problem-solving skills while building innovative solutions. Exploring the latest advancements in technology keeps me motivated and inspired to continuously learn and adapt. Science intrigues me with its endless possibilities and the opportunity to unravel the mysteries of the universe. As for soccer, it is not only a sport I enjoy playing, but it also teaches me valuable lessons in teamwork, discipline, and determination. These passions and interests drive me to constantly pursue new challenges and opportunities in the ever-evolving world of software engineering.",
    "Feel free to reach out to me at salah-eddine.ghedda.1@ens.etsmtl.ca for any inquiries, collaboration opportunities, or discussions. I am always open to connecting with like-minded individuals, sharing ideas, and exploring new opportunities in the field of software engineering. Don't hesitate to contact me via email, and I will get back to you as soon as possible.",
  ];

  return (
    <>
      <div className="bg-blue-900 h-screen ">
        <h1 className=" text-white underline ml-12 h-20 items-center flex font-mono">
          About Me
        </h1>
        <AccordionGroup bodies={bodies} headings={headings} />
      </div>
    </>
  );
};

export default AboutPage;
