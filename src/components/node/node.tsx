import { memo } from 'react';
import { NodeProps } from './node.interface';
import { useNode } from './use-node';

export const Node = memo(
  ({ label, position, size }: NodeProps) => {
    const { truncateLabel } = useNode(size);
    const truncatedLabel = truncateLabel(label);
    const ratio = truncatedLabel === label ? 2 : 3;

    return (
      <>
        <circle
          cx={position.x}
          cy={position.y}
          r={size - 2}
          fill='#4527a0'
          stroke='#311b92'
          strokeWidth='2px'
        />

        <text
          x={`${position.x - (truncatedLabel.length * 7.8) / ratio}`}
          y={position.y + 3}
          fill='whitesmoke'
          fontSize='14px'
          fontWeight='700'
        >
          <title>{label}</title>
          {truncatedLabel}
        </text>
      </>
    );
  },
  (prev, next) => {
    return !(
      prev.position.x !== next.position.x ||
      prev.position.y !== next.position.y ||
      prev.label !== next.label ||
      prev.size !== next.size
    );
  }
);
