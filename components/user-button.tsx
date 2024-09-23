import Avatar from "boring-avatars";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/cn";

interface Props {
  description?: string;
  user: {
    name: string;
  };
}

export function UserButton({ description, user }: Props) {
  return (
    <Link
      href={"/profile"}
      className={cn(
        buttonVariants({
          variant: "muted-reverse",
          className: "rounded-full px-1",
        })
      )}
      title={user.name}
    >
      {description ? <span className="ml-2">{description}</span> : null}
      <Avatar
        size={32}
        name={user.name}
        className={cn("mr-2", description && "mx-2")}
        colors={["#ffba08", "#f48c06", "#dc2f02", "#9d0208"]}
      />
      <span className="mr-2 truncate max-w-[12ch]">{user.name}</span>
    </Link>
  );
}
