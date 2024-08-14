import { FC } from "react";

interface Props {
  onConfirm: (value: boolean) => void;
}

const AgeConfirmationModal: FC<Props> = ({ onConfirm }) => {
  const handleYes = () => {
    localStorage.setItem("ageConfirmed", "true");
    onConfirm(true);
  };

  const handleNo = () => {
    alert("You must be over 18 years old to access this site.");
    window.location.href = "https://www.google.com"; // Redirect to another page
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="bg-black p-10 border-2 rounded-lg text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Please confirm:</h2>
        <p className="text-lg mb-6">Are you over 18 years of age?</p>
        <div className="flex justify-center mb-4 space-x-4">
          <button onClick={handleYes} className="bg-blue-500 border-2 px-4 py-2 rounded text-white hover:bg-green-500">
            YES
          </button>
          <button onClick={handleNo} className="bg-blue-500 border-2 px-4 py-2 rounded text-white hover:bg-red-500">
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeConfirmationModal;
