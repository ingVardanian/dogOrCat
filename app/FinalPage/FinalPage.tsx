'use client'
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import './FinalPage.scss'
const FinalPage: React.FC = () => {
    return <div className="container">
        <Input />
     <Button text="Submit" onClick={() => alert("hello")}/>
    </div>
}

export default FinalPage;