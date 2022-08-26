export async function apiService(uri: string, method: string = 'GET', data?: any) {
	const TOKEN = localStorage.getItem('token');
	const headers: HeadersInit = {
		'Content-Type': 'application/json'
	};
	const fetchOptions: IFetchOptions = {
		method,
		headers,
		body: JSON.stringify(data)
	};

	if (TOKEN) {
		headers['Authorization'] = `Bearer ${TOKEN}`;
	}

	if (method === 'GET') {
		delete headers['Content-Type'];
		delete fetchOptions.body;
	}

	try {
		const res = await fetch(uri, fetchOptions);
        const parsed = await res.json();

		if (res.ok) {
			return parsed;
		} else {
            throw new Error(parsed.error);
        }

	} catch (error) {
		console.error('[apiService error]', error.message);
		throw error.message;
	}
}

interface IFetchOptions {
	method: string;
	headers?: HeadersInit;
	body?: string;
}
