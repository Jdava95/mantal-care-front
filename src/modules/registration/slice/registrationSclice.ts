import { createSlice } from "@reduxjs/toolkit";

import { REGISTRATION_MODULE_NAME } from "@registr/constants/registrationConstants";

export const registrationSlice = createSlice({
  name: REGISTRATION_MODULE_NAME as string,
  initialState: {},
  reducers: {},
  extraReducers: {},
})