export type TMappers<TDom, TApi, TOpts = unknown> = {
    apiToDom: (item: TApi, opts?: TOpts) => TDom;
    domToApi: (item: TDom, opts?: TOpts) => TApi;
};
