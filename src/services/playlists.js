import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// test@test.test
export const playlistApi = createApi({
  reducerPath: "playlistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token.accessToken;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    // Requests for work with tracks
    getAllTracks: builder.query({
      query: () => "catalog/track/all/",
    }),
    getFavTracks: builder.query({
      query: () => "catalog/track/favorite/all/",
    }),

    // Requests for like/dislike
    setLike: builder.mutation({
      query: (track) => ({
        url: `/catalog/track/${track.id}/favorite/`,
        method: "POST",
      }),
    }),
    setUnlike: builder.mutation({
      query: (track) => ({
        url: `/catalog/track/${track.id}/favorite/`,
        method: "DELETE",
      }),
    }),

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

    // Requests for works with token
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
  }),
});

export const {
  useGetAllTracksQuery,
  useGetFavTracksQuery,
  useLazyGetFavTracksQuery,

  useSetLikeMutation,
  useSetUnlikeMutation,

  usePostRegMutation,
  usePostLoginMutation,

  usePostTokenMutation,
  usePostTokenRefreshMutation,
} = playlistApi;
