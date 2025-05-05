/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
          <FontAwesomeIcon icon={faPlus} />Tambah Data</button>
      </section>

      {/* buat table data user */}
      <section className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th className="w-2/12">Aksi</th>
              <th className="w-4/12">Name</th>
              <th className="w-3/12">Username</th>
              <th className="w-3/12">Password</th>
            </tr>
          </thead>
          <tbody>
            {/* looping dengan "map" */}
            {data?.data_user.map((item: any) => (

              <tr className="hover:bg-cyan-100" key={item.id}>
                <td className="text-center">
                  {/* buat tombol edit dan hapus */}
                  <Link href={"/"} className="bg-blue-500 px-2.5 py-1.5 text-white">
                    <FontAwesomeIcon icon={faPencil} />
                  </Link>
                  <Link href={"/"} className="bg-rose-500 px-2.5 py-1.5 text-white">
                  <FontAwesomeIcon icon={faTrash} />
                  </Link>
                </td>
                <td className="text-justify">{item.name}</td>
                <td className="text-center">{item.username}</td>
                <td className="text-center">{item.password}</td>
              </tr>
            ))}


          </tbody>
        </table>

      </section>
    </div>
  );
}
