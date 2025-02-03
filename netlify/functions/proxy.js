import fetch from "node-fetch";

export async function handler(event) {
  const { path, body, queryStringParameters, httpMethod } = event;

  const apiUrl = `http://api.expo.win${path.replace("/api/proxy", "")}`;
  
  try {
    const response = await fetch(apiUrl, {
      method: httpMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: httpMethod !== "GET" ? body : null,
    });

    const data = await response.json();
    
    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Proxy error", details: error.message }),
    };
  }
}
