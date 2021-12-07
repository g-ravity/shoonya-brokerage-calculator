export interface IOrderBook {
	stat: 'Ok' | 'Not_Ok';
	norenordno: string;
	uid: string;
	actid: string;
	exch: string;
	tsym: string;
	qty: string;
	ordenttm: string;
	trantype: 'B' | 'S';
	prctyp: 'MKT' | 'SL-LMT' | 'SL-MKT' | 'LMT';
	ret: 'DAY' | 'IOC';
	token: string;
	mult: string;
	prcftr: string;
	dname: string;
	pp: string;
	ls: string;
	ti: string;
	prc: string;
	rprc: string;
	avgprc: string;
	dscqty: string;
	prd: string;
	status: 'COMPLETE' | 'CANCELED' | 'REJECTED';
	fillshares: string;
	norentm: string;
	exch_tm: string;
	exchordid: string;
	rqty: string;
}

export interface ITradeBook
	extends Pick<
		IOrderBook,
		| 'stat'
		| 'norenordno'
		| 'uid'
		| 'actid'
		| 'exch'
		| 'prctyp'
		| 'ret'
		| 'prd'
		| 'trantype'
		| 'tsym'
		| 'token'
		| 'qty'
		| 'fillshares'
		| 'pp'
		| 'ls'
		| 'ti'
		| 'prc'
		| 'norentm'
		| 'exch_tm'
		| 'exchordid'
	> {
	flid: string;
	fltm: string;
	flqty: string;
	flprc: string;
}
