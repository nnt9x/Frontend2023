export function Shape(props) {
    const styleClass = props.isCircle === true ? "rounded-circle" : "";

    return (
        <div
            className={styleClass}
            style={{
                backgroundColor: props.color,
                height: "300px",
                width: "300px",
            }}>

            </div>
    );
}
