export type ICurrencyProps = {
    currencyOptions: string[];
    flags?: string[];
    setCurrency: Function;
    defaultVal: string;
};

export type ISelectOption = {
    readonly value: string;
    readonly label: string;
    readonly image?: string;
};
