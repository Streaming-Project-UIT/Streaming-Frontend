# Sử dụng một hình ảnh Node.js để xây dựng ứng dụng React
FROM node:14-alpine as build

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép tệp package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các dependency của ứng dụng
RUN npm install

# Sao chép toàn bộ mã nguồn ứng dụng vào thư mục làm việc
COPY . .

# Xây dựng ứng dụng React
RUN npm run build

# Sử dụng một hình ảnh Nginx để chạy ứng dụng đã xây dựng
FROM nginx:alpine

# Sao chép tệp build từ giai đoạn xây dựng trước
COPY --from=build /app/build /usr/share/nginx/html

# Cấu hình Nginx để phục vụ ứng dụng React
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]