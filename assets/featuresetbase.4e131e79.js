import { fk as s$1, fg as x, v as ke, e6 as y$1 } from "./vendor.74d5941c.js";
import { J as J$1, M as O, K as K$1, s, i as h, l as k, W as ee, Z, F, X, E, k as g, ah as ge, ai as M, a3 as s$2, aj as l } from "./arcadeUtils.f4f7c393.js";
import { b, D, r, q as q$1, y, _ as _$1, e, a, c as a$1, A, j, T, k as k$1, d as T$1, C, v, E as E$1, w } from "./featureSetUtils.add30a90.js";
import { WhereClause as f } from "./WhereClause.f27c6004.js";
import { c as n, E as E$2 } from "./SpatialFilter.3aceea46.js";
import "./number.c0719e5d.js";
import "./FeatureSetReader.a91e3e2d.js";
import "./centroid.93c1b848.js";
import "./MD5.1ef35834.js";
import "./_commonjsHelpers.f2a458db.js";
import "./geometryEngineAsync.6e91af62.js";
function V(e2, t, n2, r2) {
  if (r2.length === 1) {
    if (Z(r2[0]))
      return l(e2, r2[0], -1);
    if (E(r2[0]))
      return l(e2, r2[0].toArray(), -1);
  }
  return l(e2, r2, -1);
}
function z(n2, r2, i) {
  const a2 = n2.getVariables();
  if (a2.length > 0) {
    const t = [];
    for (let e2 = 0; e2 < a2.length; e2++) {
      const n3 = { name: a2[e2] };
      t.push(r2.evaluateIdentifier(i, n3));
    }
    return s$1(t).then((e2) => {
      const t2 = {};
      for (let n3 = 0; n3 < a2.length; n3++)
        t2[a2[n3]] = e2[n3];
      return n2.parameters = t2, n2;
    });
  }
  return x(n2);
}
function H(e2, t, n2 = null) {
  for (const r2 in e2)
    if (r2.toLowerCase() === t.toLowerCase())
      return e2[r2];
  return n2;
}
function U(e2) {
  if (e2 === null)
    return null;
  const t = { type: H(e2, "type", ""), name: H(e2, "name", "") };
  if (t.type === "range")
    t.range = H(e2, "range", []);
  else {
    t.codedValues = [];
    for (const n2 of H(e2, "codedValues", []))
      t.codedValues.push({ name: H(n2, "name", ""), code: H(n2, "code", null) });
  }
  return t;
}
function W(e2) {
  if (e2 === null)
    return null;
  const t = {}, n2 = H(e2, "wkt", null);
  n2 !== null && (t.wkt = n2);
  const r2 = H(e2, "wkid", null);
  return r2 !== null && (t.wkid = r2), t;
}
function _(e2) {
  if (e2 === null)
    return null;
  const t = { hasZ: H(e2, "hasz", false), hasM: H(e2, "hasm", false) }, n2 = H(e2, "spatialreference", null);
  n2 && (t.spatialReference = W(n2));
  const r2 = H(e2, "x", null);
  if (r2 !== null)
    return t.x = r2, t.y = H(e2, "y", null), t;
  const i = H(e2, "rings", null);
  if (i !== null)
    return t.rings = i, t;
  const a2 = H(e2, "paths", null);
  if (a2 !== null)
    return t.paths = a2, t;
  const s2 = H(e2, "points", null);
  if (s2 !== null)
    return t.points = s2, t;
  for (const l2 of ["xmin", "xmax", "ymin", "ymax", "zmin", "zmax", "mmin", "mmax"]) {
    const n3 = H(e2, l2, null);
    n3 !== null && (t[l2] = n3);
  }
  return t;
}
function J(e2, t) {
  for (const n2 of t)
    if (n2 === e2)
      return true;
  return false;
}
function q(e2) {
  return !!e2.layerDefinition && (!!e2.featureSet && (J(e2.layerDefinition.geometryType, ["", "esriGeometryPoint", "esriGeometryPolyline", "esriGeometryPolygon", "esriGeometryMultipoint", "esriGeometryEnvelope"]) !== false && (e2.layerDefinition.objectIdField !== null && e2.layerDefinition.objectIdField !== "" && (Z(e2.layerDefinition.fields) !== false && Z(e2.featureSet.features) !== false))));
}
function K(F$1) {
  F$1.mode === "async" && (F$1.functions.getuser = function(e2, t) {
    return F$1.standardFunctionAsync(e2, t, (t2, s$12, l2) => {
      J$1(l2, 1, 2);
      let o = O(l2[1], ""), f2 = o === true;
      if (o = o === true || o === false ? "" : K$1(o), l2[0] instanceof s) {
        let t3 = null;
        return e2.services && e2.services.portal && (t3 = e2.services.portal), t3 = b(l2[0], t3), D(t3, o, f2).then((e3) => {
          if (e3) {
            const t4 = JSON.parse(JSON.stringify(e3));
            for (const e4 of ["lastLogin", "created", "modified"])
              t4[e4] !== void 0 && t4[e4] !== null && (t4[e4] = new Date(t4[e4]));
            return h.convertObjectToArcadeDictionary(t4);
          }
          return null;
        });
      }
      let u = null;
      if (k(l2[0]) && (u = l2[0]), u)
        return f2 = false, o ? null : u.load().then(() => u.getOwningSystemUrl()).then((t3) => {
          if (!t3)
            return o ? null : u.getIdentityUser().then((e3) => e3 ? h.convertObjectToArcadeDictionary({ username: e3 }) : null);
          let n2 = null;
          return e2.services && e2.services.portal && (n2 = e2.services.portal), n2 = b(new s(t3), n2), D(n2, o, f2).then((e3) => {
            if (e3) {
              const t4 = JSON.parse(JSON.stringify(e3));
              for (const e4 of ["lastLogin", "created", "modified"])
                t4[e4] !== void 0 && t4[e4] !== null && (t4[e4] = new Date(t4[e4]));
              return h.convertObjectToArcadeDictionary(t4);
            }
            return null;
          });
        });
      throw new Error("Invalid Parameter");
    });
  }, F$1.signatures.push({ name: "getuser", min: "1", max: "2" }), F$1.functions.featuresetbyid = function(e2, t) {
    return F$1.standardFunctionAsync(e2, t, (e3, t2, a2) => {
      if (J$1(a2, 2, 4), a2[0] instanceof r) {
        const e4 = K$1(a2[1]);
        let t3 = O(a2[2], null);
        const n2 = ee(O(a2[3], true));
        if (t3 === null && (t3 = ["*"]), Z(t3) === false)
          throw new Error("Invalid Parameter");
        return a2[0].featureSetById(e4, n2, t3);
      }
      throw new Error("Invalid Parameter");
    });
  }, F$1.signatures.push({ name: "featuresetbyid", min: "2", max: "4" }), F$1.functions.featuresetbyportalitem = function(e2, t) {
    return F$1.standardFunctionAsync(e2, t, (t2, a2, f2) => {
      if (J$1(f2, 2, 5), f2[0] === null)
        throw new Error("Portal is required");
      if (f2[0] instanceof s) {
        const t3 = K$1(f2[1]), n2 = K$1(f2[2]);
        let a3 = O(f2[3], null);
        const o = ee(O(f2[4], true));
        if (a3 === null && (a3 = ["*"]), Z(a3) === false)
          throw new Error("Invalid Parameter");
        let u2 = null;
        return e2.services && e2.services.portal && (u2 = e2.services.portal), u2 = b(f2[0], u2), q$1(t3, n2, e2.spatialReference, a3, o, u2, e2.lrucache, e2.interceptor);
      }
      if (F(f2[0]) === false)
        throw new Error("Portal is required");
      const u = K$1(f2[0]), c = K$1(f2[1]);
      let d = O(f2[2], null);
      const m = ee(O(f2[3], true));
      if (d === null && (d = ["*"]), Z(d) === false)
        throw new Error("Invalid Parameter");
      if (e2.services && e2.services.portal)
        return q$1(u, c, e2.spatialReference, d, m, e2.services.portal, e2.lrucache, e2.interceptor);
      throw new Error("Portal is required");
    });
  }, F$1.signatures.push({ name: "featuresetbyportalitem", min: "2", max: "5" }), F$1.functions.featuresetbyname = function(e2, t) {
    return F$1.standardFunctionAsync(e2, t, (e3, t2, a2) => {
      if (J$1(a2, 2, 4), a2[0] instanceof r) {
        const e4 = K$1(a2[1]);
        let t3 = O(a2[2], null);
        const n2 = ee(O(a2[3], true));
        if (t3 === null && (t3 = ["*"]), Z(t3) === false)
          throw new Error("Invalid Parameter");
        return a2[0].featureSetByName(e4, n2, t3);
      }
      throw new Error("Invalid Parameter");
    });
  }, F$1.signatures.push({ name: "featuresetbyname", min: "2", max: "4" }), F$1.functions.featureset = function(e2, t) {
    return F$1.standardFunction(e2, t, (t2, r2, i) => {
      J$1(i, 1, 1);
      let a2 = i[0];
      const s2 = { layerDefinition: { geometryType: "", objectIdField: "", globalIdField: "", typeIdField: "", fields: [] }, featureSet: { geometryType: "", features: [] } };
      if (F(a2))
        a2 = JSON.parse(a2), a2.layerDefinition !== void 0 ? (s2.layerDefinition = a2.layerDefinition, s2.featureSet = a2.featureSet, a2.layerDefinition.spatialReference && (s2.layerDefinition.spatialReference = a2.layerDefinition.spatialReference)) : (s2.featureSet.features = a2.features, s2.featureSet.geometryType = a2.geometryType, s2.layerDefinition.geometryType = s2.featureSet.geometryType, s2.layerDefinition.objectIdField = a2.objectIdFieldName, s2.layerDefinition.typeIdField = a2.typeIdFieldName, s2.layerDefinition.globalIdField = a2.globalIdFieldName, s2.layerDefinition.fields = a2.fields, a2.spatialReference && (s2.layerDefinition.spatialReference = a2.spatialReference));
      else {
        if (!(i[0] instanceof h))
          throw new Error("Invalid Parameter");
        {
          a2 = JSON.parse(i[0].castToText());
          const e3 = H(a2, "layerdefinition");
          if (e3 !== null) {
            s2.layerDefinition.geometryType = H(e3, "geometrytype", ""), s2.featureSet.geometryType = s2.layerDefinition.geometryType, s2.layerDefinition.globalIdField = H(e3, "globalidfield", ""), s2.layerDefinition.objectIdField = H(e3, "objectidfield", ""), s2.layerDefinition.typeIdField = H(e3, "typeidfield", "");
            const t3 = H(e3, "spatialreference", null);
            t3 && (s2.layerDefinition.spatialReference = W(t3));
            for (const r3 of H(e3, "fields", [])) {
              const e4 = { name: H(r3, "name", ""), alias: H(r3, "alias", ""), type: H(r3, "type", ""), nullable: H(r3, "nullable", true), editable: H(r3, "editable", true), length: H(r3, "length", null), domain: U(H(r3, "domain")) };
              s2.layerDefinition.fields.push(e4);
            }
            const n2 = H(a2, "featureset", null);
            if (n2) {
              const e4 = {};
              for (const t4 of s2.layerDefinition.fields)
                e4[t4.name.toLowerCase()] = t4.name;
              for (const t4 of H(n2, "features", [])) {
                const n3 = {}, r3 = H(t4, "attributes", {});
                for (const t5 in r3)
                  n3[e4[t5.toLowerCase()]] = r3[t5];
                s2.featureSet.features.push({ attributes: n3, geometry: _(H(t4, "geometry", null)) });
              }
            }
          } else {
            s2.layerDefinition.geometryType = H(a2, "geometrytype", ""), s2.featureSet.geometryType = s2.layerDefinition.geometryType, s2.layerDefinition.objectIdField = H(a2, "objectidfieldname", ""), s2.layerDefinition.typeIdField = H(a2, "typeidfieldname", "");
            const e4 = H(a2, "spatialreference", null);
            e4 && (s2.layerDefinition.spatialReference = W(e4));
            for (const n2 of H(a2, "fields", [])) {
              const e5 = { name: H(n2, "name", ""), alias: H(n2, "alias", ""), type: H(n2, "type", ""), nullable: H(n2, "nullable", true), editable: H(n2, "editable", true), length: H(n2, "length", null), domain: U(H(n2, "domain")) };
              s2.layerDefinition.fields.push(e5);
            }
            const t3 = {};
            for (const n2 of s2.layerDefinition.fields)
              t3[n2.name.toLowerCase()] = n2.name;
            for (const n2 of H(a2, "features", [])) {
              const e5 = {}, r3 = H(n2, "attributes", {});
              for (const n3 in r3)
                e5[t3[n3.toLowerCase()]] = r3[n3];
              s2.featureSet.features.push({ attributes: e5, geometry: _(H(n2, "geometry", null)) });
            }
          }
        }
      }
      if (q(s2) === false)
        throw new Error("Invalid Parameter");
      return y.create(s2, e2.spatialReference);
    });
  }, F$1.signatures.push({ name: "featureset", min: "1", max: "1" }), F$1.functions.filter = function(r2, i) {
    return F$1.standardFunctionAsync(r2, i, (i2, s2, l2) => (J$1(l2, 2, 2), k(l2[0]) ? l2[0].load().then((n2) => {
      const i3 = f.create(l2[1], n2.getFieldsIndex()), a2 = i3.getVariables();
      if (a2.length > 0) {
        const t = [];
        for (let e2 = 0; e2 < a2.length; e2++) {
          const n3 = { name: a2[e2] };
          t.push(F$1.evaluateIdentifier(r2, n3));
        }
        return s$1(t).then((e2) => {
          const t2 = {};
          for (let n3 = 0; n3 < a2.length; n3++)
            t2[a2[n3]] = e2[n3];
          return i3.parameters = t2, new _$1({ parentfeatureset: l2[0], whereclause: i3 });
        });
      }
      return x(new _$1({ parentfeatureset: l2[0], whereclause: i3 }));
    }) : F$1.failDefferred("Filter cannot accept this parameter type")));
  }, F$1.signatures.push({ name: "filter", min: "2", max: "2" }), F$1.functions.orderby = function(e$1, r2) {
    return F$1.standardFunctionAsync(e$1, r2, (e$12, r3, i) => {
      if (J$1(i, 2, 2), k(i[0])) {
        const e$13 = new e(i[1]);
        return x(new a({ parentfeatureset: i[0], orderbyclause: e$13 }));
      }
      return F$1.failDefferred("Order cannot accept this parameter type");
    });
  }, F$1.signatures.push({ name: "orderby", min: "2", max: "2" }), F$1.functions.top = function(e2, r2) {
    return F$1.standardFunctionAsync(e2, r2, (e3, r3, i) => (J$1(i, 2, 2), k(i[0]) ? x(new a$1({ parentfeatureset: i[0], topnum: i[1] })) : Z(i[0]) ? X(i[1]) >= i[0].length ? i[0].slice(0) : i[0].slice(0, X(i[1])) : E(i[0]) ? X(i[1]) >= i[0].length() ? i[0].slice(0) : i[0].slice(0, X(i[1])) : F$1.failDefferred("Top cannot accept this parameter type")));
  }, F$1.signatures.push({ name: "top", min: "2", max: "2" }), F$1.functions.first = function(e2, r2) {
    return F$1.standardFunctionAsync(e2, r2, (e3, r3, i) => (J$1(i, 1, 1), k(i[0]) ? i[0].first(e3.abortSignal).then((e4) => {
      if (e4 !== null) {
        const t = g.createFromGraphicLikeObject(e4.geometry, e4.attributes, i[0]);
        t._underlyingGraphic = e4, e4 = t;
      }
      return e4;
    }) : Z(i[0]) ? i[0].length === 0 ? x(null) : x(i[0][0]) : E(i[0]) ? i[0].length() === 0 ? x(null) : x(i[0].get(0)) : null));
  }, F$1.signatures.push({ name: "first", min: "1", max: "1" }), F$1.functions.attachments = function(e2, t) {
    return F$1.standardFunctionAsync(e2, t, (t2, r2, i) => {
      J$1(i, 1, 2);
      const s2 = { minsize: -1, maxsize: -1, types: null };
      if (i.length > 1) {
        if (i[1] instanceof h) {
          if (i[1].hasField("minsize") && (s2.minsize = X(i[1].field("minsize"))), i[1].hasField("maxsize") && (s2.maxsize = X(i[1].field("maxsize"))), i[1].hasField("types")) {
            const e3 = ge(i[1].field("types"), false);
            e3.length > 0 && (s2.types = e3);
          }
        } else if (i[1] !== null)
          throw new Error("Invalid Parameter");
      }
      if (i[0] instanceof g) {
        let t3 = i[0]._layer;
        return t3 instanceof ke && (t3 = A(t3, e2.spatialReference, ["*"], true, e2.lrucache, e2.interceptor)), t3 === null || k(t3) === false ? [] : t3.load().then(() => t3.queryAttachments(i[0].field(t3.objectIdField), s2.minsize, s2.maxsize, s2.types));
      }
      if (i[0] === null)
        return [];
      throw new Error("Invalid Parameter");
    });
  }, F$1.signatures.push({ name: "attachments", min: "1", max: "2" }), F$1.functions.featuresetbyrelationshipname = function(e2, t) {
    return F$1.standardFunctionAsync(e2, t, (t2, o, f$1) => {
      J$1(f$1, 2, 4);
      const u = f$1[0], c = K$1(f$1[1]);
      let d = O(f$1[2], null);
      const m = ee(O(f$1[3], true));
      if (d === null && (d = ["*"]), Z(d) === false)
        throw new Error("Invalid Parameter");
      if (f$1[0] === null)
        return null;
      if (!(f$1[0] instanceof g))
        throw new Error("Invalid Parameter");
      let p = u._layer;
      return p instanceof ke && (p = A(p, e2.spatialReference, ["*"], true, e2.lrucache, e2.interceptor)), p === null || k(p) === false ? null : p.load().then((t3) => {
        const n$1 = t3.relationshipMetaData().filter((e3) => e3.name === c);
        if (n$1.length === 0)
          return null;
        if (n$1[0].relationshipTableId !== void 0 && n$1[0].relationshipTableId !== null && n$1[0].relationshipTableId > -1)
          return j(t3, n$1[0], u.field(t3.objectIdField), t3.spatialReference, d, m, e2.lrucache, e2.interceptor);
        let r2 = t3.serviceUrl();
        return r2 ? (r2 = r2.charAt(r2.length - 1) === "/" ? r2 + n$1[0].relatedTableId.toString() : r2 + "/" + n$1[0].relatedTableId.toString(), T(r2, t3.spatialReference, d, m, e2.lrucache, e2.interceptor).then((e3) => e3.load().then(() => e3.relationshipMetaData()).then((r3) => {
          if (r3 = r3.filter((e4) => e4.id === n$1[0].id), u.hasField(n$1[0].keyField) === false || u.field(n$1[0].keyField) === null)
            return t3.getFeatureByObjectId(u.field(t3.objectIdField), [n$1[0].keyField]).then((t4) => {
              if (t4) {
                const i2 = f.create(r3[0].keyField + "= @id", e3.getFieldsIndex());
                return i2.parameters = { id: t4.attributes[n$1[0].keyField] }, e3.filter(i2);
              }
              return new n({ parentfeatureset: e3 });
            });
          const i = f.create(r3[0].keyField + "= @id", e3.getFieldsIndex());
          return i.parameters = { id: u.field(n$1[0].keyField) }, e3.filter(i);
        }))) : null;
      });
    });
  }, F$1.signatures.push({ name: "featuresetbyrelationshipname", min: "2", max: "4" }), F$1.functions.featuresetbyassociation = function(e2, t) {
    return F$1.standardFunctionAsync(e2, t, (t2, s2, l2) => {
      J$1(l2, 2, 3);
      const f$1 = l2[0], u = K$1(O(l2[1], "")).toLowerCase(), c = F(l2[2]) ? K$1(l2[2]) : null;
      if (l2[0] === null)
        return null;
      if (!(l2[0] instanceof g))
        throw new Error("Invalid Parameter");
      let m = f$1._layer;
      return m instanceof ke && (m = A(m, e2.spatialReference, ["*"], true, e2.lrucache, e2.interceptor)), m === null || k(m) === false ? null : m.load().then(() => {
        const t3 = m.serviceUrl();
        return k$1(t3, e2.spatialReference);
      }).then((e3) => {
        let t3 = null, n2 = null, r2 = false;
        if (c !== null && c !== "" && c !== void 0) {
          for (const t4 of e3.terminals)
            t4.terminalName === c && (n2 = t4.terminalId);
          n2 === null && (r2 = true);
        }
        const i = e3.associations.getFieldsIndex(), a2 = i.get("TOGLOBALID").name, s3 = i.get("FROMGLOBALID").name, l3 = i.get("TOTERMINALID").name, o = i.get("FROMTERMINALID").name, p = i.get("FROMNETWORKSOURCEID").name, h2 = i.get("TONETWORKSOURCEID").name, F2 = i.get("ASSOCIATIONTYPE").name, I = i.get("ISCONTENTVISIBLE").name, D2 = i.get("OBJECTID").name;
        for (const u2 of m.fields)
          if (u2.type === "global-id") {
            t3 = f$1.field(u2.name);
            break;
          }
        let w$1 = null, $ = new T$1(new y$1({ name: "percentalong", alias: "percentalong", type: "double" }), f.create("0", e3.associations.getFieldsIndex())), T2 = new T$1(new y$1({ name: "side", alias: "side", type: "string" }), f.create("''", e3.associations.getFieldsIndex()));
        const L = "globalid", v$1 = "globalId", j2 = {};
        for (const f2 in e3.lkp)
          j2[f2] = e3.lkp[f2].sourceId;
        const O2 = new C(new y$1({ name: "classname", alias: "classname", type: "string" }), null, j2);
        let R = "";
        switch (u) {
          case "midspan": {
            R = `((${a2}='${t3}') OR ( ${s3}='${t3}')) AND (${F2} IN (5))`, O2.codefield = f.create(`CASE WHEN (${a2}='${t3}') THEN ${p} ELSE ${h2} END`, e3.associations.getFieldsIndex());
            const n3 = s$2(E$1.findField(e3.associations.fields, s3));
            n3.name = L, n3.alias = L, w$1 = new T$1(n3, f.create(`CASE WHEN (${s3}='${t3}') THEN ${a2} ELSE ${s3} END`, e3.associations.getFieldsIndex())), $ = e3.unVersion >= 4 ? new w(E$1.findField(e3.associations.fields, i.get("PERCENTALONG").name)) : new T$1(new y$1({ name: "percentalong", alias: "percentalong", type: "double" }), f.create("0", e3.associations.getFieldsIndex()));
            break;
          }
          case "junctionedge": {
            R = `((${a2}='${t3}') OR ( ${s3}='${t3}')) AND (${F2} IN (4,6))`, O2.codefield = f.create(`CASE WHEN (${a2}='${t3}') THEN ${p} ELSE ${h2} END`, e3.associations.getFieldsIndex());
            const n3 = s$2(E$1.findField(e3.associations.fields, s3));
            n3.name = L, n3.alias = L, w$1 = new T$1(n3, f.create(`CASE WHEN (${s3}='${t3}') THEN ${a2} ELSE ${s3} END`, e3.associations.getFieldsIndex())), T2 = new T$1(new y$1({ name: "side", alias: "side", type: "string" }), f.create(`CASE WHEN (${F2}=4) THEN 'from' ELSE 'to' END`, e3.associations.getFieldsIndex()));
            break;
          }
          case "connected": {
            let r3 = `${a2}='@T'`, i2 = `${s3}='@T'`;
            n2 !== null && (r3 += ` AND ${l3}=@A`, i2 += ` AND ${o}=@A`), R = "((" + r3 + ") OR (" + i2 + "))", R = M(R, "@T", t3), r3 = M(r3, "@T", t3), n2 !== null && (r3 = M(r3, "@A", n2.toString()), R = M(R, "@A", n2.toString())), O2.codefield = f.create("CASE WHEN " + r3 + ` THEN ${p} ELSE ${h2} END`, e3.associations.getFieldsIndex());
            const f$12 = s$2(E$1.findField(e3.associations.fields, s3));
            f$12.name = L, f$12.alias = L, w$1 = new T$1(f$12, f.create("CASE WHEN " + r3 + ` THEN ${s3} ELSE ${a2} END`, e3.associations.getFieldsIndex()));
            break;
          }
          case "container":
            R = `${a2}='${t3}' AND ${F2} = 2`, n2 !== null && (R += ` AND ${l3} = ` + n2.toString()), O2.codefield = p, R = "( " + R + " )", w$1 = new v(E$1.findField(e3.associations.fields, s3), L, L);
          case "content":
            R = `(${s3}='${t3}' AND ${F2} = 2)`, n2 !== null && (R += ` AND ${o} = ` + n2.toString()), O2.codefield = h2, R = "( " + R + " )", w$1 = new v(E$1.findField(e3.associations.fields, a2), L, L);
            break;
          case "structure":
            R = `(${a2}='${t3}' AND ${F2} = 3)`, n2 !== null && (R += ` AND ${l3} = ` + n2.toString()), O2.codefield = p, R = "( " + R + " )", w$1 = new v(E$1.findField(e3.associations.fields, s3), L, v$1);
            break;
          case "attached":
            R = `(${s3}='${t3}' AND ${F2} = 3)`, n2 !== null && (R += ` AND ${o} = ` + n2.toString()), O2.codefield = h2, R = "( " + R + " )", w$1 = new v(E$1.findField(e3.associations.fields, a2), L, v$1);
            break;
          default:
            throw new Error("Invalid Parameter");
        }
        r2 && (R = "1 <> 1");
        return new E$1({ parentfeatureset: e3.associations, adaptedFields: [new w(E$1.findField(e3.associations.fields, D2)), new w(E$1.findField(e3.associations.fields, I)), w$1, T2, O2, $], extraFilter: R ? f.create(R, e3.associations.getFieldsIndex()) : null });
      });
    });
  }, F$1.signatures.push({ name: "featuresetbyassociation", min: "2", max: "6" }), F$1.functions.groupby = function(r2, s2) {
    return F$1.standardFunctionAsync(r2, s2, (s3, f$1, c) => (J$1(c, 3, 3), k(c[0]) ? c[0].load().then((n2) => {
      const a2 = [], s4 = [];
      let f$12 = false, d = [];
      if (F(c[1]))
        d.push(c[1]);
      else if (c[1] instanceof h)
        d.push(c[1]);
      else if (Z(c[1]))
        d = c[1];
      else {
        if (!E(c[1]))
          return F$1.failDefferred("Illegal Value: GroupBy");
        d = c[1].toArray();
      }
      for (const e2 of d)
        if (F(e2)) {
          const t = f.create(K$1(e2), n2.getFieldsIndex()), r3 = E$2(t) === true ? K$1(e2) : "%%%%FIELDNAME";
          a2.push({ name: r3, expression: t }), r3 === "%%%%FIELDNAME" && (f$12 = true);
        } else {
          if (!(e2 instanceof h))
            return F$1.failDefferred("Illegal Value: GroupBy");
          {
            const t = e2.hasField("name") ? e2.field("name") : "%%%%FIELDNAME", r3 = e2.hasField("expression") ? e2.field("expression") : "";
            if (t === "%%%%FIELDNAME" && (f$12 = true), !t)
              return F$1.failDefferred("Illegal Value: GroupBy");
            a2.push({ name: t, expression: f.create(r3 || t, n2.getFieldsIndex()) });
          }
        }
      if (d = [], F(c[2]))
        d.push(c[2]);
      else if (Z(c[2]))
        d = c[2];
      else if (E(c[2]))
        d = c[2].toArray();
      else {
        if (!(c[2] instanceof h))
          return F$1.failDefferred("Illegal Value: GroupBy");
        d.push(c[2]);
      }
      for (const e2 of d) {
        if (!(e2 instanceof h))
          return F$1.failDefferred("Illegal Value: GroupBy");
        {
          const t = e2.hasField("name") ? e2.field("name") : "", r3 = e2.hasField("statistic") ? e2.field("statistic") : "", i = e2.hasField("expression") ? e2.field("expression") : "";
          if (!t || !r3 || !i)
            return F$1.failDefferred("Illegal Value: GroupBy");
          s4.push({ name: t, statistic: r3.toLowerCase(), expression: f.create(i, n2.getFieldsIndex()) });
        }
      }
      if (f$12) {
        const e2 = {};
        for (const r3 of n2.fields)
          e2[r3.name.toLowerCase()] = 1;
        for (const n3 of a2)
          n3.name !== "%%%%FIELDNAME" && (e2[n3.name.toLowerCase()] = 1);
        for (const n3 of s4)
          n3.name !== "%%%%FIELDNAME" && (e2[n3.name.toLowerCase()] = 1);
        let t = 0;
        for (const n3 of a2)
          if (n3.name === "%%%%FIELDNAME") {
            for (; e2["field_" + t.toString()] === 1; )
              t++;
            e2["field_" + t.toString()] = 1, n3.name = "FIELD_" + t.toString();
          }
      }
      const p = [];
      for (const e2 of a2)
        p.push(z(e2.expression, F$1, r2));
      for (const e2 of s4)
        p.push(z(e2.expression, F$1, r2));
      return p.length > 0 ? s$1(p).then(() => x(c[0].groupby(a2, s4))) : x(c[0].groupby(a2, s4));
    }) : F$1.failDefferred("Illegal Value: GroupBy")));
  }, F$1.signatures.push({ name: "groupby", min: "3", max: "3" }), F$1.functions.distinct = function(r2, s2) {
    return F$1.standardFunctionAsync(r2, s2, (s3, f$1, c) => k(c[0]) ? (J$1(c, 2, 2), c[0].load().then((n2) => {
      const a2 = [];
      let s4 = [];
      if (F(c[1]))
        s4.push(c[1]);
      else if (c[1] instanceof h)
        s4.push(c[1]);
      else if (Z(c[1]))
        s4 = c[1];
      else {
        if (!E(c[1]))
          return F$1.failDefferred("Illegal Value: GroupBy");
        s4 = c[1].toArray();
      }
      let f$12 = false;
      for (const e2 of s4)
        if (F(e2)) {
          const t = f.create(K$1(e2), n2.getFieldsIndex()), r3 = E$2(t) === true ? K$1(e2) : "%%%%FIELDNAME";
          a2.push({ name: r3, expression: t }), r3 === "%%%%FIELDNAME" && (f$12 = true);
        } else {
          if (!(e2 instanceof h))
            return F$1.failDefferred("Illegal Value: GroupBy");
          {
            const t = e2.hasField("name") ? e2.field("name") : "%%%%FIELDNAME", r3 = e2.hasField("expression") ? e2.field("expression") : "";
            if (t === "%%%%FIELDNAME" && (f$12 = true), !t)
              return F$1.failDefferred("Illegal Value: GroupBy");
            a2.push({ name: t, expression: f.create(r3 || t, n2.getFieldsIndex()) });
          }
        }
      if (f$12) {
        const e2 = {};
        for (const r3 of n2.fields)
          e2[r3.name.toLowerCase()] = 1;
        for (const n3 of a2)
          n3.name !== "%%%%FIELDNAME" && (e2[n3.name.toLowerCase()] = 1);
        let t = 0;
        for (const n3 of a2)
          if (n3.name === "%%%%FIELDNAME") {
            for (; e2["field_" + t.toString()] === 1; )
              t++;
            e2["field_" + t.toString()] = 1, n3.name = "FIELD_" + t.toString();
          }
      }
      const d = [];
      for (const e2 of a2)
        d.push(z(e2.expression, F$1, r2));
      return d.length > 0 ? s$1(d).then(() => x(c[0].groupby(a2, []))) : x(c[0].groupby(a2, []));
    })) : V("distinct", s3, f$1, c));
  });
}
export { K as registerFunctions };
