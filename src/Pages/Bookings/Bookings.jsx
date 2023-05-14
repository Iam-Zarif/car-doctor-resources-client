/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import BookingRow from "./BookingRow";



const Bookings = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  const [bookings, setBookings] = useState([]);
  const handleDelete = (id) => {
    const proceed = confirm("are you sure you want to delete? ");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete successful");
            const remaining = bookings.filter(booking => booking._id !== id);
            setBookings(remaining)
          }
        });
    }
  };

  useEffect(() => {
    if (user) {
      const url = `http://localhost:5000/bookings?email=${user?.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
        })
        .catch((error) => {
          console.error("Error fetching bookings:", error);
        });
    }
  }, [user]);

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