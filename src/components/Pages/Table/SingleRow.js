import React from "react";
import { Link } from "react-router-dom";

const SingleRow = ({info,imgURL,userDelete }) => {
  const url=`/users/${info.id}`
  return (
    <tr>
      <td>
        <Link to='' className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={imgURL}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{info?.name}</div>
            <div className="text-sm opacity-50">{info?.username}</div>
          </div>
        </Link>
      </td>
      <td>
       {info?.email}
        <br />
        <span className="badge badge-ghost badge-sm">
          {info?.phone}
        </span>
      </td>
      <td>{info?.address?.city}</td>
      <th className="flex gap-4">
        <Link to={url} className="btn btn-info btn-xs">✎ Edit</Link>
        <button onClick={()=>{userDelete(info.id)}} className="btn btn-warning btn-xs">⛔ Delete</button>
      </th>
    </tr>
  );
};

export default SingleRow;
