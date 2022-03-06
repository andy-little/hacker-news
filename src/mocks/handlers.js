import { rest } from "msw";
import { mockedPage } from "../mockedData";

import { API_ENDPOINT } from "../context";

let query = "test";
let page = 1;

rest.get(
    `${API_ENDPOINT}query=${query}&hitsPerPage=8&page=${/[1-5]/}`,
    (req, res, ctx) => {
        return res(ctx.json(mockedPage));
    }
);
