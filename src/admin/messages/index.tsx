import { useState } from "react";
import MessageForm from "~/views/admin/messages/form";
import MessagesHistory from "~/views/admin/messages/history";

export interface MessageType {
  first_name: string;
  last_name: string;
  subject: string;
  time: string;
  active: boolean;
  mail: string;
  phone: string;
  message: string;
}

export default function MessageFormPage() {
  const [initialValues, setInitialValues] = useState<MessageType | null>(null);

  return (
    <div className="flex">
      <MessagesHistory messages={[]} setMmessageData={setInitialValues} />
      <MessageForm initialValues={initialValues} />
    </div>
  );
}
