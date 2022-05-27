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
    if (!isNaN(sum)) {
        let sumTemp = sum;
        state.sumPage.sum = sumTemp;
        rerenderTree(state);
        return true;
    } else {
        return false;
    }
}

export let detection = () => {

    let temp = getSum;
    if (temp === true) {
        return
    } else {
        console.log("NAEBAL");
        return;
    }
}

export let getMonths = (monthsCount) => {
    state.monthsPage.months = [];
    state.monthsPage.monthsCount = Number(monthsCount);
    for (let i = 0; i < monthsCount;) {
        i++
        let monthsArr = {
            monthsId: i,
        }
        state.monthsPage.months.push(monthsArr);
        console.log(i);
    }
    rerenderTree(state);
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