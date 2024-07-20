import React, { useState } from 'react';
import { Radio, Space } from 'antd';

import "../styles/GeneralStyles.css";
import "../styles/Capybaras.css";

import CapybaraEating1 from "../assets/capybara-eating1.gif";
import CapybaraEating2 from "../assets/capybara-eating2.gif";
import CapybaraEating3 from "../assets/capybara-eating3.gif";

import CapybaraSwimming1 from "../assets/capybara-swimming1.gif"
import CapybaraSwimming2 from "../assets/capybara-swimming2.gif"
import CapybaraSwimming3 from "../assets/capybara-swimming3.jpg"



const Capybaras = () => {
    const [state, setState] = useState("a");
    const onChange = (e) => {
        console.log(`radio checked:${e.target.value}`);
        setState(e.target.value);
    };

    const photos = {
        "a": [CapybaraEating1, CapybaraEating2, CapybaraEating3],
        "b": [CapybaraSwimming1, CapybaraSwimming2, CapybaraSwimming3],
        "c": []
    }

    return (
        <div>
            <div className="div_flex_column min-height gap_radio">
                <div className="white_block_shadow mg_top">
                    <h1 className="radio_group_h1">Капибара:</h1>
                    <div className='items-alight_radio'>
                        <Radio.Group onChange={onChange} defaultValue="a">
                            <Space direction="horizontal">
                                <Radio.Button value="a">Кушает</Radio.Button>
                                <Radio.Button value="b">Плавает</Radio.Button>
                                <Radio.Button value="c">Отдыхает</Radio.Button>
                            </Space>
                        </Radio.Group>
                    </div>
                </div>

                <div className='capybaras_white_block_shadow_img div_flex_row'>
                    <img src={photos[state][0]} className='border-radius_12 capy_img img_mg' />
                    <img src={photos[state][1]} className='border-radius_12 capy_img img_mg' />
                    <img src={photos[state][2]} className='border-radius_12 capy_img mg_0' />
                </div>
            </div>
        </div>
    )
};

export default Capybaras;