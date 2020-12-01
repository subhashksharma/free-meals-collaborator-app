import express, { Request, Response, NextFunction } from "express";

const login = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Application is getting logged in`);
  res.send({ path: "/login", pageTitle: "Your login", success: true });
};

export { login };
