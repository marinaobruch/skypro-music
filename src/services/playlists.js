import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// test@test.test
export const playlistApi = createApi({
  reducerPath: "playlistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    // Requests for auth/reg
    postReg: builder.mutation({
      query: (body) => ({
        url: "user/signup/",
        method: "POST",
        body,
        headers: {
          "content-type": "application/json",
        },
      }),
    }),

    postLogin: builder.mutation({
      query: (body) => ({
        url: "user/login/",
        method: "POST",
        body,
        headers: {
          "content-type": "application/json",
        },
      }),
    }),

    // Requests for woks with token
    postToken: builder.mutation({
      query: (body) => ({
        url: "user/token/",
        method: "POST",
        body,
        headers: {
          "content-type": "application/json",
        },
      }),
    }),

    postTokenRefresh: builder.mutation({
      query: (body) => ({
        url: "user/token/refresh/",
        method: "POST",
        body,
        headers: {
          "content-type": "application/json",
        },
      }),
    }),

    // Requests for work with tracks
    getAllTracks: builder.query({
      query: () => "catalog/track/all/",
    }),

    getFavTracks: builder.query({
      query: () => "catalog/track/favorite/all/",
    }),
  }),
});

export const {
  useGetAllTracksQuery,
  useGetFavTracksQuery,
  usePostRegMutation,
  usePostLoginMutation,
  usePostTokenMutation,
  usePostTokenRefreshMutation,
} = playlistApi;
