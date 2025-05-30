# Kiểm thử tự động E2E với Cypress

---

##  Yêu cầu

- Node.js >= 14
- Visual Studio Code (hoặc trình soạn thảo mã khác)
- Truy cập được trang: [https://www.saucedemo.com](https://www.saucedemo.com)
- Đã cài đặt Cypress

---

## ⚙️ Hướng dẫn cài đặt

```bash
# Bước 1: Tạo thư mục và khởi tạo npm
mkdir cypress-exercise
cd cypress-exercise
npm init -y

# Bước 2: Cài Cypress
npm install cypress --save-dev

# Bước 3: Mở Cypress
npx cypress open
