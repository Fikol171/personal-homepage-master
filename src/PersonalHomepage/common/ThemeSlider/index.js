import { Wrapper, TextContent, Button, Container, Sun } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectThemeState, toggleTheme } from "./themeSlice";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectThemeState);

  return (
    <Wrapper>
      <TextContent>
        Dark mode <span>{theme ? "on" : "off"}</span>
      </TextContent>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Container slideRight={theme}>
          <Sun />
        </Container>
      </Button>
    </Wrapper>
  );
};

export default ThemeButton;
