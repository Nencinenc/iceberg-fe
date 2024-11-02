import Image from "next/image";
import connectToDatabase from "@/lib/mongoDb";
import Product, { IProduct } from "@/models/Product";
import { ShoppingCart, Star } from "lucide-react";

const getProductBySlug = async (slug: string): Promise<IProduct | null> => {
  await connectToDatabase();
  const product = await Product.findOne({ slug }).lean();
  return product;
};

const ProductPage = async ({ params }: { params: any }) => {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
        <h1 className="text-3xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={product.imageUrl}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
              <span className="ml-2 text-gray-400">10,209 Доволни клиента</span>
            </div>

            <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              С вкус на {product.flavor}
            </h2>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { label: "Сила", value: product.strength },
                { label: "Брой в пакет", value: product.unitsInPackage },
                { label: "Тегло", value: `${product.weight} гр.` },
              ].map(item => (
                <div key={item.label} className="bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-gray-400 mb-2">{item.label}</p>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-300 mb-8">{product.description}</p>

            <a href={"/locations"} className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center">
              <ShoppingCart className="mr-2" />
              Къде се продава?
            </a>

            <p className="mt-6 text-center text-gray-400">Изберете здравословната алтернатива на тютюнопушенето!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
