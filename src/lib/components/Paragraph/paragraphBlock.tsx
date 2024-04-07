import { Paragraph } from '../../BlockType'
import RichTexts from '../RichText/richTexts'
import NotionBlock from '../Block/notionBlock'
import { Container } from './styled'

export default function ParagraphBlock({ block }: { block: Paragraph }) {
  console.log('ParagraphBlock', block)
  console.log('ParagraphBlockChilderen', block.children)
  return (
    <Container>
      <RichTexts richTexts={block.paragraph.rich_text} />
      {block.children && (
        <div className="children">
          {block.children.map((child, idx) => (
            <NotionBlock key={idx} block={child} />
          ))}
        </div>
      )}
    </Container>
  )
}
