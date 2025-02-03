import fetch from "node-fetch";

export async function handler(event) {
  const path = event.path.replace("/api/proxy", ""); // Remove proxy path
  const apiUrl = `http://api.expo.win${path}`;

  try {
    const response = await fetch(apiUrl, {
      method: event.httpMethod,
      headers: {
        "Content-Type": "application/json",
        ...event.headers, // Pass any headers from request
      },
      body: event.body,
    });

    const data = await response.text();
    return {
      statusCode: response.status,
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch API" }),
    };
  }
}
