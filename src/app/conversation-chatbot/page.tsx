import DefaultLayout from '@/app/layouts/DefaultLayout';
import ConversationChat from '@/app/components/ConversationChat';

export default function ConversationChatbotPage() {

    return (
        <DefaultLayout>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Conversation chat interface</h1>
            <ConversationChat />
        </DefaultLayout>
    );
}