import React from 'react';

import "../styles/GeneralStyles.css";
import "../styles/CapyFacts.css";

import capy_img1 from "../assets/capy_img1.jpg";
import capy_img2 from "../assets/capy_img2.jpg";
import capy_img3 from "../assets/capy_img3.webp";
import capy_img4 from "../assets/capy_img4.jpg";
import capy_img5 from "../assets/capy_img5.jpg";

const CapyFacts = () => {
    return (
        <div>
            <div className='div_flex_column'>
                <div className='white_block_shadow white_text_block'>
                    <h1 className='mg_0'>Капибары - лучшие грызуны</h1>
                    <div className='text_border'></div>
                    <p>Они дружелюбны, покладисты и любят общаться с людьми. Капибары также намного крупнее большинства грызунов (они могут вырастать до 90 сантиметров в длину), поэтому их иногда называют гигантскими морскими свинками. Эти животные существуют уже более трех миллионов лет, но если вы никогда не видели их, позвольте мне стать вашим гидом в мире милых капибар.</p>

                    <h1 className='mg_0'>Капибары очень общительны</h1>
                    <div className='text_border'></div>
                    <p className='mg_bottom'>Капибары - очень социальные животные и любят играть друг с другом и с людьми. Они настолько дружелюбны, что иногда прижимаются к своим хозяевам в постели по ночам. Им часто нравится играть с игрушками, особенно с мячиками и мягкими игрушками. Капибары также любят воду, что делает их идеальными питомцами для тех, кто живет рядом с озерами или реками, ведь хозяева могут брать их с собой купаться в любое время!</p>
                </div>

                <div className='div_flex_row image_width'>
                    <div className='white_block_shadow_img'>
                        <img src={capy_img1} className='image_border-radius'></img>
                    </div>
                    <div className='white_block_shadow_img'>
                        <img src={capy_img3} className='image_border-radius'></img>
                    </div>
                </div>

                <div className='white_block_shadow white_text_block'>
                    <h1 className='mg_0'>Стоимость содержания капибары</h1>
                    <div className='text_border'></div>
                    <p className='mg_bottom'>Если вы хотите завести домашнюю капибару и можете обеспечить ей надежный дом, вас может заинтересовать, сколько стоит капибара. Чтобы ответить на этот вопрос, мы должны рассмотреть стоимость покупки капибары и текущие расходы по уходу за ней. домашняя капибара Стоимость покупки капибары колеблется от 1 000 до 2 500 долларов в зависимости от места покупки и возраста капибары. Молодые или детеныши капибары, как правило, имеют более высокую цену, чем старые. Но это еще не все: заводить только одну капибару очень неразумно и граничит с жестокостью, так как им нужны компаньоны, иначе они будут испытывать стресс и начнут грызть все подряд.  Если вы собираетесь приобрести пару капибар, постарайтесь не брать двух самцов, так как они более склонны к конфликтам, когда достигают взрослого возраста. Ежемесячные расходы варьируются, но рассчитывайте потратить около 100 долларов на сено в зимние месяцы, если вы живете не в очень теплом климате, где свежая трава доступна круглый год.</p>
                </div>

                <div className='div_flex_row image_width div_mg_bottom'>
                    <div className='white_block_shadow_img'>
                        <img src={capy_img4} className='image_border-radius'></img>
                    </div>
                    <div className='white_block_shadow_img'>
                        <img src={capy_img5} className='image_border-radius'></img>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CapyFacts;