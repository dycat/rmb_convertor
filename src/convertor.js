

let formal_letter = {
    "0": "零", "1": "壹", "2": "贰", "3": "叁",
    "4": "肆", "5": "伍", "6": "陆", "7": "柒",
    "8": "捌", "9": "玖" 
}

let count_letter = {
    "10": "拾", "100": "佰", "1000": "仟", "10000": "万",
    "100000000": "亿" 
}

function toFormal(number) {
    return formal_letter[number]
}

export { toFormal };