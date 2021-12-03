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
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Inserts seed entries
        yield knex("destination").insert([
            {
                name: "moon",
                message: `See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11 landing
          sites.`,
                distance: "384,400 km",
                time: "3 DAYS",
                img: "assets/destination/image-moon.webp",
            },
            {
                name: "mars",
                message: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
                distance: "225 MIL. km",
                time: "9 MONTHS",
                img: "assets/destination/image-mars.webp",
            },
            {
                name: "europa",
                message: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
                distance: "628 MIL. km",
                time: "3 YEARS",
                img: "assets/destination/image-europa.webp",
            },
            {
                name: "titan",
                message: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
                distance: "1.6 BIL. km",
                time: "7 YEARS",
                img: "assets/destination/image-titan.webp",
            },
        ]);
    });
}
exports.seed = seed;
