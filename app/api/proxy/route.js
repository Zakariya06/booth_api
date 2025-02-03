export async function POST(req) {
  try {
    const body = await req.json();
    const apiResponse = await fetch("http://api.expo.win/api/files", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await apiResponse.json();
    return new Response(JSON.stringify(data), { status: apiResponse.status });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}

export async function GET(req) {
  try {
    const apiResponse = await fetch("http://api.expo.win/api/files", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await apiResponse.json();
    return new Response(JSON.stringify(data), { status: apiResponse.status });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
