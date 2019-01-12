import React from 'react';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;
});

unwrapExports(interopRequireDefault);

var common_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var common = {
  black: '#000',
  white: '#fff'
};
var _default = common;
exports.default = _default;
});

unwrapExports(common_1);

var red_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
var _default = red;
exports.default = _default;
});

unwrapExports(red_1);

var pink_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
var _default = pink;
exports.default = _default;
});

unwrapExports(pink_1);

var purple_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff'
};
var _default = purple;
exports.default = _default;
});

unwrapExports(purple_1);

var deepPurple_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var deepPurple = {
  50: '#ede7f6',
  100: '#d1c4e9',
  200: '#b39ddb',
  300: '#9575cd',
  400: '#7e57c2',
  500: '#673ab7',
  600: '#5e35b1',
  700: '#512da8',
  800: '#4527a0',
  900: '#311b92',
  A100: '#b388ff',
  A200: '#7c4dff',
  A400: '#651fff',
  A700: '#6200ea'
};
var _default = deepPurple;
exports.default = _default;
});

unwrapExports(deepPurple_1);

var indigo_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
var _default = indigo;
exports.default = _default;
});

unwrapExports(indigo_1);

var blue_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
var _default = blue;
exports.default = _default;
});

unwrapExports(blue_1);

var lightBlue_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea'
};
var _default = lightBlue;
exports.default = _default;
});

unwrapExports(lightBlue_1);

var cyan_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var cyan = {
  50: '#e0f7fa',
  100: '#b2ebf2',
  200: '#80deea',
  300: '#4dd0e1',
  400: '#26c6da',
  500: '#00bcd4',
  600: '#00acc1',
  700: '#0097a7',
  800: '#00838f',
  900: '#006064',
  A100: '#84ffff',
  A200: '#18ffff',
  A400: '#00e5ff',
  A700: '#00b8d4'
};
var _default = cyan;
exports.default = _default;
});

unwrapExports(cyan_1);

var teal_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var teal = {
  50: '#e0f2f1',
  100: '#b2dfdb',
  200: '#80cbc4',
  300: '#4db6ac',
  400: '#26a69a',
  500: '#009688',
  600: '#00897b',
  700: '#00796b',
  800: '#00695c',
  900: '#004d40',
  A100: '#a7ffeb',
  A200: '#64ffda',
  A400: '#1de9b6',
  A700: '#00bfa5'
};
var _default = teal;
exports.default = _default;
});

unwrapExports(teal_1);

var green_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
var _default = green;
exports.default = _default;
});

unwrapExports(green_1);

var lightGreen_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var lightGreen = {
  50: '#f1f8e9',
  100: '#dcedc8',
  200: '#c5e1a5',
  300: '#aed581',
  400: '#9ccc65',
  500: '#8bc34a',
  600: '#7cb342',
  700: '#689f38',
  800: '#558b2f',
  900: '#33691e',
  A100: '#ccff90',
  A200: '#b2ff59',
  A400: '#76ff03',
  A700: '#64dd17'
};
var _default = lightGreen;
exports.default = _default;
});

unwrapExports(lightGreen_1);

var lime_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var lime = {
  50: '#f9fbe7',
  100: '#f0f4c3',
  200: '#e6ee9c',
  300: '#dce775',
  400: '#d4e157',
  500: '#cddc39',
  600: '#c0ca33',
  700: '#afb42b',
  800: '#9e9d24',
  900: '#827717',
  A100: '#f4ff81',
  A200: '#eeff41',
  A400: '#c6ff00',
  A700: '#aeea00'
};
var _default = lime;
exports.default = _default;
});

unwrapExports(lime_1);

var yellow_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var yellow = {
  50: '#fffde7',
  100: '#fff9c4',
  200: '#fff59d',
  300: '#fff176',
  400: '#ffee58',
  500: '#ffeb3b',
  600: '#fdd835',
  700: '#fbc02d',
  800: '#f9a825',
  900: '#f57f17',
  A100: '#ffff8d',
  A200: '#ffff00',
  A400: '#ffea00',
  A700: '#ffd600'
};
var _default = yellow;
exports.default = _default;
});

unwrapExports(yellow_1);

var amber_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var amber = {
  50: '#fff8e1',
  100: '#ffecb3',
  200: '#ffe082',
  300: '#ffd54f',
  400: '#ffca28',
  500: '#ffc107',
  600: '#ffb300',
  700: '#ffa000',
  800: '#ff8f00',
  900: '#ff6f00',
  A100: '#ffe57f',
  A200: '#ffd740',
  A400: '#ffc400',
  A700: '#ffab00'
};
var _default = amber;
exports.default = _default;
});

unwrapExports(amber_1);

var orange_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
var _default = orange;
exports.default = _default;
});

unwrapExports(orange_1);

var deepOrange_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var deepOrange = {
  50: '#fbe9e7',
  100: '#ffccbc',
  200: '#ffab91',
  300: '#ff8a65',
  400: '#ff7043',
  500: '#ff5722',
  600: '#f4511e',
  700: '#e64a19',
  800: '#d84315',
  900: '#bf360c',
  A100: '#ff9e80',
  A200: '#ff6e40',
  A400: '#ff3d00',
  A700: '#dd2c00'
};
var _default = deepOrange;
exports.default = _default;
});

unwrapExports(deepOrange_1);

var brown_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var brown = {
  50: '#efebe9',
  100: '#d7ccc8',
  200: '#bcaaa4',
  300: '#a1887f',
  400: '#8d6e63',
  500: '#795548',
  600: '#6d4c41',
  700: '#5d4037',
  800: '#4e342e',
  900: '#3e2723',
  A100: '#d7ccc8',
  A200: '#bcaaa4',
  A400: '#8d6e63',
  A700: '#5d4037'
};
var _default = brown;
exports.default = _default;
});

unwrapExports(brown_1);

var grey_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
var _default = grey;
exports.default = _default;
});

unwrapExports(grey_1);

var blueGrey_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var blueGrey = {
  50: '#eceff1',
  100: '#cfd8dc',
  200: '#b0bec5',
  300: '#90a4ae',
  400: '#78909c',
  500: '#607d8b',
  600: '#546e7a',
  700: '#455a64',
  800: '#37474f',
  900: '#263238',
  A100: '#cfd8dc',
  A200: '#b0bec5',
  A400: '#78909c',
  A700: '#455a64'
};
var _default = blueGrey;
exports.default = _default;
});

unwrapExports(blueGrey_1);

var colors = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "common", {
  enumerable: true,
  get: function get() {
    return _common.default;
  }
});
Object.defineProperty(exports, "red", {
  enumerable: true,
  get: function get() {
    return _red.default;
  }
});
Object.defineProperty(exports, "pink", {
  enumerable: true,
  get: function get() {
    return _pink.default;
  }
});
Object.defineProperty(exports, "purple", {
  enumerable: true,
  get: function get() {
    return _purple.default;
  }
});
Object.defineProperty(exports, "deepPurple", {
  enumerable: true,
  get: function get() {
    return _deepPurple.default;
  }
});
Object.defineProperty(exports, "indigo", {
  enumerable: true,
  get: function get() {
    return _indigo.default;
  }
});
Object.defineProperty(exports, "blue", {
  enumerable: true,
  get: function get() {
    return _blue.default;
  }
});
Object.defineProperty(exports, "lightBlue", {
  enumerable: true,
  get: function get() {
    return _lightBlue.default;
  }
});
Object.defineProperty(exports, "cyan", {
  enumerable: true,
  get: function get() {
    return _cyan.default;
  }
});
Object.defineProperty(exports, "teal", {
  enumerable: true,
  get: function get() {
    return _teal.default;
  }
});
Object.defineProperty(exports, "green", {
  enumerable: true,
  get: function get() {
    return _green.default;
  }
});
Object.defineProperty(exports, "lightGreen", {
  enumerable: true,
  get: function get() {
    return _lightGreen.default;
  }
});
Object.defineProperty(exports, "lime", {
  enumerable: true,
  get: function get() {
    return _lime.default;
  }
});
Object.defineProperty(exports, "yellow", {
  enumerable: true,
  get: function get() {
    return _yellow.default;
  }
});
Object.defineProperty(exports, "amber", {
  enumerable: true,
  get: function get() {
    return _amber.default;
  }
});
Object.defineProperty(exports, "orange", {
  enumerable: true,
  get: function get() {
    return _orange.default;
  }
});
Object.defineProperty(exports, "deepOrange", {
  enumerable: true,
  get: function get() {
    return _deepOrange.default;
  }
});
Object.defineProperty(exports, "brown", {
  enumerable: true,
  get: function get() {
    return _brown.default;
  }
});
Object.defineProperty(exports, "grey", {
  enumerable: true,
  get: function get() {
    return _grey.default;
  }
});
Object.defineProperty(exports, "blueGrey", {
  enumerable: true,
  get: function get() {
    return _blueGrey.default;
  }
});

var _common = interopRequireDefault(common_1);

var _red = interopRequireDefault(red_1);

var _pink = interopRequireDefault(pink_1);

var _purple = interopRequireDefault(purple_1);

var _deepPurple = interopRequireDefault(deepPurple_1);

var _indigo = interopRequireDefault(indigo_1);

var _blue = interopRequireDefault(blue_1);

var _lightBlue = interopRequireDefault(lightBlue_1);

var _cyan = interopRequireDefault(cyan_1);

var _teal = interopRequireDefault(teal_1);

var _green = interopRequireDefault(green_1);

var _lightGreen = interopRequireDefault(lightGreen_1);

var _lime = interopRequireDefault(lime_1);

var _yellow = interopRequireDefault(yellow_1);

var _amber = interopRequireDefault(amber_1);

var _orange = interopRequireDefault(orange_1);

var _deepOrange = interopRequireDefault(deepOrange_1);

var _brown = interopRequireDefault(brown_1);

var _grey = interopRequireDefault(grey_1);

var _blueGrey = interopRequireDefault(blueGrey_1);
});

var colors$1 = unwrapExports(colors);

function App() {
  return React.createElement(
    "div",
    {},
    "@material-ui/core has ",
    Object.keys(colors$1),
    " colors."
  );
}

export default App;
