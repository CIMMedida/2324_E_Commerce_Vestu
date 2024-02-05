import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  // console.log(data);
  return (
    <section className="flex" style={{
      backgroundImage: `url(${urlFor(data.image1).url()})`,
      width: '100%',
      height: '90vh',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      marginTop: '-2vh'
    }}>
    
    <div className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div  className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div style={{ width: '100%'}} className="mb-12 flex w-full flex-col justify-center sm:mb-12 lg:mb-12 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 style={{ textShadow: '5px 4px 5px rgba(232, 195, 158, 1'}} className="mb-4 text-4xl font-bold text-white sm:text-5xl md:mb-8 md:text-6xl">
            ¡La moda es de ser Natural!
          </h1>
          <p style= {{ color: 'rgba(0,0, 0,1)', textShadow: '5px 4px 5px rgba(232, 195, 158, 1'}}className="max-w-3xl leading-relaxed text-gray-500 xl:text-lg">
            Estamos seguros de que buscas algo que pegue contigo. 
            ¿Por qué no echas un vistazo?
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}

