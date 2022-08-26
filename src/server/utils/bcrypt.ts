import bcrypt from 'bcrypt';

export const generatePassword = async (password: string): Promise<string> => {
	try {
		const salt = await bcrypt.genSalt(12);
		const hash = await bcrypt.hash(password, salt);
		return hash;
	} catch (error) {
		throw error;
	}
};

export const comparePasswords = async (password: string, hashed: string): Promise<boolean> => {
	try {
		const compared = await bcrypt.compare(password, hashed);
		return compared;
	} catch (error) {
		throw error;
	}
};
