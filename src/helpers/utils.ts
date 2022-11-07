export const isAllEqual = (arrayInput: Array<String | null>) => {
    return arrayInput.every(val => val === arrayInput[0]);
};
