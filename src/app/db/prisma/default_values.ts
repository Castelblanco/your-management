import { prisma } from '.';

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
        console.log('Error create default status');
    }
};

export const createDefaultAllUserRoles = async () => {
    try {
        const count = await prisma.users_Roles.count();

        if (count > 0) return;

        await prisma.users_Roles.createMany({
            data: [
                {
                    id: crypto.randomUUID(),
                    name: 'Admin',
                },
                {
                    id: crypto.randomUUID(),
                    name: 'Coordinador',
                },
                {
                    id: crypto.randomUUID(),
                    name: 'Colaborador',
                },
            ],
        });

        console.log('Create Default User Roles');
    } catch (e) {
        console.log({ e });
        console.log('Error create default user roles');
    }
};

export const createDefaultGuideServicesAndNovelty = async () => {
    try {
        const [novelty, services] = await Promise.all([
            prisma.guide_Service_Novelty.count(),
            prisma.guide_Service_Type.count(),
        ]);

        if (novelty === 0) {
            await prisma.guide_Service_Novelty.createMany({
                data: [
                    {
                        id: crypto.randomUUID(),
                        name: 'Direccion no existe',
                    },
                    {
                        id: crypto.randomUUID(),
                        name: 'Cliente no se encuentra',
                    },
                    {
                        id: crypto.randomUUID(),
                        name: 'Cliente no tiene dinero para pagar contraentrega',
                    },
                    {
                        id: crypto.randomUUID(),
                        name: 'Coordinar entrega',
                    },
                ],
            });
            console.log('Create Default Guides Novelty');
        }

        if (services === 0) {
            await prisma.guide_Service_Type.createMany({
                data: [
                    {
                        id: crypto.randomUUID(),
                        tab: 'DE',
                        name: 'DOCUMENTO EXPRESS',
                    },
                    {
                        id: crypto.randomUUID(),
                        tab: 'MA',
                        name: 'MERCANCIA AEREA',
                    },
                    {
                        id: crypto.randomUUID(),
                        tab: 'MT',
                        name: 'MERCANCIA TERRESTRE',
                    },
                    {
                        id: crypto.randomUUID(),
                        tab: 'PE',
                        name: 'PAQUETE EXPRESS',
                    },
                ],
            });
            console.log('Create Default Guides Services Type');
        }
    } catch (e) {
        console.log({ e });
        console.log('Error create default guides services and novelty');
    }
};
