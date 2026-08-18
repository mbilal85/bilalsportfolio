import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid items-center gap-16 md:grid-cols-2">
        <img
          src={aboutSvg}
          alt="Illustration of a developer working on a computer"
          className="h-64 w-full object-contain"
        />

        <article>
          <SectionTitle text="code and coffee" />

          <p className="mt-8 leading-loose text-slate-600">
            I am a passionate web developer with a background in business,
            information technology, data science, and customer service. I enjoy
            turning ideas into modern, responsive, and user-friendly web
            applications.
          </p>

          <p className="mt-4 leading-loose text-slate-600">
            My journey into software development has led me to work with
            JavaScript, TypeScript, React, Redux, GraphQL, HTML, and CSS. I am
            continuously learning and building projects to strengthen my skills
            and explore new technologies.
          </p>

          <p className="mt-4 leading-loose text-slate-600">
            When I am not coding, I enjoy learning new things, working on
            personal projects, and finding that perfect balance between
            productivity, learning Spanish, cooking, working out, and my youtube
            channel.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
