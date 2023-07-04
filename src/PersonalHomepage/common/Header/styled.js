import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 66px;
  max-width: 1097px;
  margin-bottom: 63px;
  font-size: 20px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const HeaderImage = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
`;

export const PrevTitle = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.basic.text};
  margin-bottom: 12px;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 1.9px;
  margin: 0;
  color: ${({ theme }) => theme.titles.color};
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 35px 0 32px 0;
  color: ${({ theme }) => theme.basic.text};
`;

export const EmailButton = styled.button`
  display: inline-flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: ${({ theme }) => theme.buttons.background};
  border: 1px solid ${({ theme }) => theme.buttons.background};
  border-radius: 4px;
`;

export const Envelope = styled.img`
  width: 24px;
  height: 24px;
`;

export const Link = styled.a`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration-line: none;
  color: ${({ theme }) => theme.buttons.text};
`;
