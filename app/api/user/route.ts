import { NextRequest } from "next/server";

export function GET() {
  return Response.json({
    email: "shikharbansal@gmail.com",
    name: "Shikhar Bansal",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
console.log(body)
  return Response.json({
    message: "You logged in",
  });
}
