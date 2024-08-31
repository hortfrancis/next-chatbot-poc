'use client';

import { useState, useEffect } from 'react';

const MAX_HISTORY_LENGTH = 5; // Max number of exchanges to store (user and bot messages)

export default function useConversation() {
    // Initialize conversation from localStorage if available
    const [conversation, setConversation] = useState<Array<{ role: string, content: string }>>(() => {
        const savedConversation = localStorage.getItem('conversation');
        return savedConversation ? JSON.parse(savedConversation) : [];
    });

    // Save conversation to localStorage whenever it updates
    useEffect(() => {
        localStorage.setItem('conversation', JSON.stringify(conversation));
    }, [conversation]);

    // Add a new message to the conversation array
    const addMessage = (role: string, content: string) => {
        setConversation((prev) => {
            const updatedConversation = [...prev, { role, content }];

            // If conversation length exceeds the max, remove the oldest message (FIFO)
            if (updatedConversation.length > MAX_HISTORY_LENGTH * 2) { // *2 because there are two roles
                return updatedConversation.slice(-MAX_HISTORY_LENGTH * 2);
            }
            return updatedConversation;
        });
    };

    return {
        conversation,  // The array of messages (user and bot)
        addMessage,    // Function to add a new message to the conversation
    };
}
