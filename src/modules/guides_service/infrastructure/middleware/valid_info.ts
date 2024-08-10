import { t } from 'elysia';

export const validGuideInfo = t.Object({
    price: t.Number({
        minimum: 1,
    }),
    collection: t.Boolean(),
    commodity: t.Array(
        t.Object({
            units: t.Number({
                minimum: 1,
            }),
            weight: t.Number({
                minimum: 1,
            }),
        }),
        {
            minItems: 1,
        },
    ),
    user: t.Object({}),
    client_origin: t.Object({}),
    client_destination: t.Object({}),
    novelty: t.Object({}),
    point_sale_origin: t.Object({}),
    point_sale_destination: t.Object({}),
    service: t.Object({}),
    status: t.Object({}),
    created_at: t.Unknown(t.Date()),
    updated_at: t.Unknown(t.Date()),
});
