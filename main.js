// bài 1
// * Đầu vào
//  *  - Tạo biến n = lương ngày làm
//  *    x= số ngày làm
//  * Xử lý:
//   luong = x*n
//  *
//  * Đầu ra: hiển thị kq
//  */
var luongMotNgay = 100.0;
var soNgaylam = 29;
var tongLuong = luongMotNgay * soNgaylam;
console.log(tongLuong);

// bài 2
// * Đầu vào
//  *  - Tạo biến a,b,c,d,e = giá trị số thực
//  *
//  * Xử lý:
//   giá trị trung bình = (a+b+c+d+e)/5
//  *
//  * Đầu ra: hiển thị kq
//  */
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;

var tong5So = a + b + c + d + e;
var giatriTrungBinh = "day la gia tri trung binh" + tong5So / 5;

console.log(giatriTrungBinh);

// bài 3
// * Đầu vào
//  *  1usd=23.500
//  *  a=usd,b=23.500;
//  * Xử lý:
//    quydoi=a*b
//  *
//  * Đầu ra: hiển thị kq
//  */

var vnd = 3;
var usd = 23.5;
var quyDoi = vnd * usd;
console.log(quyDoi);

// bài 4
// * Đầu vào
//  *  a=chieu dai hcn
//  *  b=chieu rong hcn
//  * Xử lý:
//    S=a*b
//    P=(a+b)*2
//  *
//  * Đầu ra: hiển thị kq
//  */

var chieuDai = 5;
var chieuRong = 2;
var S = chieuDai * chieuRong;
var P = (chieuDai + chieuRong) * 2;
console.log(S);
console.log(P);

// bài 5
// * Đầu vào
//  * a=12
//  * Xử lý:
//   hang dv = 12%10
//   hang chuc = 12/10
//  *
//  * Đầu ra: hiển thị kq
//  */

var a = 44;
var donVi = a % 10;
var hangChuc = Math.floor(a / 10);
var tong2KySo = donVi + hangChuc;
console.log(tong2KySo);
