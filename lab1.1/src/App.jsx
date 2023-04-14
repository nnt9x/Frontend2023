import "./App.css";
import { Phone } from "./components/Phone";

function App() {

  // Thuc te, dữ liệu có được JSON, XML 
  // Client -> Server -> Database -> convert JSON 
  // Frontend -> đọc dữ liệu JSON-> xử lý 

  // Dữ liệu nằm trong 1 mảng
  let phones = [
    {
      name:"IPhone 14",
      image:"https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-vang-thumb-600x600.jpg",
      screen: 6.1,
      resolution: "Retina",
      price: 30000000
    },
    {
      name:"IPhone 14 Pro",
      image:"https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-vang-thumb-600x600.jpg",
      screen: 6.1,
      resolution: "Retina",
      price: 30000000
    },
    {
      name:"IPhone 14",
      image:"https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-vang-thumb-600x600.jpg",
      screen: 6.1,
      resolution: "Retina",
      price: 30000000
    }
  ];

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <Phone
            name={phones[0].name}
            image={phones[0].image}
            screenSize={phones[0].screen+" ich"}
            resolution={phones[0].resolution}
            price={phones[0].price+" VND"}
          />
        </div>
        <div className="col">
          <Phone
            name={phones[1].name}
            image={phones[1].image}
            screenSize={phones[1].screen+" ich"}
            resolution={phones[1].resolution}
            price={phones[1].price+" VND"}
          />
        </div>
        <div className="col">
          <Phone
            name={phones[2].name}
            image={phones[2].image}
            screenSize={phones[2].screen+" ich"}
            resolution={phones[2].resolution}
            price={phones[2].price+" VND"}
          />
        </div>
        
        
      </div>
    </div>
  );
}

export default App;
