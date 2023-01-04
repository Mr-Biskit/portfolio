import type { GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Project";
import Skills from "../components/Skills";
import { Social, Project, Skill } from "../typings";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocial";

type Props = {
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ skills, projects, socials }: Props) => {
  return (
    <div className="bg-[#020202] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-lightPurple/80">
      <Head>
        <title>Mr Biskit Portfolio</title>
      </Head>

      {/* Header */}

      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center  bg-packtrain bg-cover">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center bg-steps bg-cover">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center bg-blob bg-cover">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills: Skill[] = await fetchSkills();

  const projects: Project[] = await fetchProjects();

  const socials: Social[] = await fetchSocials();

  return {
    props: {
      skills,
      projects,
      socials,
    },

    revalidate: 40,
  };
};
