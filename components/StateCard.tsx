import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface StatCardProp {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  label: string;
  icon: string;
}

const StateCard = ({ type, count = 0, label, icon }: StatCardProp) => {
  return (
    <div
      className={clsx("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-cancelled": type === "cancelled",
        "bg-pending": type === "pending",
      })}
    >
      <div className=" flex items-center gap-4">
        <Image
          src={icon}
          width={32}
          height={32}
          alt="label"
          className=" size-8 w-fit"
        />
        <h2 className=" text-32-bold text-white">{count}</h2>
        <p className=" text-14-regular">{label}</p>
      </div>
    </div>
  );
};

export default StateCard;
