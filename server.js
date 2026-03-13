import express from "express";
import OpenAI from "openai";

const app = express();
app.use(express.json());
app.use(express.static("."));

// ضع المفتاح هنا مباشرة مؤقتًا (للتجربة على جهازك فقط)
const client = new OpenAI({
});

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/chathot.html");
});

app.post("/chat", async (req, res) => {
  const message = req.body.message;

  const response = await client.responses.create({
    model: "gpt-3.5-turbo",
    input: message
  });

  res.json({ reply: response.output_text });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});