export interface IpromptItem {
	type: string;
	name: string;
	choices: (IpromptItem | IpromptChildItem)[];
}

export interface IpromptChildItem {
	type: string;
	name: string;
	method: (again?: () => any) => void;
}

export type IQuestion = IpromptItem | IpromptChildItem;

export interface IBasepromptItem {
	name: string;
	choices: IBaseQuestion[];
}

export interface IBasepromptChildItem {
	name: string;
	method: (again?: () => any) => void;
}

export type IBaseQuestion = IBasepromptItem | IBasepromptChildItem;
