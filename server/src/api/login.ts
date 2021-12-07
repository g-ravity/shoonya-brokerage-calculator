import puppeteer from 'puppeteer';
import wait from 'waait';
import { SHOONYA_COOKIE_TOKEN } from '../utils/constants';

interface ILoginParams {
	userId: string;
	pan: string;
	password: string;
}

export const loginAndFetchMetaData = async ({ userId, pan, password }: ILoginParams): Promise<{ accessToken?: string }> => {
	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto('https://shoonya.finvasia.com/#/', {
			waitUntil: 'domcontentloaded',
		});
		await wait(5000);
		await page.keyboard.type(userId);
		await page.keyboard.press('Tab');
		await page.keyboard.type(password);
		await page.keyboard.press('Tab');
		await page.keyboard.type(pan);
		await page.keyboard.press('Enter');
		await wait(5000);
		const cookies = await page.cookies();

		return { accessToken: cookies.find((cookie) => cookie.name === SHOONYA_COOKIE_TOKEN).value };
	} catch (err) {
		console.log('Something went wrong!\n', err);
		throw new Error(err as string);
	}
};
