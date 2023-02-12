function Steps(props: { steps: number; currentStep: number }) {
  const Steps = () => {
    const steps = [];
    for (let i = 0; i < props.steps; i++) {
      steps.push(
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className={`h-3 w-3 transition-colors ${
            props.currentStep == i ? "text-gray-400" : "text-gray-200"
          }`}
        >
          <circle cx="50" cy="50" r="50" />
        </svg>
      );
    }
    return steps;
  };

  return (
    <div className="flex flex-row justify-center space-x-1">{Steps()}</div>
  );
}

export default Steps;
