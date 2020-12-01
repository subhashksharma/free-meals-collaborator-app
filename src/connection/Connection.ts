import { createConnection } from "typeorm";
import SuperHero from "../entity/SuperHero";
import Power from "../entity/Power";
export const connection = createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root1234",
  database: "food_sub",
  entities: [
    // typeORM will not be able to create database table if we forget to put entity class name here..SuperHero, // our SuperHero entity class
    Power, // our Power entity class
    SuperHero,
  ],
  synchronize: true,
  logging: false,
});
