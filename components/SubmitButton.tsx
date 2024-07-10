import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  isLoading?: boolean;
}
const SubmitButton = ({ className, children, isLoading }: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className=" flex items-center gap-4">
          <Image
            alt="loading"
            width={24}
            height={24}
            className=" animate-spin"
            src={"/assets/icons/loader.svg"}
          />
          loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
