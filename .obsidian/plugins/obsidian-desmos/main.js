'use strict';

var obsidian = require('obsidian');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

/** Calculate a unique SHA-256 hash for the given object */
function calculateHash(val) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = new TextEncoder().encode(JSON.stringify(val));
        /* istanbul ignore if */
        if (typeof crypto !== "undefined") {
            const buffer = yield crypto.subtle.digest("SHA-256", data);
            const raw = Array.from(new Uint8Array(buffer));
            // Convery binary hash to hex
            const hash = raw.map((b) => b.toString(16).padStart(2, "0")).join("");
            return hash;
        }
        else {
            // Use node `crypto` module as fallback when browser subtle crypto does not exist,
            // this primarily exists to allow tests to generate hashes, and will not function if used in the browser context
            const { createHash } = yield Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('crypto')); });
            return createHash("sha256").update(data).digest("hex");
        }
    });
}
/** Unsafe cast method.
 *  Will transform the given type `F` into `T`,
 *      use only when you know this will be valid. */
function ucast(o) {
    return o;
}

var AbsoluteCSSUnit;
(function (AbsoluteCSSUnit) {
    AbsoluteCSSUnit["cm"] = "cm";
    AbsoluteCSSUnit["mm"] = "mm";
    AbsoluteCSSUnit["in"] = "in";
    AbsoluteCSSUnit["px"] = "px";
    AbsoluteCSSUnit["pt"] = "pt";
    AbsoluteCSSUnit["pc"] = "pc";
})(AbsoluteCSSUnit || (AbsoluteCSSUnit = {}));
var RelativeCSSUnit;
(function (RelativeCSSUnit) {
    RelativeCSSUnit["em"] = "em";
    RelativeCSSUnit["ch"] = "ch";
    RelativeCSSUnit["rem"] = "rem";
    RelativeCSSUnit["vw"] = "vw";
    RelativeCSSUnit["vh"] = "vh";
    RelativeCSSUnit["vmin"] = "vmin";
    RelativeCSSUnit["vmax"] = "vmax";
    RelativeCSSUnit["percent"] = "%";
})(RelativeCSSUnit || (RelativeCSSUnit = {}));
var DegreeMode;
(function (DegreeMode) {
    DegreeMode["Radians"] = "RADIANS";
    DegreeMode["Degrees"] = "DEGREES";
})(DegreeMode || (DegreeMode = {}));
var LineStyle;
(function (LineStyle) {
    LineStyle["Solid"] = "SOLID";
    LineStyle["Dashed"] = "DASHED";
    LineStyle["Dotted"] = "DOTTED";
})(LineStyle || (LineStyle = {}));
var PointStyle;
(function (PointStyle) {
    PointStyle["Point"] = "POINT";
    PointStyle["Open"] = "OPEN";
    PointStyle["Cross"] = "CROSS";
})(PointStyle || (PointStyle = {}));
var ColorConstant;
(function (ColorConstant) {
    ColorConstant["Red"] = "#ff0000";
    ColorConstant["Green"] = "#00ff00";
    ColorConstant["Blue"] = "#0000ff";
    ColorConstant["Yellow"] = "#ffff00";
    ColorConstant["Magenta"] = "#ff00ff";
    ColorConstant["Cyan"] = "#00ffff";
    ColorConstant["Purple"] = "#6042a6";
    ColorConstant["Orange"] = "#ffa500";
    ColorConstant["Black"] = "#000000";
    ColorConstant["White"] = "#ffffff";
})(ColorConstant || (ColorConstant = {}));

/** The maximum dimensions of a graph */
const MAX_SIZE = 99999;
const DEFAULT_GRAPH_SETTINGS = {
    width: { value: 600, unit: AbsoluteCSSUnit.px },
    height: { value: 400, unit: AbsoluteCSSUnit.px },
    left: -10,
    right: 10,
    bottom: -7,
    top: 7,
    grid: true,
    skipCache: false,
    degreeMode: DegreeMode.Radians,
};
const DEFAULT_GRAPH_WIDTH = Math.abs(DEFAULT_GRAPH_SETTINGS.left) + Math.abs(DEFAULT_GRAPH_SETTINGS.right);
const DEFAULT_GRAPH_HEIGHT = Math.abs(DEFAULT_GRAPH_SETTINGS.bottom) + Math.abs(DEFAULT_GRAPH_SETTINGS.top);
function parseStringToEnum(obj, key) {
    const objKey = Object.keys(obj).find((k) => k.toUpperCase() === key.toUpperCase());
    return objKey ? obj[objKey] : null;
}
function parseColor(value) {
    // If the value is a valid hex colour
    if (value.startsWith("#")) {
        // Ensure the rest of the value is a valid alphanumeric string
        if (/^[0-9a-zA-Z]+$/.test(value.slice(1))) {
            return value;
        }
    }
    // If the value is a valid colour constant
    return parseStringToEnum(ColorConstant, value);
}
class Graph {
    constructor(equations, settings, potentialErrorHint) {
        this.equations = equations;
        this.potentialErrorHint = potentialErrorHint;
        // Adjust bounds (if needed)
        Graph.adjustBounds(settings);
        // Generate hash on the raw equation and setting data,
        //  this means that if we extend the settings with new fields pre-existing graphs will have the same hash
        this._hash = calculateHash({ equations, settings });
        // Apply defaults
        this.settings = Object.assign(Object.assign({}, DEFAULT_GRAPH_SETTINGS), settings);
        // Validate settings
        Graph.validateSettings(this.settings);
        // Apply color override
        if (this.settings.defaultColor) {
            this.equations = this.equations.map((equation) => {
                var _a;
                return (Object.assign({ color: (_a = equation.color) !== null && _a !== void 0 ? _a : this.settings.defaultColor }, equation));
            });
        }
    }
    static parse(source) {
        let potentialErrorHint;
        const split = source.split("---");
        if (split.length > 2) {
            throw new SyntaxError("Too many graph segments, there can only be a singular  '---'");
        }
        // Each (non-blank) line of the equation source contains an equation,
        //  this will always be the last segment
        const equations = split[split.length - 1]
            .split(/\r?\n/g)
            .filter((equation) => equation.trim() !== "")
            .map(Graph.parseEquation)
            .map((result) => {
            if (result.hint) {
                potentialErrorHint = result.hint;
            }
            return result.data;
        });
        // If there is more than one segment then the first one will contain the settings
        const settings = split.length > 1 ? Graph.parseSettings(split[0]) : {};
        return new Graph(equations, settings, potentialErrorHint);
    }
    hash() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._hash;
        });
    }
    static validateSettings(settings) {
        // Check graph is within maximum size
        if (settings.height.value > MAX_SIZE || settings.width.value > MAX_SIZE) {
            throw new SyntaxError(`Graph size outside of accepted bounds (must be <${MAX_SIZE}x${MAX_SIZE})`);
        }
        // Ensure boundaries are correct
        if (settings.left >= settings.right) {
            throw new SyntaxError(`Right boundary (${settings.right}) must be greater than left boundary (${settings.left})`);
        }
        if (settings.bottom >= settings.top) {
            throw new SyntaxError(`
                Top boundary (${settings.top}) must be greater than bottom boundary (${settings.bottom})
            `);
        }
    }
    static parseEquation(eq) {
        var _a;
        let hint;
        const segments = eq
            .split("|")
            .map((segment) => segment.trim())
            .filter((segment) => segment !== "");
        // First segment is always the equation
        const equation = { equation: ucast(segments.shift()) };
        // The rest of the segments can either be the restriction, style, or color
        //  whilst we recommend putting the restriction first, we accept these in any order.
        for (const segment of segments) {
            const segmentUpperCase = segment.toUpperCase();
            // If this is a `hidden` tag
            if (segmentUpperCase === "HIDDEN") {
                equation.hidden = true;
                continue;
            }
            // If this is a valid style constant
            const style = (_a = parseStringToEnum(LineStyle, segmentUpperCase)) !== null && _a !== void 0 ? _a : parseStringToEnum(PointStyle, segmentUpperCase);
            if (style) {
                if (!equation.style) {
                    equation.style = style;
                }
                else {
                    throw new SyntaxError(`Duplicate style identifiers detected: ${equation.style}, ${segment}`);
                }
                continue;
            }
            // If this is a valid color constant or hex code
            const color = parseColor(segment);
            if (color) {
                if (!equation.color) {
                    equation.color = color;
                }
                else {
                    throw new SyntaxError(`Duplicate color identifiers detected, each equation may only contain a single color code.`);
                }
                continue;
            }
            // If this is a valid label string
            if (segmentUpperCase.startsWith("LABEL:")) {
                const label = segment.split(":").slice(1).join(":").trim();
                if (equation.label === undefined) {
                    if (label === "") {
                        throw new SyntaxError(`Equation label must have a value`);
                    }
                    else {
                        equation.label = label;
                    }
                }
                else {
                    throw new SyntaxError(`Duplicate equation labels detected, each equation may only contain a single label.`);
                }
                continue;
            }
            // If none of the above, assume it is a graph restriction
            if (segment.includes("\\")) {
                // If the restriction included a `\` (the LaTeX control character) then the user may have tried to use the LaTeX syntax in the graph restriction (e.g `\frac{1}{2}`)
                //  Desmos does not allow this but returns a fairly archaic error - "A piecewise expression must have at least one condition."
                const view = document.createElement("span");
                const pre = document.createElement("span");
                pre.innerHTML = "You may have tried to use the LaTeX syntax in the graph restriction (";
                const inner = document.createElement("code");
                inner.innerText = segment;
                const post = document.createElement("span");
                post.innerHTML =
                    "), please use some sort of an alternative (e.g <code>\\frac{1}{2}</code> => <code>1/2</code>) as this is not supported by Desmos.";
                view.appendChild(pre);
                view.appendChild(inner);
                view.appendChild(post);
                hint = { view };
            }
            if (!equation.restrictions) {
                equation.restrictions = [];
            }
            equation.restrictions.push(segment);
        }
        return { data: equation, hint };
    }
    static parseSettings(settings) {
        const graphSettings = {};
        // Settings may be separated by either a newline or semicolon
        settings
            .split(/[;\n]/g)
            .map((setting) => setting.trim())
            .filter((setting) => setting !== "")
            // Extract key-value pairs by splitting on the `=` in each property
            .map((setting) => setting.split("="))
            .forEach((setting) => {
            if (setting.length > 2) {
                throw new SyntaxError(`Too many segments, eaching setting must only contain a maximum of one '=' sign`);
            }
            const key = setting[0].trim();
            const value = setting.length > 1 ? setting[1].trim() : undefined;
            // Prevent duplicate keys
            if (key in graphSettings) {
                throw new SyntaxError(`Duplicate key '${key}' not allowed`);
            }
            const requiresValue = () => {
                if (value === undefined) {
                    throw new SyntaxError(`Field '${key}' must have a value`);
                }
            };
            switch (key) {
                // Boolean fields
                case "grid": {
                    if (!value) {
                        graphSettings[key] = true;
                    }
                    else {
                        const lower = value.toLowerCase();
                        if (lower !== "true" && lower !== "false") {
                            throw new SyntaxError(`Field '${key}' requres a boolean value 'true'/'false' (omit a value to default to 'true')`);
                        }
                        graphSettings[key] = value === "true" ? true : false;
                    }
                    break;
                }
                // Integer fields
                case "top":
                case "bottom":
                case "left":
                case "right": {
                    requiresValue();
                    const num = parseFloat(value);
                    if (Number.isNaN(num)) {
                        throw new SyntaxError(`Field '${key}' must have an integer (or decimal) value`);
                    }
                    graphSettings[key] = num;
                    break;
                }
                // Size field
                case "width":
                case "height": {
                    requiresValue();
                    //search for unit
                    let index = value.search(/[A-Za-z%]/);
                    let size = { value: 0, unit: AbsoluteCSSUnit.px };
                    if (index != -1) {
                        size.value = parseFloat(value.substring(0, index));
                        if (isNaN(size.value)) {
                            throw new SyntaxError(`Field '${key}' must have an integer (or decimal) value`);
                        }
                        let unit = value.substring(index);
                        let parseUnit = parseStringToEnum(AbsoluteCSSUnit, unit);
                        if (parseUnit) {
                            size.unit = parseUnit;
                        }
                        else {
                            parseUnit = parseStringToEnum(RelativeCSSUnit, unit);
                            if (parseUnit) {
                                size.unit = parseUnit;
                                graphSettings.skipCache = true;
                            }
                            else {
                                throw new SyntaxError(`Unit '${unit}' must be a valid CSS unit`);
                            }
                        }
                    }
                    else {
                        size.value = parseFloat(value);
                    }
                    graphSettings[key] = size;
                    break;
                }
                // DegreeMode field
                case "degreeMode": {
                    requiresValue();
                    const mode = parseStringToEnum(DegreeMode, value);
                    if (mode) {
                        graphSettings.degreeMode = mode;
                    }
                    else {
                        throw new SyntaxError(`Field 'degreeMode' must be either 'radians' or 'degrees'`);
                    }
                    break;
                }
                // Color field
                case "defaultColor": {
                    requiresValue();
                    const color = parseColor(value);
                    if (color) {
                        graphSettings.defaultColor = color;
                    }
                    else {
                        throw new SyntaxError(`Field 'defaultColor' must be either a valid hex code or one of: ${Object.keys(ColorConstant).join(", ")}`);
                    }
                    break;
                }
                default: {
                    throw new SyntaxError(`Unrecognised field: ${key}`);
                }
            }
        });
        return graphSettings;
    }
    /** Dynamically adjust graph boundary if the defaults would cause an invalid graph with the settings supplied by the user,
     *  this will not do anything if the adjustment is not required.
     */
    static adjustBounds(settings) {
        if (settings.left !== undefined &&
            settings.right === undefined &&
            settings.left >= DEFAULT_GRAPH_SETTINGS.right) {
            settings.right = settings.left + DEFAULT_GRAPH_WIDTH;
        }
        if (settings.left === undefined &&
            settings.right !== undefined &&
            settings.right <= DEFAULT_GRAPH_SETTINGS.left) {
            settings.left = settings.right - DEFAULT_GRAPH_WIDTH;
        }
        if (settings.bottom !== undefined &&
            settings.top === undefined &&
            settings.bottom >= DEFAULT_GRAPH_SETTINGS.top) {
            settings.top = settings.bottom + DEFAULT_GRAPH_HEIGHT;
        }
        if (settings.bottom === undefined &&
            settings.top !== undefined &&
            settings.top <= DEFAULT_GRAPH_SETTINGS.bottom) {
            settings.bottom = settings.top - DEFAULT_GRAPH_HEIGHT;
        }
        return settings;
    }
}

function renderError(err, el, extra) {
    const wrapper = document.createElement("div");
    const message = document.createElement("strong");
    message.innerText = "Desmos Graph Error: ";
    wrapper.appendChild(message);
    const ctx = document.createElement("span");
    ctx.innerText = err;
    wrapper.appendChild(ctx);
    if (extra) {
        const messageExtra = document.createElement("strong");
        messageExtra.innerHTML = "<br>Note: ";
        wrapper.appendChild(messageExtra);
        wrapper.appendChild(extra);
    }
    const container = document.createElement("div");
    container.style.padding = "20px";
    container.style.backgroundColor = "#f44336";
    container.style.color = "white";
    container.appendChild(wrapper);
    el.empty();
    el.appendChild(container);
}

var CacheLocation;
(function (CacheLocation) {
    CacheLocation["Memory"] = "Memory";
    CacheLocation["Filesystem"] = "Filesystem";
})(CacheLocation || (CacheLocation = {}));
const DEFAULT_SETTINGS_STATIC = {
    // debounce: 500,
    cache: {
        enabled: true,
        location: CacheLocation.Memory,
    },
};
/** Get the default settings for the given plugin. This simply uses `DEFAULT_SETTINGS_STATIC` and patches the version from the manifest. */
function DEFAULT_SETTINGS(plugin) {
    return Object.assign({ version: plugin.manifest.version }, DEFAULT_SETTINGS_STATIC);
}
/** Attempt to migrate the given settings object to the current structure */
function migrateSettings(plugin, settings) {
    // todo (there is currently only one version of the settings interface)
    return settings;
}
class SettingsTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        const { containerEl } = this;
        containerEl.empty();
        // new Setting(containerEl)
        //     .setName("Debounce Time (ms)")
        //     .setDesc(
        //         "How long to wait after a keypress to render the graph (set to 0 to disable, requires restart to take effect)"
        //     )
        //     .addText((text) =>
        //         text.setValue(this.plugin.settings.debounce.toString()).onChange(async (value) => {
        //             const val = parseInt(value);
        //             this.plugin.settings.debounce =
        //                 Number.isNaN(val) || val < 0 ? DEFAULT_SETTINGS_STATIC.debounce : val;
        //             await this.plugin.saveSettings();
        //         })
        //     );
        new obsidian.Setting(containerEl)
            .setName("Cache")
            .setDesc("Whether to cache the rendered graphs")
            .addToggle((toggle) => toggle.setValue(this.plugin.settings.cache.enabled).onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.cache.enabled = value;
            yield this.plugin.saveSettings();
            // Reset the display so the new state can render
            this.display();
        })));
        if (this.plugin.settings.cache.enabled) {
            new obsidian.Setting(containerEl)
                .setName("Cache location")
                .setDesc("Set the location to cache rendered graphs (note that memory caching is not persistent)")
                .addDropdown((dropdown) => dropdown
                .addOption(CacheLocation.Memory, "Memory")
                .addOption(CacheLocation.Filesystem, "Filesystem")
                .setValue(this.plugin.settings.cache.location)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.cache.location = value;
                yield this.plugin.saveSettings();
                // Reset the display so the new state can render
                this.display();
            })));
            if (this.plugin.settings.cache.location === CacheLocation.Filesystem) {
                new obsidian.Setting(containerEl)
                    .setName("Cache Directory")
                    .setDesc(`The directory to save cached graphs in, relative to the vault root (technical note: the graphs will be saved as \`desmos-graph-<hash>.svg\` where the name is a SHA-256 hash of the graph source). Also note that a lot of junk will be saved to this folder, you have been warned.`)
                    .addText((text) => {
                    var _a;
                    text.setValue((_a = this.plugin.settings.cache.directory) !== null && _a !== void 0 ? _a : "").onChange((value) => __awaiter(this, void 0, void 0, function* () {
                        this.plugin.settings.cache.directory = value;
                        yield this.plugin.saveSettings();
                    }));
                });
            }
        }
    }
}

/** Parse an SVG into a DOM element */
function parseSVG(svg) {
    return new DOMParser().parseFromString(svg, "image/svg+xml").documentElement;
}
class Renderer {
    constructor(plugin) {
        /** The set of graphs we are currently rendering, mapped by their hash */
        this.rendering = new Map();
        this.plugin = plugin;
        this.active = false;
    }
    activate() {
        if (!this.active) {
            window.addEventListener("message", this.handler.bind(this));
            this.active = true;
        }
    }
    deactivate() {
        if (this.active) {
            window.removeEventListener("message", this.handler.bind(this));
            this.active = false;
        }
    }
    render(graph, el) {
        return __awaiter(this, void 0, void 0, function* () {
            const plugin = this.plugin;
            const settings = plugin.settings;
            const equations = graph.equations;
            const graphSettings = graph.settings;
            const hash = yield graph.hash();
            let cacheFile;
            // If this graph is in the cache then fetch it
            if (settings.cache.enabled && !graph.settings.skipCache) {
                if (settings.cache.location === CacheLocation.Memory && hash in plugin.graphCache) {
                    const data = plugin.graphCache[hash];
                    el.appendChild(parseSVG(data));
                    return;
                }
                else if (settings.cache.location === CacheLocation.Filesystem && settings.cache.directory) {
                    const adapter = plugin.app.vault.adapter;
                    cacheFile = obsidian.normalizePath(`${settings.cache.directory}/desmos-graph-${hash}.svg`);
                    // If this graph is in the cache
                    if (yield adapter.exists(cacheFile)) {
                        const data = yield adapter.read(cacheFile);
                        el.appendChild(parseSVG(data));
                        return;
                    }
                }
            }
            // Parse equations into a series of Desmos expressions
            const expressions = [];
            for (const equation of equations) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const expression = {
                    color: equation.color,
                    label: equation.label,
                    showLabel: equation.label !== undefined,
                };
                if (equation.restrictions) {
                    const restriction = equation.restrictions
                        .map((restriction) => `{${restriction}}`
                        // Escape chars
                        .replaceAll("{", String.raw `\{`)
                        .replaceAll("}", String.raw `\}`)
                        .replaceAll("<=", String.raw `\leq `)
                        .replaceAll(">=", String.raw `\geq `)
                        .replaceAll("<", String.raw `\le `)
                        .replaceAll(">", String.raw `\ge `))
                        .join("");
                    expression.latex = `${equation.equation}${restriction}`;
                }
                else {
                    expression.latex = equation.equation;
                }
                if (equation.style) {
                    if (Object.values(LineStyle).includes(ucast(equation.style))) {
                        expression.lineStyle = equation.style;
                    }
                    else if (Object.values(PointStyle).includes(ucast(equation.style))) {
                        expression.pointStyle = equation.style;
                    }
                }
                // Calling JSON.stringify twice allows us to escape the strings as well,
                //  meaning we can embed it directly into the calculator to undo the first stringification without parsing
                expressions.push(`calculator.setExpression(JSON.parse(${JSON.stringify(JSON.stringify(expression))}));`);
            }
            // Because of the electron sandboxing we have to do this inside an iframe (and regardless this is safer),
            //   otherwise we can't include the desmos API (although it would be nice if they had a REST API of some sort)
            // Interestingly enough, this script functions perfectly fine fully offline - so we could include a vendored copy if need be
            //   (the script gets cached by electron the first time it's used so this isn't a particularly high priority)
            const htmlHead = `<script src="https://www.desmos.com/api/v1.6/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>`;
            const htmlBody = `
            <div id="calculator-${hash}" style="height: ${graphSettings.height.value + graphSettings.height.unit};"></div>
            <script>
                const options = {
                    settingsMenu: false,
                    expressions: false,
                    lockViewPort: true,
                    zoomButtons: false,
                    trace: false,
                    showGrid: ${graphSettings.grid},
                    // Desmos takes a value of 'false' for radians and 'true' for degrees
                    degreeMode: ${graphSettings.degreeMode === DegreeMode.Degrees},
                };

                const calculator = Desmos.GraphingCalculator(document.getElementById("calculator-${hash}"), options);
                calculator.setMathBounds({
                    left: ${graphSettings.left},
                    right: ${graphSettings.right},
                    top: ${graphSettings.top},
                    bottom: ${graphSettings.bottom},
                });

                ${expressions.join("\n")}

                // Desmos returns an error if we try to observe the expressions without any defined
                if (${expressions.length > 0}) {
                    calculator.observe("expressionAnalysis", () => {
                        for (const id in calculator.expressionAnalysis) {
                            const analysis = calculator.expressionAnalysis[id];
                            if (analysis.isError) {
                                parent.postMessage({ t: "desmos-graph", d: "error", o: "${window.origin}", data: analysis.errorMessage, hash: "${hash}" }, "${window.origin}");
                            }
                        }
                    });
                }

                calculator.asyncScreenshot({ showLabels: true, format: "svg" }, (data) => {
                    document.body.innerHTML = "";
                    parent.postMessage({ t: "desmos-graph", d: "render", o: "${window.origin}", data, hash: "${hash}" }, "${window.origin}");
                });
            </script>
        `;
            const htmlSrc = `<html><head>${htmlHead}</head><body style="margin: 0">${htmlBody}</body>`;
            const iframe = document.createElement("iframe");
            iframe.sandbox.add("allow-scripts"); // enable sandbox mode - this prevents any xss exploits from an untrusted source in the frame (and prevents it from accessing the parent)
            iframe.width = graphSettings.width.value + graphSettings.width.unit;
            iframe.height = graphSettings.height.value + graphSettings.height.unit;
            iframe.className = "desmos-graph";
            iframe.style.border = "none";
            iframe.scrolling = "no"; // fixme use a non-depreciated function
            iframe.srcdoc = htmlSrc;
            // iframe.style.display = "none"; // fixme hiding the iframe breaks the positioning
            el.appendChild(iframe);
            return new Promise((resolve) => this.rendering.set(hash, { graph, el, resolve, cacheFile }));
        });
    }
    handler(message) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (message.data.o === window.origin && message.data.t === "desmos-graph") {
                const state = this.rendering.get(message.data.hash);
                if (state) {
                    const { graph, el, resolve, cacheFile } = state;
                    el.empty();
                    if (message.data.d === "error") {
                        renderError(message.data.data, el, (_a = graph.potentialErrorHint) === null || _a === void 0 ? void 0 : _a.view);
                        resolve(); // let caller know we are done rendering
                    }
                    else if (message.data.d === "render") {
                        const { data } = message.data;
                        const node = parseSVG(data);
                        node.setAttribute("class", "desmos-graph");
                        el.appendChild(node);
                        resolve(); // let caller know we are done rendering
                        const plugin = this.plugin;
                        const settings = plugin.settings;
                        const hash = yield graph.hash();
                        if (settings.cache.enabled) {
                            if (settings.cache.location === CacheLocation.Memory) {
                                plugin.graphCache[hash] = data;
                            }
                            else if (settings.cache.location === CacheLocation.Filesystem) {
                                const adapter = plugin.app.vault.adapter;
                                if (cacheFile && settings.cache.directory) {
                                    if (yield adapter.exists(settings.cache.directory)) {
                                        yield adapter.write(cacheFile, data);
                                    }
                                    else {
                                        new obsidian.Notice(`desmos-graph: target cache directory '${settings.cache.directory}' does not exist, skipping cache`, 10000);
                                    }
                                }
                                else {
                                    new obsidian.Notice(`desmos-graph: filesystem caching enabled but no cache directory set, skipping cache`, 10000);
                                }
                            }
                        }
                    }
                    this.rendering.delete(message.data.hash);
                }
                else {
                    // do nothing if graph is not in render list (this should not happen)
                    console.warn(`Got graph not in render list, this is probably a bug - ${JSON.stringify(this.rendering)}`);
                }
            }
        });
    }
}

class Desmos extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        /** Helper for in-memory graph caching */
        this.graphCache = {};
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadSettings();
            this.renderer = new Renderer(this);
            this.renderer.activate();
            this.addSettingTab(new SettingsTab(this.app, this));
            this.registerMarkdownCodeBlockProcessor("desmos-graph", (source, el) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const graph = Graph.parse(source);
                    yield this.renderer.render(graph, el);
                }
                catch (err) {
                    if (err instanceof Error) {
                        renderError(err.message, el);
                    }
                    else if (typeof err === "string") {
                        renderError(err, el);
                    }
                    else {
                        renderError("Unexpected error - see console for debug log", el);
                        console.error(err);
                    }
                }
            }));
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () {
            this.renderer.deactivate();
        });
    }
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            let settings = yield this.loadData();
            if (!settings) {
                settings = DEFAULT_SETTINGS(this);
            }
            if (settings.version !== this.manifest.version) {
                settings = migrateSettings(this, settings);
            }
            this.settings = settings;
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
}

module.exports = Desmos;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy91dGlscy50cyIsInNyYy9ncmFwaC9pbnRlcmZhY2UudHMiLCJzcmMvZ3JhcGgvcGFyc2VyLnRzIiwic3JjL2Vycm9yLnRzIiwic3JjL3NldHRpbmdzLnRzIiwic3JjL3JlbmRlcmVyLnRzIiwic3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOm51bGwsIm5hbWVzIjpbIlBsdWdpblNldHRpbmdUYWIiLCJTZXR0aW5nIiwibm9ybWFsaXplUGF0aCIsIk5vdGljZSIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXVEQTtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxL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
