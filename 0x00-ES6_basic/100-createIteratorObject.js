export default function createIteratorObject(report) {
	const employees = [];
	for (const dept in report.allEmployees){
		if ({}.hasOwnProperty.call(report.allEmployees, dept)){
			employees.push(...report.allEmployees[dept]);
		}
	}
	return employees;
}
