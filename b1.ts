import { question } from "readline-sync";

/**
 * Thực hiện chức năng hàm tính diện tích hình chữ nhật
 */
function main(): void {

    const r = inputWidth();
    const d = inputHeight();

    const rectangle = {
        width: r,
        height: d,
    };

    console.log("Dien tich =",rectangle_Area(rectangle));
};

main();



/**
 * Hàm nhập chiều rộng hình chữ nhật
 * @returns chiều rộng
 */
function inputWidth(): number{

	let width: number;

	do {
		width = Number(question("Nhap chieu rong: "));

		if (width <= 0) 
            console.log('Vui lòng nhập chiều rộng hợp lệ');

	} while (width <= 0);

	return width;
	
}

/**
 * Hàm nhập chiều cao hình chữ nhật
 * @returns chiều cao
 */
function inputHeight(): number{

	let height: number;

	do {
		height = Number(question("Nhap chieu cao: "));

		if (height <= 0) 
            console.log('Vui lòng nhập chiều cao hợp lệ');

	} while (height <= 0);

	return height;
	
}

/**
 * Hàm tính diện tích hình chữ nhật
 * @param rectangle đối tượng người dùng định nghĩa
 * @returns diện tích hình chữ nhật
 */
function rectangle_Area(rectangle: any) :number{

    const S = rectangle.width * rectangle.height;

    return S;

} 


