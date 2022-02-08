import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/rootReducer';
import productDetailConstants from '../../features/product-deatil/productDetailConstants';
import { ProductDetailInterface, SizeType } from '../../utils/models';
import './ProductOverview.styles.scss';

/* ProductOverview - for main details about the product
    Name
    Description
    Color
    Price
    Options (variants)
    Size
    CTA - add to cart
*/
export const ProductOverview = ({
    productDetail,
}: {
    productDetail: ProductDetailInterface;
}) => {
    /* prop
        productDetail - for details on product like name, description, variants, price, color, sizes available
    */
    const [seletedOption, setSeletedOption] = useState<number>(0);
    /* state - seletedOption to store product option/variant selected */
    const dispatch: React.Dispatch<{ type: string; payload: number }> =
        useDispatch();
    /* Redux - dispatch to send actions to update redux state */
    const { sizeIndex }: { sizeIndex: number } = useSelector(
        (state: RootState) => {
            const { sizeIndex }: { sizeIndex: number } = state.product;
            return {
                sizeIndex,
            };
        }
    );
    /* Redux state
        sizeIndex - to store selected size
    */
    return (
        <div className='product-overview px-4.5 mt-7'>
            {/* Primary details of product */}
            <h1 className='font-roboto text-3xl font-normal mb-1'>
                {productDetail.name}
            </h1>
            <p className='font-roboto text-sm font-normal mb-2'>
                {productDetail.description}
            </p>
            <p className='font-roboto text-sm font-bold mb-6'>
                ${productDetail.priceInDollars}
            </p>
            <div className='flex  mb-2'>
                <p className='font-roboto text-sm font-bold'>COLOR</p>
                &nbsp;
                <p className='font-roboto text-sm font-normal'>
                    {productDetail.color}
                </p>
            </div>
            {/* Product options/ variants - selectable */}
            <div className='flex mb-6.5'>
                {productDetail.optionImages.map((image: string, i: number) => (
                    <div
                        className={
                            'border border-solid border-gray flex justify-center items-center mr-1.5 cursor-pointer' +
                            (seletedOption === i
                                ? ' border-black'
                                : ' hover:bg-gray-100 hover:border-gray-700')
                        }
                        onClick={() => setSeletedOption(i)}
                    >
                        <img
                            src={image}
                            alt='option-image'
                            className={
                                'image-option' +
                                (seletedOption === i
                                    ? ' image-option-selected'
                                    : '')
                            }
                        />
                        {/* Style change with state seletedOption to show selected option */}
                    </div>
                ))}
            </div>
            <div className='flex justify-between'>
                <div className='flex mb-2'>
                    <p className='font-roboto text-sm font-bold'>SIZE</p>
                    &nbsp;
                    <p className='font-roboto text-sm font-normal'>
                        {productDetail.color}
                    </p>
                </div>
                <a className='font-helvetica text-sm font-normal underline'>
                    SIZE GUIDE
                </a>
            </div>
            {/* Buttons - conditional based on redux selectedSizeIndex state to select size, consitional css to show selcted css and disables buttons */}
            <div className='flex flex-wrap mb-4'>
                {productDetail.sizeAvailable.map(
                    (el: { size: SizeType; available: boolean }, i: number) => (
                        <button
                            className={
                                'font-helvetica text-sm text-center font-normal px-8 py-2 border border-solid border-gray-500 rounded-full mr-0.5 mb-1 relative' +
                                (sizeIndex === i
                                    ? ' bg-black text-white hover:bg-gray-900 active:bg-gray-600'
                                    : el.available === true
                                    ? ' hover:bg-gray-200 active:bg-gray-200'
                                    : '') +
                                (el.available === false ? ' text-gray-500' : '')
                            }
                            /* el.available === false
                                for when product is not available
                            */
                            onClick={() =>
                                dispatch({
                                    type: productDetailConstants.UPDATE_SIZE_INDEX,
                                    payload: i,
                                })
                            }
                            disabled={!el.available}
                        >
                            {el.size}{' '}
                            {!el.available && (
                                <span className='absolute w-8 h-0.5 bg-gray-500 inset-2/4 button-diabled-text-dash'></span>
                            )}
                        </button>
                    )
                )}
            </div>
            <button className='w-full flex justify-center items-center font-roboto text-sm text-center font-normal px-8 py-2 bg-black hover:bg-gray-900 active:bg-gray-600 text-white rounded-full mb-6'>
                ADD TO CART&nbsp;
                {/* icons - Arrow for buttons*/}
                <svg
                    width='18'
                    height='12'
                    viewBox='0 0 18 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g clip-path='url(#clip0_99_429)'>
                        <path
                            d='M12.5 1C12.5 3.40741 15.7253 5.50617 16.4526 5.93827C16.5158 5.96914 16.5158 6.03086 16.4526 6.06173C15.7253 6.49383 12.5 8.59259 12.5 11'
                            stroke='white'
                            stroke-linecap='round'
                        />
                        <line
                            x1='1'
                            y1='6'
                            x2='16'
                            y2='6'
                            stroke='white'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                    </g>
                    <defs>
                        <clipPath id='clip0_99_429'>
                            <rect
                                width='17'
                                height='12'
                                fill='white'
                                transform='translate(0.5)'
                            />
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <p className='font-roboto text-sm font-normal mb-3'>
                Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
            </p>
            <p className='font-roboto text-sm font-normal mb-24'>
                Speak to a Personal Stylist CHAT NOW
            </p>
        </div>
    );
};
