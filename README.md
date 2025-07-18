# 🧑‍💻 DLGKiet Portfolio

Đây là source code cho portfolio cá nhân của **DLGKiet**, được xây dựng bằng **Next.js**, **TypeScript** và **Tailwind CSS**.

---

## 🚀 Hướng dẫn cài đặt

Thực hiện theo các bước sau để chạy dự án trên máy local:

### 1. Clone repository

```bash
git clone https://github.com/dlgkiet/my-portfolio.git
```

### 2. Mở folder bằng VS Code

```bash
cd my-portfolio
code .
```

### 3. Cài đặt các dependencies

```bash
npm install
```

### 4. Fix các lỗi bảo mật tự động (nếu có)

```bash
npm audit fix
```

### 5. Chạy server phát triển

```bash
npm run dev
```

Truy cập địa chỉ: [http://localhost:3000](http://localhost:3000) để xem trang portfolio.

---

## 📁 Cấu trúc thư mục chính

```bash
dlgkiet-my-portfolio/
├── app/                  # Routing và layout chính
│   ├── globals.css       # File CSS toàn cục
│   ├── layout.tsx        # Layout cho toàn app
│   ├── page.tsx          # Trang chính
│   └── fonts/            # Font tùy chỉnh
├── components/           # Các component chia nhỏ theo tính năng
│   └── ui/               # Các UI component cơ bản như button, input
├── lib/                  # Thư viện và hàm tiện ích
├── tailwind.config.ts    # Cấu hình Tailwind
├── tsconfig.json         # Cấu hình TypeScript
├── package.json          # Thông tin và scripts của project
└── ...
```

---

## 📦 Các công nghệ sử dụng

* **Next.js** – Framework React hiện đại
* **TypeScript** – Ngôn ngữ lập trình có kiểm tra kiểu tĩnh
* **Tailwind CSS** – CSS utility-first
* **ESLint** – Công cụ kiểm tra và định dạng code

---

## 📄 Giấy phép

Dự án được phát hành với [MIT License](LICENSE) – thoái mái sử dụng và chỉnh sửa.
