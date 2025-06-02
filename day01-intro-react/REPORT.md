# Báo cáo ngày 1: Giới thiệu React

## 1. Tổng quan về Create React App
- Create React App là công cụ chính thức để tạo ứng dụng React mới
- Cấu trúc project mặc định:
  - `src/`: Chứa mã nguồn chính
  - `public/`: Chứa các tài nguyên tĩnh
  - `package.json`: Quản lý dependencies
  - `node_modules/`: Thư mục chứa các package đã cài đặt

## 2. JSX và Components
- JSX là cú pháp mở rộng của JavaScript, cho phép viết HTML trong JavaScript
- Components là các khối xây dựng cơ bản của ứng dụng React
- Có thể tạo component bằng function hoặc class

## 3. Props
- Props là cách truyền dữ liệu từ component cha xuống component con
- Props là read-only, không thể thay đổi trong component con
- Có thể set giá trị mặc định cho props

## 4. Thực hành: Component HelloWorld
### Các tính năng đã thực hiện:
- Tạo component HelloWorld với các props: name, age, greeting
- Sử dụng destructuring để lấy giá trị từ props
- Set giá trị mặc định cho prop greeting
- Tạo giao diện đơn giản với CSS
- Sử dụng component nhiều lần với các props khác nhau

### Code mẫu:
```jsx
// HelloWorld.jsx
const HelloWorld = ({ name, age, greeting = 'Hello' }) => {
  return (
    <div className="hello-world">
      <h1>{greeting}, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};
```

## 5. Kết luận
- Đã nắm được cơ bản về cấu trúc project React
- Hiểu và thực hành được với JSX và Components
- Biết cách sử dụng Props để truyền dữ liệu
- Có thể tạo và sử dụng component đơn giản 