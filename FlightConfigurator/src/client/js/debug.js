const logLevel = 1;

const logTypes = [
	'trace' /* 0 */,
	'debug' /* 1 */,
	'info' /* 2 */,
	'warn' /* 3 */,
	'error' /* 4 */
];

function getErrorObject(){
	try { throw Error('') } catch(err) { return err; }
}

function getLineNumber(){
	const err = getErrorObject();
	const caller_line = err.stack.split("\n")[5];
	const index = caller_line.indexOf("at ");
	const clean = caller_line.slice(index+2, caller_line.length);

	return clean.replace(/^[^\(]*\(([^\)]+)\)$/, "$1");
}

export default function trace(logMessage, type, reference) {
	if(typeof type === "undefined" || logTypes.indexOf(type) < 0) {
		type = 'log';
	}

	if (logTypes.indexOf(type) >= logLevel) {
		if(typeof reference === "undefined") {
			reference = getLineNumber();
		}

		let args;
		if(typeof logMessage === "Array") {
			args = [reference, ...logMessage]
		} else {
			args = [reference, logMessage]
		}

		if (typeof console !== "undefined") {
			if(typeof console[type] === "function") {
				console[type](reference, logMessage);
			} else if (typeof console.log === "function") {
				console.log(reference, logMessage);
			}
		}
	}
}
