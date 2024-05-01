import { Prisma, PrismaClient } from '@prisma/client';
import { prismaError as PrismaError } from 'prisma-better-errors';
import {
    createDefaultAllStatus,
    createDefaultAllUserRoles,
    createDefaultGuideServicesAndNovelty,
} from './default_values';

export const prisma = new PrismaClient();
export class PrismaRequestError extends Prisma.PrismaClientKnownRequestError {}
export { PrismaError };

export const connectPrisma = async (): Promise<void> => {
    try {
        await prisma.$connect();
        /* eslint-disable @typescript-eslint/no-confusing-void-expression */
        await Promise.allSettled([
            await createDefaultAllStatus(),
            await createDefaultAllUserRoles(),
            await createDefaultGuideServicesAndNovelty(),
        ]);
        console.log('Prisma Conected');
    } catch (e) {
        console.log(e);
        console.log('error connection Prisma');
    }
};
