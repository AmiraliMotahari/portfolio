"use client";

import { Button, ButtonProps } from "./ui/button";

type Props = {
  email: string;
} & Omit<ButtonProps, "onClick">;

const EmailTo = ({ email, ...props }: Props) => {
  const handleClick = () => {
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      {props.children}
    </Button>
  );
};

export default EmailTo;
