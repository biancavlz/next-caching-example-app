// import { unstable_noStore as noStore } from "next/cache"; // legacy: unstable_noStore will opt out the prerendering

import Messages from "@/components/messages";

// These constances will be applied to the entire file in the requests functions
export const revalidate = 5;
export const dynamic = "force-dynamic"; // equivalent to cache: "no-store"

export default async function MessagesPage() {
  // noStore();
  const response = await fetch("http://localhost:8080/messages");

  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
