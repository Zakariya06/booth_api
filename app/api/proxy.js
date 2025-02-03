export default async function handler(req, res) {
    const apiUrl = "http://api.expo.win" + req.url.replace("/api/proxy", "");
  
    try {
      const apiResponse = await fetch(apiUrl, {
        method: req.method,
        headers: {
          "Content-Type": "application/json",
          ...req.headers, // Pass headers
        },
        body: req.method !== "GET" ? JSON.stringify(req.body) : null,
      });
  
      const data = await apiResponse.json();
      res.status(apiResponse.status).json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data" });
    }
  }
  