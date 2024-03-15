import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    email: "shikharbansal@gmail.com",
    name: "Shikhar Bansal",
  });
}

// export async function POST(req: NextRequest) {
//   //body, express.json()
//   const body = await req.json();
//   console.log(body);
//   //header
//   console.log(req.headers.get("authorization"));
//   //query parameters
//   console.log(req.nextUrl.searchParams.get("name"));

//   //hit the database with username, password
//   return Response.json({
//     message: "You logged in",
//   });
// }

const client = new PrismaClient();

// POST entry in POSTGRESS database using PRISMA
export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    await client.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    return NextResponse.json({
      body,
    });
  } catch (e) {
    return NextResponse.json(
      {
        message: "Error while signing up",
      },
      {
        status: 411,
      }
    );
  }
}
