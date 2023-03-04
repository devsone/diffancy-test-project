import { memo } from 'react';
import { ConnectorProps } from './connector.interface';

export const Connector = memo(
  ({ sourcePoint, targetPoint }: ConnectorProps) => {
    return (
      <line
        x1={sourcePoint.x}
        y1={sourcePoint.y}
        x2={targetPoint.x}
        y2={targetPoint.y}
        stroke-width='2'
        strokeDasharray='5 5'
        stroke='#4527a0'
      />
    );
  },
  (prev, next) => {
    return !(
      prev.sourcePoint.x !== next.sourcePoint.x || prev.sourcePoint.y !== next.sourcePoint.y
    );
  }
);
