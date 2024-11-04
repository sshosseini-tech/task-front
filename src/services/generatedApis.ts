import { api } from "./apiFile";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postApiAuthRegister: build.mutation<
      PostApiAuthRegisterApiResponse,
      PostApiAuthRegisterApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/register`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postApiAuthLogin: build.mutation<
      PostApiAuthLoginApiResponse,
      PostApiAuthLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/login`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getApiTasks: build.query<GetApiTasksApiResponse, GetApiTasksApiArg>({
      query: () => ({ url: `/api/tasks` }),
    }),
    postApiTasks: build.mutation<PostApiTasksApiResponse, PostApiTasksApiArg>({
      query: (queryArg) => ({
        url: `/api/tasks`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type PostApiAuthRegisterApiResponse = unknown;
export type PostApiAuthRegisterApiArg = {
  body: {
    username?: string;
    password?: string;
    isAdmin?: boolean;
  };
};
export type PostApiAuthLoginApiResponse = unknown;
export type PostApiAuthLoginApiArg = {
  body: {
    username?: string;
    password?: string;
  };
};
export type GetApiTasksApiResponse = unknown;
export type GetApiTasksApiArg = void;
export type PostApiTasksApiResponse = unknown;
export type PostApiTasksApiArg = {
  body: {
    title?: string;
    description?: string;
  };
};
export const {
  usePostApiAuthRegisterMutation,
  usePostApiAuthLoginMutation,
  useGetApiTasksQuery,
  usePostApiTasksMutation,
} = injectedRtkApi;
