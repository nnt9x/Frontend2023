import "./Quote.css";
/**
 * 
 * @param {string} props.quote Nội dung câu trích dẫn
 * @param {string} props.author Tác giả của câu trích dẫn
 * @returns 
 */
export function Quote(props){
    return (
        <div className="quote">
            <p>{props.quote}</p>
            <cite>{props.author}</cite>
        </div>
    )
}
Quote.defaultProps = {
    quote: "Không có nội dung",
    author: "Không có tác giả"
}