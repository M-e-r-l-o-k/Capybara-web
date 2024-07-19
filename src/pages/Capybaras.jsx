import React, { useState } from 'react';
import { Radio, Space } from 'antd';

import "../styles/GeneralStyles.css";
import "../styles/Capybaras.css";

import CapybaraEating1 from "../assets/capybara-eating1.gif";
import CapybaraEating2 from "../assets/capybara-eating2.gif";
import CapybaraEating3 from "../assets/capybara-eating3.gif";



const Capybaras = () => {
    const [state, setState] = useState("a");
    const onChange = (e) => {
        console.log(`radio checked:${e.target.value}`);
        setState(e.target.value);
    };

    const photos = {
        "a": [CapybaraEating1, CapybaraEating2, CapybaraEating3],
        "b": [],
        "c": [],
        "d": [],
        "e": []
    }

    return (
        <div>
            <div className="div_flex_column min-height gap_radio">
                <div className="white_block_shadow">
                    <h1 className="radio_group_h1">Капибара:</h1>
                    <Radio.Group onChange={onChange} defaultValue="a">
                        <Space direction="horizontal">
                            <Radio.Button value="a">Кушает</Radio.Button>
                            <Radio.Button value="b">Плавает</Radio.Button>
                            <Radio.Button value="c">Бегает</Radio.Button>
                            <Radio.Button value="d">Чилит</Radio.Button>
                            <Radio.Button value="e">Отдыхает</Radio.Button>
                        </Space>
                    </Radio.Group>
                </div>

                <div className='white_block_shadow_img'>
                    <div>
                        <img src={photos[state][0]} height={350} className='border-radius_12'/>
                        <img src={photos[state][1]} height={350} className='border-radius_12'/>
                        <img src={photos[state][2]} height={350} className='border-radius_12 mg_0'/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Capybaras;