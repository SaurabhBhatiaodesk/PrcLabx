import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // For navigation
import MainHeading from "../ManinHeading/MainHeading";

interface Item {
  id: string;
  title: string;
  alias: string;
  data?: Item[]; // data can be an array of nested items (series, models, etc.)
  products?: Item[]; // products can be an array of product items
}

const Bannersearchcard: React.FC = () => {
  const router = useRouter();
  const [baseData, setBaseData] = useState<Item[]>([]); // Store base data (brands, devices, series, etc.)

  // Store title and alias for each selected option
  const [selectedBrand, setSelectedBrand] = useState<{
    title: string;
    alias: string;
  }>({ title: "", alias: "" });
  const [selectedDevice, setSelectedDevice] = useState<{
    title: string;
    alias: string;
  }>({ title: "", alias: "" });
  const [selectedSeries, setSelectedSeries] = useState<{
    title: string;
    alias: string;
  }>({ title: "", alias: "" });
  const [selectedModel, setSelectedModel] = useState<{
    title: string;
    alias: string;
  }>({ title: "", alias: "" });
  const [generatedSlug, setGeneratedSlug] = useState<string>("");

   useEffect(() => {
    const fetchBrands = async () => {
      try {
        const api = `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/api/sidebar-filter`;
        let baseData: any = JSON.parse(
          sessionStorage.getItem("baseData") || "[]"
        );
        console.log("baseData.length",baseData.length);
        
        if (baseData.length === 0) {
          try {
            const res = await fetch(api);
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            baseData = await res.json();
            sessionStorage.setItem("baseData", JSON.stringify(baseData));
            setBaseData(baseData);
          } catch (error) {
            console.error("Error fetching base data:", error);
          }
        }
        setBaseData(baseData);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };
    fetchBrands();
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const data = JSON.parse(sessionStorage.getItem("baseData") || "[]");
  //     setBaseData(data);
  //   }, 3000); // Corrected the delay to 3000 milliseconds
  //   // Cleanup function to clear the timer if the component is unmounted
  //   return () => clearTimeout(timer);
  // }, []);

  // Get the list of devices or products based on the selected brand
  const getItems = (brand: string): Item[] => {
    const brandData = baseData.find((item) => item.title === brand);
    return brandData ? brandData.data || brandData.products || [] : [];
  };

  // Get the series or products list based on the selected device
  const getSeriesOrProducts = (device: string): Item[] => {
    const deviceData = baseData
      .find((item) => item.title === selectedBrand.title)
      ?.data?.find((d) => d.title === device);

    if (deviceData) {
      // Check if data is empty, fallback to products
      return deviceData.data?.length
        ? deviceData.data
        : deviceData.products || [];
    }
    return [];
  };
  // Get models or products based on the selected series
  const getModelsOrProducts = (series: string): Item[] => {
    const seriesData = baseData
      .find((item) => item.title === selectedBrand.title)
      ?.data?.find((d) => d.title === selectedDevice.title)
      ?.data?.find((s) => s.title === series);

    if (seriesData) {
      // Check if data is empty, fallback to products
      return seriesData.data?.length
        ? seriesData.data
        : seriesData.products || [];
    }
    return [];
  };

  useEffect(() => {
    const models = getModelsOrProducts(selectedSeries.title);

    // Filter the models based on the selected model's alias
    const matchedModel = models.find(
      (item) => item.alias === selectedModel.alias
    );

    if (matchedModel) {
      // Find the repair issue (e.g., screen-repair) for the matched model
      const selectedIssue = matchedModel.data?.find(
        (issue) => issue.alias === "screen-repair"
      );

      // Generate the slug if the issue is found
      if (selectedIssue) {
        const generatedSlug = `${matchedModel.alias}/${selectedIssue.alias}`;
        setGeneratedSlug(generatedSlug);
      }
    }
  }, [selectedModel, selectedSeries, selectedDevice, selectedBrand]);
  // Handle form submission to generate the slug and search for services

  // Get data based on the selection
  const devices = getItems(selectedBrand.title);

  const series = getSeriesOrProducts(selectedDevice.title);
  const filteredSeriesItems = series.filter(
    (item) => item.title === selectedSeries.title
  );

  const models = getModelsOrProducts(selectedSeries.title);
  const handleSearch = () => {
    if (selectedSeries.title && models.length > 0) {
      const slug = `${selectedBrand.alias}/${selectedDevice.alias}/${selectedSeries.alias}/${generatedSlug}`;
      router.push(`/brands/${slug}`); // Redirect to the search results page with the generated slug
    } else {
      const firstIssueAlias = filteredSeriesItems[0]?.data?.[0]?.alias || "";
      const slug = `${selectedBrand.alias}/${selectedDevice.alias}/${selectedSeries.alias}/${firstIssueAlias}`;
      router.push(`/brands/${slug}`);
    }
  };
  return (
    <div className="max-w-lg mr-0 lg:p-8 p-6 bg-gray-50 rounded-lg shadow-md">
      {/* <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800">Select Your Device</h2> */}
      <div className="mb-4">
        <MainHeading
          Heading="Select Your Device"
          svg_stroke="var(--alpha)"
          color="var(--prc)"
        />
      </div>
      {/* Brand Selection */}
      <select
        value={selectedBrand.title}
        onChange={(e) => {
          const selected = baseData.find(
            (item) => item.title === e.target.value
          );
          setSelectedBrand({
            title: selected?.title || "",
            alias: selected?.alias || "",
          });
          setSelectedDevice({ title: "", alias: "" }); // Reset device when brand changes
          setSelectedSeries({ title: "", alias: "" }); // Reset series when brand changes
          setSelectedModel({ title: "", alias: "" }); // Reset model when brand changes
        }}
        className="w-full p-3 mb-4 border border-[#00303E] rounded-2xl bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Brand</option>
        {baseData.map((brand) => (
          <option key={brand.id} value={brand.title}>
            {brand.title}
          </option>
        ))}
      </select>

      {/* Device Selection */}
      <select
        value={selectedDevice.title}
        onChange={(e) => {
          const selected = getItems(selectedBrand.title).find(
            (device) => device.title === e.target.value
          );
          setSelectedDevice({
            title: selected?.title || "",
            alias: selected?.alias || "",
          });
          setSelectedSeries({ title: "", alias: "" }); // Reset series when device changes
          setSelectedModel({ title: "", alias: "" }); // Reset model when device changes
        }}
        className="w-full p-3 mb-4 border border-[#00303E] rounded-2xl bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Category</option>
        {devices.length > 0 ? (
          devices.map((device) => (
            <option key={device.id} value={device.title}>
              {device.title}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No category found
          </option>
        )}
      </select>

      {/* Series Selection (only show if series exist for the selected device) */}
      {selectedDevice.title && series.length > 0 && (
        <select
          value={selectedSeries.title}
          onChange={(e) => {
            const selected = series.find(
              (series) => series.title === e.target.value
            );
            setSelectedSeries({
              title: selected?.title || "",
              alias: selected?.alias || "",
            });
            setSelectedModel({ title: "", alias: "" }); // Reset model when series changes
          }}
          className="w-full p-3 mb-4 border border-[#00303E] rounded-2xl bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Series</option>
          {series.map((seriesItem) => (
            <option key={seriesItem.id} value={seriesItem.title}>
              {seriesItem.title}
            </option>
          ))}
        </select>
      )}

      {/* Model Selection (only show if models exist for the selected series) */}
      {selectedSeries.title && models.length > 0 && (
        <select
          value={selectedModel.title}
          onChange={(e) => {
            const selected = models.find(
              (model) => model.title === e.target.value
            );
            setSelectedModel({
              title: selected?.title || "",
              alias: selected?.alias || "",
            });
          }}
          className="w-full p-3 mb-6 border border-[#00303E] rounded-2xl bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Product</option>
          {models.map((model) => (
            <option key={model.id} value={model.title}>
              {model.title}
            </option>
          ))}
        </select>
      )}

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full py-2 bg-[#00303E] text-white font-semibold rounded-full shadow-lg hover:bg-[#005063] focus:outline-none focus:ring-2 focus:ring-[#00303E]"
      >
        Search Services
      </button>
    </div>
  );
};

export default Bannersearchcard;
