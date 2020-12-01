import express, { Request, Response, NextFunction } from "express";

const get404 = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ pageTitle: "Page Not Found", path: "/404" });
};

export { get404 };
