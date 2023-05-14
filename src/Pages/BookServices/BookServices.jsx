/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";

const BookServices = () => {
  const { user } = useContext(AuthContext);
   const service = useLoaderData();
   const { title, price } = service;
  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const due = form.due.value;
    const date = form.date.value;

    const order = {
      userName: name,
      email: email,
      price: due,
      date: date,
    };
    console.log(order);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            alert('Service book successful')
        }
      });
  };
 
 
  return (
    <div>
      {/* <h1>Book service : {title}</h1> */}

      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="card  w-full  shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleBookService}>
                  <div className="flex flex-col lg:flex-row gap-10">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Date</span>
                      </label>
                      <input
                        required
                        name="date"
                        type="date"
                        placeholder="date"
                        className="input input-bordered"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-10">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        defaultValue={user?.email}
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Due amount</span>
                      </label>
                      <input
                        required
                        name="due"
                        type="text"
                        defaultValue={"$ " + price}
                        className="input input-bordered"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="mt-10">
                    <textarea
                      placeholder="Your message"
                      className="textarea h-60 w-full border border-gray-500"
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      value="Order Confirm"
                      className="btn"
                      name=""
                      id=""
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookServices;
