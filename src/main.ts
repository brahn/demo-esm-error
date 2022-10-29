import { sjoin } from "spatialmerge";

console.log("Hello world");
const result = sjoin({}, {}, { how: "inner", op: "intersects" });
console.log({ result });
