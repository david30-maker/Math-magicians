/*eslint-disable*/
export const Wrapper = ({ children }) => <div className="wrapper">{children}</div>;

export const Screen = ({ value }) => (
    <div className="screen" mode="single" max={70}>
        {value}
    </div>
);

export const ButtonBox = ({ children }) => <div className="buttonBox">{children}</div>;

const getStyleName = btn => {
    const className = {
        '0': 'zero',
        '÷': 'operator',
        'x': 'operator',
        '-': 'operator',
        '+': 'operator',
        '=': 'equals'
    }
    return className[btn]
}
export const Button = ({ value, onClick }) => (
    <button className={`${getStyleName(value)} button`} onClick={onClick}>
        {value}
    </button>
);
