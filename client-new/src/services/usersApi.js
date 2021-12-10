import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import dotenv from "dotenv";
dotenv.config();

const baseUrl = "http://localhost:3001/users";

const createRequest = (url, accessTokenHeader) => ({
  url,
  headers: { authToken: accessTokenHeader },
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    addUser: build.mutation({
      query(body,accessTokenHeader) {
        return {
          url: "/register",
          method: 'POST',
          headers: { authToken: accessTokenHeader},
          body,
        }
      },
  }),
});

export const {
  useGetCryptoStatsQuery,
  useGetTopCryptosQuery,
  useGetCryptoByIdQuery,
} = cryptoApi;
