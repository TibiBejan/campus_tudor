import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary'
import './NewsSection.scss';

const cardsData = [
    {
        date: '26 Mai 2021',
        title: 'Revitalizarea zonei verzi dintre căminele T3 și T4',
        description: 'Vrem că în anii următori tot campusul să fie un loc verde, cu spații amenajate în care să-ți petreci timpul vara, pe unde să poți să te plimbi fără să porți grija mașinilor.',
        buttonLabel: 'Read More',
        image: require(`../../../assets/images/MenuCardsImages/amfiteatru-t3-t4-1-min.jpg`)
    },
    {
        date: '26 Mai 2021',
        title: '„Centrul civic” al campusului: un amfiteatru în aer liber',
        description: 'Visul asumat al universității noastre este acela de a transforma campusul într-o zonă liberă de mașini, cu spații verzi în care toți studenții să-și poată petrece zilele călduroase de primăvară, vară și toamnă.',
        buttonLabel: 'Read More',
        image: require(`../../../assets/images/MenuCardsImages/parc-cezar-oprisan-5.jpg`)
    },
    {
        date: '26 Mai 2021',
        title: 'Chipul lui Gheorghe Asachi creat din siluetele a mii de studenți',
        description: 'Direcția Servicii Studențești a dorit implicarea studenților în cât mai multe dintre proiectele care și-au propus remodelarea spațiilor verzi din campus, dar a existat și un proiect foarte interesant, în care aceștia au contribuit la reproiectarea spațiilor interioare ale universității.',
        buttonLabel: 'Read More',
        image: require(`../../../assets/images/MenuCardsImages/amfiteatru-t3-t4-1-min.jpg`)
    },
    {
        date: '26 Mai 2021',
        title: 'Centre de consiliere, de învățare și săli de lectură moderne',
        description: 'Redarea zonelor de spațiu verde în campus prin diverse proiecte de revitalizare urbană este doar un pas din „masterplanul” nostru de a vă oferi cele mai bune condiții pentru cei patru ani (cel puțin!) pe care o să-i petreceți în cămin.',
        buttonLabel: 'Read More',
        image: require(`../../../assets/images/MenuCardsImages/sali-lectura-00005 (1).jpg`)
    },
] 

function NewsSection() {
    return (
        <section className="news-section">
            <div className="news-section-inner">

                {cardsData.map((card, index) => (
                    <Link to="" className="news-card-wrapper" key={`news-card-${index}`}>
                        <div className="news-card">
                            <div className="news-card-showcase">
                                <img src={card.image.default} alt={card.title} className="background-image" />
                            </div>
                            <div className="news-card-content">
                                <div className="content-inner">
                                    <div className="content-inner-description">
                                        <span className="content-inner-date label-medium ">{card.date}</span>
                                        <h3 className="content-inner-title heading-three">{card.title}</h3>
                                        <p className="content-inner-paragraph paragraph-medium">{card.description}</p>
                                    </div>
                                    <ButtonPrimary textLabel={card.buttonLabel} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </section>
    )
}

export default NewsSection;
