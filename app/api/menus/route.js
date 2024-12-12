import dbConnect from "../../../lib/db";
import Menu from "../../../models/Menu";

export async function GET(req) {
  await dbConnect();
  const menus = await Menu.find({});
  return new Response(JSON.stringify(menus), { status: 200 });
}

export async function POST(req) {
  await dbConnect();
  const { name, description } = await req.json();
  const menu = await Menu.create({ name, description });
  return new Response(JSON.stringify(menu), { status: 201 });
}
