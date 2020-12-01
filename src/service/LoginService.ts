import { connection } from "../connection/Connection";
import SuperHero from "../entity/SuperHero";
import Power from "../entity/Power";

class LoginService {
  constructor() {}

  public getSuperHeroById(superId: string) {
    let a;
    connection
      .then(async (connection) => {
        let superHero = await connection.manager.findOne(SuperHero, superId);
        a = superHero;
      })
      .catch((error) => {
        return new Error();
      });
  }
}
