import { Container, Divider, List, SkillHeader, Item } from "./styled";

const SkillSection = ({ title, content }) => (
  <Container>
    <SkillHeader>{title}</SkillHeader>
    <Divider />
    <List>
      {content.map((skill) => (
        <Item key={skill}>{skill}</Item>
      ))}
    </List>
  </Container>
);

export default SkillSection;
