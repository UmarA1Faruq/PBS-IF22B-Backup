/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { use } from 'react'

export default function EditPage({params}: { params: Promise<{ id: string }> }) {
    // baca parameter slug "id"
    const {id} = use(params)
    return (
        <div>{id}</div>
    )
}
