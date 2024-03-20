import { prisma } from '.';

export const createDefaultClientTypes = async () => {
    try {
        const count = await prisma.client_Type.count();

        if (count !== 0) return;

        await prisma.client_Type.createMany({
            data: [
                {
                    id: crypto.randomUUID(),
                    name: 'Natural',
                },
                {
                    id: crypto.randomUUID(),
                    name: 'Juridico',
                },
            ],
            skipDuplicates: true,
        });

        console.log('Client Types Created');
    } catch (e) {
        console.log(e);
    }
};

export const createDefaultAllStatus = async () => {
    try {
        const [points, clients, guides, users] = await Promise.all([
            prisma.point_Sales_Status.count(),
            prisma.client_Status.count(),
            prisma.guide_Service_Status.count(),
            prisma.users_Status.count(),
        ]);

        if (points === 0) {
            await prisma.point_Sales_Status.createMany({
                data: [
                    {
                        id: crypto.randomUUID(),
                        name: 'Activo',
                    },
                    {
                        id: crypto.randomUUID(),
                        name: 'Inactivo',
                    },
                ],
                skipDuplicates: true,
            });

            console.log('Points Sale Status Created');
        }

        if (clients === 0) {
            await prisma.client_Status.createMany({
                data: [
                    {
                        id: crypto.randomUUID(),
                        name: 'Activo',
                    },
                    {
                        id: crypto.randomUUID(),
                        name: 'Inactivo',
                    },
                ],
                skipDuplicates: true,
            });

            console.log('Client Status Created');
        }

        if (guides === 0) {
            await prisma.guide_Service_Status.createMany({
                data: [
                    {
                        id: crypto.randomUUID(),
                        name: 'Activo',
                    },
                    {
                        id: crypto.randomUUID(),
                        name: 'Inactivo',
                    },
                ],
                skipDuplicates: true,
            });

            console.log('Guides Status Created');
        }

        if (users === 0) {
            await prisma.users_Status.createMany({
                data: [
                    {
                        id: crypto.randomUUID(),
                        name: 'Activo',
                    },
                    {
                        id: crypto.randomUUID(),
                        name: 'Inactivo',
                    },
                ],
                skipDuplicates: true,
            });

            console.log('Users Status Created');
        }
    } catch (e) {
        console.log(e);
    }
};
