import "dotenv/config.js";
import "../../config/database.js";
import { admins } from "./Admins.js";
import { cities } from "./Cities.js";
import { places } from "./Places.js";
import { users as usersData } from "./Users.js";
import { activities } from "./Activities.js";
import { events } from "./Events.js";
import { Admin } from "../Admin.js";
import { City } from "../City.js";
import { Place } from "../Place.js";
import { User } from "../User.js";
import { Activity } from "../Activity.js";
import { Event } from "../Event.js";
let newUsers = async (users) => {
  try {
    await User.insertMany(users);
  } catch (error) {
    console.log(error.message);
  }
};
let newCities = async (cities) => {
  await City.insertMany(cities);
};

let newAdmins = async (admins) => {
  for (let admin of admins) {
    let user = await User.findOne({ email: admin.userId });
    admin.userId = user._id;
    await Admin.create(admin);
  }
};

let newPlaces = async (places) => {
  for (let place of places) {
    let city = await City.findOne({ name: place.cityId });
    place.cityId = city._id;
    await Place.create(place);
  }
};

let newActivity = async (activities) => {
  for (let activity of activities) {
    let city = await City.findOne({ name: activity.cityId });
    activity.cityId = city._id;
    await Activity.create(activity);
  }
};
let newEvents = async (events) => {
  for (let event of events) {
    let place = await Place.findOne({ name: event.placeId });
    event.placeId = place._id;
    await Event.create(event);
  }
};

let data = async () => {
  try {
    await newCities(cities);
    await newUsers(usersData);
    await newAdmins(admins);
    await newPlaces(places);
    await newActivity(activities);
    await newEvents(events);
    console.log("done!");
  } catch (error) {
    console.log(error);
  }
};

data();
