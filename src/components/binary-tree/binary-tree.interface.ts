import type { Point } from '../../interfaces/general.interface';

export interface BinaryTreeProps {
  nodes: string[];
}

export interface BinaryTreeSchema {
  key: string;
  label: string;
  parentIndex: number;
  position: Point;
}
