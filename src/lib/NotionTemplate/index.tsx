import NotionBlock from '../components/Block/notionBlock'
import { NotionBlocks } from '../BlockType'
import { Container } from './styled'

export default function Index({ blocks }: { blocks: NotionBlocks[] }) {
  return (
    <Container>
      {blocks.map((block, idx) => {
        let number = 1
        if (idx !== 0) {
          while (blocks[idx - number].type === 'numbered_list_item') {
            number++
          }
        }

        return <NotionBlock key={idx} block={block} numbered={number} />
      })}
    </Container>
  )
}
