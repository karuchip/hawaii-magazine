import { NextResponse } from "next/server";
import prisma from '../../../../utils/prisma'
import bcrypt from 'bcrypt'

export async function POST(request:Request) {
  const body = await request.json()

  try {
    const hashedPassword = await bcrypt.hash(body.password, 10)
    const newUser = await prisma.user.create({
      data: {
        name:body.name,
        email:body.email,
        password:hashedPassword,
        userIcon:body.userIcon
      }
    })
    return NextResponse.json({message: 'ユーザー登録に成功しました'})
  }catch (error) {
    console.log('Prismaエラー:', error)
    return NextResponse.json({message: 'ユーザー登録失敗しました'})
  }
}

