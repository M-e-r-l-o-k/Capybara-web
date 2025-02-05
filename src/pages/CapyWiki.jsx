import React from "react";

import "../styles/GeneralStyles.css";
import "../styles/CapyWiki.css";

import capy_wiki_img1 from "../assets/capy_wiki_img1.png";
import capy_wiki_img3 from "../assets/capy_wiki_img3.png";
import capy_wiki_img5 from "../assets/capy_wiki_img5.png";

const CapyWiki = () => {
    return (
        <div>
            <div className='div_flex_column'>
                <div className="white_block_shadow white_text_block">
                    <h1 className="mg_0">Капибара</h1>
                    <div className='text_border'></div>
                    <p>Капиба́ра, или водосви́нка (лат. Hydrochoerus hydrochaeris), - полуводное травоядное млекопитающее из подсемейства водосвинковых (Hydrochoerinae), один из двух (наряду с малой водосвинкой) ныне существующих видов рода водосвинки. Капибара - самый крупный среди современных грызунов.</p>

                    <h2>Внешний вид</h2>
                    <div className='text_border'></div>
                    <p>Длина тела взрослой капибары достигает 1-1,35 м, высота в холке - 50-60 см. Самцы весят 34-63 кг, а самки - 35-65,5 кг. Самки, как правило, крупнее самцов. Телосложение тяжёлое. Внешне капибара напоминает гигантскую большеголовую морскую свинку. Уши короткие, округлые. Глаза маленькие, расположены высоко на голове и отнесены несколько назад. Хвост рудиментарный. Конечности довольно короткие; передние - 4-палые, задние - 3-палые. Пальцы соединены небольшими плавательными перепонками и снабжены короткими сильными когтями. Капибара выглядит достаточно пушистой, ведь её тело покрыто длинными жёсткими волосами, но не имеет подшёрстка. Окрас капибары варьируется от коричнево-рыжего до сероватого. Нижняя часть тела животного капибара обычно имеет коричнево-желтоватый оттенок. Молодые особи окрашены светлее взрослых. Окрас верхней стороны тела от рыжевато-бурого до сероватого, брюшной, как правило, желтовато-бурый.</p>

                    <h2>Распространение</h2>
                    <div className='text_border'></div>
                    <p>Капибара встречается по берегам разнообразных водоёмов в тропических и умеренных частях Центральной и Южной Америки, восточнее Анд - от Панамы до Уругвая и северо-востока Аргентины. Отмечена в следующих странах: Аргентина, Боливия, Бразилия, Венесуэла, Гайана, Колумбия, Парагвай, Перу, Уругвай, Французская Гвиана. Область распространения включает бассейны рек Ориноко, Амазонки и Ла-Платы. Основными факторами, ограничивающими распространение, являются температура воздуха и воды. Капибары встречаются в горах до высоты 1300 м над уровнем моря.</p>
                </div>

                <div className='div_flex_row image_width'>
                    <div className='white_block_shadow_img'>
                        <img src={capy_wiki_img1} className='image_border-radius image_height_three'></img>
                    </div>

                    <div className='white_block_shadow_img'>
                        <img src={capy_wiki_img5} className='image_border-radius image_height_three'></img>
                    </div>

                    <div className='white_block_shadow_img'>
                        <img src={capy_wiki_img3} className='image_border-radius image_height_three'></img>
                    </div>
                </div>

                <div className="white_block_shadow white_text_block">
                    <h2 className="mg_0">Образ жизни и питание</h2>
                    <div className='text_border'></div>
                    <p>Ведёт полуводный образ жизни; от воды редко удаляется более чем на 500-1000м. Её распространение связано с сезонными колебаниями уровня воды - во время сезона дождей капибары рассеиваются по территории, в сухой сезон скапливаются по берегам крупных рек и других постоянных водоёмов и зачастую проходят в поисках воды и пищи значительные расстояния. Эти грызуны обычно активны днём, но если их часто беспокоят люди и хищники, то переходят на ночной образ жизни. Капибара прекрасно плавает и ныряет; высокое расположение на голове глаз, ушей и ноздрей позволяет ей при плавании держать их над водой.</p>

                    <h2>Социальная структура и размножение</h2>
                    <div className='text_border'></div>
                    <p>Капибары - социальные животные, живущие группами по 10-20 особей. Группы состоят из доминирующего самца, нескольких взрослых самок (со своей внутренней иерархией), детёнышей и подчинённых самцов, находящихся на периферии группы. 5-10% капибар, преимущественно самцов, живут в одиночку. Доминантный самец часто изгоняет из группы самцов-конкурентов. Чем засушливей местность, тем крупнее группы; в засуху вокруг водоёмов иногда скапливается до нескольких сотен особей. Стадо капибар в среднем занимает территорию площадью около 10 га, большую часть времени, однако, проводя на участке площадью менее 1 га. Общаются эти животные при помощи свиста, щёлкающих и лающих звуков, а также запаха секрета обонятельной железы (morrillo), которая расположена у самцов на морде.</p>
                </div>
            </div>
        </div>
    )
};

export default CapyWiki;