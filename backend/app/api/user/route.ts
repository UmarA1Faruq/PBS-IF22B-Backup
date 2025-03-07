import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// buat variabel prisma
const prisma = new PrismaClient

// buat fungsi untuk service "GET"
export const GET = async () => {
    // proses "GET" (tampil data) tb_user
    const data = await prisma.tb_user.findMany({})
    // tampilkan hasil respon
    return NextResponse.json(data)
}