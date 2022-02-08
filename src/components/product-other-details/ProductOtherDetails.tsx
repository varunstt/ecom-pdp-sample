import { useState } from 'react';
import { ProductDetailInterface } from '../../utils/models';

/* ProductOtherDetails - Additional details on the product */
export const ProductOtherDetails = ({
    productDetail, noteRef
}: {
    productDetail: ProductDetailInterface;
    noteRef: React.RefObject<HTMLInputElement>;
}) => {
    /* props
        productDetail - for additional details on product like details, delivery, fit type and share options
        noteRef - ref for a link to scroll to a different section of the page
    */
    const [tabSelected, setTabSelected] = useState(0);
    /* state - tabSelected to track current selected tab and aler css of selected and unselected tab header and hise and show respective tab outlet/section */
    return (
        <div className='flex flex-col'>
            <div className='tab-wrapper flex mb-1.5'>
                {/* Tab header */}
                <button
                    className={
                        'font-helvetica text-sm mr-6 ' +
                        (tabSelected === 0
                            ? 'font-bold'
                            : 'font-normal hover:underline')
                    }
                    onClick={() => setTabSelected(0)}
                >
                    DETAILS
                </button>
                <button
                    className={
                        'font-helvetica text-sm mr-6 ' +
                        (tabSelected === 1
                            ? 'font-bold'
                            : 'font-normal hover:underline')
                    }
                    onClick={() => setTabSelected(1)}
                >
                    DELIVERY
                </button>
                <button
                    className={
                        'font-helvetica text-sm mr-6 ' +
                        (tabSelected === 2
                            ? 'font-bold'
                            : 'font-normal hover:underline')
                    }
                    onClick={() => setTabSelected(2)}
                >
                    FIT
                </button>
                <button
                    className={
                        'font-helvetica text-sm mr-6 ' +
                        (tabSelected === 3
                            ? 'font-bold'
                            : 'font-normal hover:underline')
                    }
                    onClick={() => setTabSelected(3)}
                >
                    SHARE
                </button>
            </div>
            <div className='tab-outlet-wrapper mb-5'>
                {/* Tab outlects/ section - content only available for first header (details) */}
                {tabSelected === 0 && (
                    <p className='font-roboto text-sm font-normal'>
                        {productDetail.details}
                    </p>
                )}
                {tabSelected !== 0 && (
                    <p className='font-roboto text-sm font-normal'>
                        Content not available.
                    </p>
                )}
            </div>
            {/* Link to scroll to /src/components/note-type-1/NoteType1.tsx */}
            <p className="font-roboto text-sm font-normal mb-5">See the <a className="underline cursor-pointer hover:font-bold" onClick={() => noteRef.current?.scrollIntoView()}>EDITOR’S NOTE</a></p>
            <p className="font-roboto text-sm font-normal">Learn about the <span className="underline">DESIGNER</span></p>
        </div>
    );
};
