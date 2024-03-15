import { NextRequest } from "next/server";

export function GET() {
  return Response.json({
    email: "shikharbansal@gmail.com",
    name: "Shikhar Bansal",
  });
}

export async function POST(req: NextRequest) {
  //body, express.json()
  const body = await req.json();
  console.log(body);
  //header
  console.log(req.headers.get("authorization"));
  //query parameters
  console.log(req.nextUrl.searchParams.get("name"));

  //hit the database with username, password
  return Response.json({
    message: "You logged in",
  });
}
