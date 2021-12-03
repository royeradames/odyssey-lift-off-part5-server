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
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema
            .createTable("crew", (table) => {
            table.increments("crewId");
            table.text("position");
            table.text("name");
            table.text("bio");
            table.text("img");
        })
            .createTable("destination", (table) => {
            table.increments("destinationId");
            table.text("name");
            table.text("message");
            table.text("distance");
            table.text("time");
            table.text("img");
        })
            .createTable("technology", (table) => {
            table.increments("technologyId");
            table.text("name");
            table.text("bio");
            table.text("imgLandscape");
            table.text("imgPortrait");
        })
            .createTable("home", (table) => {
            table.increments("homeId");
            table.text("title");
            table.text("titleSpan");
            table.text("message");
            table.text("action");
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema
            .dropTable("crew")
            .dropTable("destination")
            .dropTable("technology")
            .dropTable("home");
    });
}
exports.down = down;
