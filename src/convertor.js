

let formal_letter = {
    "0": "", "1": "壹", "2": "贰", "3": "叁",
    "4": "肆", "5": "伍", "6": "陆", "7": "柒",
    "8": "捌", "9": "玖" 
}

let count_letter = {
    "10": "拾", "100": "佰", "1000": "仟", "10000": "万", "100000": "拾万",
    "100000000": "亿" 
}

// number: shall be a string of number
function toFormal(number) {
    if (number.length == 1) {
        return formal_letter[number];
    }
    if (number.length == 2) {
        return formal_letter[number[0]] + count_letter["10"] +  formal_letter[number[1]]
    }
    if (number.length == 3) {
        return number[1] == "0" ? formal_letter[number[0]] + count_letter["100"] 
                                : formal_letter[number[0]] + count_letter["100"] + formal_letter[number[1]] + count_letter["10"] + formal_letter[number[2]]
    }
    if (number.length == 4) {
        return formal_letter[number[0]] + count_letter["1000"]
    }
    if (number.length == 5) {
        return formal_letter[number[0]] + count_letter["10000"]
    }

    if (number.length == 6) {
        return number[1] == "0" ? formal_letter[number[0]] + count_letter["100000"]
                             : formal_letter[number[0]] + count_letter["100000"][0] + formal_letter[number[1]] + count_letter["10000"] 
    }
    return "";
    
}

export { toFormal };