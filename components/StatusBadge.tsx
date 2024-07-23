import { StatusIcon } from "@/constants";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const StatusBadge = ({ Status }: { Status: Status }) => {
  return (
    <div
      className={clsx("status-badge", {
        "bg-green-600": Status === "scheduled",
        "bg-blue-600": Status === "pending",
        "bg-red-600": Status === "cancelled",
      })}
    >
      <Image
        src={StatusIcon[Status]}
        alt={Status}
        width={24}
        height={24}
        className=" h-fit w-3"
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-green-500": Status === "scheduled",
          "text-blue-500": Status === "pending",
          "text-red-500": Status === "cancelled",
        })}
      >
        {Status}
      </p>
    </div>
  );
};

export default StatusBadge;
