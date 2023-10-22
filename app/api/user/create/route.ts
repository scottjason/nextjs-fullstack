import bcrypt from 'bcryptjs';

import { Prisma, PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const salt = bcrypt.genSaltSync(10);
  const body = await request.json();
  try {
    await prisma.user.create({
      data: {
        email: body.email,
        password: bcrypt.hashSync(body.password, salt),
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      const meta =
        (err.meta as Prisma.PrismaClientKnownRequestError['meta']) || {};
      if (err.code === 'P2002') {
        if (meta.target) {
          const fields = meta.target;
          const field = Array.isArray(fields) ? fields[0] : '';
          return NextResponse.json(`Error, ${field} already registered.`, {
            status: 400,
          });
        }
      } else {
        return NextResponse.json('Uknown error occured!', {
          status: 400,
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        errors: ['Internal Server Error'],
      });
    }
  }

  return NextResponse.json('User created succesfully!', {
    status: 200,
  });
}
