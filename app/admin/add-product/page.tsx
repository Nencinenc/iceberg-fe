"use client";

import React, { useState } from "react";
import * as z from "zod";
import ImageUpload from "@/components/ui/ImageUpload";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICreateProduct, IProduct } from "@/models/Product";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  imageUrl: z.string(),
  weight: z.number().min(1),
  flavor: z.string(),
  strength: z.string(),
  unitsInPackage: z.number().min(1),
  featured: z.boolean().optional(),
});

type AddProductFormValues = z.infer<typeof formSchema>;

const FORM_DATA: {
  label: string;
  name: "title" | "description" | "weight" | "flavor" | "strength" | "unitsInPackage";
  type: string;
}[] = [
  {
    label: "Име",
    name: "title",
    type: "text",
  },
  {
    label: "Описание",
    name: "description",
    type: "text",
  },
  {
    label: "Грамаж",
    name: "weight",
    type: "number",
  },
  {
    label: "Вкус",
    name: "flavor",
    type: "text",
  },
  {
    label: "Сила на вкус",
    name: "strength",
    type: "text",
  },
  {
    label: "Бройки в кутия",
    name: "unitsInPackage",
    type: "number",
  },
];

const createProduct = async (productToCreate: ICreateProduct): Promise<IProduct | null> => {
  const response = await fetch("/api/admin/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...productToCreate }),
  });

  if (response.ok) {
    const product = await response.json();
    return product;
  } else {
    console.error("Failed to create product");
    return null;
  }
};

const AddProductPage = () => {
  const router = useRouter();

  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, setValue } = useForm<AddProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: "",
      title: "",
      description: "",
      weight: 0,
      flavor: "",
      strength: "",
      unitsInPackage: 0,
      featured: false, // Set default value for 'featured'
    },
  });

  const onSubmit = async (data: AddProductFormValues) => {
    const productData: ICreateProduct = {
      ...data,
      featured: data.featured ?? false, // Ensure featured is set
    };

    try {
      setLoading(true);
      const product = await createProduct(productData);
      if (!product) {
        throw new Error("Failed to create product");
      }

      toast.success("Продуктът е добавен успешно!");
      router.push("/products"); // Redirect to products page after successful creation
    } catch (error) {
      toast.error("Възникна грешка при добавянето на продукт!");
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24  px-16 md:px-32">
      <h2 className="text-2xl font-bold mb-4">Добави продукт</h2>
      <form className="text-white rounded shadow-md space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <ImageUpload
          onChange={(value: string) => {
            setValue("imageUrl", value);
            setImage(value);
          }}
          onRemove={() => {
            setValue("imageUrl", "");
            setImage(null);
          }}
          value={image}
        />

        <div>
          <label className="block mb-2">Показване като представен продукт</label>
          <input type="checkbox" {...register("featured")} className="w-5 h-5" disabled={loading} />
        </div>

        {FORM_DATA.map(item => (
          <div key={item.name}>
            <label className=" block mb-2">{item.label}</label>
            <input
              {...register(item.name, {
                valueAsNumber: item.type === "number" ? true : false,
              })}
              className="w-full text-black p-2 border border-gray-300 rounded"
              disabled={loading}
              type={item.type}
            />
          </div>
        ))}

        <button type="submit" className="bg-blue-500 px-4 py-2 rounded" disabled={loading}>
          Запази
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
