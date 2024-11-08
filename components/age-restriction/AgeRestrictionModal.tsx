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
    alert("Трябва да сте над 18 години, за да получите достъп до този сайт.");
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-gradient-to-r from-startBlue via-midBlue to-endBlue p-8 rounded-3xl shadow-2xl text-center max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Моля, потвърдете:</h2>
        <p className="text-lg mb-6">Над 18 години ли сте?</p>
        <div className="flex justify-center mb-4 space-x-4">
          <button onClick={handleYes} className="bg-blue-500 border-2 px-4 py-2 rounded hover:bg-green-500">
            ДА
          </button>
          <button onClick={handleNo} className="bg-blue-500 border-2 px-4 py-2 rounded hover:bg-red-500">
            НЕ
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeConfirmationModal;
