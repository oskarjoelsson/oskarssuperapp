export interface TrapsOfInterest {
    accountId: number;
    accountOwner: string;
    balance: Balance[];
    latestTransactionTime: number;
}

export interface Balance {
    amount: number;
    currency: string;
}

export class Convert {
    public static toTrapsOfInterest(json: string): TrapsOfInterest {
        return JSON.parse(json);
    }

    public static trapsOfInterestToJson(value: TrapsOfInterest): string {
        return JSON.stringify(value);
    }
}