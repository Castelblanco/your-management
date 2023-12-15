export const encryptPassword = (password: string): string => {
    return Bun.password.hashSync(password, {
        algorithm: 'bcrypt',
        cost: 10,
    });
};

export const verifyPassword = (password: string, hash: string): boolean => {
    return Bun.password.verifySync(password, hash, 'bcrypt');
};
