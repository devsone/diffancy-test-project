import { Button } from '../button/button';
import { Connector } from '../connector/connector';
import { Node } from '../node/node';
import { BinaryTreeProps } from './binary-tree.interface';
import { useBinaryTree } from './use-binary-tree';

export const BinaryTree = ({ nodes }: BinaryTreeProps) => {
  const { size, scale, generateBinaryTree, zoomIn, zoomOut, resetView } = useBinaryTree();
  const binaryTree = generateBinaryTree(nodes);

  return (
    <>
      <Button onClick={() => zoomIn()}>zoomIn</Button>
      <Button onClick={() => zoomOut()}>zoomOut</Button>
      <Button onClick={() => resetView()}>reset</Button>

      <div>
        <svg
          viewBox={`${(-1 * scale) / 2} 0 ${scale} ${scale}`}
          width='100%'
          height='calc(100vh - 220px)'
        >
          {binaryTree.map((node) => (
            <g key={node.key}>
              {node.parentIndex >= 0 && (
                <Connector
                  sourcePoint={node.position}
                  targetPoint={binaryTree[node.parentIndex].position}
                />
              )}
              <Node
                size={size}
                label={node.label}
                position={node.position}
              />
            </g>
          ))}
        </svg>
      </div>
    </>
  );
};
