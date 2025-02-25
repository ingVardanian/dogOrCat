import  './Button.scss';
import { IButtonProps } from './Button.types';
const Button: React.FC<IButtonProps> = ({text, onClick}) => {
    return <> 
        <div className="buttonWrapper" onClick={onClick}>
            {text}
        </div>
    </>
}

export default Button;