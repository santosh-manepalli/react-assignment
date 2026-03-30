import { User } from "../../../utils/types";

type UserAction =
    | { type: "ADD_USER"; payload: User } | { type: "DELETE_USER"; payload: number };

export const usersReducer = (state: User[], action: UserAction): User[] => {
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.payload];

        case "DELETE_USER":
            return state.filter((user) => user.id !== action.payload);

        default:
            return state;
    }
}