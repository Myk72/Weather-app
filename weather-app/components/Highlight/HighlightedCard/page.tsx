import React from "react";

interface HighlightCardProps {
  title: string;
  value: number;
  metrics: string;
  icon: React.ReactNode;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  value,
  icon,
  metrics
}) => {
  return (
    <div className="flex flex-row justify-center items-center border border-blue-950 w-44 h-28 rounded-2xl p-2 gap-3">
      {icon}
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="text-lg text-white font-semibold font-serif">
          {title}
        </div>
        <div className="font-semibold font-mono">{value} {metrics}</div>
      </div>
    </div>
  );
};

export default HighlightCard;
