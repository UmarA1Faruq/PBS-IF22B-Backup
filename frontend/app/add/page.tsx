import React from 'react'

export default function AddPage() {
    return (
        <div>
        <fieldset className="fieldset">
            <legend className="fieldset-legend">Nama</legend>
            <input type="text" className="input" placeholder="Isi Nama User" />
            <p className="label">Nama User Harus Diisi !</p>
        </fieldset>
        </div>
    )
}
