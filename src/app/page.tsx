import Link from "next/link";


export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-6 sm:p-12 md:p-24 gap-10">
      <h1 className="text-5xl font-bold">Chatbot Concepts</h1>

      <div className="space-y-2 text-sm  md:text-base">
        <p>GitHub repo: <a href="https://github.com/hortfrancis/next-chatbot-poc" className="text-blue-500 hover:underline" >github.com/hortfrancis/next-chatbot-poc</a></p>
        <p>By <a href="https://hortfrancis.com/" className="text-blue-500 hover:underline">Alex Hort-Francis</a></p>
      </div>

      <nav className="space-y-4">
        <h2 className="text-3xl font-bold">Contents</h2>
        <ul className="list-disc list-inside flex flex-col gap-4">
          <li>
            <Link href="/simple-chatbot" className="text-xl font-semibold  text-blue-500 hover:underline">Simple Chatbot</Link>
            <div className="flex flex-col gap-1 pl-5 mt-1 text-sm text-slate-600">
              <p>A chatbot interface that let&apos;s the user send a single query to a langugage model and view the response.</p>
              <p>New queries and responses replace the previous one.</p>
              <p>Powered by OpenAI&apos;s GPT-4 Turbo</p>
            </div>
          </li>
          <li>
            <Link href="/conversation-chatbot" className="text-xl font-semibold  text-blue-500 hover:underline">Conversation Chatbot</Link>
            <div className="flex flex-col gap-1 pl-5 mt-1 text-sm text-slate-600">
              <p>A chatbot interface that allows the user to have a conversation with a language model.</p>
              <p>Each message is added to the conversation history -- up to 5 question-answer interactions.</p>
              <p>Powered by OpenAI&apos;s GPT-4 Turbo</p>
            </div>
          </li>
        </ul>
      </nav>
    </main>
  );
}
