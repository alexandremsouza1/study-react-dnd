import { useDrop } from 'react-dnd';
import ColumnView from '../views/ColumnView';
import { useDrag } from 'react-dnd';

export default function Column({ accept, onDrop, lead, actualStage, index }) {
  const [, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const [, drag] = useDrag(() => ({
    type: 'LEAD',
    item: { name: lead?.name }
  }), [lead?.name, actualStage])


  return (
    <ColumnView drop={drop} drag={drag} lead={lead} type={actualStage} key={index} index={index} />
  )

}
