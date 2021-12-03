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
        yield knex("technology").insert([
            {
                name: "launch vehicle",
                bio: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
    carry a payload from Earth's surface to space, usually to Earth orbit or
    beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing
    150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
                imgLandscape: "assets/technology/image-launch-vehicle-landscape.jpg",
                imgPortrait: "assets/technology/image-launch-vehicle-portrait.jpg",
            },
            {
                name: "spaceport",
                bio: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
                imgLandscape: "assets/technology/image-spaceport-landscape.jpg",
                imgPortrait: "assets/technology/image-spaceport-portrait.jpg",
            },
            {
                name: "space capsule",
                bio: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
                imgLandscape: "assets/technology/image-space-capsule-landscape.jpg",
                imgPortrait: "assets/technology/image-space-capsule-portrait.jpg",
            },
        ]);
    });
}
exports.seed = seed;
