// ========================================================
// Hoạt động 2: 'Logic Builder' (Xếp loại điểm số)
// Môn học: Thiết kế Web - Bài tập tuần 8
// ========================================================

function xepLoaiDiem() {
    // 1. Nhập dữ liệu: Sử dụng prompt() để yêu cầu nhập điểm (0 - 10)
    let input = prompt("Vui lòng nhập vào điểm số (thang điểm từ 0 đến 10):");

    // 4. Xử lý ngoại lệ (Bonus):
    // - Kiểm tra người dùng bấm Cancel
    if (input === null) {
        alert("Bạn đã hủy thao tác nhập điểm.");
        return;
    }

    // - Kiểm tra người dùng để trống hoặc chỉ nhập khoảng trắng
    if (input.trim() === "") {
        alert("Lỗi: Bạn chưa nhập điểm số!");
        return;
    }

    let diem = Number(input);

    // - Kiểm tra xem có phải là số hợp lệ không
    if (isNaN(diem)) {
        alert("Lỗi: Giá trị nhập vào không phải là số hợp lệ!");
        return;
    }

    // - Kiểm tra thang điểm từ 0 đến 10
    if (diem < 0 || diem > 10) {
        alert("Lỗi: Điểm số phải nằm trong thang điểm từ 0 đến 10!");
        return;
    }

    // 2 & 3. Xử lý logic (if-else) và Hiển thị kết quả bằng alert()
    if (diem > 8) {
        alert(`Điểm của bạn: ${diem}\nXếp loại: Giỏi`);
    } else if (diem > 6.5) {
        // Tương đương 6.5 < diem <= 8
        alert(`Điểm của bạn: ${diem}\nXếp loại: Khá`);
    } else if (diem >= 5) {
        // Tương đương 5 <= diem <= 6.5
        alert(`Điểm của bạn: ${diem}\nXếp loại: Trung bình\nChúc mừng bạn đã đạt!`);
    } else {
        // Tương đương 0 <= diem < 5
        alert(`Điểm của bạn: ${diem}\nXếp loại: Yếu\nRất tiếc, hãy cố gắng hơn!`);
    }
}

// Tự động chạy khi mở trang web (hoặc bạn có thể gọi qua nút bấm trong HTML)
xepLoaiDiem();
