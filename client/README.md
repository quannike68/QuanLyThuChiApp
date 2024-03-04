# Task_2

## Xây dựng list tính năng cho ứng dụng

| Tính Năng                  | Mô tả                                               | Đối Tượng                            |
| -------------------------- | --------------------------------------------------- | ------------------------------------ |
| Quản lý Tài Khoản          | Đăng ký                                             | Người muốn quản lý dòng tiền qua App |
|                            | Đăng Nhập                                           |                                      |
|                            | Xem Tài Khoản                                       |                                      |
|                            | Sửa Tài Khoản                                       |                                      |
|                            | Xoá Tài Khoản Cá Nhân                               |                                      |
| Quản Lý Ví                 | Thêm Ví                                             |                                      |
|                            | Sửa Ví                                              |                                      |
|                            | Xoá Ví                                              |                                      |
|                            | Thêm loại ví                                        |                                      |
|                            | Xem Tất cả ví hiện có                               |                                      |
|                            | Cài đặt nội dung cảnh báo hạn                       |                                      |
|                            | Cài đặt nội dung cảnh báo hạn mức của ví            |                                      |
| Quản Lý Thu Chi (Từng Ví)  | Thêm Thông tin                                      |                                      |
|                            | Thêm Thông tin                                      |                                      |
|                            | Sửa                                                 |                                      |
|                            | Theo dõi số dư                                      |                                      |
|                            | Theo dõi Thu Chi của ví                             |                                      |
|                            | Lọc Thu Chi (Theo Thời gian hoặc theo Thu hoặc Chi) |                                      |
| Quản lý Tài Khoản          | Đăng ký                                             | Quản lý App                          |
|                            | Đăng Nhập                                           |                                      |
|                            | Xem Tài Khoản                                       |                                      |
|                            | Sửa Tài Khoản                                       |                                      |
|                            | Xem Toàn Bộ Tài Khoản                               |                                      |
|                            | Xoá Tài Khoản                                       |                                      |
| Quản Lý Ví(Từng Tài Khoản) | Thêm Ví                                             |                                      |
|                            | Sửa Ví                                              |                                      |
|                            | Xoá Ví                                              |                                      |
|                            | Xem Thông Tin Ví                                    |                                      |

## Xem xét database dựa trên list tính năng

![]('../assets/imgDatabase.png')

Bảng User:

- Mỗi người dùng (user) có thể có nhiều ví (wallet) .
- Mỗi người dùng (user) có thể có nhiều danh mục (category) .
- Mỗi người dùng (user) có thể có nhiều nhóm danh mục (categoriesGroup) .
- Mỗi giao dịch (transaction) thuộc về một người dùng (user) .

Bảng Wallet:

- Mỗi ví (wallet) thuộc về một người dùng (user) .

Bảng Category:

- Mỗi danh mục (category) thuộc về một người dùng (user) .
- Mỗi danh mục (category) thuộc về một nhóm danh mục (categoriesGroup) .

Bảng CategoriesGroup:

- Mỗi nhóm danh mục (categoriesGroup) thuộc về một người dùng (user) .

Bảng Transaction:

- Mỗi giao dịch (transaction) thuộc về một người dùng (user) .
- Mỗi giao dịch (transaction) thuộc về một ví (wallet) .
- Mỗi giao dịch (transaction) thuộc về một danh mục (category) .
- Mỗi giao dịch (transaction) thuộc về một nhóm danh mục (categoriesGroup) .
- Mỗi giao dịch (transaction) sử dụng một loại tiền tệ (currency) .

Bảng Currency:

- Mỗi loại tiền tệ (currency) có thể được sử dụng trong nhiều giao dịch (transaction) .

Bảng Role:

- Mỗi vai trò (role) có thể được gán cho nhiều người dùng (user) .

## Xử lý backend, xây dựng API

    Lương làm em sẽ xem và hoàn thiện vào ngày mai

## Từ list tính năng => list màn hình

### User

- Đăng nhập

- Register

- Trang chủ

  - - Tên tài khoản
  - - Số Dư Ví (hiện tại)
  - - Loại tiền tệ
  - - Chọn Ví
  - - Tên Ví
  - - 10 giao dịch của ngày hôm nay (tất cac các Ví)

- Groud Ví

  - Hiển thị group Ví
  - Số Lượng Ví trong từng group
  - Nút Thêm group Ví
  - Nút Xoá group Ví

- All Ví trong Group

  - - Hiển thị tất cac các Ví trong group
  - - Tên Ví
  - - Số dư
  - - Loại Tiền tệ
  - - Nút Tạo Ví
  - - Nút Xoá Ví

- Ví

  - - Tên Ví
  - - Số Dư
  - - Nút Thu - Chi
  - - Các Giao dịch gần nhất của Ví

- Thu Chi

  - - Các Thông tin tương ứng vs bảng Thu Chi(Số Tiền , Thời gian , Tên)

- Tạo Ví

  - - Tạo thông tin Ví Tưng ứng Vs Db (sửa)
  - - Nút Tạo Ví

- Quản lý
  - - Tên user
  - - Nút Thông Tin user
  - - Nút Đăng Xuất

-Thông tin user - - Các Thông tin của user - - Nút sửa thông tin - - Nút xoá tài khoản

### Root

- Đăng nhập

- Trang chủ
  - - Tên Tk root
  - - Nút đăng xuất
  - - Thông tin các user (10)
  - - Thanh search user
- User
  - - Tên user
  - - Thông tin user
  - - Nút Thông Tin Ví (Group)
- Group Ví
  - - Thông Tin Các Ví
  - - Nút Xoá Ví , Thêm Ví , Sửa Ví
- Ví
  - - Tên Ví
  - - Thông Tin V
