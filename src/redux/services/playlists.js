import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// m.obr@mail.ru
export const playlistApi = createApi({
  reducerPath: "playlistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/",
    tagTypes: ["Tracks", "Favorites"],
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
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Tracks", id })),
              { type: "Tracks", id: "LIST" },
            ]
          : [{ type: "Tracks", id: "LIST" }],
    }),

    getFavTracks: builder.query({
      query: () => "catalog/track/favorite/all/",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Favorites", id })),
              { type: "Favorites", id: "LIST" },
            ]
          : [{ type: "Favorites", id: "LIST" }],
    }),

    getSelections: builder.query({
      query: (id) => `catalog/selection/${id}/`,
    }),

    // Requests for like/dislike
    setLike: builder.mutation({
      query: (track) => ({
        url: `/catalog/track/${track.id}/favorite/`,
        method: "POST",
      }),
      invalidatesTags: [
        { type: "Favorites", id: "LIST" },
        { type: "Tracks", id: "LIST" },
      ],
    }),

    setUnlike: builder.mutation({
      query: (track) => ({
        url: `/catalog/track/${track.id}/favorite/`,
        method: "DELETE",
      }),
      invalidatesTags: [
        { type: "Favorites", id: "LIST" },
        { type: "Tracks", id: "LIST" },
      ],
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
        invalidatesTags: [{ type: "Tracks", id: "LIST" }],
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
        invalidatesTags: [{ type: "Tracks", id: "LIST" }],
      }),
    }),
  }),
});

export const {
  useGetAllTracksQuery,
  useGetFavTracksQuery,
  useLazyGetAllTracksQuery,
  useLazyGetFavTracksQuery,

  useGetSelectionsQuery,

  useSetLikeMutation,
  useSetUnlikeMutation,

  usePostRegMutation,
  usePostLoginMutation,

  usePostTokenMutation,
  usePostTokenRefreshMutation,
} = playlistApi;
