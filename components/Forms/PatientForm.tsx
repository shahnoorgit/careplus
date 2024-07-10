"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomeFormField from "../CustomeFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validations";
import { useRouter } from "next/navigation";

export enum FormFieldType {
  INPUT = "input",
  SELECT = "select",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SKELETON = "skeleton",
}

const PatientForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
      //const userdata={name,email,phone}
      //const user=await createUser(userdata)
      //if(user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
      console.log(error);
    }
  }

  const [isLoading, setIsLoading] = useState(false);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className=" mb-12 space-y-4">
          <h1 className=" header">Hi there 👋</h1>
          <p className=" text-dark-700">Schedule your first appointment.</p>
        </section>
        <CustomeFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Full Name"
          placeholder="John doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomeFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email address"
          placeholder="Johndoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomeFormField
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
          name="phone"
          label="Phone number"
          placeholder="+91 00000 00000"
        />
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
