import { useCSS } from '../../hooks/use-css';
import { ButtonProps } from './button.interface';
import './button.scss';

export const Button = ({ children, onClick, className = '', ...rest }: ButtonProps) => {
  const { mergeClasses } = useCSS();

  return (
    <button
      className={mergeClasses('button-container', className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
