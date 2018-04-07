// Write your cade below:
function main(sysIn,userIn) {
	let count = [0,0];
	for (let i = 0; i < sysIn.length; i++) {
		let temp = userIn.indexOf(sysIn.charAt(i));
		if (temp != -1 && temp != i) {
			count[1] += 1;
		}
		if (temp == i) {
			count[0] += 1;
		}
	}
	return `${count[0]}A${count[1]}B`;
};

module.exports = {
    main
}