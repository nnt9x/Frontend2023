import "./ColorBox.css";

export function ColorBox(props){
    let classStyle = "color-box";
    let shape = "Square";

    if(props.isCircle === true){
        classStyle = classStyle + " rounded-circle";
        shape = "Circle";
    }
    function showInfo(){
        const info = `ColorBox [shape: ${shape} , color: ${props.color} ]`;
        alert(info);
    }
    
    return (
        <div onClick={showInfo} className={classStyle} style={{backgroundColor:props.color}}>
            <p className="box-shape">
                {shape}
            </p>
        </div>
    )
}

ColorBox.defaultProps = {
    color: "grey",
    isCircle: false
}