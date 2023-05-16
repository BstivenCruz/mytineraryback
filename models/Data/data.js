import "dotenv/config.js";
import "../../config/database.js";
import { admins } from "./Admins.js";
import { cities } from "./Cities.js";
import { places } from "./Places.js";
import { users } from "./Users.js";
import { Admin } from "../Admin.js";
import { City } from "../City.js";
import { Place } from "../Place.js";
import { User } from "../User.js";


let newAdmins = async (admins) => await Admin.insertMany(admins)

let newUsers = async (users) => await User.insertMany(users)


