import { H2, P, Container } from '../../constants/styled';
import { Wrapper, Outer } from './styled';

const Card = ({ title, author, date, desc }) => (
  <Wrapper>
    <H2>{title}</H2>
    <P>{desc}</P>
    <P color="grey">
      Post by {author} on {date}.
    </P>
  </Wrapper>
);

const Board = ({ memos }) => (
  <Outer>
    <Container>{memos && memos.map((memo) => <Card {...memo} />)}</Container>
  </Outer>
);

export default Board;
