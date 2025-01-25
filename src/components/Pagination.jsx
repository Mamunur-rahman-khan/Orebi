import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import Data from '../data';



function Items({ currentItems }) {

    return (
        <>
            <div className={'flex gap-x-10 gap-y-14 flex-wrap'}>
                {currentItems &&
                    currentItems.map((item) => (
                        <div className={'w-[294px] relative group'}>
                            <Product
                                title={item.title}
                                price={item.price}
                                color={item.description}
                                imgSrc={item.image}
                            />
                        </div>
                    ))}
            </div>
        </>
    );
}

function Pagination({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = Data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(Data.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Data.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <div className="pt-12 flex justify-between">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=""
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={4}
                    pageCount={pageCount}
                    previousLabel=""
                    renderOnZeroPageCount={null}
                    containerClassName="flex gap-x-4"
                    pageLinkClassName="bg-white border-2 text-black p-2"
                />
                <p className={'font text-sm text-menuText'}>{`Products from ${itemOffset + 1} to ${endOffset < Data.length ? endOffset : Data.length} of ${Data.length}`}</p>
            </div>
        </>
    );
}

export default Pagination