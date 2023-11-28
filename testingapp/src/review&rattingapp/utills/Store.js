import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import AuthSlice from "../features/auth/AuthSlice";
import CompanySlice from "../features/company/Company.Slice";
import ReviewSlice from "../features/review/ReviewSlice";


const store = configureStore(
    {
        reducer: {
            user: AuthSlice,
            company: CompanySlice,
            review: ReviewSlice,
        },
    },
    applyMiddleware(thunk)
);
export default store 