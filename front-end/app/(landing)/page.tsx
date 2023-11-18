import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const LandingPage = () => {
  return (
    <div>
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
