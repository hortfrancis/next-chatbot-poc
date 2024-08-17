'use client';

import { useState } from 'react';

export default function Chat() {
    const [inputText, setInputText] = useState<string>('');
    const [response, setResponse] = useState<string | null>(null);
    const [sending, setSending] = useState<boolean>(false);

    const sendMessage = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!inputText.trim()) return;  // Prevent empty submissions
        setSending(true);
        try {
            const res = await fetch('/api/openai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: inputText }),
            });
            const data = await res.json();
            setResponse(data.response);
        } catch (error) {
            console.error('error:', error);
            setResponse('Something went wrong. Please try again.');
        } finally {
            setSending(false);
            setInputText('');  // Clear the input field after sending
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto my-8 p-6 bg-white rounded shadow-md">
            <form onSubmit={sendMessage} className="flex flex-col space-y-4">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your message here..."
                    className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
                <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
                    disabled={sending}
                >
                    {sending ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            {sending && (
                <div className="mt-4 flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            )}

            {response && (
                <div className="mt-4 p-4 bg-gray-100 border rounded">
                    <p><strong>Response:</strong> {response}</p>
                </div>
            )}
        </div>
    );
}
