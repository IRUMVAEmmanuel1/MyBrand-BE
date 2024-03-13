"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield "mongodb+srv://Irumva:IrumvaEmmanuel97@cluster0.ws2ver4.mongodb.net/",
            { useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            };
        console.log('MongoDB connected');
    }
    catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1);
    }
});
exports.default = connectDB;
