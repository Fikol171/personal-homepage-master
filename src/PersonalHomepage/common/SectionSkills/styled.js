import styled from "styled-components";

export const Container = styled.section`
  width: 1216px;

  background-color: ${({ theme }) => theme.skillSection.background};
  border-radius: 4px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
`;

export const SkillHeader = styled.h2`
  padding: 32px 0 0 32px;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.titles.color};
`;

export const Divider = styled.div`
  width: 1151px;
  height: 1px;
  margin: 15px 0 39px 32px;
  background-color: ${({ theme }) => theme.divider.background};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: auto 300px auto;
  gap: 8px 115px;
  grid-template-rows: repeat(8 1fr);
  padding: 30px 32px;
  margin-bottom: 72px;
`;

export const Item = styled.li`
  display: flex;
  color: ${({ theme }) => theme.basic.text};
  list-style-type: none;
  &::before {
    content: "";
    display: inline-block;
    align-self: center;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    margin-right: 16px;
    background-color: ${({ theme }) => theme.buttons.background};
  }
`;
