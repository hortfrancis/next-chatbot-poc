import { NextRequest, NextResponse } from 'next/server';
import { chat } from '@/services/openai';

export async function POST(req: NextRequest) {
    try {
        const { message } = await req.json();
        const response = await chat(message);
        return NextResponse.json({ response });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json({ error: 'Failed to fetch response from OpenAI' }, { status: 500 });
    }
}
