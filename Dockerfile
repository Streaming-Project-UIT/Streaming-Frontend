# Sử dụng image Node.js chính thức làm image cơ sở
FROM node:14-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép phần còn lại của mã ứng dụng vào thư mục làm việc
COPY . .

# Xây dựng ứng dụng React
RUN npm run build

# Mở cổng mà ứng dụng chạy trên
EXPOSE 3000

# Lệnh để chạy ứng dụng React
CMD ["npm", "start"]
