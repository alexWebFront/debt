import result from "../components/result/Result";

let rerenderTree = () => {
    console.log("rerender success")
}

let state = {
    sumPage: {
        id: 1,
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
    state.sumPage.sum = Number(sum);
    rerenderTree(state);
}

export let getMonths = (monthsCount) => {
    state.monthsPage.monthsCount = Number(monthsCount);
    for (let i = 0; i < monthsCount;) {
        i++;
        let monthsArr = {
            monthsId: i,
        }
        state.monthsPage.monthsCount = i;
        state.monthsPage.months.push(monthsArr);
    }
    rerenderTree(state);
}

export let getResult = () => {
    let result = state.sumPage.sum / state.monthsPage.monthsCount;
    state.resultPage.result = result;
    rerenderTree(state);
}

export let resetTable = () => {
    state.monthsPage.months = [];
    state.sumPage.sum = 0;
    state.monthsPage.monthsCount = 0;
    rerenderTree(state);
    console.log("Таблица очищена");
}


export const subscribe = (observer) => {
    rerenderTree = observer;
}


window.state = state;
export default state;