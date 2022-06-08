import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SingleRow from "./SingleRow";

const Table = () => {
  const [users, setUsers] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/users`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [url]);

  // Random user img
  function rendImg() {
    let hash = Math.floor(Math.random() * 10000);
    return `https://api.lorem.space/image/face?hash=${hash}`;
  }

  // delete btn function
  const userDelete = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    await fetch(url, {
      method: "DELETE",
    }).then((res) => {
      if (res.status !== 200) {
        return console.log("sever not active");
      } else {
        const restUsers = users.filter((user) => user.id !== id);
        setUsers(restUsers);
        toast.success("successfully delete");
      }
    });
  };

// edit link
 
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>City</th>
              <th>Update</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              rendImg();
              return (
                <SingleRow
                  info={user}
                  userDelete={userDelete}
                  imgURL={rendImg()}
                ></SingleRow>
              );
            })}
          </tbody>
          {/* <!-- foot --> */}
          {/* <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot> */}
        </table>
        <div className="flex justify-between">
          <div class="btn-group">
            <button class="btn">1</button>
            <button class="btn btn-active">2</button>
            <button class="btn">3</button>
            <button class="btn">4</button>
          </div>
          <Link to='/add-new-user' className="btn bnt-success mr-[10%]">Add a New Users</Link>
        </div>
      </div>
    </div>
  );
};

export default Table;
