"use client";

import CustomCheckbox from "./CustomCheckbox";

interface Props {
  label: string;
  checked: boolean;
  indeterminate?: boolean;
  onChange: () => void;
}

export default function CheckboxRow({ label, checked, indeterminate, onChange }: Props) {
  return (
    <div className="flex w-full items-center justify-between">
      <span className="text-sm font-light text-gray-900">{label}</span>

      <CustomCheckbox checked={checked} indeterminate={indeterminate} onChange={onChange} />
    </div>
  );
}
