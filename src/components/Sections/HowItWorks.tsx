import Image from "next/image";
import SectionWrapper from "../SectionWrapper";

const data = [
  {
    title: "Search",
    description:
      "Search for a resume template that suits your needs and preferences best.",
    icon: "/icons/search.svg",
  },
  {
    title: "Edit",
    description:
      "Edit your resume and fill in your personal information and experiences.",
    icon: "/icons/edit.svg",
  },
  {
    title: "Download",
    description:
      "Download your resume and start applying for your dream job right away.",
    icon: "/icons/download.svg",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="uppercase text-[#0D8772] font-medium">How it works</p>
        <h1 className="text-[50px] font-bold leading-[80px]">
          Simple steps to get your <br />
          <span className="fancy">dream job</span>
        </h1>
      </div>

      <div className="flex items-center justify-center gap-8 flex-wrap mt-12">
        {data?.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default HowItWorks;

const Card = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-[320px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-6 py-10 rounded-md">
      <div className="mb-6">
        <Image src={icon} width={60} height={60} alt={title} />
      </div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-[#6F6F75] text-[15px]">{description}</p>
    </div>
  );
};
