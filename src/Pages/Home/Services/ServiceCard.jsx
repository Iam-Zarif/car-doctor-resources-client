/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/Authprovider";


// eslint-disable-next-line no-unused-vars
const ServiceCard = ({data}) => {
  const {user} = useContext(AuthContext)
    const {_id, img, title, price } = data;
    console.log(_id)
    return (
      <div className="mx-auto">
        <div className="card w-96 glass">
          <figure>
            <img src={img} alt="car!" className="lg:h-72" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{title}</h2>
            <p>Price : ${price} </p>
            <div className="card-actions justify-end">
              {user ? (
                <>
                  <Link to={`book/${_id}`}>
                    <button className="btn bg-orange-500 text-black hover:bg-orange-700 hover:text-white">
                      See more{" "}
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to='/login'>
                    <button className="btn bg-orange-500 text-black hover:bg-orange-700 hover:text-white">
                      login to See more{" "}
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;