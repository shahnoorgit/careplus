" use client";
import { convertFileToUrl } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploaderProps {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
}

export const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className=" file-upload" {...getRootProps()}>
      <input {...getInputProps()} />
      {files && files.length > 0 ? (
        <Image
          width={1000}
          className=" max-w-[400px] overflow-hidden object-cover"
          height={1000}
          alt="uploaded image"
          src={convertFileToUrl(files[0])}
        />
      ) : (
        <>
          <Image
            src={"/assets/icons/upload.svg"}
            width={40}
            height={40}
            alt="upload"
          />
          <div className="file-upload_label">
            <p className=" text-14-regular">
              <span className=" text-green-500">Click to upload</span> or drag
              and drop
            </p>
            <p>SVG, PNG, JPG, or Gif (max 800x400)</p>
          </div>
        </>
      )}
    </div>
  );
};
