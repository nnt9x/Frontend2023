// <Box width="" height="" bg="" />
// <Box />, cần sử dụng các giá trị mặc định
function Box(props) {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.bg,
      }}
    >
        {props.children}
    </div>
  );
}
// Khởi tạo component với các giá trị mặc định
Box.defaultProps = {
    width: "100px",
    height: "100px",
    bg: "green"
}
export {Box};

