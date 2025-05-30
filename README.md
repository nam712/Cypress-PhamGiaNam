# Kiểm thử tự động E2E với Cypress

##  Yêu cầu

- Node.js >= 14
- Visual Studio Code (hoặc trình soạn thảo mã khác)
- Truy cập được trang: [https://www.saucedemo.com](https://www.saucedemo.com)
- Đã cài đặt Cypress

## Hướng dẫn cài đặt

```bash
# Bước 1: Tạo thư mục và khởi tạo npm
mkdir cypress-exercise
cd cypress-exercise
npm init -y

# Bước 2: Cài Cypress
npm install cypress --save-dev

# Bước 3: Mở Cypress
npx cypress open
```
## Cấu trúc thư mục kiểm thử
```
cypress-exercise/
└── cypress/
     └── e2e/
         ├── login_spec.cy.js     # Kiểm thử đăng nhập
         ├── cart_spec.cy.js      # Kiểm thử giỏ hàng (thêm, xóa sản phẩm, sắp xếp sản phẩm theo giá tăng dần) 
         └── checkout_spec.cy.js  # kiểm thử kiểm tra quy trình thanh toán
```
## Video chạy kiểm thử

[Xem video demo](./demo/demo_cypress.mp4)
