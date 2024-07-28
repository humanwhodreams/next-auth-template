"use client";

import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";

import { Button } from "../ui/button";

interface Props {
  providers: {
    google?: () => void;
    github?: () => void;
  };
}

export function OAuths({ providers }: Props) {
  return (
    <>
      <Button
        type="button"
        variant="gloss"
        onClick={() => alert("google auth")}
        className="col-span-2"
      >
        <FaGoogle
          size={20}
          className="flex-shrink-0 mr-2 text-muted-foreground"
        />
        Google
      </Button>
      
      <Button
        type="button"
        variant="gloss"
        onClick={() => alert("github auth")}
      >
        <FaGithub
          size={20}
          className="flex-shrink-0 mr-2 text-muted-foreground"
        />
        GitHub
      </Button>

      <Button
        type="button"
        variant="gloss"
        onClick={() => alert("facebook auth")}
      >
        <FaFacebook
          size={20}
          className="flex-shrink-0 mr-2 text-muted-foreground"
        />
        Facebook
      </Button>
    </>
  );
}
