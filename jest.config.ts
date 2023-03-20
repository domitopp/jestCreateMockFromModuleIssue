/*
 * Copyright (C) 2019-2099 Deutsche Post DHL Group. All rights reserved.
 * This code is licensed and the sole property of Deutsche Post DHL Group.
 */

import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  modulePathIgnorePatterns: [
    "<rootDir>/dist/"
  ],
  setupFilesAfterEnv: [
    "jest-extended/all"
  ]
};

export default config;
