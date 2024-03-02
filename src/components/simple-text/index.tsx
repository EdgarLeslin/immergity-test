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
  return (
    <StyledText bold={bold} color={color}>
      {text}
    </StyledText>
  );
};
