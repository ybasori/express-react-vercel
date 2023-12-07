"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require("./App");
const port = Number(process.env.PORT || 5000);
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`> ready on http://localhost:${port}`);
});
