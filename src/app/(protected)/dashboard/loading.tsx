import { Spinner } from "@/components/ui/spinner";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        <Spinner></Spinner>
      </div>
    </div>
  );
}
