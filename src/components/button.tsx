type ButtonProps = {
    width?: string;
    height?: string;
    backgroundColor?: string;
    children: React.ReactNode;
    onclick?: () => void;
};

export default function Button({ width, height, backgroundColor, children, onclick }: ButtonProps) {
    return (
        <div
            style={{
                width: width,
                height: height,
                backgroundColor: backgroundColor ? `var(${backgroundColor})` : undefined,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:"row"
            }}
            onClick={onclick}
        >
            {children}
        </div>
    );
}
