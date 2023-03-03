import { useState } from 'react';
import type { Point } from '../../interfaces/general.interface';
import { BinaryTreeSchema } from './binary-tree.interface';

export const useBinaryTree = () => {
  const [scale, _setScale] = useState(1000);

  const gap = 1.1; // any value bigger than sqrt(2)
  const size = 32;
  const boxSize = gap * size;
  const scaleStep = 125;

  const zoomOut = () => {
    if (scale > 5000) {
      return;
    }

    _setScale(scale + scaleStep);
  };

  const zoomIn = () => {
    if (scale <= 250) {
      return;
    }

    _setScale(scale - scaleStep);
  };

  const resetView = () => {
    _setScale(1000);
  };

  const generateBinaryTree = (nodes: string[]): BinaryTreeSchema[] => {
    const length = nodes.length;

    return nodes.map((label, index) => {
      const position = generatePosition(index, length);

      return {
        label,
        position,
        key: `${label}-${position.x}-${position.y}`,
        parentIndex: calculateParentIndex(index)
      };
    });
  };

  const calculateParentIndex = (index: number) => {
    if (index === 0) {
      return -1; // root node has no parent
    }

    return index % 2 === 0 ? (index - 2) / 2 : (index - 1) / 2;
  };

  const generatePosition = (index: number, length: number): Point => {
    const level = Math.floor(Math.log2(length));
    const indexRelativeLevel = calculateRelativeLevel(level, index);
    const { endIndex, startIndex, isOnRightSideOfRoot } = getIndexInfo(indexRelativeLevel, index);
    const ratio = Math.pow(2, level - indexRelativeLevel + 1) / 2; // ratio for leafs are 1, for other levels grows exponentially
    const offset = Math.abs((endIndex - index - (index - startIndex)) * ratio); // offset from root based on index and level's ration

    const position: Point = {
      x: size + (isOnRightSideOfRoot ? 1 : -1) * offset * boxSize,
      y: size + 2 * indexRelativeLevel * boxSize
    };

    return position;
  };

  const getRange = (level: number) => {
    const pow2Level = Math.pow(2, level);
    const startIndex = pow2Level - 1;
    const endIndex = startIndex + pow2Level - 1;

    return { endIndex, startIndex };
  };

  const isInRange = (level: number, index: number) => {
    const pow2Level = Math.pow(2, level);
    const startIndex = pow2Level - 1;
    const endIndex = startIndex + pow2Level - 1;

    return index >= startIndex && index <= endIndex;
  };

  const calculateRelativeLevel = (level: number, index: number) => {
    let i = 0;

    while (!isInRange(level - i, index)) {
      ++i;
    }

    return level - i;
  };

  const getIndexInfo = (level: number, index: number) => {
    const { endIndex, startIndex } = getRange(level);
    const count = endIndex - startIndex + 1;
    const isOnRightSideOfRoot = index >= startIndex + count / 2;

    return { endIndex, startIndex, isOnRightSideOfRoot };
  };

  return { size, scale, zoomIn, zoomOut, resetView, generateBinaryTree };
};
