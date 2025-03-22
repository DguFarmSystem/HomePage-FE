// import { useQuery } from "@tanstack/react-query";
// import { fetchApplications } from "../services/application";
// import { Application } from "../types/application";

export const useApplications = (track?: string) => {
  // return useQuery<Application[]>({
  //   queryKey: ["applications", track],
  //   queryFn: () => fetchApplications(track),
  //   enabled: track !== undefined,
  // });
  return track;
};
