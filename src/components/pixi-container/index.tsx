"use client";
import { useEffect, memo } from "react";
import type { ColorSource } from "@pixi/core";
import { INIT_STATE } from "../_constants";
import { PixiCanvasContainer } from "@/styles/main-styles";
import * as PIXI from "pixi.js";

type TProps = {
  width: number;
  height: number;
  convexity: number;
  lineWidth: number;
  lateralLineWidth: number;
  colorBeginFill: ColorSource;
  colorBorder: ColorSource;
  backgroundColor: ColorSource;
};

export const PixiCanvas = memo(function PixiCanvas({
  lineWidth,
  width,
  height,
  convexity,
  lateralLineWidth,
  colorBeginFill,
  colorBorder,
  backgroundColor,
}: TProps) {
  useEffect(() => {
    const app = new PIXI.Application({
      width,
      height,
    });

    document
      .getElementById("canvas-container")
      ?.appendChild(app.view as HTMLCanvasElement);

    const figure = new PIXI.Graphics();

    try {
      figure.beginFill(colorBeginFill);
    } catch {
      figure.beginFill(INIT_STATE.colorBeginFill);
    }

    const halfLineWidth = lineWidth / 2;

    /** Определяем вверхнюю точку блока с учетом изгиба */
    const startTopPointWitchConvexity =
      convexity > 0 ? halfLineWidth : Math.abs(convexity) + halfLineWidth;
    /** Определяем вверхнюю точку   изгиба */
    const convexityTopPoint =
      convexity <= 0 ? halfLineWidth : convexity + halfLineWidth;
    /** считаем нулевую точку по высоте с учетом ширины линий */
    const zeroPointTopWithLineWidth = width - lateralLineWidth + halfLineWidth;
    /** определяем нулевую точку слева как ширину линии */
    const zeroPiointLeft = halfLineWidth;
    // Определяем координаты точек для каждой линии
    const A = new PIXI.Point(zeroPiointLeft, startTopPointWitchConvexity);
    // const B = new PIXI.Point(100, 300);
    const B = new PIXI.Point(
      lateralLineWidth - halfLineWidth,
      startTopPointWitchConvexity
    );
    const C = new PIXI.Point(
      lateralLineWidth - halfLineWidth,
      convexityTopPoint
    );
    const D = new PIXI.Point(zeroPointTopWithLineWidth, convexityTopPoint);
    const E = new PIXI.Point(
      zeroPointTopWithLineWidth,
      startTopPointWitchConvexity
    );
    const F = new PIXI.Point(
      width - halfLineWidth,
      startTopPointWitchConvexity
    );
    const J = new PIXI.Point(width - halfLineWidth, height - halfLineWidth);
    const H = new PIXI.Point(zeroPiointLeft, height - halfLineWidth);
    /** Определеяем конечную точку фигуры в начальной позиции с учетом толщины линии */
    const aYZeroWitchLineWidth = A.y - halfLineWidth;

    try {
      figure.lineStyle(lineWidth, colorBorder);
    } catch {
      figure.lineStyle(lineWidth, INIT_STATE.colorBorder);
    }

    figure.moveTo(A.x, A.y);
    figure.lineTo(B.x, B.y);
    figure.lineTo(C.x, C.y);
    figure.lineTo(D.x, D.y);
    figure.lineTo(E.x, E.y);
    figure.lineTo(F.x, F.y);
    figure.lineTo(J.x, J.y);
    figure.lineTo(H.x, H.y);
    figure.lineTo(A.x, aYZeroWitchLineWidth);

    app.stage.addChild(figure);

    try {
      app.renderer.background.color = backgroundColor;
    } catch {
      app.renderer.background.color = INIT_STATE.backgroundColor;
    }

    return () => {
      app.destroy(true);
    };
  }, [
    backgroundColor,
    colorBeginFill,
    colorBorder,
    convexity,
    height,
    lateralLineWidth,
    lineWidth,
    width,
  ]);

  return (
    <PixiCanvasContainer>
      {" "}
      <div id="canvas-container"></div>;
    </PixiCanvasContainer>
  );
});
