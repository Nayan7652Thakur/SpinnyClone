import React, { useState, useEffect } from "react";

const EmiCalculatorModal = ({ isOpen, onClose }) => {
  const [loanAmount, setLoanAmount] = useState(1060800);
  const [downPayment, setDownPayment] = useState(265200);
  const [duration, setDuration] = useState(66);
  const [emi, setEmi] = useState(0);

  // Fixed annual interest rate (example: 10.5%)
  const annualRate = 10.5;

  useEffect(() => {
    const principal = loanAmount - downPayment;
    const monthlyRate = annualRate / 12 / 100;
    const n = duration;

    if (principal > 0 && monthlyRate > 0) {
      const emiValue =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
        (Math.pow(1 + monthlyRate, n) - 1);

      setEmi(Math.round(emiValue));
    } else {
      setEmi(0);
    }
  }, [loanAmount, downPayment, duration]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-md bg-opacity-40 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-4">Check Eligibility</h2>

        {/* EMI Calculator */}
        <div className="space-y-6">
          {/* Loan Amount */}
          <div>
            <p className="font-medium">Loan Amount</p>
            <input
              type="range"
              min={100000}
              max={1326000}
              step={10000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full accent-purple-700"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹1,00,000</span>
              <span className="text-purple-700 font-medium">
                ₹{loanAmount.toLocaleString("en-IN")}
              </span>
              <span>₹13,26,000</span>
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <p className="font-medium">Down Payment*</p>
            <input
              type="range"
              min={0}
              max={1226000}
              step={10000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full accent-purple-700"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹0</span>
              <span className="text-purple-700 font-medium">
                ₹{downPayment.toLocaleString("en-IN")}
              </span>
              <span>₹12,26,000</span>
            </div>
          </div>

          {/* Duration */}
          <div>
            <p className="font-medium">Duration of Loan</p>
            <input
              type="range"
              min={12}
              max={84}
              step={6}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full accent-purple-700"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>12 Months</span>
              <span className="text-purple-700 font-medium">
                {duration} Months
              </span>
              <span>84 Months</span>
            </div>
          </div>
        </div>

        {/* EMI Result */}
        <div className="mt-6 text-center">
          <p className="text-green-600 font-bold text-2xl">
            ₹{emi.toLocaleString("en-IN")}{" "}
            <span className="text-base font-normal">per month</span>
          </p>
          <button className="mt-4 w-full bg-purple-800 hover:bg-purple-900 text-white rounded-xl py-3 font-medium flex justify-center items-center gap-2">
            <span>₹</span> Check eligibility
          </button>
        </div>

        <p className="mt-4 text-xs text-gray-500 text-center">
          *Rate of interest can vary subject to credit profile. Loan approval is
          at the sole discretion of the finance partner.  
          **Processing fee and other charges are not included.
        </p>
      </div>
    </div>
  );
};

export default EmiCalculatorModal;
