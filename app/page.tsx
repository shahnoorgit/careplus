import { Button } from "@/components/ui/button";
import Image from "next/image";
import PatientForm from "@/components/Forms/PatientForm";
import Link from "next/link";
import PassKeyModel from "@/components/PassKeyModel";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";
  console.log(searchParams.admin);
  return (
    <div className=" h-screen max-h-screen flex">
      {isAdmin && <PassKeyModel />}
      <section className=" remove-scrollbar container my-auto">
        <div className=" max-w-[496px] sub-container">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className=" text-14-regular mt-20 flex justify-between">
            <p className=" justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePulse
            </p>
            <Link href={"/?admin=true"} className=" text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src={"/assets/images/onboarding-img.png"}
        width={1000}
        height={100}
        alt="Onboarding img"
        className="side-image max-w-[50%]"
      />
    </div>
  );
}
