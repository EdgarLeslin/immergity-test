"use client";
import { memo, useCallback, useState } from "react";
import { SimpleInput } from "@/components/simple-input";
import { SimpleText } from "@/components/simple-text";
import {
  CanvasOptionsStyle,
  InputGroup,
  FlexContainer,
} from "@/styles/main-styles";

type TProps = {
  setCanvasConvexity: (convexity: string) => void;
  setCanvasLineWidth: (lineWidth: string) => void;
  setCanvasHeight: (height: string) => void;
  setCanvasWidth: (width: string) => void;
  setCanvasLateralLineWidth: (llateraLineWidth: string) => void;
  setColorBeginFill: (colorBeginFill: string) => void;
  setColorBorder: (colorBorder: string) => void;
  setBackgroundColor: (backgroundColor: string) => void;
  canvasLateralLineWidth: string;
  canvasWidth: string;
  canvasHeight: string;
  canvasLineWidth: string;
  canvasConvexity: string;
  colorBeginFill: string;
  colorBorder: string;
  backgroundColor: string;
};

export const CanvasOptions = memo(function CanvasOptions({
  setCanvasConvexity,
  setCanvasLineWidth,
  setCanvasHeight,
  setCanvasWidth,
  setCanvasLateralLineWidth,
  setColorBeginFill,
  setColorBorder,
  setBackgroundColor,
  canvasLateralLineWidth,
  canvasConvexity,
  canvasLineWidth,
  canvasHeight,
  canvasWidth,
  colorBorder,
  colorBeginFill,
  backgroundColor,
}: TProps) {
  const [errorConvexity, setErrorConvexity] = useState(false);

  const [errorLineWidth, setErrorLineWidt] = useState(false);

  const [errorLateralLineWidth, setErrorLateralLineWidth] = useState(false);

  const handleCanvasConvexity = useCallback(
    (value: string) => {
      const validateValue = Number(canvasHeight) > Math.abs(Number(value));
      if (validateValue) {
        setErrorConvexity(false);
        setCanvasConvexity(value);
      } else {
        setErrorConvexity(true);
      }
    },
    [canvasHeight, setCanvasConvexity]
  );

  const handleLineWidth = useCallback(
    (value: string) => {
      const validateValue =
        Number(value) >= 0 && Number(value) < Number(canvasWidth) / 2;
      console.log(validateValue);
      if (validateValue) {
        setErrorLineWidt(false);
        setCanvasLineWidth(value);
      } else {
        setErrorLineWidt(true);
      }
    },
    [canvasWidth, setCanvasLineWidth]
  );

  const handleLateralLineWidth = useCallback(
    (value: string) => {
      const validateValue =
        Number(value) >= 0 && Number(value) < Number(canvasWidth) / 2;
      if (validateValue) {
        setErrorLateralLineWidth(false);
        setCanvasLateralLineWidth(value);
      } else {
        setErrorLateralLineWidth(true);
      }
    },
    [canvasHeight, setCanvasLateralLineWidth]
  );

  return (
    <CanvasOptionsStyle>
      <SimpleText bold text="Единица измерения: px" />
      <FlexContainer>
        <InputGroup>
          <SimpleText bold text="Цвет линии: " />
          <SimpleInput
            type="text"
            value={colorBorder}
            onChange={setColorBorder}
            placeholder="Цвет линии"
          />
          <SimpleText bold text="Цвет заливки: " />
          <SimpleInput
            type="text"
            value={colorBeginFill}
            onChange={setColorBeginFill}
            placeholder="Цвет заливки"
          />
          <SimpleText bold text="Цвет фона: " />
          <SimpleInput
            type="text"
            value={backgroundColor}
            onChange={setBackgroundColor}
            placeholder="Цвет фона"
          />
        </InputGroup>
        <InputGroup>
          <SimpleText bold text="Выпуклость фигуры: " />
          <SimpleInput
            type="number"
            value={canvasConvexity}
            onChange={handleCanvasConvexity}
            placeholder="Выпуклость фигуры"
            isError={errorConvexity}
            errorText="Модуль выпуклости не может быть больше высоты"
          />
          <SimpleText bold text="Толщина линий: " />
          <SimpleInput
            type="number"
            value={canvasLineWidth}
            onChange={handleLineWidth}
            placeholder="Толщина линий"
            isError={errorLineWidth}
            errorText="Толщина линии не может быть больше ширины 1/2 ширины или отрицательной"
          />
          <SimpleText bold text="Длина линий перед выпуклым элементом: " />
          <SimpleInput
            type="number"
            onChange={handleLateralLineWidth}
            value={canvasLateralLineWidth}
            placeholder="Длина линий перед выпуклым элементом"
            isError={errorLateralLineWidth}
            errorText="Длина линии не может быть больше 1/2 ширины или отрицательной"
          />
        </InputGroup>
        <InputGroup>
          <SimpleText bold text="Высота фигуры внешняя: " />
          <SimpleInput
            type="number"
            onChange={setCanvasHeight}
            value={canvasHeight}
            placeholder="Высота фигуры"
          />
          <SimpleText bold text="Ширина фигуры внешняя: " />
          <SimpleInput
            type="number"
            onChange={setCanvasWidth}
            value={canvasWidth}
            placeholder="Ширина фигуры"
          />
        </InputGroup>
      </FlexContainer>
    </CanvasOptionsStyle>
  );
});
