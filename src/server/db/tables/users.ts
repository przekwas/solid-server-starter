import { Query } from '../pool';

const all = () =>
	Query(`
    SELECT
        id,
        handle,
        email,
        role,
        created_at
    FROM
        users;
`);

const find = (col: string, val: string) =>
	Query(
		`
    SELECT
        *
    FROM
        users
    WHERE ?? = ?;
`,
		[col, val]
	);

export default {
	all,
    find
};
