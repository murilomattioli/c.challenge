import React from 'react';

function Button(props) {
    let {
        text = "Botão",
        onClick = "",
        textStyle = "",
        containerStyle = "",
        backgroundColor = "bgc-black",
        iconLeft = false,
        iconRight = false,
        size = 48,
        maxWidth= "",
        bRadius = "bRad8",
    } = props;
    let buttonIcon = '';
    if (iconLeft != false || iconRight != false) buttonIcon = ' row ai-center jStart ';

    return (
        <div>
            <button onClick={onClick} className={`${bRadius} ${backgroundColor} bnone `} style={{ height: size, maxWidth: maxWidth }}>
                <div className={buttonIcon}>
                    <div className={iconLeft != false ? "ml16" : ""}>
                        {iconLeft != false && iconLeft}
                    </div>
                    <div className="f1 ml16 mr16">
                        <span className={"fwregular fs-def tc-white tcenter " + textStyle}>{text}</span>
                    </div>
                    <div className={iconRight != false ? "mr16" : ""}>
                        {iconRight != false && iconRight}
                    </div>
                </div>
            </button>
        </div >
    );
}

export default Button;