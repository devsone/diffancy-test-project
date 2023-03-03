import { ConnectorProps } from './connector.interface';

export const Connector = ({ sourcePoint, targetPoint }: ConnectorProps) => {
  return (
    <line
      x1={sourcePoint.x}
      y1={sourcePoint.y}
      x2={targetPoint.x}
      y2={targetPoint.y}
      stroke-width='1'
      strokeDasharray='10 5'
      stroke='grey'
    />
  );
};
