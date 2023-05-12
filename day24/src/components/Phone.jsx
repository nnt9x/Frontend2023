import './Phone.css';

export function Phone(props){
    return <div className="phone">
        <p>{props.title}</p>
        <img className='img-fluid' src={props.image} alt={props.title} />
        <p>{props.description}</p>
        <p className='text-danger'><b>Price: {props.price} $ </b></p>
        <p>Số lượng: {props.stock}</p>
    </div>
}

// Khai bao thuoc tinh mac dinh
Phone.defaultProps = {
    title: 'No title',
    image: 'https://picsum.photos/200/300',
    description: 'No description',
    price: 0,
    stock: 0
}