import React, { useState } from 'react';
import SingleGalleryItem from '../../../components/SingleGalleryItem/SingleGalleryItem';
import portfolioData from '../../../fakeData/portfolioData';
// import SimpleReactLightbox from 'simple-react-lightbox'

const arr = portfolioData;
const uniqueItem = arr.filter((arr, index, self) =>
    index === self.findIndex((t) => (t.img === arr.img && t.State === arr.State)))

const PortfolioThreeColGallery = () => {
    const [galleryItems, setGalleryItems] = useState(portfolioData);
    const [filterGalleryItems, setFilterGalleryItems] = useState(uniqueItem);
    const [active, setActive] = useState('all')
    // console.log(galleryItems)

    // filter item
    const filterItems = (category) => {
        setActive(category)
        if (category === 'all') {
            return setFilterGalleryItems(uniqueItem)
        }
        const remainingItem = galleryItems.filter((item) => {
            return item.category === category
        })
        setFilterGalleryItems(remainingItem)

    }


    return (
        <>



            <section className="portfolio-area pt-120 pb-90">
                <div className="container">
                    <div className="row">

                        {/* <!-- START PORTFOLIO FILTER AREA --> */}
                        <div className="col-12">
                            <div className="text-center">
                                <div className="portfolio-filter mb-40">
                                    <button className={active === 'all' ? 'active' : null}
                                        onClick={() => filterItems('all')} >Ver todo</button>

                                    <button className={active === 'destacados' ? 'active' : null}
                                        onClick={() => filterItems('destacados')} >Destacados</button>

                                    <button className={active === 'testimonios' ? 'active' : null}
                                        onClick={() => filterItems('testimonios')} >Testimonios</button>

                                    <button className={active === 'doctores' ? 'active' : null}
                                        onClick={() => filterItems('doctores')} >Doctores</button>

                                    <button className={active === 'instalaciones' ? 'active' : null}
                                        onClick={() => filterItems('instalaciones')} >Instalaciones</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- END PORTFOLIO FILTER AREA --> */}

                    </div>

                        <div id="portfolio-grid" className="row row-portfolio">

                            {
                                filterGalleryItems.map((item,index) => {
                                    return <SingleGalleryItem key={item.id} galleryItem={item} index={index}
                                    filterGalleryItems={filterGalleryItems} column="4" />
                                })
                            }

                        </div>

                </div>
            </section>
        </>
    );
};

export default PortfolioThreeColGallery;