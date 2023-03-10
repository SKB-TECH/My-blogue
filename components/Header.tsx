import React, {useContext}from 'react'
import Link from 'next/link';

const categories=[{
    name:"Web Developement",
    slug: "web-dev"
},
{
    name: "DevOps",
    slug: "dev-ops"
}
]
const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-white'>
                        SKB-TECH
                    </span>
                </Link>
            </div>

            <div className='hidden md:float-left md:contents'>
                {
                    categories.map((category)=>(
                        <Link href={`/category/${category.slug}`}>
                            <span className='md:float-rigth mt-2 align-middle text-white ml-4 font-semibold
                            cursor-pointer'>
                                {
                                    category.name
                                }
                            </span>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Header; 