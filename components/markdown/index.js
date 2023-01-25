import { MarkdownWrapper } from './styled';
import { Container } from '../../constants/styles';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Markdown = ({ children }) => (
  <Container>
    <MarkdownWrapper>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </MarkdownWrapper>
  </Container>
);

export default Markdown;
