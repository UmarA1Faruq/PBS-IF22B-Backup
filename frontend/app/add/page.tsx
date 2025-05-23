/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import Link from 'next/link'
import React, { useRef, useState } from 'react'

export default function AddPage() {
    // buat hook "useState" untuk visible/hidden pesan error
    const [errorNamaVisible, setErrorNamaVisible] = useState(false)
    const [errorUsernamaVisible, setErrorUseramaVisible] = useState(false)
    const [errorPasswordVisible, setErrorPasswordVisible] = useState(false)

    // buat hook "useRef" untuk komponen isian
    const dataNama = useRef<HTMLInputElement>(null)

    // Buat fungsi untuk simpan data
    const setSaveData = () => {
        // Cek apakah semuah komponen sudah terisi
        // jika komponen "nama" tidak diisi
        if(dataNama.current?.value == "")
        {
            // tampilkan pesan error
            setErrorNamaVisible(true)
        }
        // jika komponen "nama" diisi
        else
        {
            // sembunyikan pesan error
            setErrorNamaVisible(false)

        }
    }

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
                <input type="text" className="input w-96" placeholder="Masukan Usernamer" />
                {
                    (errorUsernamaVisible == true) &&
                    <p className="label text-red-700">Username Harus Diisi !</p>
                }
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <input type="password" className="input w-96" placeholder="Masukan Password" />
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
