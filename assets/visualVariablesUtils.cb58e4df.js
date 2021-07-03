import { a4 as n, aa as s } from "./vendor.74d5941c.js";
import { k, A } from "./Utils.3f1577e5.js";
const l = n.getLogger("esri.views.2d.engine.webgl");
function o(e) {
  return k(e.minDataValue) && k(e.maxDataValue) && e.minSize != null && e.maxSize != null ? A.SIZE_MINMAX_VALUE : (e.expression && e.expression === "view.scale" || e.valueExpression && e.valueExpression === "$view.scale") && Array.isArray(e.stops) ? A.SIZE_SCALE_STOPS : (e.field != null || e.expression && e.expression !== "view.scale" || e.valueExpression && e.valueExpression !== "$view.scale") && (Array.isArray(e.stops) || "levels" in e && e.levels) ? A.SIZE_FIELD_STOPS : (e.field != null || e.expression && e.expression !== "view.scale" || e.valueExpression && e.valueExpression !== "$view.scale") && e.valueUnit != null ? A.SIZE_UNIT_VALUE : (l.error(new s("mapview-bad-type", "Found invalid size VisualVariable", e)), A.NONE);
}
export { o };
