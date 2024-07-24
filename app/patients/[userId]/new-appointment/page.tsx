import AppointmentForm from "@/components/Forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.action";
import Image from "next/image";
import React from "react";
import * as sentry from "@sentry/nextjs";

const page = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);
  sentry.metrics.set("user_viewed_new-appointment", patient.name);
  return (
    <div className=" h-screen max-h-screen flex">
      <section className=" remove-scrollbar container my-auto">
        <div className=" max-w-[860px] flex-1 justify-between sub-container">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />

          <p className=" copyright mt-10 py-12">© 2024 CarePulse</p>
        </div>
      </section>
      <Image
        src={"/assets/images/appointment-img.png"}
        width={1000}
        height={100}
        alt="appoitment img"
        className="side-image max-sm:hidden max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default page;
