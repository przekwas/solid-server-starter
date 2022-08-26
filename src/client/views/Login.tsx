import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/apiService';

interface LoginProps {}

const Login = (props: LoginProps) => {
	const navigate = useNavigate();
	const [values, setValues] = useState<{ [key: string]: string }>({
		email: 'luke@covalence.io',
		password: 'password123'
	});
	const [error, setError] = useState<string>('');

	const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues(p => ({ ...p, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		apiService('/auth/login', 'POST', values)
			.then(resp => {
				localStorage.setItem('token', resp.token);
				navigate('/profile');
			})
			.catch(e => setError(e));
	};

	return (
		<main className="container my-5">
			<section className="row justify-content-center">
				<div className="col-12 col-md-6">
					<form className="p-3 shadow">
						<label htmlFor="email">Email</label>
						<input
							name="email"
							type="email"
							placeholder="fox@mccloud.com"
							autoComplete="current-email mb-2"
							className="form-control"
							value={values.email || ''}
							onChange={handleChanges}
						/>
						<label htmlFor="password">Password</label>
						<input
							name="password"
							type="password"
							placeholder="multishine20xx"
							autoComplete="current-password"
							className="form-control mb-2"
							value={values.password || ''}
							onChange={handleChanges}
						/>
						<div className="mt-2 d-flex justify-content-end">
							<button className="btn btn-primary" onClick={handleSubmit}>
								Login
							</button>
						</div>
					</form>
				</div>
			</section>
			{error && (
				<section className="row justify-content-center">
					<div className="col-12 col-md-6">
						<div className="alert alert-danger">{error}</div>
					</div>
				</section>
			)}
		</main>
	);
};

export default Login;
