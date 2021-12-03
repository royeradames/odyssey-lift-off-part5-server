"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_sql_1 = require("datasource-sql");
const MINUTE = 60;
class TrackDB extends datasource_sql_1.SQLDataSource {
    getCrewMembers() {
        return this.knex("crew").cache(MINUTE);
    }
    getCrewMember(position) {
        return this.knex("crew").where({ position }).first().cache(MINUTE);
    }
    getDestinations() {
        return this.knex("destination").cache(MINUTE);
    }
    getDestination(name) {
        return this.knex("destination").where({ name }).first().cache(MINUTE);
    }
    getTechnologies() {
        return this.knex("technology").cache(MINUTE);
    }
    getTechnology(name) {
        return this.knex("technology").where({ name }).first().cache(MINUTE);
    }
    getHomeData() {
        return this.knex("home").first().cache(MINUTE);
    }
}
exports.default = TrackDB;
