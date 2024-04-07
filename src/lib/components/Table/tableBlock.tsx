import { Table, TableRow } from '../../BlockType'
import RichTexts from '../RichText/richTexts'
import { Container } from './styled'

export default function TableBlock({ block }: { block: Table }) {
  return (
    <Container>
      <tbody>
        {block.children &&
          block.children.map((child, idx) => {
            const row = child as TableRow
            return (
              <tr key={idx}>
                {row.table_row.cells.map((r, i) => (
                  <td key={`${idx}${i}`}>
                    <RichTexts richTexts={r} />
                  </td>
                ))}
              </tr>
            )
          })}
      </tbody>
    </Container>
  )
}
