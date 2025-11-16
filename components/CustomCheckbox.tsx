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
      className={`group flex h-5 w-5 items-center justify-center rounded border transition-all duration-150 ${
        isChecked
          ? "border-[#2469F6] bg-[#2469F6] hover:border-[#5087F8] hover:bg-[#5087F8]"
          : indeterminate
            ? "border-[#CDCDCD] bg-white" /* FIXED: no gray fill */
            : "border-[#CDCDCD] bg-white hover:border-[#BDBDBD]"
      } `}
    >
      {/* Checked OR indeterminate */}
      {(isChecked || indeterminate) && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke={indeterminate ? "#878787" : "white"} /* FIXED COLOR */
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}

      {/* Hover preview checkmark ONLY for fully unchecked */}
      {!isChecked && !indeterminate && (
        <svg
          className="opacity-0 transition-opacity duration-150 group-hover:opacity-50"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#878787"
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
