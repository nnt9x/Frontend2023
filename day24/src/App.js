import { useState } from 'react';
import './App.css';
import { Phone } from './components/Phone';
import { SearchForm } from './components/SearchForm';

function App() {

  const [listPhone, setListPhone] = useState([]); 

  let viewPhones;
  if(listPhone.length === 0){
    viewPhones = <p>Không có sản phẩm</p>;
  }
  else{
    // Tạo list sản phẩm
    viewPhones = listPhone.map((phone) => 
    <div key={phone.id} className='col-3'>
      <Phone image={phone.images[0]}  title={phone.title} price={phone.price} stock={phone.stock} />
    </div>
    )
  }

  function handleSearch(keyword) {
    // Đã có keyword => thực hiện tim kiếm
    let url;
    if(keyword === ""){
        url = "https://dummyjson.com/products";
    }
    else{
        url = `https://dummyjson.com/products/search?q=${keyword}`;
    }
    console.log(url);

    // Gọi API
    fetch(url)
    .then(response => response.json())
    .then(data => {
        setListPhone(data.products);
    })
    .catch(error => alert(error));
  }

  return (
    <div className="container">
      <h1 className='text-center display-1'>Phone Store</h1>
      <SearchForm onHandleSearch = {handleSearch} />
      <div className='row'>
        {viewPhones}
      </div>
    </div>
  );
}

export default App;
