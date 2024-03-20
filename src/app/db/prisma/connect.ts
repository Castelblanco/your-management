import { Prisma, PrismaClient } from '@prisma/client';
import { prismaError as PrismaError } from 'prisma-better-errors';
import { createDefaultAllStatus, createDefaultClientTypes } from './default_types_status';

export const prisma = new PrismaClient();
export class PrismaRequestError extends Prisma.PrismaClientKnownRequestError {}
export { PrismaError };

export const connectPrisma = async (): Promise<void> => {
    try {
        await prisma.$connect();
        await createDefaultClientTypes();
        await createDefaultAllStatus();
        console.log('Prisma Conected');
    } catch (e) {
        console.log(e);
        console.log('error connection Prisma');
    }
};
