/**
 * ==============================================================================
 * BÀI TẬP THỰC HÀNH JAVASCRIPT - TUẦN 9
 * GIÁO VIÊN HƯỚNG DẪN: Antigravity JavaScript Tutor
 * TẬP TIN: script.js
 * ==============================================================================
 * Chào các em! Dưới đây là bài giải mẫu chi tiết cho 3 hoạt động trong tuần 9.
 * Thầy đã chú thích cẩn thận từng dòng lệnh, giải thích bản chất tư duy lập trình
 * để các em vừa hoàn thành bài tập vừa hiểu sâu kiến thức nền tảng nhé!
 */

/* ==============================================================================
   HOẠT ĐỘNG 1: 'The Counting Machine' (Cỗ máy đếm số)
   ============================================================================== */

console.log("%c=== HOẠT ĐỘNG 1: THE COUNTING MACHINE ===", "color: #007acc; font-weight: bold; font-size: 14px;");

/**
 * 1. GIẢI THÍCH 3 THÀNH PHẦN TRONG NGOẶC ĐƠN CỦA VÒNG LẶP FOR: for (khởi tạo; điều kiện; bước nhảy)
 * 
 * - Khởi tạo (Initialization - ví dụ: let i = 1):
 *   + Được thực thi DUY NHẤT MỘT LẦN khi vòng lặp bắt đầu.
 *   + Dùng để khai báo và gán giá trị khởi điểm cho biến đếm (biến lặp).
 * 
 * - Điều kiện lặp (Condition - ví dụ: i <= 100):
 *   + Là biểu thức logic (Boolean) được kiểm tra TRƯỚC MỖI VÒNG LẶP.
 *   + Nếu trả về `true`: thân vòng lặp sẽ được thực thi.
 *   + Nếu trả về `false`: vòng lặp lập tức kết thúc và chuyển xuống dòng lệnh tiếp theo.
 * 
 * - Bước nhảy (Iteration / Update - ví dụ: i++ hoặc i += 2):
 *   + Được thực thi SAU KHI các câu lệnh trong thân vòng lặp hoàn thành một lượt.
 *   + Dùng để cập nhật (tăng hoặc giảm) biến đếm, giúp biến dần tiến tới ngưỡng làm
 *     điều kiện lặp trở thành `false` (tránh rơi vào vòng lặp vô tận).
 */

// --- Yêu cầu 1.1: Viết vòng lặp for in dãy số từ 1 đến 100 ra console ---
console.log("\n--- 1.1. Dãy số từ 1 đến 100 ---");
for (let i = 1; i <= 100; i++) {
    console.log(`Số: ${i}`);
}

// --- Yêu cầu 1.2: Tùy chỉnh vòng lặp để chỉ in ra các số chẵn (từ 1 đến 100) ---
console.log("\n--- 1.2. Danh sách các số chẵn từ 1 đến 100 ---");

/**
 * [Lời khuyên của thầy]: Có 2 cách tiếp cận:
 * - Cách 1 (Tối ưu hiệu năng nhất): Bắt đầu từ số chẵn đầu tiên (i = 2) và tăng bước nhảy i += 2.
 *   Vòng lặp chỉ cần chạy 50 lần thay vì 100 lần.
 * - Cách 2 (Dùng điều kiện kiểm tra): Cho i chạy từ 1 đến 100, kiểm tra nếu (i % 2 === 0) thì in.
 * Dưới đây là cách 1 tối ưu và ngắn gọn nhất:
 */
for (let i = 2; i <= 100; i += 2) {
    console.log(`Số chẵn: ${i}`);
}


/* ==============================================================================
   HOẠT ĐỘNG 2: 'Function Factory' (Xưởng chế tạo hàm)
   ============================================================================== */

console.log("\n%c=== HOẠT ĐỘNG 2: FUNCTION FACTORY ===", "color: #28a745; font-weight: bold; font-size: 14px;");

/**
 * 2.1. Hàm tinhDienTich(dai, rong)
 * - Mục đích: Tính và trả về diện tích của hình chữ nhật.
 * - Tham số (parameters):
 *   + dai (number): Chiều dài hình chữ nhật
 *   + rong (number): Chiều rộng hình chữ nhật
 * - Giá trị trả về (return value):
 *   + Diện tích (number) = dài * rộng
 */
function tinhDienTich(dai, rong) {
    // Kiểm tra dữ liệu đầu vào hợp lệ
    if (typeof dai !== "number" || typeof rong !== "number" || dai <= 0 || rong <= 0) {
        return "Kích thước chiều dài và chiều rộng phải là số dương hợp lệ!";
    }
    return dai * rong;
}

// Gọi hàm tinhDienTich 3 lần với các bộ số khác nhau và in kết quả ra console:
console.log("--- 2.1. Kết quả kiểm tra hàm tinhDienTich ---");

const hcn1 = tinhDienTich(5, 3);
console.log(`Hình chữ nhật (5m x 3m) có diện tích là: ${hcn1} m²`);

const hcn2 = tinhDienTich(10.5, 4);
console.log(`Hình chữ nhật (10.5m x 4m) có diện tích là: ${hcn2} m²`);

const hcn3 = tinhDienTich(20, 15);
console.log(`Hình chữ nhật (20m x 15m) có diện tích là: ${hcn3} m²`);


/**
 * 2.2. Hàm tinhTuoiVaChao(ten, namSinh)
 * - Mục đích: Tính số tuổi hiện tại dựa vào năm sinh và trả về chuỗi chào mừng.
 * - Tham số:
 *   + ten (string): Tên của người dùng
 *   + namSinh (number): Năm sinh
 * - Giá trị trả về: Chuỗi 'Chào [Tên], bạn hiện tại [Số tuổi] tuổi'
 */
function tinhTuoiVaChao(ten, namSinh) {
    // Lấy năm hiện tại động từ đối tượng Date của JavaScript
    const namHienTai = new Date().getFullYear();
    const tuoi = namHienTai - namSinh;

    // Trả về chuỗi theo đúng định dạng yêu cầu bằng Template Literals
    return `Chào ${ten}, bạn hiện tại ${tuoi} tuổi`;
}

// Gọi hàm và in kết quả ra console
console.log("\n--- 2.2. Kết quả kiểm tra hàm tính tuổi và chào hỏi ---");

const loiChao1 = tinhTuoiVaChao("An", 2004);
console.log(loiChao1);

const loiChao2 = tinhTuoiVaChao("Bình", 2000);
console.log(loiChao2);

const loiChao3 = tinhTuoiVaChao("Chi", 1998);
console.log(loiChao3);


/* ==============================================================================
   HOẠT ĐỘNG 3: 'Refactoring Challenge' (Tái cấu trúc mã nguồn)
   ============================================================================== */

console.log("\n%c=== HOẠT ĐỘNG 3: REFACTORING CHALLENGE ===", "color: #e67e22; font-weight: bold; font-size: 14px;");

/**
 * VẤN ĐỀ TRƯỚC KHI REFACTOR:
 * Trong thực tế, các đoạn code tính thuế thường bị viết rời rạc, gán cứng (hard-coded)
 * các mức lương cụ thể, khiến ta phải sao chép lại code nhiều lần khi tính cho nhiều nhân viên.
 * 
 * GIẢI PHÁP REFACTOR:
 * Đóng gói toàn bộ logic vào hàm tinhThueThuNhap(luong) để tái sử dụng linh hoạt
 * cho bất kỳ mức lương nào.
 * 
 * Biểu thuế thu nhập cá nhân áp dụng (Biểu lũy tiến từng phần thực tế / tiêu chuẩn):
 * - Bậc 1: Đến 5 triệu VNĐ                -> Thuế suất: 5%
 * - Bậc 2: Trên 5 triệu đến 10 triệu VNĐ  -> Thuế suất: 10%
 * - Bậc 3: Trên 10 triệu đến 18 triệu VNĐ -> Thuế suất: 15%
 * - Bậc 4: Trên 18 triệu đến 32 triệu VNĐ -> Thuế suất: 20%
 * - Bậc 5: Trên 32 triệu VNĐ              -> Thuế suất: 25%
 */

/**
 * Hàm tính thuế thu nhập cá nhân
 * @param {number} luong - Mức thu nhập tính thuế (đơn vị: VNĐ)
 * @returns {number} Số tiền thuế phải nộp (đơn vị: VNĐ)
 */
function tinhThueThuNhap(luong) {
    // 1. Kiểm tra tính hợp lệ của tham số đầu vào
    if (typeof luong !== "number" || isNaN(luong) || luong < 0) {
        console.error("Lỗi: Mức lương phải là một số không âm hợp lệ!");
        return 0;
    }

    // Nếu thu nhập = 0 thì không phải nộp thuế
    if (luong === 0) return 0;

    let thue = 0;

    // 2. Tính thuế theo phương pháp lũy tiến từng phần
    if (luong <= 5000000) {
        // Bậc 1: Đến 5 triệu (5%)
        thue = luong * 0.05;
    } else if (luong <= 10000000) {
        // Bậc 2: 5 triệu đầu tính 5%, phần từ 5tr - 10tr tính 10%
        thue = (5000000 * 0.05) + ((luong - 5000000) * 0.10);
    } else if (luong <= 18000000) {
        // Bậc 3: 5tr đầu 5%, 5tr tiếp theo 10%, phần trên 10tr - 18tr tính 15%
        thue = (5000000 * 0.05) + (5000000 * 0.10) + ((luong - 10000000) * 0.15);
    } else if (luong <= 32000000) {
        // Bậc 4: phần trên 18tr - 32tr tính 20%
        thue = (5000000 * 0.05) + (5000000 * 0.10) + (8000000 * 0.15) + ((luong - 18000000) * 0.20);
    } else {
        // Bậc 5: phần vượt trên 32tr tính 25%
        thue = (5000000 * 0.05) + (5000000 * 0.10) + (8000000 * 0.15) + (14000000 * 0.20) + ((luong - 32000000) * 0.25);
    }

    return Math.round(thue);
}

/**
 * Hàm phụ trợ: Định dạng tiền tệ VNĐ để in ra màn hình đẹp và trực quan hơn
 */
function dinhDangVND(soTien) {
    return soTien.toLocaleString("vi-VN") + " VNĐ";
}

// Thử nghiệm gọi hàm tinhThueThuNhap với nhiều mức lương khác nhau để chứng minh tính tái sử dụng
console.log("--- Kết quả tính thuế thu nhập cá nhân sau khi đóng gói thành hàm ---");

const danhSachLuong = [
    4000000,   // Nằm trong Bậc 1
    8000000,   // Nằm trong Bậc 2
    15000000,  // Nằm trong Bậc 3
    25000000,  // Nằm trong Bậc 4
    45000000   // Nằm trong Bậc 5
];

danhSachLuong.forEach((mucLuong, viTri) => {
    const thuePhaiNop = tinhThueThuNhap(mucLuong);
    console.log(
        `Trường hợp ${viTri + 1}: Lương = ${dinhDangVND(mucLuong)} => Thuế TNCN phải nộp = ${dinhDangVND(thuePhaiNop)}`
    );
});

console.log("\n%cChúc các em học tốt và nắm vững kiến thức JavaScript cơ bản!", "color: #9b59b6; font-style: italic; font-weight: bold;");
