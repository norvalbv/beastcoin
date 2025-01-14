import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { RiHeart2Fill } from "react-icons/ri";
import { SiFastly } from "react-icons/si";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center" id="services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Services that we
          <br />
          stand by
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling Beastcoin from the
          various super friendly benefits we obide by.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#F84550]"
          title="15% Charitable Donations"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="0.25% of the total sum donated manually at the start of every month, lasting 5 years."
        />
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Quick Transactions"
          icon={<SiFastly fontSize={21} className="text-white" />}
          subtitle="The ability to benefit off the Binance blockchain enables Beastcoin to have quick transactions."
        />
      </div>
    </div>
  </div>
);

export default Services;
