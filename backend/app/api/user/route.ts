import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// buat variabel prisma
const prisma = new PrismaClient

// buat fungsi untuk service "GET"
export const GET = async () => {
    // proses "GET" (tampil data) tb_user
    const data = await prisma.tb_user.findMany({})

    //Kondisi jika data tidak ditemukan
    if(data.length == 0)
    {
        return NextResponse.json({
            meta_data:{
                error: 1,
                message: "Data User Tidak Ditemukan",
                status: 404
            },
        },{
            status: 404
        })
    }

    // tampilkan hasil respon
    return NextResponse.json({
        meta_data:{
            error: 0,
            message: null,
            status: 200
        },
        data_user: data
    },{
        status: 200
    })
}