
export const initialState = {
    expression: "",
    result: "0",
};

export type Action =
    | { type: "addChar"; payload: string }
    | { type: "fullClear"; payload: void }
    | { type: "printResult"; payload: void }
    | { type: "deleteLastCharacter"; payload: void }
    | { type: "reverseResult"; payload: void }
    | { type: "percentageResult"; payload: void };


export const calculatorReducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
        case "addChar":
            return {
                ...state,
                expression: state.expression + action.payload,
            };
        case "fullClear":
            return {
                ...state,
                expression: "",
                result: "0",
            };
        case "printResult":
            try {
                const evalResult = eval(state.expression);
                return {
                    ...state,
                    result: evalResult.toString(),
                };
            } catch (error) {
                return {
                    ...state,
                    result: "Error",
                };
            }
        case "deleteLastCharacter":
            return {
                ...state,
                expression: state.expression.slice(0, -1),
            };
        case "reverseResult": {
            if (!state.expression) return state;

            try {
                const value = eval(state.expression);
                const toggled = -value;
                return {
                    ...state,
                    expression: toggled.toString(),
                };
            } catch {
                return {
                    ...state,
                    result: "Error",
                };
            }
        }
        case "percentageResult": {
            if (!state.expression) return state;

            try {
                const value = eval(state.expression);
                const percent = value / 100;
                return {
                    ...state,
                    expression: percent.toString(),
                };
            } catch {
                return {
                    ...state,
                    result: "Error",
                };
            }
        }
        default:
            return state;
    }
};
