import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reportApi = createApi({
  reducerPath: 'reportApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getAllReport: builder.query({
      query: () => 'reports',
    }),
    deleteReport: builder.mutation({
      query: (id) => ({
        url: `reports/${id}`,
        method: 'DELETE',
      }),
    }),
    addReport: builder.mutation({
      query: (newData) => ({
        url: 'reports',
        method: 'POST',
        body: newData,
      }),
    }),
    findReport: builder.query({
      query: ({ arananDeger, arananDeger2 }) => `reports/?${arananDeger}=${arananDeger2}`,
    }),
    updateReport: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `reports/${id}`,
        method: 'PUT',
        body: updatedData,
      }),
    }),
    
  }),
});

export const { useGetAllReportQuery, useDeleteReportMutation, useAddReportMutation, useFindReportQuery ,useUpdateReportMutation} = reportApi;
