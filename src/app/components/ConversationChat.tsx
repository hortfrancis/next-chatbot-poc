'use client';

import { useState } from 'react';
import useConversation from '@/app/hooks/useConversation';  

export default function ConversationChat() {
    const [inputText, setInputText] = useState<string>('');
    const [sending, setSending] = useState<boolean>(false);
    const { conversation, addMessage } = useConversation();

    const sendMessage = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!inputText.trim()) return;

        addMessage("user", inputText);
        setSending(true);

        try {
            const res = await fetch('/api/conversation-chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ conversation: conversation.concat({ role: "user", content: inputText }) }),
            });
            const data = await res.json();
            addMessage("assistant", data.response);
        } catch (error) {
            console.error('Error:', error);
            addMessage("assistant", "Something went wrong. Please try again.");
        } finally {
            setInputText('');  // Clear the input field after sending
            setSending(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto my-8 p-6 bg-white rounded shadow-md">
            <form onSubmit={sendMessage} className="flex flex-col space-y-4">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your message here..."
                    className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300 text-black"
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

            <div className="mt-4 space-y-2">
                {conversation.map((msg, index) => (
                    <div key={index} className={`p-2 rounded ${msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
                        <p className="text-sm">
                            <strong>{msg.role === 'user' ? 'You' : 'Chatbot'}:</strong> {msg.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
