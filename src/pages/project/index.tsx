// import type { Metadata, ResolvingMetadata } from 'next'
import { useState } from 'react';


import NavBar from "@/components/NavBar";
import PageTitle from "@/components/PageTitle";
import ProjectCards from "@/components/ProjectCard";
// import { getAllPages, type ProjectMetadata } from '@/lib/mdx'

const title = "Projects";
const description = "The list of my projects.";

type ProjectsPageProps = {
  params: Record<string, never>;
  searchParams: Record<string, never>;
};

// export const generateMetadata = async (
//   _: ProjectsPageProps,
//   parent: ResolvingMetadata
// ): Promise<Metadata> => {
//   const previousOpenGraph = (await parent)?.openGraph ?? {}
//   const previousTwitter = (await parent)?.twitter ?? {}

//   return {
//     title,
//     description,
//     alternates: {
//       canonical: '/projects'
//     },
//     openGraph: {
//       ...previousOpenGraph,
//       url: '/projects',
//       title,
//       description
//     },
//     twitter: {
//       ...previousTwitter,
//       title,
//       description
//     }
//   }
// }

const ProjectsPage = () => {
  // const projects = getAllPages<ProjectMetadata>('projects')

  const projects = [
    {
      name: "CMS Dashboard Dagangan",
      description: "CMS Dashboard for internal to track, assign, create",
      slug: "dagangan_cms",
			url: "https://cms.dagangan.com/",
      techstack: [
        { label: "Typescript" },
        { label: "Next" },
        { label: "GraphQL" },
				{ label: "SonarQube" },
				{ label: "Datadog" },
      ],
    },
		{
      name: "Retail Platform Dagangan",
      description: "PWA Platform for users (retail or minimarket owners) can place orders or transactions based on the nearest hub for swift delivery.",
      slug: "dagangan_belanja",
			url: "https://belanja.dagangan.com/",
      techstack: [
        { label: "Typescript" },
        { label: "Next" },
        { label: "Redux" },
				{ label: "PWA" },
      ],
    },
		{
      name: "Sales & Driver Platform Dagangan",
      description: "A platform called pandawa to tracking sales activities to facilitate wholesale transactions and assign drivers to deliver orders directly to users from the nearest hub.",
      slug: "dagangan_pandawa",
			url: "https://pandawa.dagangan.com/",
      techstack: [
        { label: "Typescript" },
        { label: "Next" },
        { label: "Redux" },
				{ label: "PWA" },
      ],
    },
		{
      name: "Company Site Dagangan",
      description: "The trusted tech-enabled rural commerce platform that provides access to daily necessities at affordable prices to rural communities.",
      slug: "dagangan",
			url: "https://dagangan.com/",
      techstack: [
        { label: "Typescript" },
        { label: "Next" },
				{ label: "Strapi" },
      ],
    },
		{
      name: "UI Library Dagangan",
      description: "",
      slug: "dagangan_npm",
			url: "https://www.npmjs.com/package/@dagangan/react-components",
      techstack: [
        { label: "Typescript" },
        { label: "TSDX" },
				{ label: "Chromatic" },
				{ label: "Storybook" },
      ],
    },
    {
      name: "Admin Dashboard Virgo (Capital Net)",
      description: "Digital wallet for financial services such as payment, money transfer, remittance, points",
      slug: "virgo",
			url: "https://virgoku.id/",
      techstack: [
        { label: "Typescript" },
        { label: "Next" },
        { label: "Redux" },
      ],
    },
		{
      name: "Company site Virgo (Capital Net)",
      description: "Digital wallet for financial services such as payment, money transfer, remittance, points",
      slug: "virgo",
			url: "https://virgoku.id/",
      techstack: [
        { label: "Typescript" },
        { label: "Next" },
        { label: "Redux" },
      ],
    },
    {
      name: "E-commerce platform HIJUP",
      description: "HIJUP.com is the world's first Islamic fashion e-commerce. With an online mall concept, we provide a wide range of the best products from Indonesian Islamic fashion designers. The products we provide are for Moslem women in particular, from clothing, hijab/headscarf, accessories and more.",
      slug: "hijup",
			url: "https://www.hijup.com/",
      techstack: [
        { label: "Typescript" },
        { label: "React" },
        { label: "GraphQL" },
      ],
    },
    {
      name: "P2P Platform Amartha",
      description: "Peer-to-peer (P2P) platform that connects micro and SME business partners with investors",
      slug: "amartha_marketplace",
			url: "https://dashboard.amartha.com/preview-marketplace",
      techstack: [{ label: "Javascript" }, { label: "React" }, { label: "Redux" }],
    },
		{
      name: "Company site Amartha",
      description: "Amartha is a leading microfinance technology platform that has a mission of realizing shared prosperity through the development of digital financial infrastructure for the grassroots economy. Established in 2010, Amartha exists as a microfinance to connect rural micro-enterprises run by strong women with access to affordable capital.",
      slug: "amartha",
			url: "https://amartha.com/",
      techstack: [{ label: "React"}, {label: 'Redux'}, {label: 'GSAP'}],
    },
  ];
	const [section, setSection] = useState("all");

  return (
    <main className="mx-auto mb-16 max-w-5xl px-5 py-24 sm:px-8">
			<NavBar setSection={setSection} />
      <PageTitle
        title="Projects"
        description="The list of my projects. Everything was made with ❤️."
      />
      <ProjectCards projects={projects} />
    </main>
  );
};

export default ProjectsPage;
