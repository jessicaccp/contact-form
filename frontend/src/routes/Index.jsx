import Form from "../components/Form";
import Button from "../components/Button";
import Default from "../layouts/Default";
import { useState } from "react";

export default function Index() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleButton = () => {
    setSuccess(null);
    setError(null);
  };

  const headerTitle = "Get in contact with us";
  const headerSubtitle = "You can send a hello to our team!";

  const mainContent = (
    <>
      {success !== true && <Form setSuccess={setSuccess} setError={setError} />}
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
    </>
  );

  return (
    <>
      <Default
        headerTitle={headerTitle}
        headerSubtitle={headerSubtitle}
        main={mainContent}
      />
    </>
  );
}
