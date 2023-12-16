import { useQuery } from "@tanstack/react-query";
import FetchBreedList from "./FetchBreedList";

const useBreedList = (animal) => {
  const results = useQuery({
    queryKey: ["animal", animal],
    queryFn: FetchBreedList,
  });
  return [results?.data?.breeds ?? [], results.status];
};

export default useBreedList;
