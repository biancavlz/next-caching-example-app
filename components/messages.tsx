type MessageProps = {
  id: number;
  text: string;
};

interface MessagesProps {
  messages: MessageProps[];
}

export default function Messages({ messages }: MessagesProps) {
  return (
    <ul className="messages">
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
}
