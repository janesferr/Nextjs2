import Image from "next/image";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function IssuePage() {
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issues</Link>
      </Button>
    </div>
  );
}
