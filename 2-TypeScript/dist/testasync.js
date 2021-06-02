var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let y = 0;
function r5() {
    return __awaiter(this, void 0, void 0, function* () {
        y += 1;
        console.log(y);
        return 5;
    });
}
(() => __awaiter(this, void 0, void 0, function* () {
    y += yield r5();
    console.log(y);
}))();
//# sourceMappingURL=testasync.js.map