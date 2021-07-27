import * as mysql from 'mysql';
import { mySQL_Response } from '../../types';
import { sqlConfig } from '../config';

const pool = mysql.createPool(sqlConfig);

export const Query = <T = mySQL_Response>(queryString: string, values?: any[]) => {
    return new Promise<T> ((resolve, reject) => {
        pool.query(queryString, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}
