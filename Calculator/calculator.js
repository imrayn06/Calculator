let currentVal = "";
        
const onDisplay = () => {
    document.querySelector(".display").value = currentVal;
};

const calculateResult = () => {
    try {
        currentVal = eval(currentVal.replace(/[^0-9\+\-\*\/\.]/g, ''));
        onDisplay();
    } catch (error) {
        currentVal = "Error";
        onDisplay();
    }
};

onDisplay();