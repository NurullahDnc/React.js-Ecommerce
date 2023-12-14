import React from 'react'
import Slider from 'react-slick';


export default function SliderComp() {

    const settings = {
        //altındaki tokta
        // dots: true,
        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            {/* sayfada slider yapıyor  react-slick ile */}
            <Slider {...settings}>
                <div className='!flex items-center bg-gray-100 '>
                    <div className='px-5'>
                        <h3 className='text-5xl font-bold'>Yaz'a Özel Dev İndirim Burda</h3>
                        <p className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dicta impedit iste iusto dignissimos nemo eligendi architecto. Quia, libero dolor hic voluptatum veritatis, molestiae quas dicta voluptatem tenetur facilis quisquam!</p>
                        <button className='rounded-full border py-2 px-5 text-2xl bg-gray-200 outline-none'>İncele</button>
                    </div>

                    <img src="./images/Ekran görüntüsü 2023-12-13 210928.png" alt="" />
                </div>

                <div className='!flex items-center bg-gray-100 '>
                    <div className='px-5'>
                        <h3 className='text-5xl font-bold'>Yaz'a Özel Dev İndirim Burda</h3>
                        <p className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dicta impedit iste iusto dignissimos nemo eligendi architecto. Quia, libero dolor hic voluptatum veritatis, molestiae quas dicta voluptatem tenetur facilis quisquam!</p>
                        <button className='rounded-full border py-2 px-5 text-2xl bg-gray-200 outline-none'>İncele</button>
                    </div>
                    <img src="./images/Ekran görüntüsü 2023-12-13 211358.png" alt="" />
                </div>

            </Slider>


        </div>
    )
}
