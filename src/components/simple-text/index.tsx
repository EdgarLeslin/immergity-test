import { StyledText } from "@/styles/main-styles";

type TProps = {
  text: string;
  bold?: boolean;
  color?: string;
};

export const SimpleText = function SimpleText({
  text,
  bold,
  color = "#333",
}: TProps) {
  const getFontWidth = bold ? "600" : "";
  return (
    <StyledText fontWeight={getFontWidth} color={color}>
      {text}
    </StyledText>
  );
};
