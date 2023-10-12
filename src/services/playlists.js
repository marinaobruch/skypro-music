import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const playlistApi = createApi({
  reducerPath: "playlistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/",
  }),
  endpoints: (builder) => ({
    postReg: builder.mutation({
      query: (body) => ({
        url: "user/signup/",
        method: "POST",
        body,
      }),
    }),

    postLogin: builder.mutation({
      query: (body) => ({
        url: "user/login/",
        method: "POST",
        body,
      }),
    }),

    postToken: builder.mutation({
      query: (body) => ({
        url: "user/token/",
        method: "POST",
        body,
      }),
    }),

    postTokenRefresh: builder.mutation({
      query: (body) => ({
        url: "user/token/refresh/",
        method: "POST",
        body,
      }),
    }),

    getAllTracks: builder.query({
      query: () => "catalog/track/all/",
    }),
  }),
});

export const {
  useGetAllTracksQuery,
  usePostRegMutation,
  usePostLoginMutation,
  usePostTokenMutation,
  usePostTokenRefreshMutation,
} = playlistApi;
