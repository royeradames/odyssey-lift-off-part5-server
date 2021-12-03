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
exports.seed = void 0;
const cleaner = require("knex-cleaner");
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        /* a recent version of sqlite3 borke knex-cleaner functionality when foreign keys are enabled, so we're temporarily disabling foreign keys when running the seeds against sqlite3. */
        if (knex.client.config.cleint == "sqlite3") {
            return knex.raw("PRAGMA foreign_key = OFF;").then(() => cleanTables(knex));
        }
        else {
            return cleanTables(knex);
        }
    });
}
exports.seed = seed;
;
function cleanTables(knex) {
    return cleaner.clean(knex, {
        mode: "truncate",
        restartIdentify: true,
        ignoreTables: ["knex_migrations", "knex_migrations_lock"],
    });
}
