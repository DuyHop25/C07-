import { question } from "readline-sync";
/**
 * Hàm định nghĩa đối tượng User
 * Thực hiện chức năng hàm in ra thông tin User 
 * Thực hiện chức năng hàm tính số nút của thuộc tính phoneNumber trong đối tượng User
 */
function main(): void {

	const User: any = {
		account: inputAccount(),
		password: inputPassword(),
		phoneNumber: input_phoneNumber(),
	}

	console.log('\nThônh tin của User');
	outputUser(User);

	console.log("\nNút của số điện thoại là:", nodePhonenumber(User));

}
main();


/**
 * Hàm nhập tài khoản 
 * @returns tên tài khoản
 */
function inputAccount(): string {

	let account: string;

	do {
		account = (question("Nhap tai khoan: "));

		if (account.length == 0)
			console.log('Vui lòng nhập tài khoản hợp lệ');

	} while (account.length == 0);

	return account;

}


/**
 * Hàm nhập mật khẩu
 * @returns mật khẩu 
 */
function inputPassword(): string {

	let password: string;

	do {
		password = (question("Nhap mat khau: "));

		if (password.length == 0)
			console.log('Vui lòng nhập mật khẩu hợp lệ');

	} while (password.length == 0);

	return password;

}


/**
 * Hàm nhập số điện thoại
 * @returns số điện thoại
 */
function input_phoneNumber(): string {

	let phoneNumber: string;

	do {
		phoneNumber = (question("Nhap so dien thoai: "));

		if (phoneNumber.length == 0)
			console.log('Vui lòng nhập số điện thoại hợp lệ');

	} while (phoneNumber.length == 0);

	return phoneNumber;

}


/**
 * Hàm tính số nút số điện thoại
 * @param User Đối tượng User người dùng nhập
 * @returns Số nút của số điện thoại trong thuộc tính của User
 */
function nodePhonenumber(User: any): number {

	let arr: number[] = User.phoneNumber;

	let node: number = 0;

	for (let i of arr) {

		node += Number(i);

	}

	return node % 10;
}

/**
 * Hàm in ra thông tin của đối tượng User
 * @param User Đối tượng người dùng định nghĩa
 */
function outputUser(User: any): void {

	for (let i in User) {
		console.log(i, ":", User[i]);
	}
}
