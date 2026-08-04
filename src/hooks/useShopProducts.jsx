import React from "react";
import axiosInstance from "../API/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import i18n from "i18next";

export default function useShopProducts({
  page = 1,
  limit = 6,
  sortBy = "price",
  ascending = true,
}) {
  const getShopProducts = async () => {
    const response = await axiosInstance.get("/Products", {
      params: {
        page,
        limit,
        sortBy,
        ascending,
      },
    });

    return response.data;
  };

  return useQuery({
    queryKey: ["shopProducts", i18n.language, page, limit, sortBy, ascending],
    queryFn: getShopProducts,
    staleTime: 1000 * 60 * 5,
  });
}
