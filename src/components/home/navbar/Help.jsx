import React, { useState } from "react";

const serviceOptions = {
  Banking: [
    {
      option: "Open an Account",
      steps: ["Choose account type", "Submit documents"],
    },
    {
      option: "Apply for a Loan",
      steps: ["Select loan type", "Check eligibility"],
    },
    { option: "Report Fraud", steps: ["Provide details", "Submit complaint"] },
  ],
  Doctor: [
    {
      option: "Book Appointment",
      steps: ["Select doctor", "Choose time slot"],
    },
    {
      option: "Get Prescription",
      steps: ["Describe symptoms", "Receive prescription"],
    },
    {
      option: "Emergency Help",
      steps: ["Provide emergency details", "Get assistance"],
    },
  ],
  Lawyer: [
    {
      option: "Legal Consultation",
      steps: ["Describe issue", "Get expert advice"],
    },
    { option: "File a Case", steps: ["Submit details", "Review case"] },
    {
      option: "Contract Review",
      steps: ["Upload document", "Get legal opinion"],
    },
  ],
};

const Helpp = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [messages, setMessages] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);

  // Handle Service Selection
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setMessages([
      {
        sender: "bot",
        text: `You selected ${service}. Please choose an option.`,
      },
    ]);
  };

  // Handle Option Selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setStepIndex(0);
    setMessages([
      ...messages,
      {
        sender: "bot",
        text: `You chose: ${option.option}. ${option.steps[0]}`,
      },
    ]);
  };

  // Handle Next Step
  const handleNextStep = () => {
    if (stepIndex < selectedOption.steps.length - 1) {
      setStepIndex(stepIndex + 1);
      setMessages([
        ...messages,
        { sender: "bot", text: selectedOption.steps[stepIndex + 1] },
      ]);
    } else {
      setMessages([...messages, { sender: "bot", text: "Process complete!" }]);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          WELCOME TO HELP PAGE
        </h2>

        {!selectedService ? (
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold">Select a service:</p>
            {Object.keys(serviceOptions).map((service) => (
              <button
                key={service}
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                onClick={() => handleServiceSelect(service)}
              >
                {service}
              </button>
            ))}
          </div>
        ) : !selectedOption ? (
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold">Choose an option:</p>
            {serviceOptions[selectedService].map((option, index) => (
              <button
                key={index}
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                onClick={() => handleOptionSelect(option)}
              >
                {option.option}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded w-full h-48 overflow-y-auto mb-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded mb-2 max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-red-100 ml-auto text-right"
                      : "bg-green-100 text-left"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <button
              onClick={handleNextStep}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Next Step
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Helpp;
