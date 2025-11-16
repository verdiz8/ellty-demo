"use client";

interface Props {
  checked: boolean;
  indeterminate?: boolean;
  onChange: () => void;
}

export default function CustomCheckbox({ checked, indeterminate, onChange }: Props) {
  const isChecked = checked && !indeterminate;

  return (
    <button
      type="button"
      onClick={onChange}
      className={`group /* <-- IMPORTANT FOR HOVER EFFECT */ flex h-5 w-5 items-center justify-center rounded border transition-all duration-150 ${
        isChecked
          ? "border-blue-500 bg-blue-500"
          : indeterminate
            ? "border-gray-300 bg-gray-100"
            : "border-gray-200 bg-gray-100 hover:border-gray-300 hover:bg-gray-200"
      } `}
    >
      {/* Checked OR indeterminate: normal checkmark */}
      {(isChecked || indeterminate) && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke={indeterminate ? "gray" : "white"} // faded or white
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}

      {/* Hover preview checkmark (only when fully unchecked) */}
      {!isChecked && !indeterminate && (
        <svg
          className="opacity-0 transition-opacity duration-150 group-hover:opacity-40"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </button>
  );
}
