export const trackPackage = async (trackingCode) => {
    try {
      const response = await fetch(`/track/${trackingCode}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching tracking data", error);
      throw error;
    }
  };
  