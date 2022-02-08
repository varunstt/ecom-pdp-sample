import React from 'react';
import { useBreakpoints } from 'react-responsive-hooks';
import './NoteType1.styles.scss';

export const NoteType1 = ({noteRef}: {noteRef: React.RefObject<HTMLInputElement>}) => {
    const { isXS, isSM } = useBreakpoints();
    // useBreakpoints to fetch breakpoints for responsive logic
    return (
        <div ref={noteRef} className='pdp-bottom w-full flex flex-col justify-center items-center'>
            {/* ref={noteRef} - noteRef attched to scroll to this position from /src/components/product-other-details/ProductOtherDetails.tsx */}
            <div className='flex justify-center mb-22'>
                <p className="font-roboto text-sm font-normal underline mx-3">JONATHAN SIMKHAI</p>
                <p className="font-roboto text-sm font-normal underline mx-3">BLAZERS</p>
                <p className="font-roboto text-sm font-normal underline mx-3">VISCOSE</p>
            </div>
            <h3 className='font-helvetica text-sm text-center font-bold px-4.5 mb-4'>
                A NOTE FROM THE EDITOR
            </h3>
            <p className={'font-roboto ' + ((isXS || isSM) ? 'text-lg' : 'text-3xl pdp-bottom-width') + ' text-center font-normal'+ ((isXS || isSM) ? ' leading-7 ' : 'leading-11') + 'px-4.5 mb-4'}>
                The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
                lunar lavishness by night and by day: a blazer in a linen blend
                shot with lurex for a shimmering surface that shines like a star
                in the sky.
            </p>
            <div className={'w-full flex items-center justify-center' + ((isXS || isSM) ? ' mb-17' : ' mb-21')}>
                <div className="w-7 h-px border-b border-solid border-black mr-2"></div>
                <p>By MINNA SHIM, Fashion Editor</p>
            </div>
        </div>
    );
};
