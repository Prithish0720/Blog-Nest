const { GoogleGenAI } = require("@google/genai");

const callGemini = async (prompt) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('Gemini API key is not configured');
  }

  const ai = new GoogleGenAI({ apiKey: apiKey });
  
  const response = await ai.models.generateContent({
    model: "gemini-3.8-flash",
    contents: prompt,
  });

  return response.text;
};

module.exports = { callGemini };