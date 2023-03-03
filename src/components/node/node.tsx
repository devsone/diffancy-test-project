import { NodeProps } from './node.interface';
import { useNode } from './use-node';

export const Node = ({ label, position, size }: NodeProps) => {
  const { truncateLabel } = useNode(size);
  const truncatedLabel = truncateLabel(label);
  const ratio = truncatedLabel === label ? 2 : 3;

  return (
    <>
      <circle
        cx={position.x}
        cy={position.y}
        r={size - 2}
        fill='grey'
        stroke='yellow'
        strokeWidth='2px'
      />

      <text
        x={`${position.x - (truncatedLabel.length * 7.8) / ratio}`}
        y={position.y + 3}
        fill='black'
        fontSize='14px'
      >
        <title>{label}</title>
        {truncatedLabel}
      </text>
    </>
  );
};
