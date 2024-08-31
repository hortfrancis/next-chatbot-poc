import { NextRequest, NextResponse } from 'next/server';
import { chatWithHistory } from '@/services/openai';

export async function POST(req: NextRequest) {
    try {
        const { conversation } = await req.json();
        const response = await chatWithHistory(conversation);
        return NextResponse.json({ response });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json({ error: 'Failed to fetch response from OpenAI' }, { status: 500 });
    }
}
