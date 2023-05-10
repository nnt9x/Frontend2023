// <City data={city} />
import "./City.css";
export function City(props){

    const city = props.data;
    return (
        <div className="city">
            <p>{city.name}</p>
            <img className="img-fluid" src={city.src} alt="city" />
            <p>Nhiệt độ: {city.temp} *C</p>
            <p>Độ ẩm: {city.hump} %</p>
            <p>{city.desc}</p>
        </div>
    )
}

City.defaultProps = {
    data: {
        name: "Hà Nội",
        src:"https://placeholder.pics/svg/300",
        temp: 0,
        hump: 0,
        desc: "Trời quan đãng"
    }
}