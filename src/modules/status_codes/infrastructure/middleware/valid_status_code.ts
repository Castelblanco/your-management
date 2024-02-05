import { t } from 'elysia';

export const validStatusCode = t.Object({
    name: t.String({
        minLength: 3,
        maxLength: 10,
    }),
});

export const validStatusCodeList = t.Array(
    t.Object({
        name: t.String({
            minLength: 3,
            maxLength: 10,
        }),
    }),
);
