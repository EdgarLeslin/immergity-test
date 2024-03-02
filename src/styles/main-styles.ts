"use client";
import styled, { css } from "styled-components";

type StyledListItemProps = {
  bold?: boolean;
  color?: string;
};

export const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

export const Main = styled.main`
  padding: 20px;
`;

export const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

export const StyledText = styled.p<StyledListItemProps>`
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: ${({ color }) => color || "#333"};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;

export const StyledListContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const StyledListItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const CanvasOptionsStyle = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px red;
  padding: 20px;
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Description = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const PixiCanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`;
