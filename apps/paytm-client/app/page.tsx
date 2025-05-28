import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { PrismaClient } from "@repo/db/client";

export default function Home() {
  return (
    <div className="text-3xl font-bold underline border-4">
      Hello There
      <Button />
    </div>
    
  );
}
