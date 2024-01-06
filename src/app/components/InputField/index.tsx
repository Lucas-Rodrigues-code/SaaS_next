import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
type Props = {
  color: string;
  placeHolder: string;
  value: string;
  onChange: (newValue: string) => void;
  password?: boolean;
};
export default function InputField({
  color,
  placeHolder,
  value,
  onChange,
  password,
}: Props) {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className="w-full h-16 bg-#f9f9fb rounded px-4 flex"
      style={{
        border: "2px solid #f9f9fb",
        borderColor: focused ? color : "#f9f9fb",
        backgroundColor: focused ? "#fff" : "#f9f9fb",
      }}
    >
      <input
        className="bg-transparent text-#1b1b1b font-normal text-base flex-1"
        style={{ border: 0, outline: 0 }}
        type={password ? (showPassword ? "text" : "password") : "text"}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {password && (
        <div
          className="flex items-center"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <FaEye color="#bbb" size={28} />
          ) : (
            <FaEyeSlash size={28} color="#bbb" />
          )}
        </div>
      )}
    </div>
  );
}
