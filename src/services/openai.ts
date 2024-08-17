import OpenAI from 'openai';

const openai= new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const chat = async (message: string) => {
    try {
    const chatCompletion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are a polite, and concise, assistant. Reply in plain text -- only a paragraph or so." },
            { role: "user", content: message }
        ],
        model: "gpt-4o-mini",
    });
    return chatCompletion.choices[0].message.content;
    } catch (error) {
    console.error('chat error:', error);
    throw error;
    }
};

export default chat;

