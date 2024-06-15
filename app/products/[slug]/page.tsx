import Image from "next/image";
import connectToDatabase from "@/lib/mongoDb";
import Product, { IProduct } from "@/models/Product";

const getProductBySlug = async (slug: string): Promise<IProduct | null> => {
  await connectToDatabase();
  const product = await Product.findOne({ slug }).lean();
  console.log(product);
  return product;
};

const ProductPage = async ({ params }: { params: any }) => {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-12 bg-transparent min-h-screen flex flex-col items-center justify-center">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <nav className="flex">
            <ol role="list" className="flex items-center">
              <li className="text-left">
                <div className="-m-1">
                  <a
                    href="/"
                    className="rounded-md p-1 text-sm font-medium text-gray-400 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    Начало
                  </a>
                </div>
              </li>

              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <a
                      href="/products"
                      className="rounded-md p-1 text-sm font-medium text-gray-400 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    >
                      Продукти
                    </a>
                  </div>
                </div>
              </li>

              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <a
                      href={`/products/${product.slug}`}
                      className="rounded-md p-1 text-sm font-bold text-gray-500 focus:text-gray-900 focus:shadow hover:text-gray-800"
                      aria-current="page"
                    >
                      {product.title}
                    </a>
                  </div>
                </div>
              </li>
            </ol>
          </nav>

          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    <Image
                      className="max-w-full object-cover"
                      src={product.imageUrl}
                      alt={product.title}
                      width={400}
                      height={100}
                    />
                  </div>
                </div>

                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div className="flex flex-row items-start lg:flex-col">
                    <button
                      type="button"
                      className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-sky-500 text-center"
                    >
                      <Image
                        className="h-full w-full object-cover"
                        src={product.imageUrl}
                        width={100}
                        height={100}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                {product.title}
              </h1>

              <div className="mt-5 flex items-center">
                <div className="flex items-center">
                  <svg
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500">
                  10,209 Доволни клиента
                </p>
              </div>

              <h2 className="mt-8 text-2xl font-bold text-gray-200">
                С вкус на {product.flavor}
              </h2>

              <div className="mt-5 mb-5 flex flex-col gap-5 items-center justify-between space-y-4 py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <div className="text-center">
                    <div className="text-lg pb-2">Сила</div>
                    <div className="bg-blue-500 flex flex-col p-2 rounded-full text-white">
                      <div className="text-lg">{product.strength}</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-end">
                  <div className="text-center">
                    <div className="text-lg pb-2">Брой в пакет</div>
                    <div className="bg-blue-500 flex flex-col p-2 rounded-full text-white">
                      <div className="text-lg">{product.unitsInPackage}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-end">
                  <div className="text-center">
                    <div className="text-lg pb-2">Тегло</div>
                    <div className="bg-blue-500 flex flex-col p-2 rounded-full text-white">
                      <div className="text-lg">{product.weight} гр.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>Изберете здравословната алтернатива на тютюнопушенето!</div>
            </div>

            <div className="lg:col-span-3">
              <div className="">
                <nav className="flex gap-4">
                  <a
                    href="#"
                    title=""
                    className="py-4 text-sm font-medium text-gray-100 hover:border-gray-400 hover:text-gray-800"
                  >
                    Описание
                  </a>
                </nav>
              </div>

              <div className="mt-8 flow-root sm:mt-3">
                {product.description}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
