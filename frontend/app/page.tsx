/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSWR from "swr";

// definisikan variabel "fatcher"
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3001/api/user",
    fetcher
  );
  
  return (
    <div>
      {/* buat tombol "Tambah Data" */}
      <section className="text-right">
        <button className="btn btn-soft btn-success">
          <FontAwesomeIcon icon={faPlus}/>Tambah Data</button>
      </section>

      {/* buat table data user */}
      <section className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th className="w-1/12">Aksi</th>
              <th className="w-5/12">Name</th>
              <th className="w-3/12">Username</th>
              <th className="w-3/12">Password</th>
            </tr>
          </thead>
          <tbody>
            {/* looping dengan "map" */}
            {data?.data_user.map((item: any) => (

            {/* row */}
            <tr className="hover:bg-cyan-100">
              <td className="text-center">2</td>
              <td className="text-justify">Hart Hagerty</td>
              <td className="text-center">Desktop Support Technician</td>
              <td className="text-center">Purple</td>
            </tr>
            ))}


          </tbody>
        </table>

      </section>
    </div>
  );
}
