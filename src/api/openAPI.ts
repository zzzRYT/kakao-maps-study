import type { TourRequest, TourResponse } from "./type";

export const TOUR_API = {
  getTourList: async (params: TourRequest): Promise<TourResponse> => {
    const temp = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {} as Record<string, string>)
    );

    const response = await fetch(`/api/locationBasedList2?${temp.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  },
};
