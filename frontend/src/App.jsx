import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="w-dvw h-dvh bg-gradient-to-r from-violet-200 to-pink-200 p-4 flex flex-col">
      <div className="container max-w-[600px] flex flex-col gap-4 m-auto">
        <header className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">Get in contact with us</h1>
          <small className="text-lg">You can send a hello to our team!</small>
        </header>
        <main>
          <Form setSuccess={setSuccess} setError={setError} />
        </main>
      </div>
    </div>
  );
}
