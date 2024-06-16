"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: () => void;
  value: string | null;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  const handleRemoveImage = () => onRemove();

  return (
    <div>
      {value && (
        <div className="w-40 h-40 relative rounded-md overflow-hidden mb-2">
          <Image
            fill
            className="object-cover"
            alt="Uploaded Image"
            src={value}
          />
        </div>
      )}
      <CldUploadWidget onSuccess={onUpload} uploadPreset="lo7nozob">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          if (value !== null) {
            return (
              <button
                className="flex items-center justify-cente text-white bg-red-600 rounded-md p-2"
                onClick={handleRemoveImage}
              >
                <span>Премахни снимка</span>
              </button>
            );
          }

          return (
            <button
              disabled={disabled}
              onClick={onClick}
              className="flex items-center justify-cente text-white bg-blue-400 rounded-md p-2"
            >
              <span>Добави снимка</span>
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
