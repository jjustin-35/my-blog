import { H2, P, Container } from '../../constants/styled';
import { Outer, Wrapper, Inner, CardWrapper } from './styled';

const Card = ({ title, author, date, desc }) => (
  <CardWrapper>
    <H2>{title}</H2>
    <P>{desc}</P>
    <P color="grey">
      Post by {author} on {date}.
    </P>
  </CardWrapper>
);

const Board = ({ memos }) => (
  <Outer>
    <Container>
      <Wrapper style={{ height: '100vh' }}>
        <Inner>{memos && memos.map((memo) => <Card {...memo} />)}</Inner>
      </Wrapper>
    </Container>
  </Outer>
);

export default Board;
