var baseFunctions = require('lodash._basefunctions'),
    isObject = require('lodash.isobject'),
    keys = require('lodash.keys'),
    mixin = require('lodash.mixin'),
    templateSettings = require('lodash.templatesettings');

// Wrap `_.mixin` so it works when provided only one argument.
mixin = (function(func) {
  return function(object, source, options) {
    var isObj = isObject(source),
        noOpts = options == null,
        props = noOpts && isObj && keys(source),
        methodNames = props && baseFunctions(source, props);

    if ((props && props.length && !methodNames.length) || (noOpts && !isObj)) {
      if (noOpts) {
        options = source;
      }
      source = object;
      object = this;
    }
    return func(object, source, options);
  };
}(mixin));

// The lodash namespace.
var lodash = function() {};

// Add functions.
lodash.add = require('lodash.add');
lodash.after = require('lodash.after');
lodash.ary = require('lodash.ary');
lodash.assign = require('lodash.assign');
lodash.assignWith = require('lodash.assignwith');
lodash.at = require('lodash.at');
lodash.attempt = require('lodash.attempt');
lodash.before = require('lodash.before');
lodash.bind = require('lodash.bind');
lodash.bindAll = require('lodash.bindall');
lodash.bindKey = require('lodash.bindkey');
lodash.camelCase = require('lodash.camelcase');
lodash.capitalize = require('lodash.capitalize');
lodash.ceil = require('lodash.ceil');
lodash.chunk = require('lodash.chunk');
lodash.clone = require('lodash.clone');
lodash.cloneDeep = require('lodash.clonedeep');
lodash.cloneDeepWith = require('lodash.clonedeepwith');
lodash.cloneWith = require('lodash.clonewith');
lodash.compact = require('lodash.compact');
lodash.conj = require('lodash.conj');
lodash.constant = require('lodash.constant');
lodash.countBy = require('lodash.countby');
lodash.create = require('lodash.create');
lodash.curry = require('lodash.curry');
lodash.curryRight = require('lodash.curryright');
lodash.debounce = require('lodash.debounce');
lodash.deburr = require('lodash.deburr');
lodash.defaults = require('lodash.defaults');
lodash.defaultsDeep = require('lodash.defaultsdeep');
lodash.defer = require('lodash.defer');
lodash.delay = require('lodash.delay');
lodash.difference = require('lodash.difference');
lodash.disj = require('lodash.disj');
lodash.drop = require('lodash.drop');
lodash.dropRight = require('lodash.dropright');
lodash.dropRightWhile = require('lodash.droprightwhile');
lodash.dropWhile = require('lodash.dropwhile');
lodash.endsWith = require('lodash.endswith');
lodash.eq = require('lodash.eq');
lodash.escape = require('lodash.escape');
lodash.escapeRegExp = require('lodash.escaperegexp');
lodash.every = require('lodash.every');
lodash.extend = require('lodash.extend');
lodash.extendWith = require('lodash.extendwith');
lodash.fill = require('lodash.fill');
lodash.filter = require('lodash.filter');
lodash.find = require('lodash.find');
lodash.findIndex = require('lodash.findindex');
lodash.findKey = require('lodash.findkey');
lodash.findLast = require('lodash.findlast');
lodash.findLastIndex = require('lodash.findlastindex');
lodash.findLastKey = require('lodash.findlastkey');
lodash.first = require('lodash.first');
lodash.flatten = require('lodash.flatten');
lodash.flattenDeep = require('lodash.flattendeep');
lodash.flip = require('lodash.flip');
lodash.floor = require('lodash.floor');
lodash.flow = require('lodash.flow');
lodash.flowRight = require('lodash.flowright');
lodash.forEach = require('lodash.foreach');
lodash.forEachRight = require('lodash.foreachright');
lodash.forIn = require('lodash.forin');
lodash.forInRight = require('lodash.forinright');
lodash.forOwn = require('lodash.forown');
lodash.forOwnRight = require('lodash.forownright');
lodash.functions = require('lodash.functions');
lodash.get = require('lodash.get');
lodash.groupBy = require('lodash.groupby');
lodash.gt = require('lodash.gt');
lodash.gte = require('lodash.gte');
lodash.has = require('lodash.has');
lodash.hasIn = require('lodash.hasin');
lodash.identity = require('lodash.identity');
lodash.includes = require('lodash.includes');
lodash.indexOf = require('lodash.indexof');
lodash.initial = require('lodash.initial');
lodash.inRange = require('lodash.inrange');
lodash.intersection = require('lodash.intersection');
lodash.invert = require('lodash.invert');
lodash.invoke = require('lodash.invoke');
lodash.isArguments = require('lodash.isarguments');
lodash.isArray = require('lodash.isarray');
lodash.isArrayLike = require('lodash.isarraylike');
lodash.isBoolean = require('lodash.isboolean');
lodash.isDate = require('lodash.isdate');
lodash.isElement = require('lodash.iselement');
lodash.isEmpty = require('lodash.isempty');
lodash.isEqual = require('lodash.isequal');
lodash.isEqualWith = require('lodash.isequalwith');
lodash.isError = require('lodash.iserror');
lodash.isFinite = require('lodash.isfinite');
lodash.isFunction = require('lodash.isfunction');
lodash.isInteger = require('lodash.isinteger');
lodash.isMatch = require('lodash.ismatch');
lodash.isMatchWith = require('lodash.ismatchwith');
lodash.isNaN = require('lodash.isnan');
lodash.isNative = require('lodash.isnative');
lodash.isNil = require('lodash.isnil');
lodash.isNull = require('lodash.isnull');
lodash.isNumber = require('lodash.isnumber');
lodash.isObject = require('lodash.isobject');
lodash.isObjectLike = require('lodash.isobjectlike');
lodash.isPlainObject = require('lodash.isplainobject');
lodash.isRegExp = require('lodash.isregexp');
lodash.isSafeInteger = require('lodash.issafeinteger');
lodash.isString = require('lodash.isstring');
lodash.isUndefined = require('lodash.isundefined');
lodash.isTypedArray = require('lodash.istypedarray');
lodash.iteratee = require('lodash.iteratee');
lodash.juxt = require('lodash.juxt');
lodash.kebabCase = require('lodash.kebabcase');
lodash.keyBy = require('lodash.keyby');
lodash.keys = require('lodash.keys');
lodash.keysIn = require('lodash.keysin');
lodash.last = require('lodash.last');
lodash.lastIndexOf = require('lodash.lastindexof');
lodash.lt = require('lodash.lt');
lodash.lte = require('lodash.lte');
lodash.map = require('lodash.map');
lodash.mapKeys = require('lodash.mapkeys');
lodash.mapValues = require('lodash.mapvalues');
lodash.matches = require('lodash.matches');
lodash.matchesProperty = require('lodash.matchesproperty');
lodash.max = require('lodash.max');
lodash.maxBy = require('lodash.maxby');
lodash.method = require('lodash.method');
lodash.methodOf = require('lodash.methodof');
lodash.memoize = require('lodash.memoize');
lodash.merge = require('lodash.merge');
lodash.mergeWith = require('lodash.mergewith');
lodash.min = require('lodash.min');
lodash.minBy = require('lodash.minby');
lodash.mixin = mixin;
lodash.modArgs = require('lodash.modargs');
lodash.modArgsSet = require('lodash.modargsset');
lodash.negate = require('lodash.negate');
lodash.noop = require('lodash.noop');
lodash.now = require('lodash.now');
lodash.omit = require('lodash.omit');
lodash.omitBy = require('lodash.omitby');
lodash.once = require('lodash.once');
lodash.pad = require('lodash.pad');
lodash.padLeft = require('lodash.padleft');
lodash.padRight = require('lodash.padright');
lodash.pairs = require('lodash.pairs');
lodash.parseInt = require('lodash.parseint');
lodash.partial = require('lodash.partial');
lodash.partialRight = require('lodash.partialright');
lodash.partition = require('lodash.partition');
lodash.pick = require('lodash.pick');
lodash.pickBy = require('lodash.pickby');
lodash.property = require('lodash.property');
lodash.propertyOf = require('lodash.propertyof');
lodash.pull = require('lodash.pull');
lodash.pullAll = require('lodash.pullall');
lodash.pullAt = require('lodash.pullat');
lodash.random = require('lodash.random');
lodash.range = require('lodash.range');
lodash.rearg = require('lodash.rearg');
lodash.reduce = require('lodash.reduce');
lodash.reduceRight = require('lodash.reduceright');
lodash.reject = require('lodash.reject');
lodash.remove = require('lodash.remove');
lodash.repeat = require('lodash.repeat');
lodash.rest = require('lodash.rest');
lodash.restParam = require('lodash.restparam');
lodash.result = require('lodash.result');
lodash.round = require('lodash.round');
lodash.sample = require('lodash.sample');
lodash.set = require('lodash.set');
lodash.setWith = require('lodash.setwith');
lodash.shuffle = require('lodash.shuffle');
lodash.size = require('lodash.size');
lodash.slice = require('lodash.slice');
lodash.snakeCase = require('lodash.snakecase');
lodash.some = require('lodash.some');
lodash.sortBy = require('lodash.sortby');
lodash.sortByOrder = require('lodash.sortbyorder');
lodash.sortedIndex = require('lodash.sortedindex');
lodash.sortedIndexBy = require('lodash.sortedindexby');
lodash.sortedIndexOf = require('lodash.sortedindexof');
lodash.sortedLastIndex = require('lodash.sortedlastindex');
lodash.sortedLastIndexBy = require('lodash.sortedlastindexby');
lodash.sortedLastIndexOf = require('lodash.sortedlastindexof');
lodash.sortedUniq = require('lodash.sorteduniq');
lodash.sortedUniqBy = require('lodash.sorteduniqby');
lodash.spread = require('lodash.spread');
lodash.startCase = require('lodash.startcase');
lodash.startsWith = require('lodash.startswith');
lodash.sum = require('lodash.sum');
lodash.sumBy = require('lodash.sumby');
lodash.take = require('lodash.take');
lodash.takeRight = require('lodash.takeright');
lodash.takeRightWhile = require('lodash.takerightwhile');
lodash.takeWhile = require('lodash.takewhile');
lodash.template = require('lodash.template');
lodash.throttle = require('lodash.throttle');
lodash.times = require('lodash.times');
lodash.toArray = require('lodash.toarray');
lodash.toInteger = require('lodash.tointeger');
lodash.toPath = require('lodash.topath');
lodash.toPlainObject = require('lodash.toplainobject');
lodash.toString = require('lodash.tostring');
lodash.transform = require('lodash.transform');
lodash.trim = require('lodash.trim');
lodash.trimLeft = require('lodash.trimleft');
lodash.trimRight = require('lodash.trimright');
lodash.trunc = require('lodash.trunc');
lodash.unescape = require('lodash.unescape');
lodash.union = require('lodash.union');
lodash.uniq = require('lodash.uniq');
lodash.uniqBy = require('lodash.uniqby');
lodash.uniqueId = require('lodash.uniqueid');
lodash.unset = require('lodash.unset');
lodash.unzip = require('lodash.unzip');
lodash.unzipWith = require('lodash.unzipwith');
lodash.values = require('lodash.values');
lodash.valuesIn = require('lodash.valuesin');
lodash.without = require('lodash.without');
lodash.words = require('lodash.words');
lodash.wrap = require('lodash.wrap');
lodash.xor = require('lodash.xor');
lodash.zip = require('lodash.zip');
lodash.zipWith = require('lodash.zipwith');
lodash.zipObject = require('lodash.zipobject');

// Add aliases.
lodash.each = lodash.forEach;
lodash.eachRight = lodash.forEachRight;

// Add other properties.
(lodash.templateSettings = templateSettings).imports._ = lodash;
lodash.VERSION = require('lodash').VERSION;

module.exports = lodash;
