import { nanoid } from "@/lib/utils";
import { ReactElement, JSXElementConstructor } from "react";
import { Resend } from "resend";

export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export const sendEmail = async ({
  to,
  subject,
  react,
  marketing,
  system,
  test,
}: {
  to: string;
  subject: string;
  react: ReactElement<any, string | JSXElementConstructor<any>>;
  marketing?: boolean;
  system?: boolean;
  test?: boolean;
}) => {
  if (!resend) {
    console.log(
      "Resend is not configured. You need to add a RESEND_API_KEY in your .env file for emails to work.",
    );
    return Promise.resolve();
  }
  return resend.emails.send({
    from: marketing
      ? "Nathan from GHLSign <admin@updates.ghlsign.com>"
      : system
        ? "GHLSign <admin@updates.ghlsign.com"
        : "Nathan from GHLSign <admin@updates.ghlsign.com>",
    to: test ? "delivered@resend.dev" : to,
    reply_to: marketing ? "support@ghl.tools" : undefined,
    subject,
    react,
    headers: {
      "X-Entity-Ref-ID": nanoid(),
    },
  });
};
