import { useRef } from 'react';
import LazyLoad from 'react-lazyload';
import { useBreakpoints } from 'react-responsive-hooks';
import { HeartOutline } from '../../assets/svgs/HeartOutline/HeartOutline';
import { NoteType1 } from '../../components/note-type-1/NoteType1';
import { ProductCarousel } from '../../components/product-carousel/ProductCarousel';
import { ProductOtherDetails } from '../../components/product-other-details/ProductOtherDetails';
import { ProductOverview } from '../../components/product-overview/ProductOverview';
import { ProductDetailInterface } from '../../utils/models';

// Static assets later to by dynamically loaded from a backend to see th effects of lazy loading
import Image0 from './../../assets/images/Image0.png';
import Image1 from './../../assets/images/Image1.png';
import Image2 from './../../assets/images/Image2.png';
import Image3 from './../../assets/images/Image3.png';
import Image4 from './../../assets/images/Image4.png';
import Image5 from './../../assets/images/Image5.png';
import Image6 from './../../assets/images/Image6.png';
import './ProductDetail.styles.scss';

// Product detail page
export const ProductDetail: React.FC = () => {
    // Use ref to scroll to a refference - here to /src/components/note-type-1/NoteType1.tsx
    const noteRef = useRef(null);
    // Product etail sample data
    const productDetail: ProductDetailInterface = {
        imageArray: [Image0, Image1, Image2, Image3, Image4],
        name: 'JONATHAN SIMKHAI',
        description: 'Lurex Linen Viscose Jacket in Conchiglia',
        priceInDollars: '225',
        color: 'Conchiglia',
        tags: [''],
        noteFromEditor: '',
        editor: '',
        editorDesignation: '',
        optionImages: [Image6, Image5],
        sizeAvailable: [
            { size: 'XS', available: true },
            { size: 'S', available: true },
            { size: 'M', available: false },
            { size: 'L', available: true },
            { size: 'XXL', available: true },
        ],
        /* productDetail.sizeAvailable[i].available
            sizeAvailable - Of all sizes sized available for this product
            are listed in this array and in the array the ones
            with productDetail.sizeAvailable[i].available is false are the once
            sold out for this product
        */
        details: `The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.`,
        delivery: '',
        fit: '',
        share: '',
    };
    // const { isXS, isSM, isMD, isLG, isXL, isXXL } = useBreakpoints();
    const { isXS, isSM } = useBreakpoints();
    // useBreakpoints to fetch breakpoints for responsive logic
    return (
        <>
            <div className='pdp-top w-full mb-28'>
                {(isXS || isSM) && (
                    /* (isXS || isSM) && - Responsive logic to work for only mobile and small tab devices */
                    <>
                        <div className='mobile-carousel relative'>
                            {/* Product Images carrousel for mobile layout only */} 
                            <ProductCarousel
                                imageArray={productDetail.imageArray}
                            />
                            {/* Icon - Heart */}
                            <HeartOutline
                                positionCssClass={'absolute right-4 top-4'}
                            />
                        </div>
                        {/* Mobile layout - product overview in the bottom of image carousel */}
                        <ProductOverview productDetail={productDetail} />
                        <div className='w-14 h-0.5 bg-black mx-4.5 mb-64 rounded-full'></div>
                    </>
                )}
                {!isXS && !isSM && (
                    /* !isXS && !isSM && - Responsive logic to work for only for screens bigger than mobile and small tab devices */
                    <>
                        <div className='web-layout-wrapper flex justify-center'>
                            <div className='grow-0 w-96 left flex justify-end px-17'>
                                {/* Sticky - Responsive UI component, hidden in mobile and small tab devices screens*/}
                                <div className='sticky top-0 h-max'>
                                    <ProductOtherDetails
                                        productDetail={productDetail}
                                        noteRef={noteRef}
                                    />
                                </div>
                            </div>
                            <div className='grow-0 image-width flex flex-wrap relative'>
                                {/* Posisition absolute - Heart Icon */}
                                <div className='absolute top-0 bottom-0 right-4'>
                                    <HeartOutline
                                        positionCssClass={'sticky top-4 w-max'}
                                    />
                                </div>
                                {/* Lazy loaded images layout */}
                                {productDetail.imageArray.map(
                                    (image: string, i: number) => (
                                        <LazyLoad>
                                            <img
                                                src={image}
                                                alt='product-image'
                                                className={
                                                    'image-width object-cover mb-2' +
                                                    (i === 1 || i === 2
                                                        ? ' image-with-alternate'
                                                        : '')
                                                }
                                            />
                                            {/* img - Seperate width for second and third image as per design */}
                                        </LazyLoad>
                                    )
                                )}
                            </div>
                            <div className='grow-0 w-96 right flex justify-start px-11'>
                                {/* Sticky - Responsive UI component, Only for screens bigger than mobile and small tab devices */}
                                <div className='sticky top-0 h-max'>
                                    <ProductOverview
                                        productDetail={productDetail}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            {/* Editor's note */}
            <NoteType1 noteRef={noteRef} />
        </>
    );
};
