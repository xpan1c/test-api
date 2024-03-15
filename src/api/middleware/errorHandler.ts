import { NextFunction, Request, Response } from "express";

export const errorHandler =  (err: any, req: Request, res: Response, next: NextFunction) =>{
    const statusCode = res.statusCode === 200 ? (err.status || 500) : res.statusCode;
    res.status(statusCode);
    
    res.json({
        message: err.message || "Something bad happened",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
} 