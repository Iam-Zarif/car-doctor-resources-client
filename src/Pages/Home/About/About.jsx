/* eslint-disable react/no-unescaped-entities */

import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
      <div className="hero min-h-screen bg-base-200 mt-10">
        <div className="hero-content flex-col flex justify-between lg:flex-row">
          <div className=" relative">
            <img src={person} className="w-2/3 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className=" absolute top-56 left-80 border-8   border-[#242933] w-1/3 rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <p>About Us</p>
            <h1 className=" text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
            </p>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn">Discover More</button>
          </div>
        </div>
      </div>
    );
};

export default About;