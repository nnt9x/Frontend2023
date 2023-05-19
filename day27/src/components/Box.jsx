// Box có màu mặc định màu đỏ
// Khi click vào box-> màu sẽ được thay đổi ngẫu nhiên
// : màu xanh, màu vàng, màu đỏ, màu đen

import { useEffect, useState } from "react";
import "./Box.css";

const COLORS = ["red", "green", "yellow", "black"];

/**
 * Box - component
 * @param {string} props.bgColor - Màu nền của box
 * @returns 
 */
export function Box(props) {
	const [bgColor, setBgColor] = useState(props.bgColor);

    // Sẽ chạy lại sau mỗi lần render, ko truyền dependencies cho useEffect
    // useEffect(()=>{
    //     alert("Box đã được render lai");
    // });

    // Chỉ chạy lần đầu tiên khi component được render
    // useEffect(()=>{
    //     // alert("Render lần đầu tiên");
    //     console.log("Render lần đầu tiên");
    // }, []);

    useEffect(()=>{
        alert("Box đổi sang màu: "+ bgColor)
    }, [bgColor]);




    function setBgRandomColor(){
        // Tao ngẫu nhiên giá trị index từ 0 -> 3
        const randomIndex = Math.floor(Math.random() * 4);
        const randomColor = COLORS[randomIndex];
        setBgColor(randomColor);
    }

	return (
    <div onClick={setBgRandomColor} className="box" 
        style={{ backgroundColor: bgColor }}>
    </div>);
}

Box.defaultProps = {
    bgColor: "red",
}
