"use client"

import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Home() {
  return (
    <div>
      {/* buat tombol "Tambah Data" */}
      <section className="text-right">
        <button className="btn btn-soft btn-success">
          <FontAwesomeIcon icon={faPlus}/>Tambah Data</button>
      </section>

      {/* buat table data user */}
      <section className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>          
            {/* row 2 */}
            <tr className="hover:bg-cyan-100">
              <td>2</td>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
          </tbody>
        </table>

      </section>
    </div>
  );
}
