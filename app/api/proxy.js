export default async function handler(req, res) {
    const { method } = req;

    const API_URL = "http://api.expo.win"; // Your actual API
    const targetUrl = `${API_URL}${req.url.replace("/api/proxy", "")}`;

    if (method === "GET" || method === "POST") {
        try {
            const response = await fetch(targetUrl, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: method === "POST" ? JSON.stringify(req.body) : undefined,
            });

            const data = await response.json();
            return res.status(response.status).json(data);
        } catch (error) {
            return res.status(500).json({ error: "Proxy error", details: error.message });
        }
    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
}
