import { mdiSend } from "@mdi/js";
import Icon from "@mdi/react";
import Button from "components/Button";

function ContactButton() {
  return (
    <Button onClick={() => window.open("mailto:hello@zero-1.studio")}>
      <Icon className="mr-4 inline-block w-6" path={mdiSend} />
      Get in touch
    </Button>
  );
}

export default ContactButton;
