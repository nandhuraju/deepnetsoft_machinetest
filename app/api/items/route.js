import dbConnect from "../../../lib/db";
import Item from "../../../models/Item";

export async function GET(req) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const menuId = searchParams.get("menuId");
  const items = await Item.find({ menuId });
  return new Response(JSON.stringify(items), { status: 200 });
}

export async function POST(req) {
  await dbConnect();
  const { name, description, price, menuId, imageUrl } = await req.json(); // Include imageUrl in destructuring
  if (!name || !price || !menuId || !imageUrl) {
    return new Response(JSON.stringify({ error: "Missing required fields." }), {
      status: 400,
    });
  }
  const item = await Item.create({
    name,
    description,
    price,
    menuId,
    imageUrl,
  }); // Save imageUrl in the database
  return new Response(JSON.stringify(item), { status: 201 });
}
