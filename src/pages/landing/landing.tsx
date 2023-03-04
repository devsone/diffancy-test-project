import { BinaryTree } from '../../components/binary-tree/binary-tree';
import { Input } from '../../components/input/input';
import './landing.scss';
import { useLanding } from './use-landing';

export const Landing = () => {
  const { items, setItems, generateNodes } = useLanding();

  return (
    <div className='landing-container'>
      <h1>
        <span className='landing-container-header-color-reverse'>B</span>
        <span className='landing-container-header-color-default'>inary</span>
        <span>&nbsp;</span>
        <span className='landing-container-header-color-reverse'>T</span>
        <span className='landing-container-header-color-default'>ree</span>
      </h1>

      <p className='landing-container-description'>
        Fill below inputs with desired names. We draw binary tree for it immediately!
      </p>

      <Input
        value={items}
        onChange={(e) => setItems(e.currentTarget.value)}
        className='landing-container-names-input'
      />
      <BinaryTree nodes={generateNodes()} />
    </div>
  );
};
