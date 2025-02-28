import { useRef, useState } from "react";
import { InputContainer } from "./Input.styled";
import { IInputProps } from "./Input.types";

interface InputProps extends IInputProps {
    setFile: (file: File | null) => void;
}

const Input: React.FC<InputProps> = ({ text, setFile }) => {
    const [image, setImage] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImage(URL.createObjectURL(file));
            setFile(file); // Передаем файл в FinalPage
        }
    };

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    return (
        <>
            {!image && <InputContainer onClick={handleClick}>{text}</InputContainer>}
            <input 
                ref={inputRef} 
                type="file" 
                accept="image/*" 
                style={{ display: "none" }} 
                onChange={handleImageUpload} 
            />
            {image && <img src={image} alt="Uploaded" style={{ marginTop: "10px", maxWidth: "300px" }} />}
        </>
    );
};

export default Input;
