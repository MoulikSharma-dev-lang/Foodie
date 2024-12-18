"use client"
import React, { useEffect, useState } from 'react'
import { fetchFoods } from '../actions/userActions'
import Link from 'next/link';

export default function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const gotProducts = await fetchFoods()
    setProducts(gotProducts.products)
  }

  return (
    <main className='flex flex-wrap'>
      {products.map((product, index) => {
        return <section className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
          <Link href={`/createorder?productname=${product.name}&productprice=${product.price}`}>
            <article>
              <div className="block relative h-48 rounded overflow-hidden">
                <img loading="lazy" alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                <p>{product.description}</p>
                <b className="mt-1">{product.price}</b>
              </div>
            </article>
          </Link>
        </section>
      })}
    </main>
  )
}