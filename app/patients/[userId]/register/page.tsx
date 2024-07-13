import RegisterForm from "@/components/Forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className=" h-screen max-h-screen flex">
      <section className=" remove-scrollbar container my-auto">
        <div className=" max-w-[496px] sub-container">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />
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
        src={"/assets/images/register-img.png"}
        width={1000}
        height={100}
        alt="Onboarding img"
        className="side-image max-w-[390px]"
      />
    </div>
  );
};

export default Register;
