import { Prisma, PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
export class PrismaError extends Prisma.PrismaClientKnownRequestError {}
