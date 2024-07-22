import clsx from "clsx";
import React from "react";

interface StatCardProp {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  label: string;
  icon: string;
}

const StateCard = ({ type, count = 0, label, icon }: StatCardProp) => {
  return <div className={clsx("stat-card")}>StateCard</div>;
};

export default StateCard;
