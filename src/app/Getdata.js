import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/Getdata";
import "./Getdata.css";

export default function RenderAPIData() {
  const data = useSelector((state) => state.allData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      <table className=" table table-hover">
        <thead className="bg-dark text-white">
        <tr className="headings">
          <th>Id</th>
          <th>Name</th>
          <th>gmail</th>
        </tr>
        </thead>
        {data.map((get) => {
          return (
            <tr>
              <td>{get.id}</td>
              <td className="name-col">{get.name}</td>
              <td>{get.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
