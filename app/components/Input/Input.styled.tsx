import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: #f0f0f0;
    color: green;
    font-size: 15px;
    border: 2px dashed green;
    cursor: pointer;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    &:hover {
        background-color: #e0e0e0;
    }
`;
