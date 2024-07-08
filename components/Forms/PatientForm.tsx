"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomeFormField from "../CustomeFormField";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
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
          fieldType={FormFieldType.INPUT}
          name="phoneNumber"
          label="Phone number"
          placeholder="+91 00000 00000"
          iconSrc="/assets/icons/phone.svg"
          iconAlt="email"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PatientForm;
