// Dropdown.tsx

import React from "react";

interface DropdownProps {
  label: string;
  options: { value: string; label: string }[];
  selectedOption: string;
  onChange: (selectedValue: string) => void; // Updated to accept a string
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedOption,
  onChange,
  className,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          value={selectedOption}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full bg-white border rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="fill-current h-4 w-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
