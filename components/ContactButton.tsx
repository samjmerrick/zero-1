import { mdiSend } from "@mdi/js";
import Icon from "@mdi/react";
import Button from "components/Button";

function ContactButton(props: { color?: "Dark" | "Light" }) {
  return (
    <Button
      onClick={() => window.open("mailto:hello@zero-1.studio")}
      className={
        props.color == "Light" &&
        "bg-neutral-100 text-neutral-800 hover:bg-neutral-300"
      }
    >
      <Icon className="mr-4 inline-block w-6" path={mdiSend} />
      Get in touch
    </Button>
  );
}

export default ContactButton;
