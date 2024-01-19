import React from 'react'


export const Searchbar = () => {
    return (
        <div className='ml-[15px] relative'>
            <div className='left-[15px] absolute translate-y-[-50%] top-[50%]' dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="20" height="20" x="0" y="0" viewBox="0 0 612.01 612.01" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M606.209 578.714 448.198 423.228C489.576 378.272 515 318.817 515 253.393 514.98 113.439 399.704 0 257.493 0S.006 113.439.006 253.393s115.276 253.393 257.487 253.393c61.445 0 117.801-21.253 162.068-56.586l158.624 156.099c7.729 7.614 20.277 7.614 28.006 0a19.291 19.291 0 0 0 .018-27.585zM257.493 467.8c-120.326 0-217.869-95.993-217.869-214.407S137.167 38.986 257.493 38.986c120.327 0 217.869 95.993 217.869 214.407S377.82 467.8 257.493 467.8z" fill="#484848" data-original="#484848" opacity="1"></path></g></svg>'}} />
                <input className='min-w-[500px] text-[#484848] placeholder-[#484848] outline-[#0E0E0E] height-[100px] pl-[50px] rounded-[5px] bg-[#0E0E0E] px-[10px] py-[10px]' type="text" placeholder="Search anime..." />
            <div>
            </div>
        </div>
    )
}
