import { getAvalaibilty } from "@/lib/actions";
import {
  AvailabilityApi,
  transformAvailability,
} from "@/schemas/availabilitySchema";
import { useEffect, useState } from "react";

export function useAvailability(serviceId: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [availability, setAvailabilty] = useState<Availability>();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = (await getAvalaibilty(serviceId)) as AvailabilityApi;
        setAvailabilty(transformAvailability(data));
      } catch (error: any) {
        setError(error);
      }
    }

    fetchData();
  }, [serviceId]);

  return { isLoading, availability, error };
}
