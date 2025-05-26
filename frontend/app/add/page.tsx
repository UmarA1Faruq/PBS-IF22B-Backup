/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import axios from 'axios'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

export default function AddPage() {
    // buat hook "useState" untuk visible/hidden pesan error
    const [errorNamaVisible, setErrorNamaVisible] = useState(false)
    const [errorUsernamaVisible, setErrorUsernameVisible] = useState(false)
    const [errorPasswordVisible, setErrorPasswordVisible] = useState(false)

    // buat hook "useRef" untuk komponen isian
    const dataNama = useRef<HTMLInputElement>(null)
    const dataUsername = useRef<HTMLInputElement>(null)
    const dataPassword = useRef<HTMLInputElement>(null)



    // Buat fungsi untuk simpan data
    const setSaveData = () => {
        // Cek apakah semuah komponen sudah terisi
        // jika komponen "nama" tidak diisi
        if (dataNama.current?.value == "") {
            // tampilkan pesan error
            setErrorNamaVisible(true)
        }
        // jika komponen "nama" diisi
        else {
            // sembunyikan pesan error
            setErrorNamaVisible(false)

        }

        // Untuk data Username
        if (dataUsername.current?.value == "") {
            // tampilkan pesan error
            setErrorUsernameVisible(true)
        }
        // jika komponen "Usernama" diisi
        else {
            // sembunyikan pesan error
            setErrorUsernameVisible(false)

        }

        // Untuk Paswword
        if (dataPassword.current?.value == "") {
            // tampilkan pesan error
            setErrorPasswordVisible(true)
        }
        // jika komponen "Password" diisi
        else {
            // sembunyikan pesan error
            setErrorPasswordVisible(false)

        }

        // jiks seluruh komponen terisi
        if (
            dataNama.current?.value != "" &&
            dataUsername.current?.value != "" &&
            dataPassword.current?.value != ""
        ) {
            // ambil service "POST"
            axios.post(`http://localhost:3001/api/user`, {
                nama_value: dataNama.current?.value,
                username_value: dataUsername.current?.value,
                password_value: dataPassword.current?.value,
            })
                .then(function (response) {
                    alert(response.data.meta_data.message);
                })
        }
    };

    return (
        <div className='bg-amber-300'>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Nama</legend>
                <input ref={dataNama} type="text" className="input w-96" placeholder="Masukan Nama" />
                {
                    (errorNamaVisible == true) &&
                    <p className="label text-red-700">Nama User Harus Diisi !</p>
                }
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Username</legend>
                <input ref={dataUsername} type="text" className="input w-96" placeholder="Masukan Usernamer" />
                {
                    (errorUsernamaVisible == true) &&
                    <p className="label text-red-700">Username Harus Diisi !</p>
                }
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <input ref={dataPassword} type="password" className="input w-96" placeholder="Masukan Password" />
                {
                    (errorPasswordVisible == true) &&
                    <p className="label text-red-700">Password Harus Diisi !</p>
                }
            </fieldset>

            <button className="btn btn-active btn-success ml-5 mr-2.5 mt-5 w-24"
                onClick={setSaveData}>
                Simpan
            </button>
            <Link href={"/"} className="btn btn-error ml-2.5 mt-5 w-24">
                Batal
            </Link>
        </div>
    )
}
