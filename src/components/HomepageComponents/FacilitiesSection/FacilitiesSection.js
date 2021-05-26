import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import './FacilitiesSection.scss';

const facilitiesData = [
    {
        title: "Locul in care puteți alege mese gustoase",
        description: "Cantina Universității Tehnice „Gheorghe Asachi” din Iași a fost inaugurată pe 9 mai 2011, în urma unui amplu proiect care a constat în refuncționalizarea și dotarea acesteia. La cantină pot lua masa în același timp 200 de studenți și estimăm că într-o zi de lucru de la ora 12.00 la 19.00 vin aproximativ 1.000 de persoane.",
        image: require(`../../../assets/images/Cantina/cantina-uti-foto-3-min.jpg`),
    },
    {
        title: "Îi încurajăm pe studenti să ducă o viață sănătoasă",
        description: "Universitatea Tehnică „Gheorghe Asachi” din Iași încurajează o viață sănătoasă prin sport, motiv pentru care pune la dispoziția studenților săi o sală de sport dotată cu toate utilitățile. Baza sportivă din campusul studențesc „Tudor Vladimirescu” este formată din 6 terenuri de sport în aer liber și 2 săli de sport.",
        image: require(`../../../assets/images/BazaSportiva/baza-sportiva-00002.jpg`),
    },
    {
        title: "Asigurăm programe de dezvoltare personală si profesională",
        description: "Studenții interesați de obținerea performanțelor personale și profesionale, precum și de programe de voluntariat recunoscute și acreditate, sunt invitați să se înscrie în baza de date a centrului care urmează să-și lanseze activitatea.",
        image: require(`../../../assets/images/CentruConsiliere/international.jpg`),
    }
]

function FacilitiesSection() {

    // STATE
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(currentIndex >= facilitiesData.length -1 ? 0 : currentIndex + 1);
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex <= 0 ? facilitiesData.length - 1 : currentIndex - 1);
    }

    return (
        <section className="facilities-section">
            <div className="facilities-section-inner">
                <Link to="#" className="section-content-link-wrapper">
                    <div className="section-inner-content">
                        <div className="content-heading">
                            <h2 className="content-heading-title heading-two">{facilitiesData[currentIndex].title}</h2>
                        </div>
                        <div className="content-paragraph">
                            <p className="content-paragraph-description paragraph">{facilitiesData[currentIndex].description}</p>
                        </div>
                    </div>
                </Link>
                <div className="section-inner-showcase">
                    <button className="showcase-prev-button" onClick={prevSlide}>
                        <IconContext.Provider value={{color: '#fafafa', size: '34px'}}>
                            <BsArrowLeft />
                        </IconContext.Provider>
                    </button>
                    <button className="showcase-next-button" onClick={nextSlide}>
                        <IconContext.Provider value={{color: '#fafafa', size: '34px'}}>
                            <BsArrowRight />
                        </IconContext.Provider>
                    </button>
                    <div className="showcase-background">
                        <div className="showcase-background-overlay"></div>
                        <img src={facilitiesData[currentIndex].image.default} alt={facilitiesData[currentIndex].title} className="background-image" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FacilitiesSection
