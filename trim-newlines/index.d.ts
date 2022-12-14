declare const trimNewlines: {
	/**
	Trim from the start and end of a string.

	@example
	```js
	import trimNewlines from 'trim-newlines';

	trimNewlines('\nš¦\r\n');
	//=> 'š¦'
	```
	*/
	(string: string): string;

	/**
	Trim from the start of a string.

	@example
	```js
	import trimNewlines from 'trim-newlines';

	trimNewlines.start('\nš¦\r\n');
	//=> 'š¦\r\n'
	```
	*/
	start(string: string): string;

	/**
	Trim from the end of a string.

	@example
	```js
	import trimNewlines from 'trim-newlines';

	trimNewlines.end('\nš¦\r\n');
	//=> '\nš¦'
	```
	*/
	end(string: string): string;
};

export default trimNewlines;
