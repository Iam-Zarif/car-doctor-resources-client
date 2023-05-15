/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import ServiceCard from "./serviceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
fetch("https://car-doctor-server-i-am-zarif.vercel.app/services")
  .then((res) => res.json())
  .then((data) => setServices(data));
    },[])
    return (
      <div className="mt-10">
        <p className="text-center text-xl text-orange-500 ">Service</p>
        <p className="text-center text-5xl text-white mt-5">Our Service Area</p>
        <p className="text-center mt-5 w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-10">
          {services.map((data) => (
            <ServiceCard key={data._id} data={data}></ServiceCard>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="btn bg-orange-700 text-black hover:bg-orange-600 hover:text-white">More Services</button>
        </div>
      </div>
    );
};

export default Services;