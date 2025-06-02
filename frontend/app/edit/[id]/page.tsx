/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import Link from 'next/link'
import React, { use, useRef, useState } from 'react'

export default function EditPage({params}: { params: Promise<{ id: string }> }) {
    // baca parameter slug "id"
    const {id} = use(params)

    // buat hook "useState" untuk visible/hidden pesan error
        const [errorNamaVisible, setErrorNamaVisible] = useState(false)
        const [errorUsernamaVisible, setErrorUsernameVisible] = useState(false)
        const [errorPasswordVisible, setErrorPasswordVisible] = useState(false)
    
        // buat hook "useRef" untuk komponen isian
        const dataNama = useRef<HTMLInputElement>(null)
        const dataUsername = useRef<HTMLInputElement>(null)
        const dataPassword = useRef<HTMLInputElement>(null)

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

            <button className="btn btn-active btn-success ml-5 mr-2.5 mt-5 w-24">
                Ubah
            </button>
            <Link href={"/"} className="btn btn-error ml-2.5 mt-5 w-24">
                Batal
            </Link>
        </div>
    )
}
