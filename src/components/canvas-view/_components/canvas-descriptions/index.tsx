import {
  StyledListContainer,
  StyledList,
  StyledListItem,
} from "@/styles/main-styles";
import { memo } from "react";
import { SimpleText } from "@/components/simple-text";
import { getGaussAge } from "./_utils/get-gauss-age";
import { PX_TO_MM, TO_FIXED_NUMBER } from "./_constants";
import { getSquare } from "./_utils/get-square";

type TProps = {
  canvasLateralLineWidth: number;
  canvasWidth: number;
  canvasHeight: number;
  canvasLineWidth: number;
  canvasConvexity: number;
};

export const CanvasDescriptions = memo(function CanvasDescriptions({
  canvasLateralLineWidth,
  canvasConvexity,
  canvasLineWidth,
  canvasHeight,
  canvasWidth,
}: TProps) {
  const correlationByLineWidth = canvasLineWidth * 2;
  const lengthLinePx =
  canvasHeight * 2 + canvasWidth * 2 + Math.abs(canvasConvexity) * 2;
  const lengthLineMm = (lengthLinePx * PX_TO_MM).toFixed(TO_FIXED_NUMBER);

  const commonSquarePx = getSquare({
    lateralLineWidth: canvasLateralLineWidth,
    convexity: canvasConvexity,
    width: canvasWidth,
    height: canvasHeight,
    lineWidth: canvasLineWidth,
  });
  const commonSquareMm = (commonSquarePx * PX_TO_MM).toFixed(TO_FIXED_NUMBER);

  const squareLine = canvasLineWidth * lengthLinePx

  const figureSquarePx = commonSquarePx - squareLine
  const figureSquareMm = (figureSquarePx * PX_TO_MM).toFixed(TO_FIXED_NUMBER);

  const commonHeightPx = canvasHeight;
  const commonHeightMm = (commonHeightPx * PX_TO_MM).toFixed(TO_FIXED_NUMBER);
  const figureHeightPx = canvasHeight - correlationByLineWidth;
  const figureHeightMm = (figureHeightPx * PX_TO_MM).toFixed(TO_FIXED_NUMBER);

  const commonWidthPx = canvasWidth;
  const commonWidthMm = (commonWidthPx * PX_TO_MM).toFixed(TO_FIXED_NUMBER);
  const figureWidthPx = canvasWidth - correlationByLineWidth;
  const figureWidthMm = (figureWidthPx * PX_TO_MM).toFixed(TO_FIXED_NUMBER);

  const gaussAge = getGaussAge();

  const toNumberFixedText = `(округляем до ${TO_FIXED_NUMBER} знаков)`;

  const formattedDisplayNumber = (text: string) =>
    text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const getDescriptionText = ({
    px,
    mm,
    square,
  }: {
    px: number;
    mm: string;
    square?: number;
  }) => {
    const formattedPx = formattedDisplayNumber(`${px}`);
    const formmattedMm = formattedDisplayNumber(`${mm}`);
    return `${formattedPx} px${square || ""} / ${formmattedMm} мм${
      square || ""
    } ${toNumberFixedText}`;
  };

  return (
    <StyledListContainer>
      <StyledList>
        <StyledListItem>
          <SimpleText text="Высота фигуры внутренняя: " />
          <SimpleText
            bold
            text={getDescriptionText({
              px: figureHeightPx,
              mm: figureHeightMm,
            })}
          />
        </StyledListItem>

        <StyledListItem>
          <SimpleText text="Общая высота фигуры: " />
          <SimpleText
            bold
            text={getDescriptionText({
              px: commonHeightPx,
              mm: commonHeightMm,
            })}
          />
        </StyledListItem>

        <StyledListItem>
          <SimpleText text="Ширина фигуры внутренняя: " />
          <SimpleText
            bold
            text={getDescriptionText({
              px: figureWidthPx,
              mm: figureWidthMm,
            })}
          />
        </StyledListItem>

        <StyledListItem>
          <SimpleText text="Общая ширины фигуры: " />
          <SimpleText
            bold
            text={getDescriptionText({
              px: commonWidthPx,
              mm: commonWidthMm,
            })}
          />
        </StyledListItem>

        <StyledListItem>
          <SimpleText text="Площадь фигуры внутренняя: " />
          <SimpleText
            bold
            text={getDescriptionText({
              px: figureSquarePx,
              mm: figureSquareMm,
              square: 2,
            })}
          />
        </StyledListItem>

        <StyledListItem>
          <SimpleText text="Площадь фигуры общая: " />
          <SimpleText
            bold
            text={getDescriptionText({
              px: commonSquarePx,
              mm: commonSquareMm,
              square: 2,
            })}
          />
        </StyledListItem>

        <StyledListItem>
          <SimpleText text="Общая длина линий: " />
          <SimpleText
            bold
            text={getDescriptionText({
              px: lengthLinePx,
              mm: lengthLineMm,
            })}
          />
        </StyledListItem>

        <StyledListItem>
          <SimpleText text="Возраст Карла Гаусса: " />
          <SimpleText bold text={`${gaussAge} лет. Это важно)))`} />
        </StyledListItem>
      </StyledList>
    </StyledListContainer>
  );
});
