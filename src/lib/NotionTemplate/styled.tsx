import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-family:
    ui-sans-serif,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Helvetica,
    'Apple Color Emoji',
    Arial,
    sans-serif,
    'Segoe UI Emoji',
    'Segoe UI Symbol';

  max-width: 900px;
  width: 100%;

  ul {
    list-style: disc;
  }
  ul ul {
    list-style: circle;
  }
  ul ul ul {
    list-style: square;
  }
  ul ul ul ul {
    list-style: disc;
  }
  ul ul ul ul ul {
    list-style: circle;
  }
  ul ul ul ul ul ul {
    list-style: square;
  }

  ol {
    list-style: decimal;
  }
  ol ol {
    list-style: lower-alpha;
  }
  ol ol ol {
    list-style: lower-roman;
  }
  ol ol ol ol {
    list-style: decimal;
  }
  ol ol ol ol ol {
    list-style: lower-alpha;
  }
  ol ol ol ol ol ol {
    list-style: lower-roman;
  }
`
