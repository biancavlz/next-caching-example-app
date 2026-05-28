import Messages from "@/components/messages";

export default async function MessagesPage() {
  // Instead of using the revalidatePath(), could be part of the request too
  const response = await fetch("http://localhost:8080/messages", {
    next: {
      revalidate: 5,
    },
  });

  // Another way to set no cache
  // const response = await fetch("http://localhost:8080/messages", {
  //   cache: "no-store",
  // });

  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
