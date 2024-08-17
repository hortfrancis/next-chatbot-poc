import DefaultLayout from '@/app/layouts/DefaultLayout';
import Chat from '../components/Chat';

export default function SimpleChatbotPage() {
    return (
        <DefaultLayout>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Simple chat interface</h1>
            <Chat />
        </DefaultLayout>
    );
}