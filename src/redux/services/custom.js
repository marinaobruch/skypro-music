// не используется в коде, для примера

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLogin } from "../store/userSlice";

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://painassasin.online",
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

  const { auth } = api.getState();

  if (!auth.refresh) {
    return forceLogout();
  }

  const refreshResult = await baseQuery(
    {
      url: "/user/token/refresh/",
      method: "POST",
      body: {
        refresh: auth.refresh,
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
    getMainPlaylist: builder.query({
      query: () => "/catalog/track/all/",
    }),
    getMyPlaylist: builder.query({
      query: () => ({
        url: "/catalog/track/favorite/all/",
      }),
    }),
  }),
});

export const { useGetMainPlaylistQuery, useGetMyPlaylistQuery } = playlistApi;
