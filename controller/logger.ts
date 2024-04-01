//
import { format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const winston = require("winston");

// Configure daily rotate file transport
const dailyRotateTransport = new DailyRotateFile({
  filename: "erp-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
  format: format.combine(format.timestamp(), format.json()),
});

const erpLogger = winston.createLogger({
  transports: [
    dailyRotateTransport,
    new transports.File({
      // Error log remains unchanged
      filename: "erpError.log",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

export { erpLogger };
