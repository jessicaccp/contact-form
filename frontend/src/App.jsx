import Form from "./components/Form";
import Button from "./components/Button";
import { useState } from "react";

export default function App() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleButton = () => {
    setSuccess(null);
    setError(null);
  };

  return (
    <div className="w-dvw h-dvh bg-gradient-to-r from-violet-200 to-pink-200 p-4 flex flex-col">
      <div className="container max-w-[600px] flex flex-col gap-4 m-auto">
        <header className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">Get in contact with us</h1>
          <small className="text-lg">You can send a hello to our team!</small>
        </header>
        <main className="flex flex-col w-full gap-4 items-center">
          {success !== true && (
            <Form setSuccess={setSuccess} setError={setError} />
          )}
          {success && (
            <>
              <p className="text-xl my-4">Message sent successfully!</p>
              <Button value="Send another one" handle={handleButton} />
            </>
          )}
          {success === false && (
            <>
              <p className="text-md">
                An error occurred while sending the message. Try again.
              </p>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
