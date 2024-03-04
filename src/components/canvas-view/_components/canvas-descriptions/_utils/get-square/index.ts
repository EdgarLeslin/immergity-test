type TProps = {
  width: number;
  height: number;
  convexity: number;
  lateralLineWidth: number;
};

export const getSquare = ({
  width,
  height,
  convexity,
  lateralLineWidth,
}: TProps): number => {
  const isConvexity = convexity <= 0;
  const convexityWidth = width - lateralLineWidth * 2;
  const squareConvexity = convexityWidth * Math.abs(convexity);

  if (isConvexity) {
    const commonSquare = width * (height + convexity);

    return commonSquare + squareConvexity;
  } else {
    const commonSquare = width * height;

    return commonSquare - squareConvexity;
  }
};
