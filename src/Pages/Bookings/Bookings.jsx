/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  console.log(user);
  const [bookings, setBookings] = useState([]);
  const handleDelete = (id) => {
    const proceed = confirm("are you sure you want to delete? ");
    if (proceed) {
      fetch(`https://car-doctor-server-i-am-zarif.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete successful");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  useEffect(() => {
    if (user) {
      const url = `https://car-doctor-server-i-am-zarif.vercel.app/bookings?email=${user?.email}`;
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) {
            setBookings(data);
          }
          else{
            navigate('/')
          }
          
        })
        .catch((error) => {
          console.error("Error fetching bookings:", error);
        });
    }
  }, [user,navigate]);

  return (
    <div>
      <h1>Bookings : {bookings.length}</h1>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings.map((booking) => (
                <BookingRow
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                ></BookingRow>
              ))}
              {bookings.map((data) => console.log(data))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
