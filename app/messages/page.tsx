import Messages from "@/components/messages";
import type { MessageProps } from "@/components/messages";
import { getMessages } from "@/lib/messages";

export default function MessagesPage() {
  const messages = getMessages() as MessageProps[];

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
