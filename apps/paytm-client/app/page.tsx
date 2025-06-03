'use client'

import { Appbar } from "@repo/ui/AppBar";
import { signIn, signOut, useSession } from "next-auth/react";

import { JSX } from "react";

export default function Page(): JSX.Element {
  const session = useSession();

  return (
   <div>
   </div>
  );
}
