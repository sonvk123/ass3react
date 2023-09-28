
//  kiểm tra modol chi tiết sản phẩm có được hiển thị hay không
export const show = (state) => state.homeModol.isShow;

// lấy data mà modol sẽ hiển thị
export const data_modol = (state) => state.homeModol.data_modol;

// khiểm tra xem login hay chưa 
export const Login = (state) => state.login;

// data đơn hàng hiện có
export const cart = (state) => state.cart;

// kiểm tra xem live chat có được bật hay không
export const chat = (state) => state.liveChat;
