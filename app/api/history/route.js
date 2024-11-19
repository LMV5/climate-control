import connectDB from "@/config/database";
import { getHistory } from "@/utils/getHistory";

// GET

export const GET = async (request, { params }) => {
  try {
    await connectDB();
    const history = await getHistory();

    if (!history) return new Response("History not found", { status: 404 });

    const response = new Response(JSON.stringify(history), {
      status: 200,
    });

    response.headers.set("Cache-Control", "no-store");

    return response;
  } catch (error) {
    console.error("Error fetching history and room:", error);
    return new Response("Something went wrong", { status: 500 });
  }
};
