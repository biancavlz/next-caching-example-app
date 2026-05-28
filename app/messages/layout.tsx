import { getMessages } from "@/lib/messages";

type MessagesLayoutProps = {
  children: React.ReactNode;
};

export default function MessagesLayout({ children }: MessagesLayoutProps) {
  const messages = getMessages();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
