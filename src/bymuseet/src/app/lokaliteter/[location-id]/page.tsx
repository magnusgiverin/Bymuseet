'use client';
import { useEffect, useState } from 'react';
import locations from '@/app/Utils/data/locations';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { SubTitle } from '@/app/Components/Title';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Icons from '@/app/Utils/Icons';

export default function Lokalitet() {
    const pathname = usePathname();
    const [images, setImages] = useState<string[]>([]);
    const location = locations.find((loc) => pathname.includes(loc.id));
    const router = useRouter();

    useEffect(() => {
        if (location) {
            const loadImages = async () => {
                let imagePaths = [];
                let i = 1;
                while (true) {
                    const imagePath = `${location.dir}${location.id}-${i}.jpg`; // Adjust the extension if necessary
                    try {
                        const res = await fetch(imagePath);
                        if (res.ok) {
                            imagePaths.push(imagePath);
                            i++;
                        } else {
                            break;
                        }
                    } catch {
                        break;
                    }
                }

                // Prefetch images using the browser's Image object
                imagePaths.forEach((path) => {
                    const img = new window.Image();
                    img.src = path;
                });

                setImages(imagePaths);
            };

            loadImages();
        }
    }, [location]);

    return (
        <main className='my-10 md:mt-20'>
            {location ? (
                <>
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-white p-2 md:p-8 shadow-md md:w-2/3 w-full md:rounded-s-md">
                            <SubTitle text={location.name} />
                            <p className="whitespace-pre-wrap">{location.description}</p>
                            <div className="mb-5 md:mb-0 flex justify-left">
                                <button
                                    onClick={() => router.push("/")}
                                    className="flex flex-row items-center gap-4 whitespace-pre-wrap text-sm bg-green-800 text-white px-4 py-2 mt-8 rounded-md shadow-md hover:bg-green-700 transition"
                                >   
                                <Icons name="ArrowLeft_sm"/>
                                    T I L B A K E
                                </button>
                            </div>
                        </div>
                        <div className="md:h-auto h-60 md:w-1/3 w-full relative shadow-md">
                            <Image
                                src={location.image}
                                alt="Fasade Levanger"
                                objectFit="cover"
                                layout="fill"
                                className="md:rounded-e-md"
                            />
                        </div>
                    </div>
                    {images.length !== 0 && (
                        <div className="my-10 bg-white rounded-0 md:rounded-md md:p-8 p-2 ">
                            <SubTitle text='album' />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                                {images.map((image, index) => (
                                    <div key={index} className="shadow-md rounded-lg relative w-full h-64">
                                        <Image
                                            src={image}
                                            alt={`${location.name} ${index + 1}`}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <p>Location not found</p>
            )}
            <div className="mt-10 bg-white rounded-0 md:rounded-md p-8 ">
                <SubTitle text='utforsk videre' />
                <div className="flex flex-row flex-wrap justify-center gap-8">
                    {locations.filter(loc => loc.id !== location?.id).map((loc) => (
                        <div key={loc.id} className="flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                            <Link className="shadow-md rounded-md relative lg:w-96 lg:h-48 sm:w-64 sm:h-32 w-[330px] h-48 overflow-hidden cursor-pointer" href={`/lokaliteter/${loc.id}`}>
                                <Image
                                    src={loc.image}
                                    alt={loc.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                                <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-end z-10">
                                    <div className="w-full text-center backdrop-blur-md rounded-md p-2 text-white">
                                        <h3 className="text-lg font-medium">{loc.name}</h3>
                                    </div>
                                </div>
                                <div className="lg:hidden absolute inset-0 flex items-end justify-center z-10">
                                    <div className="w-full text-center backdrop-blur-md rounded-md p-2 text-white">
                                        <h3 className="text-sm font-medium">{loc.name}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
