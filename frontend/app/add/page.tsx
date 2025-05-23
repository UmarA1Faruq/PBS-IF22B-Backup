import Link from 'next/link'
import React from 'react'

export default function AddPage() {
    return (
        <div className='bg-amber-300'>
        <fieldset className="fieldset">
            <legend className="fieldset-legend">Nama</legend>
            <input type="text" className="input w-96" placeholder="Masukan Nama" />
            <p className="label text-red-700">Nama User Harus Diisi !</p>
        </fieldset>

        <fieldset className="fieldset">
            <legend className="fieldset-legend">Username</legend>
            <input type="text" className="input w-96" placeholder="Masukan Usernamer" />
            <p className="label text-red-700">Username Harus Diisi !</p>
        </fieldset>

        <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="password" className="input w-96" placeholder="Masukan Password" />
            <p className="label text-red-700">Password Harus Diisi !</p>
        </fieldset>

        <button className="btn btn-active btn-success ml-5 mr-2.5 mt-5 w-24">Simpan</button>
        <Link href={"/"} className="btn btn-error ml-2.5 mt-5 w-24">Batal</Link>
        </div>
    )
}
