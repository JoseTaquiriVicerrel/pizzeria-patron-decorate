var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Combo = /** @class */ (function () {
    function Combo() {
    }
    Combo.prototype.getDescription = function () {
        return this.description;
    };
    return Combo;
}());
var ComboHutCheese = /** @class */ (function (_super) {
    __extends(ComboHutCheese, _super);
    function ComboHutCheese() {
        var _this = _super.call(this) || this;
        _this.description = 'Combo Hut Cheese';
        return _this;
    }
    ComboHutCheese.prototype.Costo = function () {
        return 42.00;
    };
    return ComboHutCheese;
}(Combo));
var PackFamiliar = /** @class */ (function (_super) {
    __extends(PackFamiliar, _super);
    function PackFamiliar() {
        var _this = _super.call(this) || this;
        _this.description = 'Pack Familiar';
        return _this;
    }
    PackFamiliar.prototype.Costo = function () {
        return 28.00;
    };
    return PackFamiliar;
}(Combo));
var HutComboMediano = /** @class */ (function (_super) {
    __extends(HutComboMediano, _super);
    function HutComboMediano() {
        var _this = _super.call(this) || this;
        _this.description = 'Hut Combo Mediano';
        return _this;
    }
    HutComboMediano.prototype.Costo = function () {
        return 34.00;
    };
    return HutComboMediano;
}(Combo));
var HutPackFamiliar = /** @class */ (function (_super) {
    __extends(HutPackFamiliar, _super);
    function HutPackFamiliar() {
        var _this = _super.call(this) || this;
        _this.description = 'Hut Pack Familiar';
        return _this;
    }
    HutPackFamiliar.prototype.Costo = function () {
        return 55.00;
    };
    return HutPackFamiliar;
}(Combo));
var addDecorador = /** @class */ (function (_super) {
    __extends(addDecorador, _super);
    function addDecorador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return addDecorador;
}(Combo));
var SalsaMediterranea = /** @class */ (function (_super) {
    __extends(SalsaMediterranea, _super);
    function SalsaMediterranea(combo) {
        var _this = _super.call(this) || this;
        _this.combo = combo;
        return _this;
    }
    SalsaMediterranea.prototype.getDescription = function () {
        return this.combo.getDescription() + ", Salsa Mediterranea ";
    };
    SalsaMediterranea.prototype.Costo = function () {
        return 3.00 + this.combo.Costo();
    };
    return SalsaMediterranea;
}(addDecorador));
var CocaCola = /** @class */ (function (_super) {
    __extends(CocaCola, _super);
    function CocaCola(combo) {
        var _this = _super.call(this) || this;
        _this.combo = combo;
        return _this;
    }
    CocaCola.prototype.getDescription = function () {
        return this.combo.getDescription() + ", Coca Cola 1.5Lt ";
    };
    CocaCola.prototype.Costo = function () {
        return 10 + this.combo.Costo();
    };
    return CocaCola;
}(addDecorador));
var IncaKola = /** @class */ (function (_super) {
    __extends(IncaKola, _super);
    function IncaKola(combo) {
        var _this = _super.call(this) || this;
        _this.combo = combo;
        return _this;
    }
    IncaKola.prototype.getDescription = function () {
        return this.combo.getDescription() + ", Inca Kola 1.5Lt ";
    };
    IncaKola.prototype.Costo = function () {
        return 10 + this.combo.Costo();
    };
    return IncaKola;
}(addDecorador));
var VolcanDeChocalate = /** @class */ (function (_super) {
    __extends(VolcanDeChocalate, _super);
    function VolcanDeChocalate(combo) {
        var _this = _super.call(this) || this;
        _this.combo = combo;
        return _this;
    }
    VolcanDeChocalate.prototype.getDescription = function () {
        return this.combo.getDescription() + ", Volcan de Chocolate ";
    };
    VolcanDeChocalate.prototype.Costo = function () {
        return 6 + this.combo.Costo();
    };
    return VolcanDeChocalate;
}(addDecorador));
var products = [];
var ventas = [];
var combos;
