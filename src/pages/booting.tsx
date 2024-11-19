import Button from "../components/Button.tsx";

export default function Booting(){
    return (
        <div>
        <Button width="100px" height="100px" backgroundColor="--success" onclick={() => {console.log("hello")}}>
            <p>test
            </p>
        </Button>
    </div>)
}