let rerenderTree = () => {
    console.log("rerender success")
}

let state = {
    sumPage: {
        sum: 0,
    },
    monthsPage: {
        monthsCount: 0,
        months: []
    },
    resultPage: {
        result: 0,
    },
};

export let getSum = (sum) => {
    let notNum = document.querySelector(".sum__button--next");
    if (!isNaN(sum)) {
        if (notNum.hasAttribute("disabled")) {
            notNum.removeAttribute("disabled");
        }
        state.sumPage.sum = sum;
        rerenderTree(state);
    } else {
        notNum.setAttribute("disabled", "disabled");
    }
}


export let getMonths = (monthsCount) => {
    state.monthsPage.months = [];
    let notNum = document.querySelector(".months__button--next");
    if (!isNaN(monthsCount)) {
        if (notNum.hasAttribute("disabled")) {
            notNum.removeAttribute("disabled");
        }
        state.monthsPage.monthsCount = Number(monthsCount);
        for (let i = 0; i < monthsCount;) {
            i++
            let monthsArr = {
                monthsId: i,
            }
            state.monthsPage.months.push(monthsArr);
        }
        rerenderTree(state);
    } else {
        notNum.setAttribute("disabled", "disabled");
        rerenderTree(state);
    }
}


export let getResult = () => {
    let result = state.sumPage.sum / state.monthsPage.monthsCount;
    state.resultPage.result = Math.floor(result);
    rerenderTree(state);
}

export let resetTable = () => {
    state.monthsPage.months = [];
    state.sumPage.sum = 0;
    state.monthsPage.monthsCount = 0;
    state.resultPage.result = 0;
    rerenderTree(state);
    console.log("Таблица очищена");
}


export const subscribe = (observer) => {
    rerenderTree = observer;
}


window.state = state;
export default state;