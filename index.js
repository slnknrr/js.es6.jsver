/*module:jsver:?es2+*//** en-US, 2023-12-08 03:03 UTC+03:00
 *
 * jsver: js-1.0.0-20231208/1-WlPs: 2023, RUS, Yuriyi `niknils` Slinkin <nknls@discord.com|slnknrr.github.io|notabug.org/slnknrr>
 *   licensed under MIT license;
 *
 *   Tests or returns the JavaScript version by (ECMAScript) starting with ES2.
 *
 * @properties:
 *       const: secure
 *   arguments: strict
 *     support: web, nodejs
 *
 * @params:
 *       @: returns the JavaScript version in the software environment.
 *     str: check compliance with the named standard; jsver('') -> jsver.version<6
 *        ! /^(true|false|[0-9]{1,})$/i equal to @params#bol and @params#int
 *     int: check the year or version of the standard:
 *        @ -1000: main() -> @bol: true if (int==version)
 *        @ 1000+: main() -> @bol: true if (int==year)
 *     bol:
 *        @ main() -> @bol: true if the current version of the JavaScript Engine is the last known in jsver
 *
 * @return:
 *    @arr: [
 *            <int>version=2,
 *            <int>year=1998,
 *            <str>standard=ECMAScript 2
 *          ]
 *    @bol: logical value from verification of the version as it is described in @params!=@
 *
*/function jsver(_obj, _equ, _ver, best) {
	best=14;
	if (arguments.length>1) return null;
	if (arguments.length==1) var _equ=_obj;

	if (typeof array=='undefined') array=[];
	if (typeof window!='undefined'&&typeof document!='undefined') {
		if (!Object.create) {
			_ver=2;
		} else if (!Array.isArray) {
			_ver=3;
		} else if (!window.Promise) {
			_ver=5;
		} else if (!array.includes) {
			_ver=6;
		} else if (!"".padStart) {
			_ver=7;
		} else if (!Promise.prototype.finally) {
			_ver=8;
		} else if (!window.BigInt) {
			_ver=9;
		} else if (!Promise.allSettled) {
			_ver=10;
		} else if (!"".replaceAll) {
			_ver=11;
		} else if (!array.at) {
			_ver=12;
		} else if (!array.with) {
			_ver=13;
		} else {
			_ver=14;
		}
	} else if (typeof process!='undefined') {
		if (!process.argv) return false;
		if (!Object.create) {
			_ver=2;
		} else if (!Array.isArray) {
			_ver=3;
		} else if (!Promise) {
			_ver=5;
		} else if (!array.includes) {
			_ver=6;
		} else if (!"".padStart) {
			_ver=7;
		} else if (!Promise.prototype.finally) {
			_ver=8;
		} else if (!BigInt) {
			_ver=9;
		} else if (!Promise.allSettled) {
			_ver=10;
		} else if (!"".replaceAll) {
			_ver=11;
		} else if (!array.at) {
			_ver=12;
		} else if (!array.with) {
			_ver=13;
		} else {
			_ver=14;
		}
	} else {
		return false;
	}

	if (_ver<3) {
		return [2,'ECMAScript 2',1998];
	} else {
		if (_ver>5) {
			_ver=[_ver, 2009+_ver, 'ECMAScript '+(2009+_ver)];
		} else {
			_ver=[_ver, 1999+_ver, ''];
		}
	}

	if (typeof _equ=='string') {
		if (_equ.match(/^[0-9]{1,}$/)) _equ=parseInt(_equ);
	}
	if (typeof _equ=='string'||typeof _equ=='boolean') {
		if (_equ==true) { if (best==_ver[0]) return true; return false; }
		if (_equ==false) { if (best==_ver[0]) return false; return true; }
		if (_equ.toLowerCase()=='true') { if (best==_ver[0]) return true; return false; }
		if (_equ.toLowerCase()=='false') { if (best==_ver[0]) return false; return true; }
		if (_equ==_ver[2]) { return true } else { return false }
	} else if (typeof _equ=='number') {
		if (_equ>999) {
			if (_equ==_ver[1]) return true; return false;
		} else {
			if (_equ==_ver[0]) return true; return false;
		}
	} else if (arguments.length!=0) {
		return null;
	} else {
		return _ver;
	}
}
/*module:jsver:?es2+*/

/*module:jsver:?es6+*/
function jsvero(_args, args_, _robj, best) {
	var best=14;
	var _args=[_args, args_, _robj, best].concat(Array.from(arguments).slice(1,)).slice(0,arguments.length);
	var args_=[];
	for (var _robj of _args) {
		if (typeof _robj=='string') {
			args_.push(_robj.replaceAll('"', '\"'));
		} else if (typeof _robj=='boolean') {
			if (_robj==true) { args_.push('true') } else { args_.push('false') }
		} else {
			return null;
		}
	}
	if (arguments.length==0) { args_='' } else { args_=`"${args_.join('", "')}"` }
	try {
		var _robj=eval(`jsver(${args_})`);
		if (_robj[0]==best) {
			return Object.assign(_robj[0], { best:true, ver:_robj[0], name:_robj[2], year:_robj[1] });
		} else {
			return Object.assign(_robj[0], { best:true, ver:_robj[0], name:_robj[2], year:_robj[1] });
		}
	} catch {
		return null;
	}
}
/*module:jsver:?es6+*/

module.exports=Object.assign(jsver, {o:jsver, jsver:jsver, jsvero:jsvero});