const express = require("express");
const OpenAI = require("openai");
const app = express();
app.use(express.json());

const openai = new OpenAI({
    apiKey: "sk-proj-uQAUFLl9QP7DsdhjZj8VT3BlbkFJPp5v2Dc4sMmM9LpNeq2O"
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/getResponse', async (req, res) => {
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ "role": "user", "content": "Hello!" }],
        max_tokens: 100
    });
    res.json(response); // Send the response back to the client
});

app.listen(3000, () => {
    console.log("Server Started");
});