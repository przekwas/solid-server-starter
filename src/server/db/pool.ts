import mysql from 'mysql2';
import config from '../config';

const pool = mysql.createPool(config.mysql);

export const Query = (query: string, values?: any) => {
	return new Promise((resolve, reject) => {
		const formatted = mysql.format(query, values);
		pool.query(formatted, (err, results) => {
			if (err) {
				reject(err);
			}

			resolve(results);
		});
	});
};
