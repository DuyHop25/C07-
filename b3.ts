import { question } from "readline-sync";
/**
 * Khai báo và xuất thông tin của Laptop
 * Thực hiện chức năng -> Hàm tính thời gian sản xuất Laptop và tính điểm máy tính
 */
function main(): void {

	// Khai báo đối tượng Laptop

	const Laptop: any = {
		name: inputNameLaptop(),
		YearOfAnufacture: inputYearOfAnufacture(),
		Configurationer: input_Configuration(),
	}

	console.log('\n\t Giới thiệu về Laptop');

	outputLaptop(Laptop);

	console.log("Laptop sản xuất được: ", longtoProduce(Laptop), "năm"); // In ra số tuổi của Laptop

	console.log("Điểm của máy tính:", scoreLaptop(Laptop), "điểm");     // In ra điểm của Laptop
}
main();



/**
 * Hàm nhập tên Laptop
 * @returns tên Laptop
 */
function inputNameLaptop(): string {

	let name: string;

	do {
		name = (question("Nhap ten laptop: "));

		if (name.length == 0)
			console.log('Vui lòng nhập tên máy hợp lệ');

	} while (name.length == 0);

	return name;

}


/**
 * Hàm nhập năm sản xuất Laptop
 * @returns năm sản xuất
 */
function inputYearOfAnufacture(): number {

	let year: number;

	do {
		year = Number(question("Nhap nam san xuat: "));

		if (year <= 0 || year > 2023)
			console.log('Vui lòng nhập năm hợp lệ');

	} while (year <= 0 || year > 2023);

	return year;

}


/**
 * Hàm khai báo đối tượng Cấu hình 
 * @returns đối tượng 
 */
function input_Configuration(): any {

	const Config: any = {
		RAM: input_RAM(),
		HDD: input_HDD(),
		screen_size: input_screensize(),
	}
	return Config;
}


/**
 * Hàm nhập thông số RAM
 * @returns thông số RAM
 */
function input_RAM(): number {

	let RAM: number;

	do {
		RAM = Number(question("Nhap thong so RAM: "));

		if (RAM <= 0)
			console.log('Vui lòng nhập RAM hợp lệ');

	} while (RAM <= 0);

	return RAM;

}

/**
 * Hàm nhập thông số HDD
 * @returns thông số HDD
 */
function input_HDD(): number {

	let HDD: number;

	do {
		HDD = Number(question("Nhap thong so HDD: "));

		if (HDD <= 0)
			console.log('Vui lòng nhập HDD hợp lệ');

	} while (HDD <= 0);

	return HDD;

}

/**
 * Hàm khai báo đối tượng 'Kích thước màn hình'
 * @returns đối tượng kích thước màn hình
 */
function input_screensize(): any {
	const screenSize: any = {
		width: input_Width(),
		height: input_Height(),
	}
	return screenSize;
}


/**
 * Hàm nhập chiều rộng màn hình Laptop
 * @returns chiều rộng màn hình
 */
function input_Width(): number {

	let width: number;

	do {
		width = Number(question("Nhap chieu rong man hinh: "));

		if (width <= 0)
			console.log('Vui lòng nhập chiều rộng hợp lệ');

	} while (width <= 0);

	return width;

}

/**
 * Hàm nhập chiều cao màn hình Laptop
 * @returns chiều cao màn hình
 */
function input_Height(): number {

	let height: number;

	do {
		height = Number(question("Nhap chieu cao: "));

		if (height <= 0)
			console.log('Vui lòng nhập chiều cao hợp lệ');

	} while (height <= 0);

	return height;
}



/**
 * In ra đối tượng Laptop với định dạng đẹp
 * @param Laptop đối tượng Laptop
 */
function outputLaptop(Laptop: any): void {
	// In ra các thuộc tính trong Laptop
	for (let key in Laptop) {			// Duyệt thuộc tính đối tượng Laptop

		if (key == 'Configurationer') { // Nếu thuộc tính Laptop = Configurationer thì 
			// In ra đối tượng trong Configurationer 
			console.log(key);

			for (let i in Laptop.Configurationer) { // Duyệt thuộc tính đối tượng Configurationer và in ra giá trị của nó
				// thuộc đối tượng Laptop

				if (i == 'screen_size') {	// Nếu = screen_size thì 
					// In ra thuộc tính và giá trị trong screen_size
					console.log('\t\t', i,);

					// Duyệt thuộc tính đối tượng screen_size và in ra giá trị của nó
					for (let k in Laptop.Configurationer.screen_size) {

						console.log('\t\t\t    ', k, ":", Laptop.Configurationer.screen_size[k], 'inch');

					}
				}
				else // Ngược lại xuất các thuộc tính và giá trị trong Configurationer 
					console.log('\t\t', i, ":", Laptop.Configurationer[i], 'Gb');
			}
		}
		else   // Ngược lại xuất các thuộc tính và giá trị trong Laptop
			console.log(key, ":", Laptop[key]);
	}
}



/**
 * Hàm tính tuổi Laptop
 * @param Laptop Đối tượng Laptop
 * @returns tuổi của Laptop
 */
function longtoProduce(Laptop: any): number {

	const long = 2023 - Laptop.YearOfAnufacture;

	return long;
}

/**
 * Hàm tính điểm Laptop
 * @param Laptop Đối tượng Laptop
 * @returns Điểm Laptop
 */
function scoreLaptop(Laptop: any): number {

	const RAM = Laptop.Configurationer.RAM;
	const HDD = Laptop.Configurationer.HDD;

	const score = Math.floor(3 * RAM + 2 * HDD) / 5;

	return score;
}

