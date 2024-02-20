import api from './root-api';

const peopleApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    getUsers: builder.query({
      query: page => `/people/?page=${page}&limit=10`,
    }),
  }),
});

export const {useLazyGetUsersQuery} = peopleApi;
