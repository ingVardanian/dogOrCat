'use client'
import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { Container, TitleWrapper } from "./FinalPage.styled";

const FinalPage: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async () => {
        if (!file) return alert("No file selected!");

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch("https://your-api.com/upload", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to upload image");
            }

            alert("Image uploaded successfully!");
        } catch (error) {
            console.error("Upload error:", error);
            alert("Error uploading image");
        }
    };

    return (
        <Container>
            <TitleWrapper> DOG OR CAT ?</TitleWrapper> 
            <Input text="Select Your Picture" setFile={setFile} />
            <Button text="Submit" onClick={handleSubmit} />
        </Container>
    );
};

export default FinalPage;
