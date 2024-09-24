import { Card } from "./Card";

const ProjectCollection = ({}) => {
  const projectsData = [
    {
      name: "kaizenCart",
      image: "/kaizenCart.jpg",
      link: "https://cart-next-neon.vercel.app/explore",
      description:
        "An e-commerce platform for seamless online shopping experiences.",
    },
    {
      name: "kaizen Tech Society",
      image: "/KaizenTechSociety.png",
      link: "https://www.kaizentechsociety.xyz/",
      description:
        "A tech community website for sharing knowledge and resources.",
    },
    {
      name: "careerRoadPe",
      image: "/CareerRoadPe.jpg",
      link: "https://career-roadpe.vercel.app/fields",
      description:
        "A career guidance platform to explore various professional fields.",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {projectsData.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectCollection;
