// App.js
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [style, setStyle] = useState("");

  const userId = "abc123"; // Replace with actual logged-in user ID

  // Fetch the user's learning style from backend
  useEffect(() => {
    axios
      .get(`http://localhost:8000/get-style?user_id=${userId}`)
      .then((res) => setStyle(res.data.primary_style))
      .catch(() => setStyle(""));
  }, []);

  const learningStylePrompts = {
    Visual: "Explain this using visuals, diagrams, or metaphors.",
    Auditory: "Explain this as if you're speaking it aloud.",
    "Reading/Writing": "Respond with structured written content and summaries.",
    Logical: "Break this down into cause-effect steps and logical reasoning.",
    Social: "Encourage collaboration and explain in a peer-to-peer style.",
    Solitary: "Guide the user to reflect and learn independently."
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiKey = process.env.REACT_APP_GROQ_API_KEY;
      const prompt = learningStylePrompts[style] || "";
      const fullPrompt = `${prompt}\n\nUser question: ${input}`;

      const result = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: "llama3-8b-8192",
          messages: [{ role: "user", content: fullPrompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      setResponse(result.data.choices[0].message.content);
    } catch (err) {
      console.error(err);
      setResponse("An error occurred.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Groq Chat</h1>
      {style && (
        <p className="mb-2 text-gray-600">
          <strong>Learning Style:</strong> {style}
        </p>
      )}
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="w-full p-2 border rounded"
          rows={4}
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Send
        </button>
      </form>
      {response && (
        <div className="p-4 bg-gray-100 rounded shadow">
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;