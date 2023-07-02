import {
  HeaderContent,
  HeaderImage,
  HeaderContainer,
  PrevTitle,
  Title,
  Description,
  EmailButton,
  Envelope,
  Link,
} from "./styled";
import { myImage } from "./images";
import envelope from "../../common/Header/images/Message.svg";
import { AboutMe } from "../../AboutMe";

const Header = () => (
  <HeaderContainer>
    <HeaderImage src={myImage} alt="myImage" />
    <HeaderContent>
      <PrevTitle>This is</PrevTitle>
      <Title>{AboutMe.name}</Title>
      <Description>{AboutMe.content}</Description>
      <EmailButton>
        <Envelope src={envelope} alt="Email" />
        <Link
          href="mailto:{AboutMe.email}"
          title="{AboutMe.EmailTitle}"
          rel="noreferrer noopener"
        >
          Hire Me
        </Link>
      </EmailButton>
    </HeaderContent>
  </HeaderContainer>
);

export default Header;
