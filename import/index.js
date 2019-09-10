"use strict";

module.exports = {
    "env": {
        "browser": true,
        "node": false,
        "es6": true
    },
    "extends": [
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "plugins": [
        "import"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "import/no-unresolved": "error",
        "import/no-dynamic-require": "error",
        "import/no-webpack-loader-syntax": "error",
        "import/export": "error",
        "import/no-extraneous-dependencies": "error",
        "import/no-absolute-path": "error",
        "import/named": "error",
        "import/namespace": "error",
        "import/default": "error",
        "import/no-self-import": "error",
        "import/no-cycle": "error",
        "import/no-useless-path-segments": "error",
        "import/no-unused-modules": "error",
        "import/no-named-as-default": "error",
        "import/no-named-as-default-member": "error",
        "import/no-deprecated": "error",
        "import/no-mutable-exports": "error",
        "import/unambiguous": "error",
        "import/no-commonjs": "error",
        "import/no-amd": "error",
        "import/no-nodejs-modules": "error",
        "import/first": "error",
        "import/exports-last": "error",
        "import/no-duplicates": "error",
        "import/no-namespace": "error",
        "import/extensions": "error",
        "import/order": "error",
        "import/newline-after-import": "error",
        "import/prefer-default-export": "error",
        "import/no-named-default": "error",
        "import/group-exports": "error"
    }
};
