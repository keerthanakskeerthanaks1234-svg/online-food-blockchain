const TrackingStep = ({ step, active }) => {
    return (
      <div className="flex items-center gap-4">
        
        <div className={`w-4 h-4 rounded-full ${active ? "bg-green-500" : "bg-gray-300"}`} />
  
        <p className={active ? "text-green-600 font-bold" : "text-gray-500"}>
          {step}
        </p>
  
      </div>
    );
  };
  
  export default TrackingStep;