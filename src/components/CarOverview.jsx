import React from "react";

const CarOverview = () => {
  const overviewData = [
    [
      { label: "Make Year", value: "Aug 2021" },
      { label: "Registration Year", value: "Dec 2021" },
      { label: "Fuel Type", value: "Diesel" },
    ],
    [
      { label: "Mileage", value: "13K km" },
      { label: "Transmission", value: "Manual" },
      { label: "Owners", value: "1 Owner" },
    ],
    [
      { label: "Insurance Validity", value: "Nov 2025" },
      { label: "Insurance Type", value: "Third Party" },
      { label: "RTO", value: "DL3C" },
    ],
  ];

  const carData = [
    [
      { label: "Mileage (ARAI)", value: "15 kmpl" },
      { label: "Ground Clearance", value: "226 mm" },
      { label: "Seating Capacity", value: "4" },
    ],
    [
      { label: "Fuel tank capacity", value: "57 litres" },
      { label: "Displacement", value: "2184 cc" },
    ],
  ];

  return (
    <div className="mt-8">
      {/* Car Overview */}
      <h2 className="text-lg font-semibold mb-3">Car Overview</h2>
      <div className="border border-gray-300 rounded">
        {overviewData.map((row, idx) => (
          <div key={idx}>
            <div className="grid  grid-cols-3 gap-4 p-4">
              {row.map((item, i) => (
                <div key={i}>
                  <p className="text-gray-500 text-sm">{item.label}</p>
                  <p className="font-medium text-gray-800">{item.value}</p>
                </div>
              ))}
            </div>
            {idx < overviewData.length - 1 && <hr className="border-gray-200" />}
          </div>
        ))}
      </div>

      {/* Car Specifications */}
      <h2 className="text-lg font-semibold mt-8 mb-3">Car Specifications</h2>
      <div className="border border-gray-300 rounded">
        {carData.map((row, idx) => (
          <div key={idx}>
            <div className="grid grid-cols-3 gap-4 p-4">
              {row.map((item, i) => (
                <div key={i}>
                  <p className="text-gray-500 text-sm">{item.label}</p>
                  <p className="font-medium text-gray-800">{item.value}</p>
                </div>
              ))}
            </div>
            {idx < carData.length - 1 && <hr className="border-gray-200" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarOverview;
