export default function ColumnView({drag, lead, drop, index, backgroundColor }) {

  return (
    <td ref={drop} className="table__column" style={{ backgroundColor }}>
      {lead &&
        <div ref={drag} className="table__cell" index={index}>
          {lead.name}
        </div>
      }
    </td>
  )
}
