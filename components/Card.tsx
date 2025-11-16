"use client";

import PageList from "./PageList";
import DoneButton from "./Donebutton";

export default function Card() {
  return (
    <div className="w-full max-w-sm rounded-md bg-white p-6 shadow-lg">
      <PageList />
      <div className="mt-6">
        <DoneButton />
      </div>
    </div>
  );
}
