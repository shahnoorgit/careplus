import StateCard from "@/components/StateCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Adimin = () => {
  return (
    <div className=" mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href={"/"} className=" cursor-pointer">
          <Image
            src={"/assets/icons/logo-full.svg"}
            width={32}
            height={162}
            alt="logo"
            className=" w-fit h-8"
          />
        </Link>
        <p className=" text-16-semibold">Admin Dashboard</p>
      </header>
      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>
        <section className="admin-stat">
          <StateCard />
        </section>
      </main>
    </div>
  );
};

export default Adimin;
