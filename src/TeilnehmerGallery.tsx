import React from 'react';
import TeilnehmerCard from "./TeilnehmerCard";
import './TeilnehmerGallery.css';
import albanien from './images/albanien.jpg';
import armenien from './images/armenien.jpg';
import australien from './images/australien.jpg';
import belgien from './images/belgien.jpg';
import deutschland from './images/deutschland.jpg';
import estland from './images/estland.jpg';
import finnland from './images/finnland.jpg';
import frankreich from './images/frankreich.jpg';
import grossbritanien from './images/grossbritannien.jpg';
import israel from './images/israel.jpg';
import italien from './images/italien.jpg';
import kroatien from './images/kroatien.jpg';
import litauen from './images/litauen.jpg';
import moldau from './images/moldau.jpg';
import norwegen from './images/norwegen.jpg';
import oesterreich from './images/oesterreich.jpg';
import polen from './images/polen.jpg';
import portugal from './images/portugal.jpg';
import schweden from './images/schweden.jpg';
import schweiz from './images/schweiz.jpg';
import serbien from './images/serbien.jpg';
import slowenien from './images/slowenien.jpeg';
import spanien from './images/spanien.jpg';
import tschechien from './images/tschechien.jpg';
import ukraine from './images/ukraine.jpg';
import zypern from './images/zypern.jpg';
import BewertungsGallery from "./BewertungsGallery";




function TeilnehmerGallery() {


    return (
        <div className="teilnehmergallery">
            <header>
                <div>
                    <ul>
                        <li>
                            <div><TeilnehmerCard startnummer={1} image={oesterreich} land={"Österreich"}
                                                 name={"Teya & Salena"}
                                                 song={"Who the Hell is Edgar?"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>

                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={2} image={portugal} land={"Portugal"} name={"Mimicat"}
                                                 song={"Ai coração"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>

                        <li>
                            <div><TeilnehmerCard startnummer={3} image={schweiz} land={"Schweiz"} name={"Remo Forrer"}
                                                 song={"Watergun"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={4} image={polen} land={"Polen"} name={"Blanka"}
                                                 song={"Solo"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={5} image={serbien} land={"Serbien"} name={"Luke Black"}
                                                 song={"Samo mi se spava"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={6} image={frankreich} land={"Frankreich"}
                                                 name={"La Zarra"}
                                                 song={"Évidemment"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={7} image={zypern} land={"Zypern"} name={"Andrew Lambrou"}
                                                 song={"Watergun"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={8} image={spanien} land={"Spanien"} name={"Blanca Paloma"}
                                                 song={"Eaea"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={9} image={schweden} land={"Schweden"} name={"Loreen"}
                                                 song={"Tattoo"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={10} image={albanien} land={"Albanien"}
                                                 name={"Albina & Familja Kelmendi"}
                                                 song={"Duje"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={11} image={italien} land={"Italien"}
                                                 name={"Marco Mengoni"}
                                                 song={"Due vite"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={12} image={estland} land={"Estland"} name={"Alika"}
                                                 song={"Alika"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={13} image={finnland} land={"Finnland"} name={"Käärijä"}
                                                 song={"Cha Cha Cha"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={14} image={tschechien} land={"Tschechien"} name={"Vesna"}
                                                 song={"My Sister's Crown"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={15} image={australien} land={"Australien"}
                                                 name={"Voyager"}
                                                 song={"Promise"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={16} image={belgien} land={"Belgien"} name={"Gustaph"}
                                                 song={"Because Of You"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={17} image={armenien} land={"Armenien"} name={"Brunette"}
                                                 song={"Future Lover"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={18} image={moldau} land={"Moldau"} name={"Pasha Parfeni"}
                                                 song={"Soarele și luna"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={19} image={ukraine} land={"Ukraine"} name={"Tvorchi"}
                                                 song={"Heart Of Steel"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={20} image={norwegen} land={"Norwegen"} name={"Alessandra"}
                                                 song={"Queen Of Kings"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={21} image={deutschland} land={"Deutschland"}
                                                 name={"Lord Of The Lost"}
                                                 song={"Blood & Glitter"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={22} image={litauen} land={"Litauen"}
                                                 name={"Monika Linkytė"}
                                                 song={"Stay"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={23} image={israel} land={"Israel"} name={"Noa Kirel"}
                                                 song={"Unicorn"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={24} image={slowenien} land={"Slowenien"}
                                                 name={"Joker Out"}
                                                 song={"Carpe Diem"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={25} image={kroatien} land={"Kroatien"} name={"Let 3"}
                                                 song={"Mama ŠČ"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>
                        <li>
                            <div><TeilnehmerCard startnummer={26} image={grossbritanien} land={"Großbritannien"}
                                                 name={"Mae Muller"}
                                                 song={"I Wrote A Song"}></TeilnehmerCard></div>
                            <div><BewertungsGallery/></div>
                        </li>

                    </ul>
                </div>
            </header>
        </div>


    );
}

export default TeilnehmerGallery;