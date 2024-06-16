"use client";

import React, { useEffect, useState } from "react";
import * as z from "zod";
import ImageUpload from "@/components/ui/ImageUpload";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICreateProduct, IProduct } from "@/models/Product";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  imageUrl: z.string(),
  weight: z.number().min(1),
  flavor: z.string(),
  strength: z.string(),
  unitsInPackage: z.number().min(1),
});

type AddProductFormValues = z.infer<typeof formSchema>;

const FORM_DATA: {
  label: string;
  name:
    | "title"
    | "description"
    | "weight"
    | "flavor"
    | "strength"
    | "unitsInPackage";
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

const editProduct = async (
  id: string,
  productToCreate: ICreateProduct,
): Promise<IProduct | null> => {
  const response = await fetch(`/api/admin/product/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...productToCreate }),
  });

  if (response.ok) {
    const product = await response.json();
    return product;
  } else {
    console.error("Failed to edit product");
    return null;
  }
};

const fetchProduct = async (slug: string): Promise<IProduct | null> => {
  const response = await fetch(`/api/admin/product/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const product = await response.json();
    return product;
  } else {
    console.error("Failed to fetch product");
    return null;
  }
};

const EditProductPage = () => {
  const { slug } = useParams();

  const [image, setImage] = useState<string | null>(null);
  const [productId, setProductId] = useState<string | null>(null);
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
    },
  });

  const onSubmit = async (data: AddProductFormValues) => {
    if(productId) {
      try {
        setLoading(true);
        const product = await editProduct(productId,data);
        if (!product) {
          throw new Error("Failed to edit product");
        }
  
        toast.success("Промени продукта успешно.");
      } catch (error) {
        toast.error("Възникна грешка при промяната на продукт!");
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetchProductData = async () => {
      const fetchedProduct = await fetchProduct(slug as string);
      if (fetchedProduct) {
        setValue("title", fetchedProduct.title);
        setValue("description", fetchedProduct.description);
        setValue("flavor", fetchedProduct.flavor);
        setValue("weight", fetchedProduct.weight);
        setValue("strength", fetchedProduct.strength);
        setValue("imageUrl", fetchedProduct.imageUrl);
        setValue("unitsInPackage", fetchedProduct.unitsInPackage);

        setProductId(fetchedProduct._id);
        setImage(fetchedProduct.imageUrl);
      }
    };

    fetchProductData();
  }, [slug, setValue]);

  return (
    <div className="py-24 px-16 md:px-32">
      <h2 className="text-2xl text-white font-bold mb-4">Промени продукт</h2>
      <form
        className="text-black rounded shadow-md space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
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

        {FORM_DATA.map((item) => (
          <div key={item.name}>
            <label className="text-white block mb-2">{item.label}</label>
            <input
              {...register(item.name, {
                valueAsNumber: item.type === "number",
              })}
              className="w-full p-2 border border-gray-300 rounded"
              disabled={loading}
              type={item.type}
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          Промени
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
