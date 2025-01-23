import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import Data from '../data';

import ProdOne from '../assets/product1.png'


function Items({ currentItems }) {

    return (
        <>
            <div className={'flex gap-x-10 gap-y-14 flex-wrap'}>
                {currentItems &&
                    currentItems.map((item) => (
                        <div className={'w-[294px]'}>
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
            <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default Pagination