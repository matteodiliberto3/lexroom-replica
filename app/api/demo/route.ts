import { NextResponse } from "next/server";

type DemoRequestBody = {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  promoCode?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: DemoRequestBody;

  try {
    body = (await request.json()) as DemoRequestBody;
  } catch {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 },
    );
  }

  const name = body.name?.trim() ?? "";
  const surname = body.surname?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";

  if (!name || !surname || !email || !phone) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please provide a valid business email." },
      { status: 400 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message: "Request made successfully!",
      data: {
        name,
        surname,
        email,
        phone,
        promoCode: body.promoCode?.trim() || null,
      },
    },
    { status: 200 },
  );
}
