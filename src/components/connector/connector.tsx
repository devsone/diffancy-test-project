import { memo } from 'react';
import { ConnectorProps } from './connector.interface';

export const Connector = memo(
  ({ sourcePoint, targetPoint }: ConnectorProps) => {
    console.log('XX@XX', sourcePoint, targetPoint);
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
  },
  (prev, next) => {
    return !(
      prev.sourcePoint.x !== next.sourcePoint.x || prev.sourcePoint.y !== next.sourcePoint.y
    );
  }
);
