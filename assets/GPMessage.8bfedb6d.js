import { c9 as t, ae as e, af as y, ag as i$1, dA as a$1 } from "./vendor.74d5941c.js";
const p = new t({ esriJobMessageTypeInformative: "informative", esriJobMessageTypeProcessDefinition: "process-definition", esriJobMessageTypeProcessStart: "process-start", esriJobMessageTypeProcessStop: "process-stop", esriJobMessageTypeWarning: "warning", esriJobMessageTypeError: "error", esriJobMessageTypeEmpty: "empty", esriJobMessageTypeAbort: "abort" });
let i = class extends a$1 {
  constructor(r) {
    super(r), this.description = null, this.type = null;
  }
};
e([y({ type: String, json: { write: true } })], i.prototype, "description", void 0), e([y({ type: String, json: { read: p.read, write: p.write } })], i.prototype, "type", void 0), i = e([i$1("esri.tasks.support.GPMessage")], i);
var a = i;
export { a };
