"use client";

import { useState } from "react";
import CheckboxRow from "./CheckboxRow";

export default function PageList() {
  const pageNames = ["Page 1", "Page 2", "Page 3", "Page 4"];

  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [pages, setPages] = useState<boolean[]>(Array(pageNames.length).fill(false));

  // NEW: proper indeterminate logic
  const indeterminate = pages.some((p) => p) && !pages.every((p) => p);

  // Toggle All Pages
  const toggleAll = () => {
    const newState = !(allChecked || indeterminate);
    setAllChecked(newState);
    setPages(pages.map(() => newState));
  };

  // Toggle individual page
  const togglePage = (index: number) => {
    const updated = [...pages];
    updated[index] = !updated[index];
    setPages(updated);

    // Sync "allChecked"
    const allAreChecked = updated.every((v) => v === true);
    setAllChecked(allAreChecked);
  };

  return (
    <div className="space-y-4">
      <div className="border-b border-gray-200 pt-2 pb-2">
        <CheckboxRow
          label="All pages"
          checked={allChecked}
          indeterminate={indeterminate}
          onChange={toggleAll}
        />
      </div>

      {pageNames.map((name, index) => (
        <div
          key={name}
          className={index === pageNames.length - 1 ? "border-b border-gray-200 pb-4" : ""}
        >
          <CheckboxRow label={name} checked={pages[index]} onChange={() => togglePage(index)} />
        </div>
      ))}
    </div>
  );
}
