import { useBreakpoints } from 'react-responsive-hooks';

/* Header - Common header */
export const Header = () => {
    const { isXS, isSM, isMD } = useBreakpoints();
    // useBreakpoints to fetch breakpoints for responsive logic
    return (
        <>
            <div className='header w-full flex justify-between items-center p-4.5'>
                <div className='flex shrink-0 items-center'>
                    {/* Logo as text */}
                    <h1 className='header-logo-text font-roboto text-xl shrink-0 font-normal text-ellipsis text-clip overflow-hidden mr-14 shrink-0'>
                        MY COMPANY.COM
                    </h1>
                    {/* !isSM && !isXS && !isMD && <></> - Responsive UI logic to owrk with only web screens, bigger than smaller and lager tab screens */}
                    {!isSM && !isXS && !isMD && (
                        <div className='header-tabs flex text-ellipsis overflow-hidden shrink'>
                            <h3 className='font-helvetica text-sm font-normal text-ellipsis overflow-hidden mr-4'>
                                THE EDIT
                            </h3>
                            <h3 className='font-helvetica text-sm font-normal text-ellipsis overflow-hidden mr-4'>
                                NEW ARRIVALS
                            </h3>
                            <h3 className='font-helvetica text-sm font-normal text-ellipsis overflow-hidden mr-4'>
                                DESIGNERS
                            </h3>
                            <h3 className='font-helvetica text-sm font-normal text-ellipsis overflow-hidden mr-4'>
                                CLOTHINGS
                            </h3>
                            <h3 className='font-helvetica text-sm font-normal text-ellipsis overflow-hidden mr-4'>
                                SHOES
                            </h3>
                            <h3 className='font-helvetica text-sm font-normal text-ellipsis overflow-hidden mr-4'>
                                BAG
                            </h3>
                            <h3 className='font-helvetica text-sm font-normal text-ellipsis overflow-hidden mr-4'>
                                ACCESSORIES
                            </h3>
                            <h3 className='font-helvetica text-sm font-normal text-ellipsis overflow-hidden mr-4'>
                                JEWELRY
                            </h3>
                            <h3 className='font-helvetica text-sm font-normal text-ellipsis overflow-hidden mr-4'>
                                BEAUTY
                            </h3>
                            <h3 className='font-helvetica text-sm font-normal text-ellipsis overflow-hidden mr-4'>
                                HOME
                            </h3>
                        </div>
                    )}
                </div>
                <div className='header-icons flex justify-center items-center shrink-0'>
                    {/* Icon - search */}
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-3'
                    >
                        <g clip-path='url(#clip0_99_459)'>
                            <rect width='24' height='24' />
                            <circle
                                cx='11.1953'
                                cy='10.1924'
                                r='6.5'
                                transform='rotate(45 11.1953 10.1924)'
                                stroke='black'
                            />
                            <rect
                                x='16.0234'
                                y='14.3145'
                                width='7'
                                height='1'
                                rx='0.5'
                                transform='rotate(45 16.0234 14.3145)'
                                fill='black'
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_99_459'>
                                <rect width='24' height='24' fill='white' />
                            </clipPath>
                        </defs>
                    </svg>
                    {/* Icon - cart */}
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-3'
                    >
                        <rect width='24' height='24' />
                        <path
                            d='M11.9918 15.12C13.6218 15.12 14.4618 13.94 14.4618 11.44C14.4618 8.9 13.6418 7.76 12.0118 7.76C10.3818 7.76 9.54176 8.9 9.54176 11.44C9.54176 13.94 10.3618 15.12 11.9918 15.12ZM12.0118 14.31C10.9518 14.31 10.4918 13.47 10.4918 11.44C10.4918 9.42 10.9418 8.57 12.0018 8.57C13.0618 8.57 13.5118 9.42 13.5118 11.44C13.5118 13.47 13.0718 14.31 12.0118 14.31Z'
                            fill='black'
                        />
                        <path
                            d='M23.7284 6.44478C23.9741 6.31863 24.0709 6.01723 23.9448 5.77159C23.8186 5.52594 23.5172 5.42907 23.2716 5.55522L23.7284 6.44478ZM0.728415 5.55522C0.482771 5.42907 0.181373 5.52594 0.0552228 5.77159C-0.0709271 6.01723 0.0259417 6.31863 0.271585 6.44478L0.728415 5.55522ZM18.8968 18.2388L19.3818 18.3604L18.8968 18.2388ZM19.3818 18.3604C19.7875 16.7425 20.7755 12.9102 21.6812 10.2302L20.7338 9.91005C19.8137 12.6327 18.8171 16.5011 18.4118 18.1172L19.3818 18.3604ZM21.6812 10.2302C22.2607 8.51553 22.8128 7.54696 23.2006 7.0181C23.3941 6.75418 23.5459 6.60075 23.639 6.51862C23.6855 6.47753 23.7176 6.45413 23.733 6.44352C23.7408 6.4382 23.7444 6.43606 23.7437 6.43648C23.7433 6.43669 23.7419 6.43753 23.7394 6.43894C23.7381 6.43965 23.7366 6.44049 23.7347 6.44147C23.7338 6.44196 23.7328 6.44248 23.7318 6.44303C23.7313 6.4433 23.7307 6.44359 23.7302 6.44388C23.7299 6.44403 23.7294 6.44425 23.7293 6.44432C23.7289 6.44455 23.7284 6.44478 23.5 6C23.2716 5.55522 23.2711 5.55546 23.2707 5.55569C23.2705 5.55577 23.2701 5.55601 23.2697 5.55617C23.2691 5.5565 23.2685 5.55684 23.2678 5.55718C23.2665 5.55788 23.2651 5.55861 23.2636 5.55938C23.2607 5.56093 23.2576 5.56265 23.2542 5.56454C23.2474 5.56832 23.2396 5.57279 23.2308 5.57803C23.2133 5.58851 23.1919 5.60202 23.167 5.61913C23.1172 5.65335 23.0533 5.70181 22.9773 5.76884C22.8254 5.90292 22.6259 6.11073 22.3941 6.4268C21.9314 7.05792 21.3373 8.12442 20.7338 9.91005L21.6812 10.2302ZM12 19.5H17.9218V18.5H12V19.5ZM5.58816 18.1172C5.18295 16.5011 4.18634 12.6327 3.2662 9.91005L2.31883 10.2302C3.22454 12.9102 4.21252 16.7425 4.61818 18.3604L5.58816 18.1172ZM3.2662 9.91005C2.66274 8.12442 2.06863 7.05792 1.60588 6.4268C1.37413 6.11073 1.17464 5.90292 1.0227 5.76884C0.946744 5.70181 0.882846 5.65335 0.832998 5.61913C0.808087 5.60202 0.786735 5.58851 0.769199 5.57803C0.760433 5.57279 0.752628 5.56832 0.745818 5.56454C0.742412 5.56265 0.739257 5.56093 0.736355 5.55938C0.734903 5.55861 0.733516 5.55788 0.732192 5.55718C0.731531 5.55684 0.730885 5.5565 0.730255 5.55617C0.72994 5.55601 0.72948 5.55577 0.729323 5.55569C0.728867 5.55546 0.728415 5.55522 0.5 6C0.271585 6.44478 0.271142 6.44455 0.270703 6.44432C0.270562 6.44425 0.270127 6.44403 0.269846 6.44388C0.269284 6.44359 0.26874 6.4433 0.268213 6.44303C0.267159 6.44248 0.266176 6.44196 0.265263 6.44147C0.263436 6.44049 0.26189 6.43965 0.260621 6.43894C0.258081 6.43753 0.256651 6.43669 0.256301 6.43648C0.255595 6.43606 0.259237 6.4382 0.266976 6.44352C0.282429 6.45413 0.314458 6.47753 0.36101 6.51862C0.454083 6.60075 0.605917 6.75418 0.799429 7.0181C1.1872 7.54696 1.73935 8.51553 2.31883 10.2302L3.2662 9.91005ZM12 18.5H6.07821V19.5H12V18.5ZM4.61818 18.3604C4.78612 19.0302 5.38706 19.5 6.07821 19.5V18.5C5.8463 18.5 5.64471 18.3428 5.58816 18.1172L4.61818 18.3604ZM18.4118 18.1172C18.3553 18.3428 18.1537 18.5 17.9218 18.5V19.5C18.6129 19.5 19.2139 19.0302 19.3818 18.3604L18.4118 18.1172Z'
                            fill='black'
                        />
                    </svg>

                    {/* (isSM || isXS || isMD) && <></> - Responsive UI logic to work with only mobile screens, smaller and lager tab screens */}
                    {(isSM || isXS || isMD) && (
                        /* Icon - Menu */
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <rect width='24' height='24' />
                            <line
                                x1='0.5'
                                y1='8.5'
                                x2='23.5'
                                y2='8.5'
                                stroke='black'
                                stroke-linecap='round'
                            />
                            <line
                                x1='0.5'
                                y1='14.5'
                                x2='23.5'
                                y2='14.5'
                                stroke='black'
                                stroke-linecap='round'
                            />
                        </svg>
                    )}
                    {/* !isSM && !isXS && !isMD && <></> - Responsive UI logic to owrk with only web screens, bigger than smaller and lager tab screens */}
                    {!isSM && !isXS && !isMD && (
                        /* Icon - Profile */
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <rect width='24' height='24' />
                            <circle cx='12.5' cy='8' r='3' stroke='black' />
                            <path
                                d='M6 19.1924C6 15.6025 8.91015 12.6924 12.5 12.6924C16.0899 12.6924 19 15.6025 19 19.1924'
                                stroke='black'
                                stroke-linecap='round'
                            />
                        </svg>
                    )}
                </div>
            </div>
        </>
    );
};
