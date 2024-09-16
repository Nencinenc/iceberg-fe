import clsx from "clsx";

const LoadingSpinner = () => {
  return (
    <div
      className={clsx(
        "border-blue-500",
        `inline-block animate-spin
         rounded-full border-4 
         border-solid border-r-transparent 
         align-[-0.125em] h-10 w-10
         motion-reduce:animate-[spin_1.5s_linear_infinite]`
      )}
    />
  );
};

export default LoadingSpinner;
