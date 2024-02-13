import { createContext, useState } from 'react';

const ColorContext = createContext({
    state: {color: 'black', subcolor: 'red'},
    action: {
        setColor: () => {},
        setSubcolor: () => {}
    }
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subcolor,setSubcolor] = useState('red');

    const value = {
        state: { color, subcolor},
        action: {setColor, setSubcolor}
    }

    return(
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};

// 아랫줄은 const ColorConsumer = ColorContext.Consumer와 같은 의미임
const { Consumer: ColorConsumer } = ColorContext;

//provider consumer 내보내기
export { ColorProvider, ColorConsumer };
export default ColorContext;