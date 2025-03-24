import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { genSaltSync, hashSync } from "bcrypt-ts";

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

// buat service "POST" tb_user
export const POST = async (request:NextRequest) => {
    //  buat variabel object untuk request
    const {nama_value, username_value, password_value} = await request.json()

    // cek apakah username sudah pernah dibuat / belum
    const checkUsername = await prisma.tb_user.findMany({
        where:{
            username: username_value
        }
    })

    // Jika username ditemukan
    if(checkUsername.length >=1)
    {
        return NextResponse.json({
            meta_data:{
                error: 1,
                message: "Data User Gagal Disimpan! Username Sudah Terdaftar!",
                status: 404
            },
        },{
            status: 404
        })
    }


    // Penambahan bcrypt
    const password_salt = genSaltSync(10);
    const password_result = hashSync(password_value, password_salt);

    // proses POST data
    const save = await prisma.tb_user.create({
        data: {
            name: nama_value,
            username: username_value,
            password: password_result
          }
    })

    // tampilkan hasil respon
    return NextResponse.json({
        meta_data:{
            error: 0,
            message: "Data User Berhasil DItambah",
            status: 201
        },

    },{
        status: 201
    })

}
