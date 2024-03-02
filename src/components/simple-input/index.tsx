"use client";
import { useCallback, memo, ChangeEvent } from "react";
import { Input } from "@/styles/main-styles";
import { SimpleText } from "@/components/simple-text";

type TProps = {
  value: string | number;
  onChange: (value: string) => void;
  type?: "number" | "text";
  placeholder?: string;
  isError?: boolean;
  errorText?: string;
};

export const SimpleInput = memo(function SimpleInput({
  value,
  onChange,
  type = "text",
  placeholder = "",
  isError = false,
  errorText = "",
}: TProps) {
  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <span>
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleOnChange}
      />
      {isError && <SimpleText color="red" text={errorText} />}
    </span>
  );
});
