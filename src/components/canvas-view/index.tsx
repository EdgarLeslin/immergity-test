"use client";
import { useState, memo } from "react";
import { PixiCanvas } from "../pixi-container";
import { CanvasOptions } from "./_components/canvas-options";
import { CanvasDescriptions } from "./_components/canvas-descriptions";
import { SimpleText } from "@/components/simple-text";
import { INIT_STATE } from "../_constants";
import { Description } from "@/styles/main-styles";

export const CanvasView = memo(function CanvasView() {
  const [canvasWidth, setCanvasWidth] = useState(INIT_STATE.canvasWidth);
  const [canvasHeight, setCanvasHeight] = useState(INIT_STATE.canvasHeight);
  const [canvasLineWidth, setCanvasLineWidth] = useState(
    INIT_STATE.canvasLineWidth
  );
  const [canvasConvexity, setCanvasConvexity] = useState(
    INIT_STATE.canvasConvexity
  );

  const [canvasLateralLineWidth, setCanvasLateralLineWidth] = useState(
    INIT_STATE.canvasLateralLineWidth
  );

  const [colorBorder, setColorBorder] = useState(INIT_STATE.colorBorder);
  const [colorBeginFill, setColorBeginFill] = useState(
    INIT_STATE.colorBeginFill
  );

  const [backgroundColor, setBackgroundColor] = useState(
    INIT_STATE.backgroundColor
  );

  return (
    <>
      <Description>
        <SimpleText
          text="Отрисовываем 3 фигуры: если Выпуклость = 0 получаем квадрат, если
        Выпуклость больше 0 получаем фигуру вогнутую вовнутрь, если Выпуклость
        меньше нуля получаем выпуклую фигуру наружу. Фигура переприсовывается реактивно. Данные пересчитываются реактивно. Цвета меняются по правилу HEX"
        />
      </Description>
      <CanvasOptions
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        canvasLineWidth={canvasLineWidth}
        canvasConvexity={canvasConvexity}
        canvasLateralLineWidth={canvasLateralLineWidth}
        colorBorder={colorBorder}
        colorBeginFill={colorBeginFill}
        backgroundColor={backgroundColor}
        setCanvasConvexity={setCanvasConvexity}
        setCanvasLineWidth={setCanvasLineWidth}
        setCanvasWidth={setCanvasWidth}
        setCanvasHeight={setCanvasHeight}
        setCanvasLateralLineWidth={setCanvasLateralLineWidth}
        setColorBorder={setColorBorder}
        setColorBeginFill={setColorBeginFill}
        setBackgroundColor={setBackgroundColor}
      />
      <PixiCanvas
        width={Number(canvasWidth)}
        height={Number(canvasHeight)}
        lineWidth={Number(canvasLineWidth)}
        convexity={Number(canvasConvexity)}
        lateralLineWidth={Number(canvasLateralLineWidth)}
        colorBorder={colorBorder}
        colorBeginFill={colorBeginFill}
        backgroundColor={backgroundColor}
      />
      <CanvasDescriptions
        canvasWidth={Number(canvasWidth)}
        canvasHeight={Number(canvasHeight)}
        canvasLineWidth={Number(canvasLineWidth)}
        canvasConvexity={Number(canvasConvexity)}
        canvasLateralLineWidth={Number(canvasLateralLineWidth)}
      />
    </>
  );
});
