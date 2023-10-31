import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// m.obr@mail.ru
import { userLogin } from "../store/userSlice";

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token.accessToken;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status !== 401) {
    return result;
  }
  const forceLogout = () => {
    api.dispatch(userLogin(null));
    window.location.navigate("/login");
  };

  const { token } = api.getState();

  if (!token.refreshToken) {
    return forceLogout();
  }

  const refreshResult = await baseQuery(
    {
      url: "/user/token/refresh/",
      method: "POST",
      body: {
        refresh: token.refreshToken,
      },
    },
    api,
    extraOptions
  );

  if (!refreshResult.data.access) {
    return forceLogout();
  }

  // доступ к токену, другой запрос
  api.dispatch(userLogin({ ...auth, access: refreshResult.data.access }));

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    return forceLogout();
  }

  return retryResult;
};

export const playlistApi = createApi({
  reducerPath: "playlistApi",
  baseQuery: baseQueryWithReauth,

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
              ...result.map(({ id }) => ({ type: "Tracks", id })),
              { type: "Tracks", id: "LIST" },
            ]
          : [{ type: "Tracks", id: "LIST" }],
    }),

    getTrackById: builder.query({
      query: (id) => `catalog/track/${id}`,
      providesTags: [{ type: "Tracks", id: "LIST" }],
    }),

    getSelections: builder.query({
      query: (id) => `catalog/selection/${id}/`,
      providesTags: (result) =>
        result
          ? [
              ...result.items.map(({ id }) => ({ type: "Tracks", id })),
              { type: "Tracks", id: "LIST" },
            ]
          : [{ type: "Tracks", id: "LIST" }],
    }),

    // Requests for like/dislike
    setLike: builder.mutation({
      query: (track) => ({
        url: `/catalog/track/${track.id}/favorite/`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Tracks", id: "LIST" }],
    }),

    setUnlike: builder.mutation({
      query: (track) => ({
        url: `/catalog/track/${track.id}/favorite/`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Tracks", id: "LIST" }],
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
  useGetTrackByIdQuery,

  useGetSelectionsQuery,

  useSetLikeMutation,
  useSetUnlikeMutation,

  usePostRegMutation,
  usePostLoginMutation,

  usePostTokenMutation,
  usePostTokenRefreshMutation,
} = playlistApi;
