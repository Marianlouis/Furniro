import React from 'react';
import './Product.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import side from '../../assets/side.png'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import sofas from "../../assets/sofas.png"
import { Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Product() {
    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(4);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const rating = product?.rating?.rate ? Math.round(product.rating.rate * 2) / 2 : 0;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 === 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => { setProduct(response.data); console.log(response.data) })
            .catch(error => console.error(error));
    }, [id]);

    function handleShowMore() {
        setProductCount(productCount + 4);
    }

    return (
        <div className="Product text-left">
            <div className="bg-accent-bg py-8 px-20 flex gap-4 items-center">
                <p className='text-subtext'>Home</p>
                <ChevronRightIcon />
                <p className="text-subtext">Shop</p>
                <ChevronRightIcon />
                <div className="w-0.5 h-8 bg-slate-400"></div>
                <p className='font-semibold'>{product.title}</p>
            </div>
            <div className="flex gap-20 px-24 py-8">
                <div className="bg-white w-1/2 flex gap-10">
                    <div className='1/5'>
                        <img src={side} />
                    </div>
                    <div className='w-4/5 border-4 border-accent-bg rounded-lg h-fit bg-accent-bg'>
                        <img src={product.image} />
                    </div>
                </div>
                <div className="bg-white w-1/2 flex flex-col">
                    <h2 className="text-4xl font-semibold ">{product.title}</h2>
                    <p className="text-subtext text-2xl my-2 font-semibold">${product.price}</p>
                    <div className="flex items-center my-4 gap-4">
                        <div>
                            {[...Array(fullStars)].map((_, index) => (
                                <StarIcon key={index} className="text-yellow-500" />
                            ))}
                            {hasHalfStar && <StarHalfIcon className="text-yellow-500" />}
                            {[...Array(emptyStars)].map((_, index) => (
                                <StarOutlineIcon key={index} className="text-yellow-500" />
                            ))}
                        </div>
                        <div className="w-0.5 h-8 bg-slate-400"></div>
                        <p className="text-subtext"> {product?.rating?.count} Customer Reviews </p>
                    </div>
                    <p>{product.description}</p>
                    <p className="mt-6 mb-4 text-subtext">Size</p>
                    <div className="flex gap-4">
                        <button className="bg-primary text-white px-4 text-sm py-2 rounded w-fit"> L </button>
                        <button className="bg-accent-bg px-4 text-sm py-2 rounded w-fit"> XL </button>
                        <button className="bg-accent-bg px-4 text-sm py-2 rounded w-fit"> XS </button>
                    </div>
                    <p className="mt-6 mb-4 text-subtext">Color</p>
                    <div className="flex gap-4">
                        <button className="bg-violet-500 text-white p-4 w-2 h-2 aspect-square rounded-full">  </button>
                        <button className="bg-black p-4 w-2 h-2 aspect-square rounded-full">  </button>
                        <button className="bg-primary p-4 w-2 h-2 aspect-square rounded-full">  </button>
                    </div>
                    <div className="flex gap-4 mt-8 justify-between border-b-2 pb-16">
                        <div className='rounded-xl border-2 font-semibold flex justify-between items-center w-2/12 p-4'>
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                        <button className="w-5/12 border-2 hover:bg-black hover:text-white text-black border-black rounded-xl  text-2xl">Add to Cart</button>
                        <button className="w-5/12 border-2 hover:bg-black hover:text-white text-black border-black rounded-xl  text-2xl">+ Compare</button>
                    </div>
                    <div className="flex text-subtext gap-4 mt-12">
                        <div className="flex flex-col gap-2">
                            <p>SKU</p>
                            <p>Category</p>
                            <p>Tags</p>
                            <p>Sare</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>: &nbsp;SS001</p>
                            <p>: &nbsp;{product.category}</p>
                            <p>: &nbsp;Sofa, Chair, Home, Shop</p>
                            <div className="flex">: &nbsp;<span className="flex gap-4"> <FacebookIcon className="text-black" /> <LinkedInIcon className="text-black" /> <TwitterIcon className="text-black" /></span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 pb-6 border-y-2 ">
                <div className="flex justify-center items-center gap-12 my-12 text-2xl">
                    <button className="font-semibold">Description</button>
                    <button className="text-subtext">Additional Information</button>
                    <button className="text-subtext">Reviews [{product?.rating?.count}]</button>
                </div>
                <div className="w-8/12 mx-auto">
                    <p className="text-subtext">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <br />
                    <p className="text-subtext">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>
                <div className='mx-auto w-fit p-8'>
                    <img src={sofas} />
                </div>
            </div>
            <div className="mt-12 grid grid-cols-4 gap-6 justify-center px-12">
                {products.slice(0, productCount).map((product) => (
                    <Link to={`/product/${product.id}`} className="group grid grid-cols-1 gap-4 border relative" key={product.id}>
                        <div className="col-span-1 w-full aspect-square relative">
                            <img src={product.image} className="h-full w-full object-contain rounded-xl" alt={product.title} />
                            <div className="absolute top-4 right-4 bg-teal-400 w-fit aspect-square rounded-full text-white p-2 flex items-center">
                                <p>New</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 text-left p-4 pb-8">
                            <p className="text-slate-700 font-bold text-xl col-span-1">{product.title.split(" ").slice(0, 2).join(" ")}</p>
                            <p className="font-semibold text-base text-subtext col-span-1">{product.category}</p>
                            <p className="text-slate-700 font-bold text-lg text-left col-span-1">${product.price.toFixed(2)}</p>
                        </div>
                        <div className="w-full h-full top-0 left-0 absolute hidden group-hover:flex flex-col justify-center items-center gap-4 bg-opacity-50 bg-black">
                            <button className='hover:bg-primary hover:text-white bg-white font-bold text-lg px-16 py-4 text-primary w-fit mx-auto'>Add to Cart</button>
                            <div className="flex gap-2 text-lg text-white font-bold justify-between w-full px-6">
                                <button className="gap-1 flex items-center justify-center"><ShareIcon />Share</button>
                                <button className="gap-1 flex items-center justify-center"><CompareArrowsIcon />Compare</button>
                                <button className="gap-1 flex items-center justify-center"><FavoriteBorderIcon />Like</button>
                            </div>
                        </div>
                    </Link>
                ))
                }
            </div >
            <div className='flex w-full mt-4'>
                <div className="w-fit mx-auto mt-8">
                    {productCount < products.length ? <>
                        <button onClick={handleShowMore} className="border-2 hover:bg-primary px-20 py-2 mb-24 hover:text-white border-primary font-bold text-lg text-primary text-center">
                            Show More</button>
                    </>
                        : <>
                        </>}
                </div>
            </div>
        </div>
    );
}

export default Product;
